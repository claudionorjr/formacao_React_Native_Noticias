import NoticeController from '../src/scripts/controller/NoticeController.js'
import NoticeViewController from '../src/scripts/controller/NoticeViewController.js'
import CardToFavoriteComponent from '../src/scripts/component/CardToFavoriteComponent.js'


/**
 * class testing
 * 
 * Descrição: Classe para testes do app de notícias.
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 * 
 * @param {Boolean} test1 //Define se o teste está On/Off
 * @param {Boolean} test2 //Define se o teste está On/Off
 * @param {Boolean} test3 //Define se o teste está On/Off
 * @param {Boolean} test4 //Define se o teste está On/Off
 * @param {Boolean} testOn //Define se o teste está On/Off
 */
class testing {
    constructor() {
        this.test1 = true
        this.test2 = true
        this.test3 = true
        this.test4 = true
        this.testOn = false
        this.testInit()
    }


    /**
     * Descrição: Teste para salvar Notícias favoritas!
     */
    testToSave() {
        if(this.test1){
            try {
                console.log('Testando: testToSave()')
                var url = "https://s2.glbimg.com/S5usAz4KRUqMey9nqEssh2XNNEk=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/8755195.jpg"
                var toSaveObject = [
                    {'content':'Conteudo', 'description':'descrição......', 'publishedAt':'2020-08-05T14:00:00Z', 'name':'Empresa', 'title':'testando1', 'urlToImage': url},
                    {'content':'Conteudo', 'description':'descrição......', 'publishedAt':'2020-08-05T14:00:00Z', 'name':'Empresa', 'title':'testando2', 'urlToImage': url},
                    {'content':'Conteudo', 'description':'descrição......', 'publishedAt':'2020-08-05T14:00:00Z', 'name':'Empresa', 'title':'testando3', 'urlToImage': url},
                    {'content':'Conteudo', 'description':'descrição......', 'publishedAt':'2020-08-05T14:00:00Z', 'name':'Empresa', 'title':'testando4', 'urlToImage': url},
                    {'content':'Conteudo', 'description':'descrição......', 'publishedAt':'2020-08-05T14:00:00Z', 'name':'Empresa', 'title':'testando5', 'urlToImage': url}
                ]
                toSaveObject.forEach((e, i) => {
                    let cardComponent = new CardToFavoriteComponent(e['content'], e['title'], e['description'], e['urlToImage'], e['publishedAt'], e['name'])
                    if (cardComponent.col) {
                        console.log(`Criando o component ${i + 1} - Passou`)
                        try {
                            const noticeController = new NoticeController(e['content'], e['description'], e['publishedAt'], e['name'], e['title'], e['urlToImage'])
                            noticeController.sendNoticeToModel()
                            console.log(`Salvando a Notícia ${i + 1} - Passou`)
                        } catch (error) {
                            console.log(`Salvando a Notícia ${i + 1} - não Passou`)
                        }
                    } else {
                        console.log(`Criando o component ${i + 1} - não Passou`)
                    }
                })
                console.log('---------------')
            } catch (error) {
                console.log('Erro: testToSave()')
                console.log('---------------')
            }
        }
    }


    /**
     * Descrição: Teste para listar Notícias da API!
     */
    testToListApiContent() {
        if(this.test2){
            try {
                console.log('Testando: testToListApiContent()')
                const noticeViewController = new NoticeViewController()
                noticeViewController.getAllNoticies((array) => {
                    if(array) {
                        console.log(`Foram buscados na API um total de: ${array['totalResults']} Notícias`)
                        console.log('Buscando Notícias na API - Passou')
                        console.log('---------------')
                    } else {
                        console.log('Buscando Notícias na API - Não Passou')
                        console.log('---------------')
                    }
                })
            } catch (error) {
                console.log('Erro: testToListApiContent()')
                console.log('---------------')
            }
        }
    }


    /**
     * Descrição: Teste para listar Notícias favoritas!
     */
    testToListFavorities() {
        if(this.test3){
            try {
                console.log('Testando: testToListFavorities()')
                const noticeViewController = new NoticeViewController()
                noticeViewController.getAllNoticiesInDB((array) => {
                    if(array) {
                        console.log(`Foram buscados no IndexedDB um total de: ${array.length} Notícias`)
                        console.log('Buscando Notícias no IndexedDB - Passou')
                        console.log('---------------')
                    } else {
                        console.log('Buscando Notícias no IndexedDB - Não Passou')
                        console.log('---------------')
                    }
                    return array
                })
            } catch (error) {
                console.log('Erro: testToListFavorities()')
                console.log('---------------')
            }
        }
    }


    /**
     * Descrição: Teste de delete!
     */
    testToDelete() {
        if(this.test4){
            try {
                console.log('Testando: testToDelete()')
                const noticeViewController = new NoticeViewController()
                noticeViewController.getAllNoticiesInDB((array) => {
                    if (array) {
                        array.forEach((e) => {
                            const noticeController = new NoticeController()
                            console.log(`Deletando "id" ${e['id']}`)
                            noticeController.deleteNotice(e['title'])
                        })
                        console.log(`Deletando Nóticia - Passou`)
                    } else {
                        console.log(`Deletando Nóticia - Não Passou`)
                    }
                })
            } catch (error) {
                console.log('Erro: testToDelete()')
            }
        }
    }


    /**
     * Descrição: Controlador de testes!
     */
    testInit() {
        if(this.testOn){
            try {
                console.log('Testes está online!')
                console.log('---------------')

                setTimeout(() => {this.testToSave()}, 1500)
                setTimeout(() => {this.testToListApiContent()}, 3000)
                setTimeout(() => {this.testToListFavorities()}, 4500)
                setTimeout(() => {this.testToDelete()}, 6000)
                setTimeout(() => {console.log('-----Fim dos testes!-----')}, 7000)
            } catch (error) {
                console.log('Erro: testInit()')
                console.log('---------------')
            }
        } else {
            console.log("Testes Offline")
        }
    }
}


new testing()
