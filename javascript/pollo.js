class Pollo {
  constructor() {
    //aqui las propiedades de nuestro pollo
    this.x = 100; //posicion
    this.y = canvas.height / 2;

    this.width = 50;
    this.height = 50; //tamaño

    this.img = new Image(); //imagen
    this.img.src = "./images/flappy.png";

    this.gravitySpeed = 2;
    this.jumpSpeed = 20;  //podria serr gravitySpeed * 2
  }

  // los methodos (acciones de nuestro pollo)

  drawPollo = () => {
    //para dibujarlo

    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  };

    // necesitamos movimiento

  polloGravity = () => {
    //cambia su posicion el eje Y. y luego hay que llamar para que Fx
    this.y = this.y + (this.gravitySpeed);
  }

  polloJump = () => {
    this.y = this.y - (this.jumpSpeed)*2     //cuando hagamos click, que el pollo suba
    }
}
