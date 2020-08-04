export default class Database {

    open(callback) {
        this.db
        this.request = window.indexedDB.open("noticesDB", 1)
        this.request.onerror = (event) => console.log(`Error to Open DB: ${event}`)


        this.request.onupgradeneeded = (event) => {
            console.log("Creating...")
            this.db = event.target.result
            var objectStore = this.db.createObjectStore("noticesDB", { keyPath : "id",  autoIncrement: true })
            objectStore.createIndex("content", "content", { unique: false })
            objectStore.createIndex("description", "description", { unique: false })
            objectStore.createIndex("publishedAt", "publishedAt", { unique: false })
            objectStore.createIndex("name", "name", { unique: false })
            objectStore.createIndex("title", "title", { unique: true })
            objectStore.createIndex("urlToImage", "urlToImage", { unique: false })
            console.log("New DataBase Created successfully.")
        }


        this.request.onsuccess  = (event) => {
            this.db = event.target.result
            callback(this.db)
        }
    }
}
