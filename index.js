class Main{
    constructor(){
        document.getElementById("btnLeapyear")
        .addEventListener("click", this.goToLeapYear);   

        document.getElementById("btnPangramas")
        .addEventListener("click", this.goTopangrama); 
    }

    goToLeapYear(){
        console.log('btnLeapyear');
        window.location.href = "/exercices/view/leap-years.html"
    }

    goTopangrama(){
        console.log('btnPangramas');
        window.location.href = "/exercices/view/pangrama.html"
    }
}

const main = new Main()