function showText(elementID, buttonElement) {
    const element = document.getElementById(elementID) 
    const display = element.style.display

    if (display === "block") {
        element.style.display = "none"
        buttonElement.value = "Ausklappen"
    } else {
        element.style.display = "block"
        buttonElement.value = "Einklappen"
    }
    return element.style.display
}

function cascadeText(displayStyle, textElementID, buttonElementID) {
    const text = document.getElementById(textElementID)
    const button = document.getElementById(buttonElementID)

    text.style.display = displayStyle
    if (displayStyle === "block") {
        button.value = "Einklappen"
    } else {
        button.value = "Ausklappen"
    }
}