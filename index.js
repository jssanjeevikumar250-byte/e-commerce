var sidenavbar = document.querySelector(".side-nav-bar")

function show(){
    sidenavbar.style.left="0%"
}
function hide(){
    sidenavbar.style.left="-50%"
}

var col = document.getElementById("q")
var search = document.getElementById("search")
var samples = col.querySelectorAll("div")
console.log(samples)
search.addEventListener("keyup",function(event){
    var enteredValue = event.target.value.toUpperCase();
     
     for(count=0;count<samples.length;count=count+1)
     {
        var productname = samples[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            samples[count].style.display="none"
        }
        else{
            samples[count].style.display="block"
        }
     }

})