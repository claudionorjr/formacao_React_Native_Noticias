import NoticeController from './NoticeController.js'
import CardComponent from '../component/CardComponent.js'
import CardToFavoriteComponent from '../component/CardToFavoriteComponent.js'


/**
 * class NoticeViewController
 * 
 * Descrição: Classe modelo para uma view de notícias!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class NoticeViewController {
    constructor() {
        this.noticeController = new NoticeController()
        this.getAllNoticies((list) => this.addAllNotices(list.articles))
        this.setFavoritiesInDisplay()
    }


    /**
     * Descrição: Método para pegar no DOM o local dos cards
     */
    setCardsArea(){
        const cardsArea = document.getElementById('cardsArea')
        return cardsArea
    }


    /**
     * Descrição: Dependendo dos botões na navbar, vai te retornar um resultado de cards.
     */
    setFavoritiesInDisplay() {
        const btnFavorites = document.getElementById('btnFavorites')
        const btnHome = document.getElementById('btnHome')
        btnFavorites.addEventListener('click', () =>{
            var cardsArea = this.setCardsArea()
            cardsArea.innerHTML = ""
            this.getAllNoticiesInDB((list) => this.addAllNotices(list))
        })
        btnHome.addEventListener('click', () =>{
            var cardsArea = this.setCardsArea()
            cardsArea.innerHTML = ""
            this.getAllNoticies((list) => this.addAllNotices(list.articles))
        })
    }


    /**
     * Descrição: método recebe um Array de notícias favoritas.
     * 
     * @param {Array} callback 
     */
    getAllNoticiesInDB(callback) {
        this.noticeController.getAllFavoritiesNoticies(callback)
    }


    /**
     * Descrição: método recebe um Array de notícias vindas de uma API.
     * 
     * @param {Array} callback 
     */
    getAllNoticies(callback) {
        this.noticeController.sendJSONToView(callback)
    }


    /**
     * Descrição: Método envia cada objeto de um Array para serem renderizadas.
     * 
     * @param {Array} list 
     */
    addAllNotices(list) {
        var array = list
        array.forEach(e => {
            if(e['source'] != undefined){
                if (e['urlToImage'] == null) e['urlToImage'] = "src/images/error-404-1429x750.png"
                this.addNotice(e['content'], e['description'], e['publishedAt'], e['source']['name'], e['title'], e['urlToImage'])
            } else {
                this.addFavoriteNotice(e['content'], e['description'], e['publishedAt'], e['name'], e['title'], e['urlToImage'])
            }
        })
    }


    /**
     * Descrição: Método recebe os dados de um objeto e renderiza na tela um card
     * para cada noticia vindas da API.
     * 
     * @param {String} content 
     * @param {String} description 
     * @param {String} publishedAt 
     * @param {String} name 
     * @param {String} title 
     * @param {String} urlToImage //URL da Imagen.
     */
    addNotice(content, description, publishedAt, name, title, urlToImage) {
        let newPosition = this.setCardsArea()
        
        let cardComponent = new CardComponent(content, title, description, urlToImage, publishedAt, name)
        newPosition.append(cardComponent.col)
    }


    /**
     * Descrição: Método recebe os dados de um objeto e renderiza na tela um card
     * para cada noticia favorita vindas do 'indexedDB'.
     * 
     * @param {String} content 
     * @param {String} description 
     * @param {String} publishedAt 
     * @param {String} name 
     * @param {String} title 
     * @param {String} urlToImage //URL da Imagen.
     */
    addFavoriteNotice(content, description, publishedAt, name, title, urlToImage) {
        let newPosition = this.setCardsArea()
        
        let cardComponent = new CardToFavoriteComponent(content, title, description, urlToImage, publishedAt, name)
        newPosition.append(cardComponent.col)
    }


    /**
     * Descrição: Método para iniciar o sistema.
     * 
     * @returns {Object} NoticeViewController
     */
    init() {
        return this
    }
}
