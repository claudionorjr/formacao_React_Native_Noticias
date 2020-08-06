import USDateToBRDate from './USDateToBRDate.js'
import ModalComponent from './ModalComponent.js'
import NoticeController from '../controller/NoticeController.js'


/**
 * Descrição: Constroi um card component!
 * OBS: Precisa de bootstrap 4 para renderizar o card!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 * 
 * @param {String} h5Value
 * @param {String} pValue
 * @param {URL} imgValue //Image URL
 * @param {Date} publishedAt
 * @param {String} name
 * 
 * @returns {HTMLDivElement} this.col //col é acessado para instanciar um novo card
 */
export default class CardComponent {
    constructor(content, h5Value, pValue, imgValue, publishedAt, name) {
        const h5 = document.createElement('h5')
        const p = document.createElement('p')
        const createdAt = document.createElement('p')
        const publishedBy = document.createElement('p')
        const cardBody = document.createElement('div')
        const cardFooter = document.createElement('div')
        const btnFavorite = document.createElement('button')
        const img = document.createElement('img')
        const card = document.createElement('div')
        const btnOpen = document.createElement('button')
        this.col = document.createElement('div')

        cardBody.append(h5)
        cardBody.append(p)
        cardBody.append(createdAt)
        cardBody.append(publishedBy)
        cardFooter.append(btnOpen)
        cardFooter.append(btnFavorite)
        card.append(img)
        card.append(cardBody)
        card.append(cardFooter)
        this.col.append(card)

        h5.classList.add("card-title")
        h5.innerHTML = h5Value
        p.classList.add("card-text")
        p.innerHTML = pValue

        createdAt.innerHTML = `<small class="text-muted">Fonte: ${name}</small>`
        let uSDateToBRDate = new USDateToBRDate(publishedAt)
        publishedBy.innerHTML = `<small class="text-muted">Publicação: ${uSDateToBRDate.date}</small>`

        btnOpen.type = "button"
        btnOpen.classList.add("btn")
        btnOpen.classList.add("btn-info")
        btnOpen.innerHTML = "Ver Mais <i class='fa fa-plus'></i>"
        btnOpen.classList.add("btn-sm")
        btnOpen.classList.add("ml-2")
        btnOpen.classList.add("mb-1")
        btnOpen.addEventListener('click', () => {
            var modalComponent = new ModalComponent(content, h5Value)
            modalComponent.open()
        })
        cardBody.classList.add("card-body")
        cardFooter.classList.add("card-footer")

        btnFavorite.innerHTML = "Ler Depois <i class='fa fa-star-o'></i>"
        btnFavorite.classList.add("btn")
        btnFavorite.classList.add("btn-light")
        btnFavorite.classList.add("btn-sm")
        btnFavorite.classList.add("ml-2")
        btnFavorite.classList.add("mb-1")
        btnFavorite.addEventListener('click', () => {
            btnFavorite.innerHTML = "Favorita <i class='fa fa-check-circle-o'></i>"
            btnFavorite.style.color = "green"
            const noticeController = new NoticeController(content, pValue, publishedAt, name, h5Value, imgValue)
            noticeController.sendNoticeToModel()
        })

        img.classList.add("card-img-top")
        img.src = imgValue
        img.style.maxHeight = "200px"
        img.style.width = "auto"

        card.classList.add("card")
        card.style.minHeight = "400px"

        this.col.classList.add("col")
        this.col.classList.add("mb-4")
    }
}
