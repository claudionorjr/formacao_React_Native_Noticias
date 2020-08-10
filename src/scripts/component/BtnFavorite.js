import NoticeController from '../controller/NoticeController.js'


export default class BtnFavorite {
    constructor(news) {
        this.news = news
        this.btn = document.createElement('button')
        this.btn.classList.add("btn")
        this.btn.classList.add("btn-light")
        this.btn.classList.add("btn-sm")
        this.btn.classList.add("ml-2")
        this.btn.classList.add("mb-1")
    }
    initBtnToSave() {
        this.btn.innerHTML = "Ler Depois <i class='fa fa-star-o'></i>"
        this.btn.addEventListener('click', () => {
            this.btn.innerHTML = "Favorita <i class='fa fa-check-circle-o'></i>"
            this.btn.style.color = "green"
            const noticeController = new NoticeController(this.news)
            noticeController.sendNoticeToModel(this.news)
        })
    }

    initBtnToDelete() {
        this.btn.innerHTML = "Remover Favorito <i class='fa fa-trash'></i>"
        this.btn.style.color = "red"
        this.btn.addEventListener('click', () => {
            this.btn.innerHTML = "Removida <i class='fa fa-check-circle-o'></i>"
            this.btn.style.color = "red"
            const noticeController = new NoticeController()
            noticeController.deleteNotice(this.news.getTitle())
        })
    }
}