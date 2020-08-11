import USDateToBRDate from './USDateToBRDate.js'
import ModalComponent from './ModalComponent.js'
import BtnFavorite from './BtnFavorite.js'


/**
 * Descrição: Constroi um card component!
 * OBS: Precisa de bootstrap 4 para renderizar o card!
 * 
 * @version 2.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 * 
 * @param {NewsModel} news
 * @param {Boolean} toSave
 * @param {Boolean} toDelete
 * @returns {HTMLDivElement} this.col //col é acessado para instanciar um novo card
 */
export default class CardComponent {
    constructor(news, toSave, toDelete) {
        toSave == true ? this.btnFavorite = new BtnFavorite(news).initBtnToSave() : null
        toDelete == true ? this.btnFavorite = new BtnFavorite(news).initBtnToDelete() : null

        let uSDateToBRDate = new USDateToBRDate(news.getPublishedAt())

        let publishedBy = React.createElement('p',
            {
                key: Math.random(),
                className : 'text-muted'
            },
            ['Fonte: ', news.getSource()]
        )

        let createdAt = React.createElement('p',
            {
                key: Math.random(),
                className : 'text-muted'
            },
            'Publicação: '+ uSDateToBRDate.date
        )

        let cardContent = React.createElement('p',
            {
                key: Math.random(),
                className: 'card-text'
            },
            news.getDescription()
        )

        let title = React.createElement('h5', 
            {
                key: Math.random()
            },
            news.getTitle()
        )

        let cardBody = React.createElement('div',
            { 
                key: Math.random(),
                className : 'card-body'
            },
            [title, cardContent, createdAt, publishedBy]
        )

        let faPlus = React.createElement('i',
            { 
                key: Math.random(),
                className : 'fa fa-plus'
            }, 
            null
        )
        
        let btnOpen = React.createElement('button',
            { 
                key: Math.random(),
                className : 'btn btn-info btn-sm ml-2 mb-1',
                onClick: () => {
                    var modalComponent = new ModalComponent(news)
                    modalComponent.open()
                }
            },
            ['Ver Mais ', faPlus]
        )
        
        let cardFooter = React.createElement('div',
            { 
                key: Math.random(),
                className : 'card-footer'
            },
            [btnOpen, this.btnFavorite]
        )

        let img = React.createElement('img',
            { 
                key: Math.random(),
                className : 'card-img-top',
                style : {
                    'maxHeight': '200px',
                    'width': 'auto'
                },
                src: news.getUrlImage()
            },
            null
        )

        let allCardContent = React.createElement('div',
            { 
                key: Math.random(),
                className : 'card',
                style : {'minHeight': '400px'}
            },
            [img, cardBody, cardFooter]
        )

        this.card = React.createElement('div',
            { 
                key: Math.random(),
                className : 'col mb-4'
            },
            allCardContent
        )
    }
}
