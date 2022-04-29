
const date = document.querySelector('#fecha');
const agregarBtn = document.querySelector('#enter');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
// variables para dar estilos al dar click
const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const line = 'line-text'
let id;
let LIST;


//creacion de fecha
const FECHA = new Date();
date.innerHTML = FECHA.toLocaleDateString('es-MX', { weekday: 'long', month: 'short',day:'numeric' })
// FUNCION AGREGAR TAREA


function agregarTarea(tarea, id, realizado, eliminado) {
    if (eliminado) {
        return
    }
    const REALIZADO = realizado ? check : uncheck;
    const LINE = realizado ? line: ''

    const fragmentoLi =
           `<li>
                <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                <p class="text ${LINE}">${tarea}</p>
                <i class="fas fa-trash delete-red" data="eliminado" id="${id}"></i>
            </li>
            `
    lista.insertAdjacentHTML('beforeend',fragmentoLi)
}
agregarBtn.addEventListener('click', () => {
    const contenidoTarea = input.value;
    if (contenidoTarea) {
        agregarTarea(contenidoTarea, id, false, false)
        LIST.push({
            nombre: contenidoTarea,
            id: id,
            realizado: false,
            eliminado:false
            })
    }
       localStorage.setItem('TODO',JSON.stringify(LIST))

    input.value = ''
    id++
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const contenidoTarea = input.value;
        if (contenidoTarea) {
            agregarTarea(contenidoTarea, id, false, false)
            LIST.push({
            nombre: contenidoTarea,
            id: id,
            realizado: false,
            eliminado:false
            })
        }
      localStorage.setItem('TODO',JSON.stringify(LIST))
        
        input.value = ''
        id++
    }
})
//funcion marcar tarea

function tareaRealizada(element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector('.text').classList.toggle(line)
    LIST[element.id].realizado=LIST[element.id].realizado ? false:true
}
//funcion eliminar tarea
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].eliminado=true
}

lista.addEventListener('click', (e) => {
    const element = e.target;
    const elementData = element.attributes.data.value;
    if (elementData === 'realizado') {
        tareaRealizada(element)
    } else if (elementData === 'eliminado') {
        tareaEliminada(element)
    }
localStorage.setItem('TODO',JSON.stringify(LIST))

})

let data = localStorage.getItem('TODO')
if (data) {
    LIST = JSON.parse(data)
    id = LIST.length
    cargarLista(LIST)
}
else {
    LIST = []
    id=0
}
function cargarLista(DATA) {
    DATA.forEach(x => {
        agregarTarea(x.nombre,x.id,x.realizado,x.eliminado)
    });
}





















// const fecha = document.querySelector('#fecha'),
//     lista = document.querySelector('#lista'),
//     input = document.querySelector('#input'),
//     botonEnter = document.querySelector('#enter'),
//     check = 'fa-check-circle',
//     uncheck = 'fa-circle',
//     lineThrough = 'line-through';
// let id = 0;
// const LIST = []
        

//     // funcion agregar tarea

// function agregarTarea(tarea, id, realizado, eliminado) {
//     if(eliminado){return}
//     const REALIZADO = realizado ? check : uncheck;
//     const LINE = realizado ? lineThrough : '';
//     const elemento =
//         `
//     <li id="elemento">
//          <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
//          <p class="text ${LINE}">${tarea}</p>
//          <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
//     </li>
            
//          `;
//     lista.insertAdjacentHTML("beforeend",elemento)
// }
//     // funcion de Tarea realizada
// function tareaRealizada(element) {
//     element.classList.toggle(check)
//     element.classList.toggle(uncheck)
//     element.parentNode.querySelector('.text').classList.toggle(lineThrough)
//     LIST[element.id].realizado= LIST[element.realizado] ? false : true
//     }

// function tareaEliminada(element) {
//     element.parentNode.parentNode.removeChild(element.parentNode)
//     LIST[element.id].eliminado= true
// }




// botonEnter.addEventListener('click', () => {
//     const tarea = input.value;
//     if (tarea) {
//         agregarTarea(tarea, id, false, false)
//         LIST.push({
//             nombre: tarea,
//             id: id,
//             realizado: false,
//             eliminado:false
//         })
//     }
//     input.value = ''
//     id++
// })
    
// document.addEventListener('keyup', (e) => {
//     if (e.key == "Enter") {
//         const tarea = input.value;
//         if (tarea) {
//             agregarTarea(tarea, id,false,false)
//             LIST.push({
//             nombre: tarea,
//             id: id,
//             realizado: false,
//             eliminado:false
//         })
//         }
//         input.value = ''
//          id++
        
        
//     }
// })

// lista.addEventListener('click', (e) => {
//     const element = e.target;
//     const elementData = element.attributes.data.value;
   
//     if (elementData === 'realizado') {
//         tareaRealizada(element);
//     }
//     else if (elementData === 'eliminado') {
//         tareaEliminada(element);
        
//     }
// })