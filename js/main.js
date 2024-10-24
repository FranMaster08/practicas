const elementos = {
    crearButton: '#crear-btn',
    popup: '#popup',
    closePopup: ' #close-popup'
}
const AbrirPopUP = () => {
    const PopUp = document.querySelector(elementos.popup)
    PopUp.classList.toggle('hidden')
}

const eventosDeTogglePopUp = () => {

    const elementosArray =[
        document.querySelector(elementos.crearButton),
        document.querySelector(elementos.closePopup)
    ]

    elementosArray.forEach(element => {
        element.addEventListener('click', () => {
            AbrirPopUP()
        })
    });
   
  


}



const CargarEventos = () => {
    eventosDeTogglePopUp()

}





const main = () => {
    CargarEventos()
}



window.onload = main