let count, colorCount, currentColor, bodyTag, input, fakeInput, caret, doUpdate, placeholder

const colors = 
[   
    "#FF3A3A", "#FF813A", "#FFBC3A", "#80D43E", "#3AACFF", "#9D3AFF"    
]

bodyTag = document.getElementById("body")

fakeInput = document.getElementById("fake_input")
fakeInput.classList.add("be_focused")

caret = document.getElementById("caret")
input = document.getElementById("input")
placeholder = document.getElementById("placeholder")

doUpdate = true
count = 0
colorCount = 0
currentColor = colors[colorCount]

setBackground()
setInterval(update, 1000)

// the method is called each second
function update()
{ 
    if(doUpdate)
      {
        count++
        calcColorCount()
        setCurrentColor()
        setBackground()
        updateCaretColor()
        updatePlaceholderColor()
      }
}

function setCurrentColor() 
{
    currentColor = colors[colorCount]
}   

function calcColorCount()
{
    colorCount = count % colors.length
}

function setBackground()
{
    bodyTag.style.backgroundColor = currentColor
}

function updateFakeInput(e) 
{
    let str = e.target.value
    let char = str.charAt(str.length - 1)
    let letter = document.createElement("letter")
    letter.innerHTML = char
    letter.className = "letter"
    letter.style.color = currentColor
    fakeInput.appendChild(letter)
}

// Checking the delete button
document.addEventListener("keydown", function(event) 
{
    if(event.which == "8")
    {
        input.removeEventListener("input", updateFakeInput)
        deleteLastElInFakeInput();
    }
    else
    {
        input.addEventListener("input", updateFakeInput)
    }

})

function deleteLastElInFakeInput()
{
    if (fakeInput.children.length > 1)
    {
        let lastElInFakeInput = fakeInput.children[fakeInput.children.length - 1]
        fakeInput.removeChild(lastElInFakeInput)
    }
}

function updateCaretColor()
{
    caret.style.backgroundColor = currentColor
}

function updatePlaceholderColor()
{
  placeholder.style.color = currentColor
}


// Check for focus/unfocus
input.onblur = () =>
{
  doUpdate = false
  fakeInput.classList.remove("be_focused")
  caret.style.display = "none"
  placeholder.style.display = "block"
}

input.onfocus = () =>
{
  doUpdate = true;
  fakeInput.classList.add("be_focused")
  caret.style.display = "block"
  placeholder.style.display = "none"
}