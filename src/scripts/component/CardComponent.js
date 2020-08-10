import USDateToBRDate from './USDateToBRDate.js'
import ModalComponent from './ModalComponent.js'
import BtnFavorite from './BtnFavorite.js'


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
    constructor(news) {
        this.classBtnFavorite = new BtnFavorite(news)
        const h5 = document.createElement('h5')
        const p = document.createElement('p')
        const createdAt = document.createElement('p')
        const publishedBy = document.createElement('p')
        const cardBody = document.createElement('div')
        const cardFooter = document.createElement('div')
        this.btnFavorite = this.classBtnFavorite.btn
        const img = document.createElement('img')
        const card = document.createElement('div')
        const btnOpen = document.createElement('button')
        this.col = document.createElement('div')

        cardBody.append(h5)
        cardBody.append(p)
        cardBody.append(createdAt)
        cardBody.append(publishedBy)
        cardFooter.append(btnOpen)
        cardFooter.append(this.btnFavorite)
        card.append(img)
        card.append(cardBody)
        card.append(cardFooter)
        this.col.append(card)

        h5.classList.add("card-title")
        h5.innerHTML = news.getTitle();
        p.classList.add("card-text")
        p.innerHTML = news.getDescription();

        publishedBy.innerHTML = `<small class="text-muted">Fonte: ${news.getSource()}</small>`
        let uSDateToBRDate = new USDateToBRDate(news.getPublishedAt())
        createdAt.innerHTML = `<small class="text-muted">Publicação: ${uSDateToBRDate.date}</small>`

        btnOpen.type = "button"
        btnOpen.classList.add("btn")
        btnOpen.classList.add("btn-info")
        btnOpen.innerHTML = "Ver Mais <i class='fa fa-plus'></i>"
        btnOpen.classList.add("btn-sm")
        btnOpen.classList.add("ml-2")
        btnOpen.classList.add("mb-1")
        btnOpen.addEventListener('click', () => {
            var modalComponent = new ModalComponent(news)
            modalComponent.open()
        })

        this.btnFavorite = this.classBtnFavorite.initBtnToSave()

        cardBody.classList.add("card-body")
        cardFooter.classList.add("card-footer")

        img.classList.add("card-img-top")
        img.src = news.getUrlImage();
        img.style.maxHeight = "200px"
        img.style.width = "auto"

        card.classList.add("card")
        card.style.minHeight = "400px"

        this.col.classList.add("col")
        this.col.classList.add("mb-4")
    }
}
