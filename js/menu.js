const btnmenu = document.getElementById("menu");
const navmenu = document.getElementById("nav-menu");
const container = document.querySelector("main");
const links = document.querySelectorAll("nav div a");

let cont = 0;

btnmenu.addEventListener("click", ()=>{

    if(cont == 0){
        navmenu.classList.add("active-nav");
        container.classList.add("background-body");
        document.body.setAttribute("style", "overflow : hidden;");
        cont = 1;
    }else{
        navmenu.classList.remove("active-nav");
        container.classList.remove("background-body");
        document.body.removeAttribute("style", "overflow : hidden;");
        cont = 0;
    }
    
});

links.forEach((link)=>{
    link.onclick = () => {
        navmenu.classList.remove("active-nav");
        container.classList.remove("background-body");
        document.body.removeAttribute("style", "overflow : hidden;");
    };
});