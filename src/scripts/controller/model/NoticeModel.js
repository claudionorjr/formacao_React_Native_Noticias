import Api from '../data/api.js'
import Database from '../data/db.js'

export default class NoticeModel {
    constructor(content, description, publishedAt, name, title, urlToImage) {
        this.content = content
        this.description = description
        this.publishedAt = publishedAt
        this.name = name
        this.title = title
        this.urlToImage = urlToImage
    }


    getJSON (callback) {
        var api = new Api()
        api.init((response) =>{
            var res = response
            callback(res)
        })
    }


    create(){
        var database = new Database()
        database.open((db) => {
            var transaction = db.transaction('noticesDB', "readwrite")
            var store = transaction.objectStore('noticesDB')
            var add = store.add({content: this.content, description: this.description,
                publishedAt: this.publishedAt, name: this.name, title: this.title,
                urlToImage: this.urlToImage
            })
            add.onsuccess = () => console.log("ok")
            add.onerror = () => console.log(`Error To Save: You can't repeat notices in DataBase!`)
        })
    }
}
