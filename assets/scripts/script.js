var in1, in2, in3, in4, in5, output, items, message, messageID, messageContents
output = document.getElementById("output")
function btnSubmitInput() {
    in1 = document.getElementById("in1").value
    in2 = document.getElementById("in2").value
    in3 = document.getElementById("in3").value
    in4 = document.getElementById("in4").value
    in5 = document.getElementById("in5").value
    
    generate()
    console.log('done')
}
function createArray() {
    items = []
    items.push(in1)
    items.push(in2)
    items.push(in3)
    items.push(in4)
    items.push(in5)
    in1, in2, in3, in4, in5 = '', '', '', '', ''
}
function generateMessage() {
    message = document.createElement("div")
    message.style.borderStyle = "solid"
    message.style.borderColor = 'green'
    message.id = "message" + messageID
    createMessageContents()
    message.innerHTML = messageContents
}
function createMessageContents() {
    messageContents = ''
    for (i = 0; i < items.length; i++) {
        messageContents += items[i]
        messageContents += "<br>"
    }

}
function generate() {
    createArray()
    generateMessage()
    output.appendChild(message)
}