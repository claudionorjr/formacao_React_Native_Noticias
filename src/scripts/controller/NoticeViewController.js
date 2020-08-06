import NoticeController from './NoticeController.js'
import CardComponent from '../component/CardComponent.js'
import CardToFavoriteComponent from '../component/CardToFavoriteComponent.js'
import { EndPoint } from './model/endPoint.js'
import { News } from './model/NewsModel.js'


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
        //this.addAllNotices();
        //this.setFavoritiesInDisplay()
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
            console.log("aqui")
            var cardsArea = this.setCardsArea()
            cardsArea.innerHTML = ""
            this.getAllNoticiesInDB()
        })
        btnHome.addEventListener('click', () =>{
            var cardsArea = this.setCardsArea()
            cardsArea.innerHTML = ""
            this.addAllNotices();
        })
    }


    /**
     * Descrição: método recebe um Array de notícias favoritas.
     * 
     * @param {Array} callback 
     */
    getAllNoticiesInDB() {
        let data = this.noticeController.getAllFavoritiesNoticies();
        return data;
    }


    /**
     * Descrição: método recebe um Array de notícias vindas de uma API.
     * 
     * @param {Array} callback 
     */
    getAllNoticies(endpoint) {
        let data = this.noticeController.sendJSONToView(endpoint);
        return data;
    }


    /**
     * Descrição: Método envia cada objeto de um Array para serem renderizadas.
     * 
     * @param {Array} list 
     */
    async addAllNotices() {
        let endpoint = new EndPoint();
        let data =  await this.getAllNoticies(endpoint);
        let array = data.articles
        

        array.forEach(e => {
            let news = new News();
            news.setTitle(e['title']);
            news.setSource(e['source']['name']);
            news.setDescription(e['description']);
            news.setContent(e['content']);
            news.setPublishedAt(e['publishedAt']);
            news.setUrlImage(e['urlToImage']);
            if(e['source'] != undefined){
                this.addNotice(news);
            } else {
                this.addFavoriteNotice(news)
            }
        })
    }


    /**
     * Descrição: Método recebe os dados de um objeto e renderiza na tela um card
     * para cada noticia vindas da API.
     * @param {News} news
     */
    addNotice(news) {
        let newPosition = this.setCardsArea()
        
        let cardComponent = new CardComponent(news)
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
    addFavoriteNotice(news) {
        let newPosition = this.setCardsArea()
        
        let cardComponent = new CardToFavoriteComponent(news)
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
