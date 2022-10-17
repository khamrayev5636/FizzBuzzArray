var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".form__input");
var textFizz = document.querySelector(".text__fizz");
var textBuzz = document.querySelector(".text__buzz");
var textFizzBuzz = document.querySelector(".text__fizzbuzz");
var textMistake = document.querySelector(".alert__mistake");
var textBlock = document.querySelector(".block")

var arrayFizz = [];
var arrayBuzz = [];
var arrayFizzBuzz = [];
var arrayMistake = [];

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();
    
    var elInputValue = elInput.value.trim();
    
    if(elInputValue % 3 == 0 && elInputValue % 5 == 0){

        elInput.value = "";

        arrayFizzBuzz.push(elInputValue);
        textFizzBuzz.textContent = arrayFizzBuzz.join(", ");
        arrayFizz.push(elInputValue);
        textFizz.textContent = arrayFizz.join(", ");
        arrayBuzz.push(elInputValue);
        textBuzz.textContent = arrayBuzz.join(", ");
        
    }else if(elInputValue % 3 == 0){
        
        elInput.value = "";
        
        arrayFizz.push(elInputValue);
        textFizz.textContent = arrayFizz.join(", ");
        
    }else if(elInputValue % 5 == 0){
        
        elInput.value = "";
        
        arrayBuzz.push(elInputValue);
        textBuzz.textContent = arrayBuzz.join(", ");
    }else {
        elInput.value = "";

        arrayMistake.push(elInputValue);
        textBlock.classList.add("block-js");
        textMistake.textContent = arrayMistake.join(", ");
    }
})
