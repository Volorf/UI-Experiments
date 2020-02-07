let count, colorCount, currentColor, bodyTag, input, fakeInput, caret

const colors = 
[   
    "#FF3A3A", "#FF813A", "#FFBC3A", "#80D43E", "#3AACFF", "#9D3AFF"    
]

bodyTag = document.getElementById("body")
fakeInput = document.getElementById("fake_input")
caret = document.getElementById("caret")

input = document.getElementById("input")

count = 0
colorCount = 0
currentColor = colors[colorCount]

setBackground()
setInterval(update, 1000)


// the method is called each second
function update()
{
    count++
    calcColorCount()
    setCurrentColor()
    setBackground()
    updateCaretColor()
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
    letter.style.color = currentColor
    fakeInput.appendChild(letter)
}


// Check for the delete button
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
    if(fakeInput.children.length > 1)
    {
        let lastElInFakeInput = fakeInput.children[fakeInput.children.length - 1]
        fakeInput.removeChild(lastElInFakeInput)
    }
}

function updateCaretColor()
{
    caret.style.backgroundColor = currentColor;
}