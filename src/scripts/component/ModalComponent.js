export default class ModalComponent {
    constructor(content, h5Value) {

        //Cria os elementos que serão utilizados no Modal
        const h5 = document.createElement('h5')
        const modalHeader = document.createElement('div')
        const modalBody = document.createElement('div')
        const p = document.createElement('p')
        const modalFooter = document.createElement('div')
        const btnClose = document.createElement('button')
        const modalContent = document.createElement('div')
        const ModalDialog = document.createElement('div')
        this.modal = document.createElement('div')

        //Organiza os elementos e adiciona em ordem
        modalHeader.append(h5)
        modalBody.append(p)
        modalFooter.append(btnClose)
        modalContent.append(modalHeader)
        modalContent.append(modalBody)
        modalContent.append(modalFooter)
        ModalDialog.append(modalContent)
        this.modal.append(ModalDialog)

        //Cada elemento recebe suas classes, estilos e seus valores
        h5.classList.add("modal-title")
        h5.innerHTML = h5Value
        p.innerHTML = content
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

    open() {
        new BSN.Modal(this.modal, {
            backdrop: 'static'
          }).toggle()
    }

    close() {
        new BSN.Modal(this.modal, {
            backdrop: 'static'
          }).hide()
    }
}