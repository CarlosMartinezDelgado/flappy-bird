class Game {

    constructor() {   ///el orden no es importante porque es CUANDO las evoquemos si.
//todas nuestras propiedades
        this.bg = new Image //el fondo
        this.bg.src = "./images/bg.png" //imagen que queremos agregar de fondo de una carpeta 
                                        //comprbar que carpeta esta y si hay que ir mas atras, usar doble punto (../)
        this.pollo = new Pollo()   // creamos un nuevo elemento clase POLLO (aqui esta todo el elemento basado en nuesrra clase, entonces en el pto 3, hay que referenciarlo contando con ello)
        this.pipeArr = [new Pipe(0, "./images/obstacle_top.png") ]  //para tener un array con varios elementos en la pantall, tenemos un array que vaya agrgando y cintrolando multiples elementos

        this.pipeSeparation = 300;

        this.isGameOn = true;
        
    }


    spawningPipe = () => {      // para que aparezca el nuevo TUBO

        let lastPipe = this.pipeArr [this.pipeArr.length -1]  //identificar el ultimo TUBO en el Array

        //cuando cruce el TUBO la linea, que cree otro TUBO
        if (lastPipe.x < (canvas.width - this.pipeSeparation)) {   // (canvas.width - 300) CUIDADO en este valor es donde quiero que anada el TUBO

            //agrego un nuevo TUBO
            //console.log("agregando pipe")  ///este chequeo hay que hacerlo en todas las acciones
            let randomY = Math.random() * -100
            let newPipe = new Pipe(randomY,"./images/obstacle_top.png") //hacer el numero de dentro aletorio
            this.pipeArr.push(newPipe)

               //agregar el TUBO de ABAJO
        let randomYDown = randomY +newPipe.height + 200
        let newPipeDown = new Pipe(randomYDown, "./images/obstacle_bottom.png") //para que no aparezca donde el otro, hay que tener 
        this.pipeArr.push(newPipeDown)   //en cuenta la posicion de arriba mas longitud del TUBO de arriba mas una constante,
            
        }
     
                                    
        //los TUBOS estan siendo agregados pero nunca removidos

    } 

    checkPolloPipeCollision = (eachPipeParam) => {
        if (this.pollo.x < eachPipeParam.x + eachPipeParam.width &&
        this.pollo.x + this.pollo.width > eachPipeParam.x &&
        this.pollo.y < eachPipeParam.y + eachPipeParam.height &&
        this.pollo.height + this.pollo.y > eachPipeParam.y) {
        //console.log("Colosion)")      // collision detected!

        /*En este caso debemos terminar el juego.
            1. DETENER EL LOOP --->CREAR UNA NUEVA PROPIEDAD BOLEANA GAME ON*/
        this.isGameOn = false;

          //  2. OCULTAR EL canvas.
        canvas.style.display = "none";

          //  3. GAME OVER Y DARLE AL DISPLAY FLEX.
        gameOverScreen.style.display = "flex"
  

        
        }

    }

drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
}

clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
} 

// . todos nuestros metodos ejecutar el juego es una accion (funciones)
    gameLoop = () => {
        // console.log("el juego ya funciona")
// 1. Lipiar el canvas 
    this.clearCanvas() //Borra el canvas, y lo vuelve a dibujar



//2. Mover los elmentos 

    this.pollo.polloGravity()

    this.pipeArr.forEach( (eachPipe) => {      //usamos el foreach para poder acceder al array.
        eachPipe.pipeMove();

    })

this.spawningPipe()

this.pipeArr.forEach( (eachPipe) => {  //chequear la colision enre TUBO y POLLO
    this.checkPolloPipeCollision(eachPipe)
})

//3.  Dibujar los elementos que tenemos en propiedades
ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height )  //no olvdarse del THIS
this.pollo.drawPollo()

this.pipeArr.forEach( (eachPipe) => {
    eachPipe.drawPipe()         //usamos el foreach para poder acceder al array.

})
//4. La recursion para la animacion
                                        //requestAnimationFrame(gameLoop) NO vale porque 
  if (this.isGameOn) {
    requestAnimationFrame(this.gameLoop)

  }
                                       //trabajamos dentro una clase y para apuntar
                                         // a este metodo de la clase hace falta usar THIS


}
}

// La clase Game va a controlar la controlabilidad dl juego. Y al hacer RESTART creamos una nueva 
//version del juego (game) y de esta manera renueva el game para poder jugar de nuevo