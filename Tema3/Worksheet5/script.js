

class Book {
    constructor(title, genre, author, read, readdate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate = null;
    }

    isRead() {
        this.read = true;
        this.readDate = new Date();
    }

    getTitle(){
        return this.title;
    }

    getGenre(){
        return this.genre;
    }

    getAuthor(){
        return this.author;
    }

    getRead(){
        return this.read;
    }

    getreadDate(){
        return this.readDate;
    }
}


class Booklist{
    constructor() {
        this.booksRead = 0;
        this.booksNoRead = 0;
        this.arraylibros=[];
    }

    numBooksNoRead(){
        return this.arraylibros.length - this.booksRead;
    }

    numBooksRead(){
        return this.booksRead;
    }

    add(libro){
        this.arraylibros.push(libro);
    }

    finishCurrentBook(){
        this.arraylibros[arraylibros.length-1].isRead();
        this.booksRead++;
    }
}

//Instanciamos 2 libros y una lista de libros
var libro = new Book("Garbancito","Infantil","Olalla González");
var libro2 = new Book("Harry Potter: La piedra Filosofal","Literatura fantástica","J. K. Rowling");
var listalibros = new Booklist();

//Llamamos al método isRead() del objeto
libro.isRead();

//Añadimos los libros a la lista
listalibros.add(libro);
listalibros.add(libro2);

//Mostramos por pantalla el contenido de la lista de libros
for(let i=0;i<listalibros.arraylibros.length;i++){
    document.write("<strong>Título:</strong> "+listalibros.arraylibros[i].getTitle()+"<br>");
    document.write("<strong>Género:</strong> "+listalibros.arraylibros[i].getGenre()+"<br>");
    document.write("<strong>Autor:</strong> "+listalibros.arraylibros[i].getAuthor()+"<br>");
    document.write("<strong>Leído:</strong> "+listalibros.arraylibros[i].getRead()+"<br><br>");
}

/*The Game
class Game{
  constructor(nomplayer1,nomplayer2){
    this.player1 = new Player(nomplayer1);
    this.player2 = new Player(nomplayer2);
  }

  play(){
    this.player1.elegir.eleccionAleatoria();
    this.player2.elegir.eleccionAleatoria();
    switch (this.player1.elegir.getValor()) {
      case 1:
          if(this.player2.elegir.getValor()==1){
            document.write("Han empatado<br>");
            document.write(this.player1.getNombre()+" ha sacado : "+this.player1.elegir.getelegido()+" y "+this.player2.getNombre()+" ha sacado : "+this.player2.elegir.getelegido()+"<br>");
          }else if( this.player2.elegir.getValor()==2){
            document.write("Gana "+this.player2.getNombre()+"<br>");
            document.write(this.player1.getNombre()+" ha sacado : "+this.player1.elegir.getelegido()+" y "+this.player2.getNombre()+" ha sacado : "+this.player2.elegir.getelegido()+"<br>");
              this.player2.gana();
            }else{
              document.write("Gana "+this.player1.getNombre()+"<br>");
              document.write(this.player1.getNombre()+" ha sacado : "+this.player1.elegir.getelegido()+" y "+this.player2.getNombre()+" ha sacado : "+this.player2.elegir.getelegido()+"<br>");
                this.player1.gana();
            }
      break;
      case 2:
        if(this.player2.elegir.getValor()==2){
          document.write("Han empatado<br>");
          document.write(this.player1.getNombre()+" ha sacado : "+this.player1.elegir.getelegido()+" y "+this.player2.getNombre()+" ha sacado : "+this.player2.elegir.getelegido()+"<br>");
        }else if( this.player2.elegir.getValor()==1){
          document.write("Gana "+this.player1.getNombre()+"<br>");
          document.write(this.player1.getNombre()+" ha sacado : "+this.player1.elegir.getelegido()+" y "+this.player2.getNombre()+" ha sacado : "+this.player2.elegir.getelegido()+"<br>");
            this.player1.gana();
          }else{
            document.write("Gana "+this.player2.getNombre()+"<br>");
            document.write(this.player1.getNombre()+" ha sacado : "+this.player1.elegir.getelegido()+" y "+this.player2.getNombre()+" ha sacado : "+this.player2.elegir.getelegido()+"<br>");
              this.player2.gana();
          }
      break;
      case 3:
        if(this.player2.elegir.getValor()==3){
          document.write("Han empatado");
          document.write(this.player1.getNombre()+" ha sacado : "+this.player1.elegir.getelegido()+" y "+this.player2.getNombre()+" ha sacado : "+this.player2.elegir.getelegido()+"<br>");
        }else if( this.player2.elegir.getValor()==1){
          document.write("Gana "+this.player2.getNombre()+"<br>");
          document.write(this.player1.getNombre()+" ha sacado : "+this.player1.elegir.getelegido()+" y "+this.player2.getNombre()+" ha sacado : "+this.player2.elegir.getelegido()+"<br>");
            this.player2.gana();
          }else{
            document.write("Gana "+this.player1.getNombre()+"<br>");
            document.write(this.player1.getNombre()+" ha sacado : "+this.player1.elegir.getelegido()+" y "+this.player2.getNombre()+" ha sacado : "+this.player2.elegir.getelegido()+"<br>");
              this.player1.gana();
          }
      break;

    }
  }
}

class Player{
  constructor(nombre){
    this.nombre=nombre;
    this.win=0;
    this.lose=0;
    this.elegir = new Eleccion();
  }
  gana(){
    this.win =this.win+1;
  }
  pierde(){
    this.lose =this.lose +1;
  }
  getNombre(){
    return this.nombre;
  }
  getGanadas(){
    return this.win;
  }
  getPerdidas(){
    return this.lose;
  }
}

class Eleccion{
  constructor(){
    this.valor=0;
    this.eleccion="";
  }
  getValor(){
    return this.valor;
  }
  getelegido(){
    return this.eleccion;
  }


    eleccionAleatoria(){
      var num= Math.round(Math.random()*(3-1)+1);
      this.valor=num;
      switch (num) {
        case 1:
            this.eleccion="Piedra";
          break;
          case 2:
            this.eleccion="Papel";
            break;
          case 3:
          this.eleccion="Tijeras";
          break;
      }
    }
  }


var ele = new Eleccion();
ele.eleccionAleatoria();

var juego = new Game("Jesus","Annea");

for(var i=0;i<5;i++){
  juego.play();
}
document.write("El jugador : "+juego.player1.getNombre()+" ha ganado "+juego.player1.getGanadas()+" veces <br>");
document.write("El jugador : "+juego.player2.getNombre()+" ha ganado "+juego.player2.getGanadas()+" veces <br>");
*/
