let botonIngles = document.getElementById("btn_ingles")
let botonEspañol = document.getElementById("btn_español")
function setSliders(){
    if(localStorage.getItem('lng')!=2){
        checkLanguage()
        let slider = document.querySelector(".slider_container")
        let sliderPagina = document.querySelectorAll(".contenido_slider")
        let contador = 1;
        let width = sliderPagina[0].clientWidth;
        let intervalo = 3000;
        
        window.addEventListener("resize", function(){
            width = sliderPagina[0].clientWidth;
        })
    
        function slides () {
            slider.style.transform = "translate("+(-width*contador)+"px)";
            slider.style.transition = "transform .8s";
            contador ++;
        
            if(contador == sliderPagina.length){
                setTimeout(function() {
                    slider.style.transform = "translate(0px)";
                    slider.style.transition = "transform 0s";
                    contador=1;
                }, 1500)
            }
        }
        
        setInterval(function(){
            slides();
        },intervalo);
    }
    else{
        checkLanguage()
        let slider = document.querySelector(".slider_container__eng")
        let sliderPagina = document.querySelectorAll(".contenido_slider__eng")
        let contador = 1;
        let width = sliderPagina[0].clientWidth;
        let intervalo = 3000;
        
        window.addEventListener("resize", function(){
            width = sliderPagina[0].clientWidth;
        })
    
        function slides () {
            slider.style.transform = "translate("+(-width*contador)+"px)";
            slider.style.transition = "transform .8s";
            contador ++;
        
            if(contador == sliderPagina.length){
                setTimeout(function() {
                    slider.style.transform = "translate(0px)";
                    slider.style.transition = "transform 0s";
                    contador=1;
                }, 1500)
            }
        }
        
        setInterval(function(){
            slides();
        },intervalo);
    
    }
}
function checkLanguage(){
    const ingles = document.getElementsByClassName("english")
    const español = document.getElementsByClassName("spanish")
    const footerIngles = document.getElementsByClassName("english_footer")
    const footerEspañol = document.getElementsByClassName("spanish_footer")
    if(localStorage.getItem('lng')==1){
        for(let i=0;i<español.length;i++){
            español[i].style.display = "block"
            ingles[i].style.display = "none"
        }
        for(let i=0;i<footerEspañol.length;i++){
            footerEspañol[i].style.display = "block"
            footerIngles[i].style.display = "none"
        }
        
    }else if (localStorage.getItem('lng')==2){
        for(let i=0;i<español.length;i++){
            español[i].style.display = "none"
            ingles[i].style.display = "block"
        }
        for(let i=0;i<footerEspañol.length;i++){
            footerEspañol[i].style.display = "none"
            footerIngles[i].style.display = "block"
        }

    }
}
botonEspañol.addEventListener('click', () =>{
    localStorage.setItem("lng", 1)
    checkLanguage()
    setSliders()
})
botonIngles.addEventListener('click', () =>{
    localStorage.setItem("lng", 2)
    checkLanguage()
    setSliders()

})
