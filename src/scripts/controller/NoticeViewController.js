import NoticeController from './NoticeController.js'

export default class NoticeViewController {
    constructor() {
        this.noticeController = new NoticeController()
        //this.initJSON()
    }
    initJSON() {
        this.noticeController.sendJSONToView()
    }

    init() {
        return this
    }
}