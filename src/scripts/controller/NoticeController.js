import NoticeModel from './model/NoticeModel.js'


/**
 * class NoticeController
 * 
 * Descrição: Classe modelo para controllar informações entre VIEW e MODEL!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class NoticeController {
    constructor(content, description, publishedAt, name, title, urlToImage) {
        this.noticeModel = new NoticeModel(content, description, publishedAt, name, title, urlToImage)
    }


    /**
     * Descrição: Executa o método create do model.
     */
    sendNoticeToModel() {
        this.noticeModel.create()
    }


    /**
     * Descrição: Envia um array para o ViewController
     * 
     * @param {Array} callback 
     */
    sendJSONToView(callback) {
        this.noticeModel.getJSON(callback)
    }


    /**
     * Descrição: Envia um array de notícias favoritas para o ViewController
     * 
     * @param {Array} callback 
     */
    getAllFavoritiesNoticies(callback) {
        this.noticeModel.getAll(callback)
    }


    /**
     * Descrição: Recebe um 'titulo' das notícias favoritas e enviar para o model.
     * 
     * @param {String} value 
     */
    deleteNotice(value){
        this.noticeModel.getToDelete(value)
    }
}