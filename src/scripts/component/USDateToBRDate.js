/**
 * Descrição: class USDateToBRDate recebe uma data US!
 * 
 * @param {String} value
 * 
 * @returns {String} this.date //date é acessado para retornar uma data formatada padrão BR.
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class USDateToBRDate {
    constructor(value) {
        var needFormat = value
        var formating = needFormat.substring(0,needFormat.indexOf("T"))
        var dateFormated = formating.split('-')
        this.date = dateFormated[2]+"-"+dateFormated[1]+"-"+dateFormated[0]
    }
}