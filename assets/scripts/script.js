var currentOutputItem=document.createElement("div")
class Input{
    constructor(input1,input2,input3,input4,input5){
        this.input1=input1
        this.input2=input2
        this.input3=input3
        this.input4=input4
        this.input5=input5
    }
    check(){
        if(this.input1==""||this.input2==""||this.input3==""||this.input4==""||this.input5==""){
            return false
        }
    }
    generate(){
        if(this.check()==false){
            return
        }
        var item1=document.createElement("div")
        var item2=document.createElement("div")
        var item3=document.createElement("div")
        var item4=document.createElement("div")
        var item5=document.createElement("div")
        item1.innerHTML=this.input1
        item2.innerHTML=this.input2
        item3.innerHTML=this.input3
        item4.innerHTML=this.input4
        item5.innerHTML=this.input5
        currentOutputItem.appendChild(item1)
        currentOutputItem.appendChild(item2)
        currentOutputItem.appendChild(item3)
        currentOutputItem.appendChild(item4)
        currentOutputItem.appendChild(item5)
    }
}
function btnSubmitInput(){
    var in1=document.getElementById("in1").value
    var in2=document.getElementById("in2").value
    var in3=document.getElementById("in3").value
    var in4=document.getElementById("in4").value
    var in5=document.getElementById("in5").value
    var output=document.getElementById("output")
    
    var inputItems=new Input(in1,in2,in3,in4,in5)
    output.appendChild(currentOutputItem)
    currentOutputItem=''
    console.log('done')
}