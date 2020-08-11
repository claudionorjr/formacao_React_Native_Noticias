/**
 * Descrição: class USDateToBRDate recebe uma data US!
 * 
 * @param {String} value
 * 
 * @returns {String} this.date //date é acessado para retornar uma data formatada padrão BR.
 * @version 2.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class USDateToBRDate {
    constructor(value) {
        var formating = value.substring(0,value.indexOf("T"))
        var dateFormated = formating.split('-')
        this.date = dateFormated[2]+"-"+dateFormated[1]+"-"+dateFormated[0]
    }
}
