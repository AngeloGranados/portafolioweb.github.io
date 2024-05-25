const preload = document.getElementById("preload");

window.scrollTo(0, 0);
document.body.setAttribute("style", "overflow : hidden;");

window.addEventListener("load", ()=>{
    
    setTimeout(()=>{
        preload.setAttribute("style", "display:none;");
        document.body.setAttribute("style", "overflow : unset;");

        setTimeout(()=>{
            
            window.sr = new ScrollReveal();

            sr.reveal('.nav-link', {
                delay : 350,
                interval : 100,
                distance : '10px',
                origin : 'top'
            });

            sr.reveal('.img-logo', {
                delay : 350,
            });

            sr.reveal('.container-ltl-izq', {
                delay : 350,
            });

            sr.reveal('.container-ltl-dere', {
                delay : 350,
            });

            sr.reveal('.container-description', {
                delay : 350,
            });

            sr.reveal('.container-aboutme', {
                delay : 350,
                duration: 1000,
                distance : '25px',
                origin : 'top'
            });

            sr.reveal('.subtext', {
                delay : 350,
                duration: 1000,
                distance : '10px',
                origin : 'top'
            });

            sr.reveal('.title-container-proyect', {
                delay : 350
            });

            sr.reveal('.proyects-cards', {
                delay : 350,
                duration: 1000,
                distance : '10px',
                origin : 'top'
            });

            sr.reveal('.container-contact', {
                delay : 350,
                duration: 1000,
            });

            sr.reveal('.footer-text', {
                delay : 350,
                duration: 1000,
                distance: '10px',
                origin: 'bottom'
            });

        }, 500);
    }, 2000);

});