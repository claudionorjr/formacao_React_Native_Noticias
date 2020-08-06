/**
 * class Api
 * 
 * Descrição: Classe modelo para buscar natícias na API!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 * 
 * @see https://newsapi.org/docs
 */
export default class Api {


    /**
     * Descrição: Acessa a API e retorna um Array de notícias.
     * 
     * @param {Array} callback 
     */
    init(callback) {
        let all = 'everything'
        let top = 'top-headlines'
        var url = `http://newsapi.org/v2/${top}?country=br&apiKey=06e42da03f0044469b0ea3844b845745`
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
