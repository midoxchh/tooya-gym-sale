/*------------ SHOW MENU-------------*/
function showMneu(toggleId, navId){
    const toggle = document.getElementById(toggleId)
    const    nav = document.getElementById(navId)
    /*valid if there are variables*/
    if (toggle && nav) {
        /*here I add the class show menu on the div with class nav__menu*/
        toggle.addEventListener('click', () => {
            /*alert to the class show menu on the div that has the nav menu id */
            nav.classList.toggle('show-menu')
        })
    }
}
showMneu('nav-toggle', 'nav')

/*------------ remover Menu Mobile -------------*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav')
    /*When a link or the close button is clicked the class show menu will be removed*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== Leave the link clicked with Class Active-Link====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))
/*==================== Change the color of the header ====================*/
function scrollHeader(){
    const scrollHeader = document.getElementById('header')
    if(this.scrollY >= 100) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)