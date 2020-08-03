export default class Api {

    
    init(callback) {
        var url = 'http://newsapi.org/v2/top-headlines?'+'country=br&'+'apiKey=06e42da03f0044469b0ea3844b845745'
        var req = new Request(url)
        fetch(req)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                callback(json)
            })
    }
}
