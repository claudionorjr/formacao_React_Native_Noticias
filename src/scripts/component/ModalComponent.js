/**
 * Descrição: Constroi um ModalComponent!
 * OBS: Precisa de bootstrap 4 para renderizar o Modal!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 * 
 * @param {String} h5Value
 * @param {String} content
 * 
 * @returns {HTMLDivElement} this.modal //modal é acessado para instanciar um novo modal
 */
export default class ModalComponent {
    constructor(news) {
        const h5 = document.createElement('h5')
        const modalHeader = document.createElement('div')
        const modalBody = document.createElement('div')
        const p = document.createElement('p')
        const modalFooter = document.createElement('div')
        const btnClose = document.createElement('button')
        const modalContent = document.createElement('div')
        const ModalDialog = document.createElement('div')
        this.modal = document.createElement('div')

        modalHeader.append(h5)
        modalBody.append(p)
        modalFooter.append(btnClose)
        modalContent.append(modalHeader)
        modalContent.append(modalBody)
        modalContent.append(modalFooter)
        ModalDialog.append(modalContent)
        this.modal.append(ModalDialog)

        h5.classList.add("modal-title")
        h5.innerHTML = news.getTitle()
        p.innerHTML = news.getContent()
        modalHeader.classList.add("modal-header")
        modalBody.classList.add("modal-body")
        modalFooter.classList.add("modal-footer")
        modalContent.classList.add("modal-content")
        ModalDialog.classList.add("modal-dialog")
        btnClose.innerHTML = "Close <i class='fa fa-close'></i>"
        btnClose.classList.add("btn")
        btnClose.classList.add("btn-secondary")
        btnClose.classList.add("btn-sm")
        btnClose.addEventListener('click', () => {
            this.close()
        })
        this.modal.classList.add("modal")
        this.modal.classList.add("fade")
        this.modal.id = "myModal"
        this.modal.tabIndex = "-1"
        document.body.append(this.modal)
    }


    /**
     * Descrição: Método para abrir o Modal
     */
    open() {
        new BSN.Modal(this.modal, {
            backdrop: 'static'
          }).toggle()
    }


    /**
     * Descrição: Método para fechar o Modal
     */
    close() {
        new BSN.Modal(this.modal, {
            backdrop: 'static'
          }).hide()
    }
}
