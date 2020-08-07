/**
 * Classe serve como modelo para a consulta na API
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
export class EndPoint{

    constructor(){
        this.functionEndPoint = 'top-headlines';
        this.country;
        this.query = 'country=';
    }

    setFuntion(functionEndPoint) {
        if(functionEndPoint != undefined || functionEndPoint != null || functionEndPoint != ''){
            this.functionEndPoint = functionEndPoint;
        }else{
            console.log("Funcao do endPoint invalida")
        }
    }

    getFunction(){
        return this.functionEndPoint;
    }

    setQuery(query){
        this.query = query;
    }

    getQuery(){
        if(this.functionEndPoint === "top-headlines"){
            return this.query + this.country;
        }else{
            return this.query
        }
        
    }

    setCountry(country){
        this.country = country;
    }

    getCountry(){
        return this.country;
    }
}