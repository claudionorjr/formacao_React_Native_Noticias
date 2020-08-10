import CardComponent from './CardComponent.js'
import BtnFavorite from './BtnFavorite.js'


/**
 * Descrição: Constroi um cards favorities component!
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
export default class CardToFavoriteComponent extends CardComponent {
    constructor(news) {
        super(news)
        this.btnFavorite = new BtnFavorite(news).initBtnToDelete()
        ReactDOM.render(this.btnFavorite, this.btnContainer)
    }
}
