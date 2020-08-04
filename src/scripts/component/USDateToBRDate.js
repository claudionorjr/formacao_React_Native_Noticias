export default class USDateToBRDate {
    constructor(value) {
        var needFormat = value
        var formating = needFormat.substring(0,needFormat.indexOf("T"))
        var dateFormated = formating.split('-')
        this.date = dateFormated[2]+"-"+dateFormated[1]+"-"+dateFormated[0]
    }
}