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
    let artbuscado = prompt ("articulo a buscar:").trim().toLowerCase()
    let resultado = listaart.filter((artnombre)=>artnombre.nombre.toLowerCase().includes(artbuscado))
        if(resultado.length > 0){
            console.table (resultado)
        }
        else
           alert ("no se encontro coincidencia con el articulo buscado: " + artbuscado)

        
    }
/*funcion para agregar articulo*/
function agregarart (){
    let nombre = prompt ("ingrese el nombre el Articulo").toLowerCase()
    let tamano = parseFloat (prompt("ingrese litros que contiene el producto"))
    let precio = prompt("ingre el valor del articulo")
    let cantidad = parseInt (prompt("ingrese la cantidad en existencia"))
    /*validacion de los datos ingresados*/
        if(isNaN(tamano) || isNaN(precio) || isNaN (cantidad) || nombre==" "){
            alert("verifica los datos ingresados alguno de ellos esta mal")
            return
        }
        let articulo = new Articulo (nombre,tamano,precio,cantidad)

    /*Chequeo de la existencia del producto*/
        if(listaart.some((comparaart)=>comparaart.nombre=== Articulo)){
            alert ("el producto ingresao ya esta en la lista")
            return
        }
    listaart.push (articulo)
    console.table(listaart)
}
menu =parseInt(prompt("seleccione una de las opciones:  1 para buscar un articulo o 2 para ingresar un nuevo articulo"))
if(menu > 2){
    alert("el dato ingresado no es uno de los solicitados")       
} 
else
    if(menu === 1){
        buscarart()
    }
    else
        agregarart()


