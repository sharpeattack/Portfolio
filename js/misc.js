function addLines() {
    const bgText = document.getElementById("bg-text").innerHTML

    const clnText = new Array(500).fill(bgText).join('')

    document.getElementById("bg-text").append(clnText)

   
}

addLines();






