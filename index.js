const body = document.querySelector('body')
const newHeader = document.createElement('header')
const header = document.querySelector('header')
const newH1 = document.createElement('h1')
const h1 = document.querySelector('h1')

body.prepend(newHeader)


newHeader.append(newH1)

newH1.innerText = "Video Jukebox"
