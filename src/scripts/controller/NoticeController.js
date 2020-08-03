import NoticeModel from './model/NoticeModel.js'

export default class NoticeController {
    constructor() {
        this.noticeModel = new NoticeModel()
    }
    sendJSONToView(callback) {
        this.noticeModel.getJSON(callback)
    }
}