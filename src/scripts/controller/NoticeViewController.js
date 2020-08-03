import NoticeController from './NoticeController.js'


export default class NoticeViewController {

    constructor() {
        this.noticeController = new NoticeController()
        //this.getAllNotices((callback) => this.addAllNotices(callback))
    }


    setMain(){
        const main = document.getElementById('main')
        return main
    }


    getAllNotices(callback) {
        this.noticeController.sendJSONToView(callback)
    }


    addAllNotices(callback) {
        var array = callback.articles
        array.forEach(e => {
            this.addNotice(e['content'], e['description'], e['title'], e['urlToImage'])
        });
    }

    /**
    <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
            <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    </div> */

    createCard() {
        const h5 = document.createElement('h5')
        const p = document.createElement('p')
        const img = document.createElement('img')
        const row = document.createElement('div')
        const col = document.createElement('div')
        const card = document.createElement('div')
        const cardBody = document.createElement('div')

        cardBody.append(h5)
        cardBody.append(p)
        card.append(img)
        card.append(cardBody)
        col.append(card)
        row.append(col)

        h5.classList.add("card-title")
        p.classList.add("card-text")
        cardBody.classList.add("card-body")
        img.classList.add("card-img-top")
        h5.classList.add()
        card.classList.add("row")
        card.classList.add("row-cols-1")
        card.classList.add("row-cols-md-2")
        
        btn.type = "button"
        btn.id = `${id}`
        btn.innerHTML = "<i class='fa fa-trash'></i> Tarefa"
        btn.addEventListener('click', () => this.removeLine(btn, id))
        return btn
    }


    addNotice() {

    }


    init() {
        return this
    }
}
