import NoticeController from './NoticeController.js'
import CardComponent from '../component/CardComponent.js'


export default class NoticeViewController {

    constructor() {
        this.noticeController = new NoticeController()
        this.getAllNoticies((list) => this.addAllNotices(list.articles))
        this.setFavoritiesInDisplay()
    }


    setCardsArea(){
        const cardsArea = document.getElementById('cardsArea')
        return cardsArea
    }


    setFavoritiesInDisplay() {
        const btnFavorites = document.getElementById('btnFavorites')
        const btnHome = document.getElementById('btnHome')
        btnFavorites.addEventListener('click', () =>{
            var cardsArea = this.setCardsArea()
            cardsArea.innerHTML = ""
            this.getAllNoticiesInDB((list) => this.addAllNotices(list))
        })

    }


    getAllNoticiesInDB(callback) {
        this.noticeController.getAllFavoritiesNoticies(callback)
    }


    getAllNoticies(callback) {
        this.noticeController.sendJSONToView(callback)
    }


    addAllNotices(list) {
        var array = list
        array.forEach(e => {
            if(e['source'] != undefined){
                this.addNotice(e['content'], e['description'], e['publishedAt'], e['source']['name'], e['title'], e['urlToImage'])
            } else {
                this.addNotice(e['content'], e['description'], e['publishedAt'], e['name'], e['title'], e['urlToImage'])
            }
        })
    }


    addNotice(content, description, publishedAt, name, title, urlToImage) {
        let newPosition = this.setCardsArea()
        
        let cardComponent = new CardComponent(content, title, description, urlToImage, publishedAt, name)
        newPosition.append(cardComponent.col)
    }


    init() {
        return this
    }
}
