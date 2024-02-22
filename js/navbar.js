let sections = document.querySelectorAll("main > section");
let nav = document.querySelectorAll("nav div a");

window.onscroll = () => {
     sections.forEach((sec)=>{
          let top = window.scrollY;
          let offsettop = sec.offsetTop - 60;
          let offsetHeight = sec.offsetHeight;
          let id = sec.getAttribute("id");

          if(top >= offsettop && top < offsettop + offsetHeight){
               nav.forEach((link)=>{
                    link.classList.remove("active");
                    console.log(document.querySelector('nav a'));
                    document.querySelector('nav a[href*='+ id +']').classList.add("active");      
               });
          }
     });

}
