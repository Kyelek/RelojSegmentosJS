const numeros = document.querySelectorAll(".numero"); //selecciono todos los numeros

const segmentos = Array.from(numeros).map(numero => numero.querySelectorAll("svg"));

//console.log(segmentos[2][6]);

const mapaNumeros=[
	[1,1,1,1,1,0,1], //0
	[0,1,1,0,0,0,0], //1
	[1,1,0,1,1,1,0], //2
	[1,1,1,1,0,1,0], //3
	[0,1,1,0,0,1,1], //4
	[1,0,1,1,0,1,1], //5
	[1,0,1,1,1,1,1], //6
	[1,1,1,0,0,0,0], //7
	[1,1,1,1,1,1,1], //8
	[1,1,1,1,0,1,1]  //9
];

function setNumero(i,valor){ // (i = el lugar "2" <-- (empieza en 0), valor = el numero "3")
    segmentos[i].forEach((segmento, j) =>{
        segmento.children[0].classList.toggle("on", mapaNumeros[valor][j]) //toggle(para añadir una clase, si la tiene la quita y si no la pone)
    });
}

function obtenerHora(){

	const ahora = new Date();
	const horas =getDosnumeros(ahora.getHours().toString());
	const minutos =getDosnumeros(ahora.getMinutes().toString()) ;
	const segundos =getDosnumeros(ahora.getSeconds().toString()) ;
	
	setNumero(0,horas[0]);
	setNumero(1,horas[1]);
	setNumero(2,minutos[0]);
	setNumero(3,minutos[1]);
	setNumero(4,segundos[0]);
	setNumero(5,segundos[1]);

	console.log(horas + ":" + minutos + ":" + segundos );
}

function getDosnumeros(numero){
	if(numero.length === 2) return numero;
	return "0" + numero;
}

setInterval(()=>{
	obtenerHora();

},1000)

obtenerHora(); // Carga rapida







