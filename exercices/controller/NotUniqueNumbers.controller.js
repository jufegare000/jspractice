import {showResult, goToHome, countOccurrences} from '../utils/PagesUtils.js'

export class NotUniqueNumbersController {
    constructor(){
        document.getElementById("btnNotUniqueNumbers")
        .addEventListener("click", this.computeNonUniqueNumbers);

        document.getElementById("btnHome")
        .addEventListener("click", goToHome);   
    }

    computeNonUniqueNumbers(){
        console.log('btnPangrama');
        const inputValuePangram = document.getElementById("txtInputNotUniqueNumbers").value;
        let resultInnerHTML = document.getElementById("result");
        console.log(inputValuePangram);
        let inputToArray = inputValuePangram.split`,`.map(x=>+x)
        let messageResult = "";
        const arrayResult = []
        if(!inputToArray.some(isNaN)){
            
            for (let i = 0; i < inputToArray.length; i++) {
                let currentValue = inputToArray[i];
                if (!arrayResult.includes(currentValue) && countOccurrences(inputToArray, currentValue) > 1) {
                    arrayResult.push(currentValue);
                }
                messageResult = `Your non-unique values list is : ${arrayResult}`;
            }
        }else{
            messageResult = "check if you are using only coma-separated values";
        }
        console.log(arrayResult);
        
        console.log(messageResult);
        const htmlModuleForResult = showResult(messageResult);
        resultInnerHTML.innerHTML = htmlModuleForResult;
    }
}

let notUniqueNumbersControllerInstnce = new NotUniqueNumbersController();