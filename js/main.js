let btn_main = document.querySelector('.main__top--btn-main')
let btn_close = document.querySelector('.modal__close--btn')
let modal = document.querySelector('.modal')


document.addEventListener('click', evt => {
    console.log(evt.target)

    if (evt.target == btn_main) {
        modal.style.opacity = 1
        modal.style.pointerEvents = 'unset'
    }
    if (evt.target == btn_close) {
        modal.style.opacity = 0
        modal.style.pointerEvents = 'none'
    }
})