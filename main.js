alert ("Bienvenidos a Cerveceria Baum")

let menu

/*Funcion costrctora de articulos*/
const Articulo = function (nombre,tamano,precio,cantidad){
    this.nombre= nombre
    this.tamano = tamano
    this.precio = precio
    this.cantidad = cantidad 
}

/*Creacion Manul de Articulos individuales*/
let articulo1 = new Articulo ("blonde",473,2250,18000)
let articulo2 = new Articulo ("scottish",473,2250,22000)
let articulo3 = new Articulo ("porter",473,2350,16000)
let articulo4 = new Articulo ("honey",473,2350,26000) 
let articulo5 = new Articulo ("gladstone",473,2350,13000)
let articulo6 = new Articulo ("old ale", 473,2350,8000)
let articulo7 = new Articulo ("fuck ipa", 473,2550,14000)
let articulo8 = new Articulo ("california",473,2550,21000)

/*Creacion manual del array*/
let listaart = [articulo1,articulo2,articulo3,articulo4,articulo5,articulo6,articulo7,articulo8]

/*funcion para buscar articulos */
function buscarart(){
    const body = document.querySelector("body")
    const input = document.getElementById("buscararticulo").value
    let artbuscado = input.trim().toLowerCase()
    let resultado = listaart.filter((artnombre)=>artnombre.nombre.toLowerCase().includes(artbuscado))
        if(resultado.length > 0){
            const contenedor = document.createElement("div")
            resultado.forEach((artnombre)=>{
                const tarjeta = document.createElement("div")
                /*para el nombre del articulo*/
                const nombre =document.createElement("h3")
                nombre.textContent= artnombre.nombre
                tarjeta.appendChild(nombre)
                /*para el tamaño */
                const tamano =document.createElement("p")
                tamano.textContent=artnombre.tamano
                tarjeta.appendChild(tamano)
                /*para el precio */
                const precio =document.createElement("p")
                precio.textContent=artnombre.precio
                tarjeta.appendChild(precio)
                /*para la cantidad */
                const cantidad =document.createElement("p")
                cantidad.textContent=artnombre.cantidad
                tarjeta.appendChild(cantidad)
                /*para crear tarjeta conb todos los datos */
                contenedor.appendChild(tarjeta)
            })
        body.appendChild(contenedor)  
        }else{
           alert ("no se encontro coincidencia con el articulo buscado: " + artbuscado)}  
      
}


/*boton buscar */
let btnBuscar =document.getElementById("buscar")
btnBuscar.addEventListener("click",buscarart)

/*funcion para agregar articulo*/
function agregarart (){
    const formulario = document.createElement("formulario")
    formulario.innerHTML= `
        <label formulario = "nombre-input">Nombre:</label>
        <input id= "nombre-input" type="text"required>

        <label formulario = "tamano-input">Tamano:</label>
        <input id= "tamano-input" type "number" step=0.01 required>

        <label formulario = "precio-input"> Precio: </label>
        <input id= "precio-input" type "number" step="1" requeried>

        <label formulario = cantidad-input">Cantidad: <*/label>
        <input id= "cantidad-input" type "number" step="1.01 required>

        <button type = "submit"> Agregar articulo </button>
    `
    formulario.addEventListener("submit",function(event){
        event.preventDefault()
        const nombreInput =document.getElementById("nombre-input").value.trim()
        const tamanoInput =parsentfloat(document.getElementById("tamano-input").value.trim())
        const precioInput =parsentfloat(document.getElementById("precio-input").value.trim())
        const cantidadInput = parseInt( document.getElementById("cantidad-input").value.trim())

        /*inicio del if de validacion*/
        if(isNaN(tamanoInput)|| isNaN(precioInput)||isNaN(cantidadInput)|| nombreInput==""){
            alert("verifica los datos ingresados")
            return;

        }


        cosnt articulonew = new Articulo (nombreInput,tamanoInput,precioInput,cantidadInput)

        if(listaart.some((comparaart)=>comparaart.nombre=== articulonew.nombre)){
            alert ("el producto ingresao ya esta en la lista")
            return
        }
        listaart.push (articulonew)


    })

}
/* boton agregar */
let btnagregar =document.getElementById("agregar")
btnagregar.addEventListener("click",agregarart)