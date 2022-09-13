function openmenu(){
    document.body.classList +=" menu-open"
    document.body.classList.remove('menu-close')
}

function closemenu(){
    document.body.classList.remove('menu-open')
    document.body.classList +=" menu-close"
}