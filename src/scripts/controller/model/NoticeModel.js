import Api from '../data/api.js'

export default class NoticeModel {
    getJSON () {
        var api = new Api()
        api.init((callback) =>{
            console.log(callback)
        })
    }
}
