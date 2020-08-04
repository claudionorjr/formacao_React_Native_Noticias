import NoticeModel from './model/NoticeModel.js'

export default class NoticeController {
    constructor(content, description, publishedAt, name, title, urlToImage) {
        this.noticeModel = new NoticeModel(content, description, publishedAt, name, title, urlToImage)
    }


    sendNoticeToModel() {
        this.noticeModel.create()
    }


    sendJSONToView(callback) {
        this.noticeModel.getJSON(callback)
    }


    getAllFavoritiesNoticies(callback) {
        this.noticeModel.getAll(callback)
    }
}