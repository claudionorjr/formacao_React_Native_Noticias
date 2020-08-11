import NoticeController from '../controller/NoticeController.js'


/**
 * Descrição: Constroi um button component!
 * OBS: Precisa de bootstrap 4 para renderizar o button!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 * 
 * @param {NewsModel} news
 */
export default class BtnFavorite {
    constructor(news) {
        this.news = news
    }

    /**
     * Descrição: Método usado em 'buttons' para acionar a função de 'save'
     */
    initBtnToSave() {
        let fa = React.createElement('i',
            { 
                key: 'toSave',
                className : 'fa fa-star-o',
                color: 'black'
            }, null)

        let faCheck = React.createElement('i',
            { 
                key: 'onSave',
                className : 'fa fa-check-circle-o',
                color: 'green'
            }, null)

        let btn = React.createElement('button',
            {
                key: 'save',
                className:'btn btn-light btn-sm ml-2 mb-1',
                onClick: () => {
                    ['Favorita ', faCheck]
                    const noticeController = new NoticeController(this.news)
                    noticeController.sendNoticeToModel(this.news)
                }
            },['Ler Depois ', fa])

        return btn
    }

    /**
     * Descrição: Método usado em 'buttons' para acionar a função de 'delete'
     */
    initBtnToDelete() {
        let fa = React.createElement('i',
            { 
                key: 'toDelete',
                className : 'fa fa-trash',
                color: 'red'
            }, null)

        let faCheck = React.createElement('i',
            { 
                key: 'onDelete',
                className : 'fa fa-check-circle-o',
                color: 'red'
            }, null)

        let btn = React.createElement('button',
        {
            key: 'delete',
            className:'btn btn-light btn-sm ml-2 mb-1',
            onClick: () => {
                ['Removida ', faCheck]
                const noticeController = new NoticeController()
                noticeController.deleteNotice(this.news.getTitle())
            }
        },['Remover Favorito ', fa])

        return btn
    }
}
