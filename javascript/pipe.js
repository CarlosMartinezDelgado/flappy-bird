class Pipe {

    constructor (posYParam, srcParam) { // cada vez que yo cree un TUBO
        //aqui las propiedades de nuestro tubo
    this.x = canvas.width; //posicion
    this.y = posYParam // cambia dependiendo del tamano que le pongamos

    this.width = 50;
    this.height = 150; //tamaño

    this.img = new Image(); //imagen
    this.img.src = srcParam;

    }



    // los methodos (acciones de nuestro tubo)

  drawPipe = () => {
    //para dibujarlo

    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  };

    // necesitamos movimiento

    pipeMove = () => {
        //cambia su posicion el eje Y. y luego hay que llamar para que Fx
        this.x = this.x - 5;
      }
    
     

}