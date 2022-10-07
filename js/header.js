let header = document.querySelector('#header')
let menuBar = document.querySelector('#menuBar')
let barContainer = document.createElement('div')
let body = document.querySelector('body')

barContainer.classList.add('bar-container')

barContainer.innerHTML = `
                        <div class="progress-bar"></div>
`
body.appendChild(barContainer)



menuBar.onclick = () => {

    header.classList.add('dark-header')

}

window.onscroll = () => {
    
    if(window.scrollY > 20){
        header.classList.add('dark-header')
    }
    else if(window.scrollY === 0){
        header.classList.remove('dark-header')
    }

    let progress = document.querySelector('.progress-bar')
    
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let load = document.documentElement.scrollTop / windowHeight * 100

    progress.style.width = load + '%'
    
}

