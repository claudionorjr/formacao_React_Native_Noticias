/**
 * Class model for News
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 *
 * @version 3
 */
export default class News {
    /**
     * Descrição: Método para setar this._source
     * 
     * @param {String} source 
     */
    setSource(source) {
        this._source = source
    }

    /**
     * Descrição: Método para pegar this._source
     * 
     * @return {this._source}
     */
    getSource() {
        return this._source
    }

    /**
     * Descrição: Método para setar this._title
     * 
     * @param {String} title 
     */
    setTitle(title) {
        this._title = title
    }

    /**
     * Descrição: Método para pegar this._title
     * 
     * @return {this._title}
     */
    getTitle() {
        return this._title
    }

    /**
     * Descrição: Método para setar this._url
     * 
     * @param {Path} url 
     */
    setUrl(url) {
        this._url = url
    }

    /**
     * Descrição: Método para pegar this._url
     * 
     * @return {this._url}
     */
    getUrl() {
        return this._url
    }

    /**
     * Descrição: Método para setar this._urlImage
     * 
     * @param {Path} urlImage 
     */
    setUrlImage(urlImage) {
        urlImage === null ? this._urlImage = "src/images/error-404-1429x750.png" : this._urlImage = urlImage
    }

    /**
     * Descrição: Método para pegar this._urlImage
     * 
     * @return {this._urlImage}
     */
    getUrlImage() {
        return this._urlImage
    }

    /**
     * Descrição: Método para setar this._content
     * 
     * @param {String} content 
     */
    setContent(content) {
        this._content = content
    }

    /**
     * Descrição: Método para pegar this._content
     * 
     * @return {this._content}
     */
    getContent() {
        return this._content
    }
    
    /**
     * Descrição: Método para setar this._publishedAt
     * 
     * @param {Date} publishedAt 
     */
    setPublishedAt(publishedAt) {
        this._publishedAt = publishedAt
    }

    /**
     * Descrição: Método para pegar this._publishedAt
     * 
     * @return {this._publishedAt}
     */
    getPublishedAt() {
        return this._publishedAt
    }

    /**
     * Descrição: Método para setar this._description
     * 
     * @param {String} description 
     */
    setDescription(description) {
        this._description = description
    }

    /**
     * Descrição: Método para pegar this._description
     * 
     * @return {this._description}
     */
    getDescription() {
        return this._description
    }
}
