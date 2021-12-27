const observados = [...document.querySelectorAll(".observado")]
const audifonos = document.getElementById('audifono')
const link =[...document.querySelectorAll('.nav__link')]
const animado =(id)=>{
   const elemento = document.getElementById(id)
    if(id == 'audifono'){
       elemento.classList.replace('desanimado','animado')
       elemento.classList.add('mostrarArriba')
       link[0].classList.add('blanco') 
    }
    if(id == 'caja1'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarAbajo') 
     }
     if(id == 'apple'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarArriba','delay1') 
     }
     if(id == 'spotify'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarArriba','delay2') 
     }
     if(id == 'amazon'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarArriba' ,'delay3') 
     }
     if(id == 'youtube'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarArriba','delay4')
     }
     if(id == 'specs'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarArriba')
        link[1].classList.add('blanco') 
     }
     if(id == 'bluetooth'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarDerecha') 
     }
     if(id == 'bateria'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarDerecha') 
     }
     if(id == 'cargador'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarDerecha') 
     }
     if(id == 'microphone'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarDerecha') 
     }
     if(id == 'specs__img'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarAbajo') 
     }
     if(id == 'case'){
        elemento.classList.replace('desanimado','animado')
        link[2].classList.add('blanco') 
     }
     if(id == 'case__img'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarArriba') 
     }
     if(id == 'case__text'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarAbajo') 
     }
     if(id == 'discout__text'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarDerecha') 
     }
     if(id == 'discout__img'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarIzquierda') 
     }
     if(id == 'choose'){
        elemento.classList.replace('desanimado','animado')
        link[3].classList.add('blanco') 
     }
     if(id == 'footer__logo'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarArriba','delay1') 
     }
     if(id == 'footer__products'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarArriba','delay2') 
     }
     if(id == 'footer__suport'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarArriba' ,'delay3')
     }
     if(id == 'social'){
        elemento.classList.replace('desanimado','animado')
        elemento.classList.add('mostrarArriba','delay4') 
     }
}
const desanimado = (id)=>{
    if(id == 'audifono'){
        link[0].classList.remove('blanco') 
     }
    if(id == 'specs'){
        link[1].classList.remove('blanco') 
     }
    if(id == 'case'){
        link[2].classList.remove('blanco') 
     }
    if(id == 'choose'){
        link[3].classList.remove('blanco') 
     }

}
const cb =(observado)=>{
    observado.forEach(caja=>{
        if(caja.isIntersecting){
            let id=caja.target.id 
            animado(id)
        }
        else{
            let id=caja.target.id 
            desanimado(id)
        }
    })
}
const options ={
    threshold: 0.1
}
const observer = new IntersectionObserver(cb,options)
observados.forEach(element => observer.observe(element))


window.addEventListener('resize',()=>{
   const ancho = window.innerWidth;
   if(ancho<600){
      console.log('funciona')
   }
})
const menu = document.querySelector('.nav__menu')
const nav = document.querySelector('.nav__content')
let cont = 0
menu.addEventListener('click',()=>{
   nav.classList.toggle("uno")
})
