//Iniciador Varibles
let tarjeta1 = null;
let tarjeta2 = null;
let tarjetasDestapadas = 0;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
tiemporegerisvo= null;
let timerinicial= timer;
//Apuntando a documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('tiempo');
//Generacion de numeros aleatorios
let numeros =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random() -0.5});
console.log(numeros);

//Fuciones

function contarTiempo(){
    tiemporegerisvo=setInterval(()=>{ mostrarTiempo.innerHTML = `Tiempo: ${timer}`;timer--; if (timer<0) {
    clearInterval(tiemporegerisvo);
    bloqueartarjetas(numeros);   
    }},1000 );
    
}

//Funcion Bloquear tarjetas

function bloqueartarjetas() {
    for( let i = 0;i<=15;i++){
        let tarjetabloqueada = document.getElementById(i);
        tarjetabloqueada.innerHTML = `<img src="./img/${numeros[i]}.png" alt="">`;
        tarjetabloqueada.disable = true;
    }
}

//Funcion Principal
function destapar(id){

    if (temporizador == false) {
        contarTiempo();
        temporizador = true;
    }
   tarjetasDestapadas++;
   console.log(tarjetasDestapadas);
   if(tarjetasDestapadas == 1){
       //Mostrar Numero
       tarjeta1= document.getElementById(id);
       primerResultado = numeros[id];
       tarjeta1.innerHTML = `<img src="./img/${primerResultado}.png" alt="">`;
       //Deshabilitar primer boton
       tarjeta1.disable =true;
   }else if(tarjetasDestapadas ==2){
   //Mostrar segundo numero
       tarjeta2 = document.getElementById(id);
       segundoResultado = numeros[id];
       tarjeta2.innerHTML =`<img src="./img/${segundoResultado}.png" alt="">`;
       //Deshabilitar segundo boton
       tarjeta2.disable =true;
       //Incrementar movimientos
       movimientos++;
       mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
   
       if (primerResultado == segundoResultado) {
           //Resetar tarjetas desatapas
           tarjetasDestapadas = 0;
           //Aciertos
           aciertos++;
           mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
        
           if (aciertos == 8) {
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
                mostrarTiempo.innerHTML = `Ganaste tardaste ${timerinicial-timer}`;

           }
       }else{
        //Mostrar valores
        setTimeout(()=>{tarjeta1.innerHTML = ' ';tarjeta2.innerHTML = ' ';tarjeta1.disable = false;tarjeta2.disable = false;tarjetasDestapadas = 0;},800);

       }
   }
   }