const info = {
    open(){
        document.querySelector('.container-info').classList.add('active')
    },
    close(){
        document.querySelector('.container-info').classList.remove('active')
    },
    notification() {
        alert("EM DENSENVOLMENTO...")
    }
}