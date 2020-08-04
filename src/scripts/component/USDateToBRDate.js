export default class USDateToBRDate {
    constructor(value) {
        var day  = value.split("-")[2]
        var month  = value.split("-")[1]
        var year  = value.split("-")[0]
        this.date = day + '-' + month + '-' + year
    }
}