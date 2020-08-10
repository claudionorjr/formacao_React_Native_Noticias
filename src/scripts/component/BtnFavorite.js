import NoticeController from '../controller/NoticeController.js'


export default class BtnFavorite {
    constructor(news) {
        this.news = news
    }


    initBtnToSave() {
        var fa = React.createElement('i',
            { 
                key: 'toSave',
                className : 'fa fa-star-o',
                color: 'black'
            }, null)

        var faCheck = React.createElement('i',
            { 
                key: 'onSave',
                className : 'fa fa-check-circle-o',
                color: 'green'
            }, null)

        this.btn = React.createElement('button',
            {
                key: 'save',
                className:'btn btn-light btn-sm ml-2 mb-1',
                onClick: () => {
                    ['Favorita ', faCheck]
                    const noticeController = new NoticeController(this.news)
                    noticeController.sendNoticeToModel(this.news)
                }
            },['Ler Depois ' , fa])

        return this.btn
    }


    initBtnToDelete() {
        var fa = React.createElement('i',
            { 
                key: 'toDelete',
                className : 'fa fa-trash',
                color: 'red'
            }, null)

        var faCheck = React.createElement('i',
            { 
                key: 'onDelete',
                className : 'fa fa-check-circle-o',
                color: 'red'
            }, null)

        this.btn = React.createElement('button',
        {
            key: 'delete',
            className:'btn btn-light btn-sm ml-2 mb-1',
            onClick: () => {
                ['Removida ', faCheck]
                const noticeController = new NoticeController()
                noticeController.deleteNotice(this.news.getTitle())
            }
        },['Remover Favorito ', fa])

        return this.btn
    }
}
