
function subtotal()
{
var pan = document.getElementById("txtpan").value;

var preciopan = document.getElementById("valpan").value;

var leche= document.getElementById("txtleche").value;


var precioleche = document.getElementById("valleche").value;

var huevo = document.getElementById("txthuevo").value;

var preciohuevo = document.getElementById("valhuevo").value;

subtotal = pan*preciopan + leche*precioleche + huevo*preciohuevo;

subiva1= calculariva(subtotal,19);

document.getElementById("demo").innerHTML = subtotal;

var jabon = document.getElementById("txtjabon").value;


var preciojabon = document.getElementById("valjabon").value;

var shampoo= document.getElementById("txtshampoo").value;


var precioshampoo = document.getElementById("valshampoo").value;

var crema = document.getElementById("txtcrema").value;

var preciocrema = document.getElementById("valcrema").value;

 subtotal2 = jabon*preciojabon + shampoo*precioshampoo + crema*preciocrema;

document.getElementById("demo2").innerHTML = subtotal2;

subiva12= calculariva(subtotal2,19);

document.getElementById("dm2").innerHTML = subiva12;

document.getElementById("dm").innerHTML = subiva1;

total = subiva1 + subiva12 + subtotal + subtotal2;

document.getElementById("total").innerHTML = total;
}


function calculariva(a,b)

{
var iva = (a*b)/100;

return iva;

}