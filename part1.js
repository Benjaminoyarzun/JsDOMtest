function cambiarColor() {
    let tit = document.getElementById('titulo')
    tit.style.color = '#ff0000'
}

function cambiarTamanoFuentesm() {
    let tit = document.getElementById('titulo')
    tit.style.fontSize = '10px'
}
function cambiarTamanoFuentemd() {
    let tit = document.getElementById('titulo')
    tit.style.fontSize = '13px'
}
function cambiarTamanoFuentexl() {
    let tit = document.getElementById('titulo')
    tit.style.fontSize = '30px'
}



let div1=document.getElementById("div1")
let div2=document.getElementById("div2")


function countNodes() {
    alert('La cantidad de hijos del div 1 es:' + div1.childNodes.length)
    alert('La cantidad de hijos del div 2 es:' + div2.childNodes.length)
    
} 


function countChild() {
    
    alert('La cantidad de hijos de tipo elemento del div 1 es:' + div1.children.length)
    alert('La cantidad de hijos de tipo elemento del div 2 es:' + div2.children.length)


    
} 

