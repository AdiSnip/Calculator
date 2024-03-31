let string="";
let result="";
let array = [];
let mainwindow = document.querySelector("#mainwindow")
let buttons = document.querySelectorAll(".button")
buttons.forEach((button)=>{
  button.addEventListener("click", (e)=>{
    if(button.innerText === "="){
      try {
      mainwindow.value = result;
      string = eval(string);
      mainwindow.value = string
      result = string
      mainwindow.value = result;
      } catch (e) {
        mainwindow.value = "not defined"
      }
      
    }else if(button.innerText === "x"){
      string += "*"
      result += "x"
      array.push(result)
      mainwindow.value = result
    }else if(button.innerText === "÷"){
      string += "/"
      result += "÷"
      array.push(result)
      mainwindow.value = result
    }else if(button.innerText === "AC"){
      mainwindow.value = ""
      string = ""
      result = ""
      array = []
    }else if(button.value === "C"){
      string = array[array.length-2]
      result = array[array.length-2]
      mainwindow.value = result
      array.pop(array[array.length-1])
      if(array.length < 1){
        mainwindow.value = ""
        string = ""
        result = ""
      }
    }else if(button.innerText === "%"){
      string += "/100"
      result += "%"
      mainwindow.value = result
    }else if(array.length>10){
      string += button.innerText;
      result += button.innerText;
      array.push(result)
      mainwindow.value = result;
      mainwindow.scrollBy(50,0)
    }else{
       string += button.innerText;
       result += button.innerText;
       array.push(result)
       mainwindow.value = result;
    }
  })
})