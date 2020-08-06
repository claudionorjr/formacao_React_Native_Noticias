export class EndPoint{

    constructor(){
        this.functionEndPoint = 'top-headlines';
        this.country = 'br';
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
        }
        
    }

    setCountry(country){
        this.country = country;
    }

    getCountry(){
        return this.country;
    }
}