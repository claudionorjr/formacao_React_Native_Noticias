import NoticeController from './NoticeController.js'
import CardComponent from '../component/CardComponent.js'
import CardToFavoriteComponent from '../component/CardToFavoriteComponent.js'
import EndPoint from './model/EndPoint.js'
import News from './model/NewsModel.js'


/**
 * class NoticeViewController
 * 
 * Descrição: Classe modelo para uma view de notícias!
 * 
 * @version 2.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class NoticeViewController {
    constructor() {
        this.noticeController = new NoticeController()
        this.endpoint = new EndPoint()
        this.endpoint.setCountry("br")
        this.addAllNotices(this.endpoint)
        this.setFavoritiesInDisplay()
        this.selected
    }

    /**
     * Descrição: Método para pegar no DOM o local dos cards
     */
    setCardsArea() {
        return document.getElementById('cardsArea')
    }

    /**
     * Descrição: Método para limpar o 'this.setCardsArea()'
     */
    clearCardsArea() {
        var cardsArea = this.setCardsArea()
        cardsArea.innerHTML = ""
    }

    /**
     * Descrição: Dependendo dos botões na navbar, vai te retornar um resultado de cards.
     */
    setFavoritiesInDisplay() {
        const btnFavorites = document.getElementById('btnFavorites')
        const btnHome = document.getElementById('btnHome')
        const form = document.getElementById("form-search")
        const select = document.getElementById("select-news")
        
        btnFavorites.addEventListener('click', () =>{
            form.style.display = "none"
            this.addAllFovoretiNews()
        })
        btnHome.addEventListener('click', () =>{
            form.style.display = "inline"
            this.addAllNotices(this.endpoint)
        })
        select.addEventListener('change', this.clickSelected)
        form.addEventListener('submit', el => {
            this.clickSubmit()
        })
    }

    /**
     * Descrição: Função de click do submit em relação ao formulario de pesquisa
     */
    clickSubmit() {
        let select = document.getElementById("select-news")
        let option = select.options[select.selectedIndex]
        let selected = option.value
        switch(selected){
            case 'top-headlines':
                this.searchTopHeadLines()
                break
            case 'everything':
                this.searchEveryThing(selected)
                break
            case 'country':
                this.searchCountry()
                break
        }
    }

    /**
     * Descrição: Espera a mudançã de seleção da tag <select>,
     * faz a manipulação do html
     * 
     * @param {Event} e - Passa como paramentro o evento
     */
    clickSelected(e) {
        let divSearch = document.getElementById("search")
        let divCountries = document.getElementById("div-countries")
        let select  = e.target
        let option = select.options[select.selectedIndex]
        let selected = option.value
        console.log(selected)
        if (selected === "everything"){
            divSearch.style.display = "inline"
            divCountries.style.display = "none"
        }else if(selected === "country"){
            divCountries.style.display = "inline"
            divSearch.style.display = "none"
        }else if(selected === "top-headlines"){
            divCountries.style.display = "none"
            divSearch.style.display = "none"
        }
    }

    /**
     * Descrição: Procura todos os dados no top-headlines.
     * Por padrao pega as noticias do Brasil
     * @see EndPoint
     */
    searchTopHeadLines() {
        this.clearCardsArea()
        this.addAllNotices(this.endpoint)
    }

    /**
     * Descrição: Procura pela função everything e a cunsulta personalizada, 
     * passada no campo input
     * 
     * @param {String} selected 
     * @see EndPoint
     */
    searchEveryThing(selected) {
        let inputSearch = document.getElementById("input-search")
        this.clearCardsArea()
        let endpoint = new EndPoint()
        endpoint.setFuntion(selected)
        endpoint.setQuery('q='+inputSearch.value)
        this.addAllNotices(endpoint)
    }

    /**
     * Descrição: Procuro as noticias conforme o pais selecionado
     * @see EndPoint
     */
    searchCountry() {
        let countriesSelect = document.getElementById("select-countries")
        let option = countriesSelect.options[countriesSelect.selectedIndex]
        let selected = option.value
        this.clearCardsArea()
        let endpoint = new EndPoint()
        endpoint.setCountry(selected)
        endpoint.setQuery('country=')
        this.addAllNotices(endpoint)
    }

    /**
     * Descrição: método recebe um Array de notícias favoritas.
     * 
     */
    getAllNoticiesInDB() {
        return this.noticeController.getAllFavoritiesNoticies()
    }

    /**
     * Descrição: método recebe um Array de notícias vindas de uma API.
     * 
     * @param {EndPoint} endpoint
     * @see EndPoint 
     */
    getAllNoticies(endpoint) {
        return this.noticeController.sendJSONToView(endpoint)
    }

    /**
     * Descrição: Método envia cada objeto de um Array para serem renderizadas.
     * 
     */
    async addAllNotices(endPoint) {
        let data =  await this.getAllNoticies(endPoint)
        let array = data.articles
        let cardArray = []
        
        array.forEach(e => {
            let news = new News()
            news.setTitle(e['title'])
            news.setSource(e['source']['name'])
            news.setDescription(e['description'])
            news.setContent(e['content'])
            news.setPublishedAt(e['publishedAt'])
            news.setUrlImage(e['urlToImage'])
            cardArray.push(this.addNotice(news))
        })
        ReactDOM.render(cardArray, this.setCardsArea())
    }

    /**
     * Descrição: Método recebe os dados de um objeto e renderiza na tela um card
     * para cada noticia vindas da API.
     * @param {News} news
     */
    addNotice(news) {
        let newCard = new CardComponent(news, true, false)
        return newCard.card

    }

    /**
     * Descrição: adiciona na pagina html as noticias que estao salvas no banco de dados
     */
    async addAllFovoretiNews() {
        let data = await this.getAllNoticiesInDB()
        let cardArray = []

        data.forEach(e => {
            let news = new News()
            news.setTitle(e['title'])
            news.setSource(e['source'])
            news.setDescription(e['description'])
            news.setContent(e['content'])
            news.setPublishedAt(e['publishedAt'])
            news.setUrlImage(e['urlToImage'])
            cardArray.push(this.addFavoriteNotice(news))
        })
        ReactDOM.render(cardArray, this.setCardsArea())
    }

    /**
     * Descrição: Método recebe os dados de um objeto e renderiza na tela um card
     * para cada noticia favorita vindas do 'indexedDB'.
     * 
     * @param {News} news
     */
    addFavoriteNotice(news) {
        let newCard = new CardToFavoriteComponent(news, false, true)
        return newCard.card
    }
}
