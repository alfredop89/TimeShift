let clockBanner = document.querySelector('#clockBanner')
let bannerText = document.querySelector('#bannerText')
let localTime = document.querySelector('#localTime')
let arrowBanner = document.querySelector('#arrowBanner')

const interval = setInterval(() => {

    const local = new Date()

    localTime.innerHTML = local.toLocaleTimeString()
})

window.addEventListener('scroll', () => {

    let value = window.scrollY
    
    clockBanner.style.marginTop = value * 1.2 + 'px'
    bannerText.style.marginTop = value * 1.5 + 'px'
    localTime.style.marginBottom = value * 1.5 + 'px'
    arrowBanner.style.marginBottom = value * 2.5 + 'px'

    if(window.scrollY > 3800){
        let nosotrosTitle = document.querySelector('.nosotros-title')
        let nosotrosText = document.querySelector('#nosotrosText')

        nosotrosTitle.style.marginTop = value * 0.15 + 'px'

    }
})

