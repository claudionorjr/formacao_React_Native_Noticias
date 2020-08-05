import Api from '../data/api.js'
import Database from '../data/db.js'


/**
 * class NoticeModel
 * 
 * Descrição: Classe modelo para cada notícia!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 * 
 * @see https://www.fabricadecodigo.com/usando-indexeddb-em-apps-web/ //caso de dúvidas com os métodos.
 */
export default class NoticeModel {
    constructor(content, description, publishedAt, name, title, urlToImage) {
        this.content = content
        this.description = description
        this.publishedAt = publishedAt
        this.name = name
        this.title = title
        this.urlToImage = urlToImage
    }


    /**
     * Descrição: Busca na API todas as 20 ultimas notícias do Brasil.
     * 
     * @param {Array} callback 
     */
    getJSON (callback) {
        var api = new Api()
        api.init((response) =>{
            var res = response
            callback(res)
        })
    }


    /**
     * Descrição: Busca no indexedDB todos os objetos favoritados pelos usuários.
     * 
     * @param {Array} callback 
     */
    getAll(callback) {
        var database = new Database()
        database.open((db) => {
            var transaction = db.transaction('noticesDB', "readonly")
            var store = transaction.objectStore('noticesDB')
            var request = store.getAll()
            request.onsuccess = () => callback(request.result)
            request.onerror = () => console.log(`Error in get All Tasks!`)
        })
    }


    /**
     * Descrição: Cria no indexedDB um notícia favoritada pelo usuário.
     */
    create(){
        var database = new Database()
        database.open((db) => {
            var transaction = db.transaction('noticesDB', "readwrite")
            var store = transaction.objectStore('noticesDB')
            var add = store.add({content: this.content, description: this.description,
                publishedAt: this.publishedAt, name: this.name, title: this.title,
                urlToImage: this.urlToImage
            })
            add.onsuccess = () => {}
            add.onerror = () => console.log(`Error To Save: You can't repeat notices in DataBase!`)
        })
    }


    /**
     * Descrição: Recebe um valor unico do 'title' e enviar o 'id' para deletar.
     * 
     * @param {String} value 
     */
    getToDelete(value) {
        var database = new Database()
        database.open((db) => {
            var transaction = db.transaction('noticesDB', "readonly")
            var store = transaction.objectStore('noticesDB')
            var index = store.index("title")
            var filtro = IDBKeyRange.only(value)
            var request = index.openCursor(filtro)
            request.onsuccess = (event) => {
                var cursor = event.target.result
                if (cursor) {
                    this.delete(cursor['primaryKey'])
                }
            }
            request.onerror = () => console.log(`Error to get and Delete!`)
        })
    }

    
    /**
     * Descrição: Recebe um 'id' que será deletado no indexedDB
     * 
     * @param {PrimaryKey} id 
     */
    delete(id){
        var database = new Database()
        database.open((db) => {
            var transaction = db.transaction('noticesDB', "readwrite")
            var store = transaction.objectStore('noticesDB')
            var request = store.delete(id)
            request.onsuccess = () => {}
            request.onerror = (event) => console.log(`Error to delete Task: ${event}`)
        })
    }
}
