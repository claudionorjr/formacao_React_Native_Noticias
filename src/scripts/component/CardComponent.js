import USDateToBRDate from './USDateToBRDate.js'


/**
 * Descrição: Constroi um card component!
 * OBS: Precisa de bootstrap 4 para renderizar o card!
 * 
 * @param {String} h5Value
 * @param {String} pValue
 * @param {URL} imgValue //Image URL
 * @param {Date} publishedAt
 * @param {String} name
 * 
 * @returns {HTMLDivElement} this.col //col é acessado para instanciar um novo card
 * 
 */
export default class CardComponent {

    constructor(h5Value, pValue, imgValue, publishedAt, name) {

        //Cria os elementos que serão utilizados no card
        const h5 = document.createElement('h5')
        const p = document.createElement('p')
        const createdAt = document.createElement('p')
        const publishedBy = document.createElement('p')
        const cardBody = document.createElement('div')
        const img = document.createElement('img')
        const card = document.createElement('div')
        this.col = document.createElement('div')

        //Organiza os elementos e adiciona em ordem
        cardBody.append(h5)
        cardBody.append(p)
        cardBody.append(createdAt)
        cardBody.append(publishedBy)
        card.append(img)
        card.append(cardBody)
        this.col.append(card)

        //Cada elemento recebe suas classes, estilos e seus valores
        h5.classList.add("card-title")
        h5.innerHTML = h5Value
        p.classList.add("card-text")
        p.innerHTML = pValue
        createdAt.innerHTML = `<small class="text-muted">Fonte: ${name}</small>`
        let uSDateToBRDate = new USDateToBRDate(publishedAt)
        publishedBy.innerHTML = `<small class="text-muted">Publicação: ${uSDateToBRDate.date}</small>`
        cardBody.classList.add("card-body")
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
