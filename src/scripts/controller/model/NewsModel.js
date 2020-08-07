/**Class model for News
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
export class News{

    constructor(){
        this.source;
        this.title;
        this.url;
        this.urlImage;
        this.content;
        this.publishedAt;
        this.description;
    }

    setSource(source){
        this.source = source;
    }

    getSource(){
        return this.source;
    }

    setTitle(title){
        this.title = title;
    }

    getTitle(){
        return this.title;
    }

    setUrl(url){
        this.url = url;
    }

    getUrl(){
        return this.url;
    }

    setUrlImage(urlImage){
        if(urlImage === null){
            this.urlImage = "src/images/error-404-1429x750.png";
        }else{
            this.urlImage = urlImage;
        }
    }

    getUrlImage(){
        return this.urlImage;
    }

    setContent(content){
        this.content = content;
    }

    getContent(){
        return this.content;
    }

    /**
     * @TODO manipulate string for date
     * @param {String} publishedAt 
     */
    setPublishedAt(publishedAt){
        this.publishedAt = publishedAt;
    }

    getPublishedAt(){
        return this.publishedAt;
    }

    setDescription(description){
        this.description = description;
    }

    getDescription(){
        return this.description;
    }
}