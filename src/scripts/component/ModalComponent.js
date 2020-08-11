/**
 * Descrição: Constroi um ModalComponent!
 * OBS: Precisa de bootstrap 4 para renderizar o Modal!
 * 
 * @version 2.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 * 
 * @param {News} news
 * 
 * @returns {HTMLDivElement} this.modal
 */
export default class ModalComponent {
    constructor(news) {
        let title = React.createElement('h5', 
            {
                key: Math.random(),
                className : 'modal-title'
            },
            news.getTitle()
        )

        let modalHeader = React.createElement('div',
            {
                key: Math.random(),
                className: 'modal-header'
            },
            title
        )

        let textModalBody = React.createElement('p',
            {
                key: Math.random()
            },
            news.getContent()
        )

        let modalBody = React.createElement('div',
            {
                key: Math.random(),
                className: 'modal-body'
            },
            textModalBody
        )

        let faClose = React.createElement('i',
            { 
                key: Math.random(),
                className : 'fa fa-close'
            }, 
            null
        )
        
        let btnClose = React.createElement('button',
            { 
                key: Math.random(),
                className : 'btn btn-secondary btn-sm',
                onClick: () => this.close()
            },
            ['Close ', faClose]
        )

        let modalFooter = React.createElement('div',
            {
                key: Math.random(),
                className: 'modal-footer'
            },
            btnClose
        )

        let modalContent = React.createElement('div',
            {
                key: Math.random(),
                className: 'modal-content'
            },
            [modalHeader, modalBody, modalFooter]
        )

        let ModalDialog = React.createElement('div',
            {
                key: Math.random(),
                className: 'modal-dialog'
            },
            modalContent
        )

        this.modal = React.createElement('div',
            {
                key: Math.random(),
                className: 'modal fade',
                id: 'myModal',
                style: {'tabIndex': '-1'}
            },
            ModalDialog
        )
        let modalArea = document.getElementById('modalArea')
        ReactDOM.render(this.modal, modalArea)
    }


    /**
     * Descrição: Método para abrir o Modal
     */
    open() {
        let modal = document.getElementById('myModal')
        new BSN.Modal(modal, {
            backdrop: 'static'
          }).toggle()
    }


    /**
     * Descrição: Método para fechar o Modal
     */
    close() {
        let modal = document.getElementById('myModal')
        new BSN.Modal(modal, {
            backdrop: 'static'
          }).hide()
    }
}
