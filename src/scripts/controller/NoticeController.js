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
    constructor(news) {
        this.noticeModel = new NoticeModel(news)
    }


    /**
     * Descrição: Executa o método create do model.
     */
    sendNoticeToModel(news) {
        this.noticeModel.create(news)
    }


    /**
     * Descrição: Envia um array para o ViewController
     * 
     * @param {Array} callback 
     */
    sendJSONToView(endpoint) {
       let data =  this.noticeModel.getJSON(endpoint);
       return data;
    }


    /**
     * Descrição: Envia um array de notícias favoritas para o ViewController
     * 
     * @param {Array} callback 
     * @see NoticeViewController.getAllNoticiesInDB()
     */
    async getAllFavoritiesNoticies() {
        let response = await this.noticeModel.getAll()
        return response;
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
