import NoticeModel from './model/NoticeModel.js'

export default class NoticeController {
    constructor() {
        this.noticeModel = new NoticeModel()
    }
    sendJSONToView() {
        this.noticeModel.getJSON()
    }
}