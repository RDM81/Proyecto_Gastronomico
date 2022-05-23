//----LOADER-----//

window.addEventListener('load', () => {
    const contenedor_loader = document.querySelector('.contenedor_loader');
    
    contenedor_loader.style.visibility = 'hidden';
    contenedor_loader.style.opacity = 0;

})


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