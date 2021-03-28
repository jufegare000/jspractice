class Main{
    constructor(){
        document.getElementById("btnLeapyear")
        .addEventListener("click", this.goToLeapYear);   

        document.getElementById("btnPangramas")
        .addEventListener("click", this.goTopangrama); 

        document.getElementById("btnRomanNumber")
        .addEventListener("click", this.goToRomanNumerals); 

        document.getElementById("btnNotUnique")
        .addEventListener("click", this.goToNonUniqueNumbers); 
    }

    goToLeapYear(){
        window.location.href = "/exercices/view/leap-years.html"
    }

    goTopangrama(){
        window.location.href = "/exercices/view/pangrama.html"
    }

    goToRomanNumerals(){
       console.log(window.location.href);
        // window.location.href = window.location.href + "exercices/view/roman-numerals.html"
    }

    goToNonUniqueNumbers(){
        window.location.href = "/exercices/view/not-unique-numbers.html"
    }
}

const main = new Main()