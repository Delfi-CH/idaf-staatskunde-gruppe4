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
}