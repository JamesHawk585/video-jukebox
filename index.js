const body = document.querySelector('body')
const newHeader = document.createElement('header')
const header = document.querySelector('header')
const newH1 = document.createElement('h1')
const h1 = document.querySelector('h1')
const submitButton = document.createElement('button')

body.prepend(newHeader)
newHeader.append(newH1)

newH1.textContent = "Video Jukebox"

const div = document.createElement('div')
body.append(div)
div.classList.add("container")

const section = document.createElement('section')
div.append(section)
section.classList.add("left")

const form = document.createElement('form')
form.setAttribute("id", "playlist-form")
section.append(form)

const numLabelsAndInputs = 3;

for (let i = 1; i <= numLabelsAndInputs; i++) {
    const label = document.createElement('label')
    const input = document.createElement('input')
    const breakElement = document.createElement('br')

    const labelDiv = document.createElement('div')
    const inputDiv= document.createElement('input')
    if (i === 1) {
        label.innerText = "Song Name:"
        label.setAttribute("for", "song")

        input.setAttribute("type", "text")
        input.setAttribute("id", "song")
        input.setAttribute("name", "song")
    } else if (i === 2) {
        label.innerText = "Artist Name:"
        label.setAttribute("for", "artist")
 
        input.setAttribute("type", "text")
        input.setAttribute("id", "artist")
        input.setAttribute("name", "artist")
    } else if (i === 3) {
        label.innerText = "YouTube Link:"
        label.setAttribute("for", "youtube-id")

        input.setAttribute("type", "text")
        input.setAttribute("id", "youtube-id")
        input.setAttribute("name", "youtube-id")
    }

    labelDiv.append(label)
    inputDiv.append(input)

    form.append(labelDiv)
    form.append(inputDiv)
    form.append(breakElement)
}
form.append(submitButton)

const ul = document.createElement('ul')
const rightSection = document.createElement('section')
div.appendChild(rightSection)
rightSection.classList.add('right')

const rightSectionDiv = document.createElement('div')
rightSection.append(rightSectionDiv);
rightSectionDiv.setAttribute('id', 'playerContainer')

const iFrame = document.createElement('iframe')
iFrame.setAttribute("id", "player")
iFrame.setAttribute("width", "560")
iFrame.setAttribute("height", "315")
iFrame.setAttribute("frameborder", "0")
iFrame.setAttribute("src", "")
rightSectionDiv.append(iFrame)


section.append(ul)