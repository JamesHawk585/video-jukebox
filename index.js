const body = document.querySelector('body')
const newHeader = document.createElement('header')
const header = document.querySelector('header')
const newH1 = document.createElement('h1')
const h1 = document.querySelector('h1')
const submitButton = document.createElement('button')

document.addEventListener("DOMContentLoaded", function() {
    return
  });

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

    // const labelDiv = document.createElement('div')
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

    console.log(input)
    form.append(label)

    // form.append(labelDiv)
    form.append(input)
    form.append(breakElement)
    // debugger
}

form.append(submitButton)
submitButton.innerText = "Add"
// When I use setAttribute to give the submit button an id, the left div dissapears from the dom: why? 
submitButton.setAttribute("id", "submit")


const ul = document.createElement('ul')
div.appendChild(ul);
ul.setAttribute("id", "playlist");
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

// iframe is a special html element. It allows a 'src' attribute that can display video. 

const getFormById = document.getElementById("playlist-form")
const playlist = document.getElementById("playlist")
const player = document.getElementById("player")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const songName = document.getElementById('song').value
    const artistName = document.getElementById('artist').value
    const youtubeID = document.getElementById('youtube-id').value
    const songObj = {songName, artistName, youtubeID}
    displayPlaylist(songObj)


    // console.log(e.target.value)
    console.log(e)
    // form.reset()
})

function displayPlaylist(songObj) {
    const span = document.createElement('span')
    const li = document.createElement('li')
    const deleteBtn = document.createElement('button')

    span.textContent = `${songObj.songName} - ${songObj.artistName}`
    deleteBtn.innerHTML = "🗑️"

    li.addEventListener("click", (e) => {
       player.src =  `https://www.youtube.com/embed/${songObj.youtubeID}`
       e.stopPropagation
    })

    deleteBtn.addEventListener("click", (e) => {
        console.log("Deleting Song...")
        // Add code
    })

    span.appendChild(deleteBtn)
    console.log(deleteBtn)
    li.appendChild(span)
    console.log(span)
    playlist.appendChild(li)
    console.log(li)
}

//     // Add event lsiteners

//     li.addEventListener("click", (e) => {
//         console.log("Deleting song...")
//         //8. Stop the propagation of the click so the li doesn't respond to the delete click

//       //9. Remove the li, which is the grandparent of the deleteBtn

//       //Hint:  e.target is the button - use the parentNode property to get to the span, and again to get to the li.  Then use .remove()

//       //BONUS: use a confirm box to allow the user to change their minds about deleting the song. A confirm box returns true or false depending on what the user selects.  Try using the return value of the confirm box in a conditional, and move the .remove() into the if statement
//     })
// }