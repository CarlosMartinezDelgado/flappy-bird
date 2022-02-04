// * GLOBAL VARIABLES

let splashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
// crear el pincel
let ctx = canvas.getContext("2d");
let newGame;



// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {    //desparecer el splash scren y aparecer el canvas
splashScreen.style.display = "none";
canvas.style.display = "flex" // los contenedores son flex

    // ejecutar el juego
    // Cuyando hago click en START crear una clase para luego poder hacer un new let newGame = new Game() y tener la bases ya hechas.
    newGame = new Game()
    //console.log(newGame)
    newGame.gameLoop() //acceder al juego pero cuidado. porque son variabbles que NO tengo acceso, parav eso creamos una vble no asiganrle ningun valor
                        // y va a ser accesible desde cualquier lugar de mi codigo y a esa variable le voy a asignar un NEWGAME
}




// * ADD EVENT LISTENERS

//primero hacer que al hacer click haga lo que queramos

let startButton = document.querySelector("#start-btn")
startButton.addEventListener("click", startGame)

///que el pollito solo suba cuanod hagasmo click dentro del canvas

canvas.addEventListener("click", () => {

    ///como hagio yo para invocar la funcion polloJump???
    newGame.pollo.polloJump()
})

