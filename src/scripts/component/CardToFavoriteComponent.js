import CardComponent from './CardComponent.js'


/**
 * Descrição: Constroi um cards favorities component!
 * OBS: Precisa de bootstrap 4 para renderizar o card!
 * 
 * @version 2.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 * 
 * @param {NewsModel} news
 * @param {Boolean} toSave
 * @param {Boolean} toDelete
 * 
 * @returns {HTMLDivElement} this.col //col é acessado para instanciar um novo card
 */
export default class CardToFavoriteComponent extends CardComponent {
    constructor(news, toSave, toDelete) {
        super(news, toSave, toDelete)
    }
}
