import Api from '../data/api.js'

export default class NoticeModel {
    getJSON (callback) {
        var api = new Api()
        api.init((response) =>{
            var res = response
            callback(res)
        })
    }
}
