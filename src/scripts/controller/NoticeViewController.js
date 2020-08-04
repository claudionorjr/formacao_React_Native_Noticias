import NoticeController from './NoticeController.js'
import CardComponent from '../component/CardComponent.js'


export default class NoticeViewController {

    constructor() {
        this.noticeController = new NoticeController()
        this.getAllNotices((callback) => this.addAllNotices(callback))
    }


    setCardsArea(){
        const cardsArea = document.getElementById('cardsArea')
        return cardsArea
    }


    getAllNotices(callback) {
        this.noticeController.sendJSONToView(callback)
    }


    addAllNotices(callback) {
        var array = callback.articles
        array.forEach(e => {
            this.addNotice(e['content'], e['description'], e['publishedAt'], e['source']['name'], e['title'], e['urlToImage'])
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
