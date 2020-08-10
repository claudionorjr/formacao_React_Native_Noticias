/**
 * Classe serve como modelo para a consulta na API
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 *
 * @version 2
 */
export class EndPoint {
    constructor() {
        this._functionEndPoint = 'top-headlines';
        this._country;
        this._query = 'country=';
    }


    /**
     * Descrição: Método para setar this._functionEndPoint
     * 
     * @param {String} functionEndPoint 
     */
    setFuntion(functionEndPoint) {
        if(functionEndPoint != undefined || functionEndPoint != null || functionEndPoint != ''){
            this._functionEndPoint = functionEndPoint;
        }else{
            console.log("Invalid functionEndPoint!")
        }
    }


    /**
     * Descrição: Método para pegar this._functionEndPoint
     * 
     * @return {this._functionEndPoint}
     */
    getFunction() {
        return this._functionEndPoint;
    }


    /**
     * Descrição: Método para setar this._query
     * 
     * @param {String} query 
     */
    setQuery(query) {
        this._query = query;
    }


    /**
     * Descrição: Método para pegar this._query
     * 
     * @return {this._query}
     */
    getQuery() {
        if(this._functionEndPoint === "top-headlines"){
            return this._query + this._country;
        }else{
            return this._query
        }
        
    }


    /**
     * Descrição: Método para setar this._country
     * 
     * @param {String} country 
     */
    setCountry(country) {
        this._country = country;
    }


    /**
     * Descrição: Método para pegar this._country
     * 
     * @return {this._country}
     */
    getCountry() {
        return this._country;
    }
}
