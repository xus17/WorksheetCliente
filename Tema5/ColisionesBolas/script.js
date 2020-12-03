var bolas;
  class Bola {

    constructor(radio, color, x, y){
      this.r = radio;
      this.color = color;
      this.x = x;
      this.y = y;
      this.velX=0;
      this.velY=0;

      this.circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      this.circ.setAttributeNS(null,"cx",this.x);
      this.circ.setAttributeNS(null,"cy",this.y);
      this.circ.setAttributeNS(null,"r",this.r);
      this.circ.setAttributeNS(null,"fill",this.color);
      this.velX = Math.round(Math.random()*(10-1)+1);
      this.velY = Math.round(Math.random()* (10-1)+1);
      document.getElementsByTagName("svg")[0].appendChild(this.circ);

    }

    dibuja(){

      let radio = parseInt(this.circ.getAttribute("r"));
      let posXact = parseInt(this.circ.getAttribute("cx"))+ parseInt(this.velX);
      let posYact = parseInt(this.circ.getAttribute("cy"))+ parseInt(this.velY);
      let tamanoSvg = document.getElementById("svg").getBoundingClientRect();


      this.circ.setAttribute("cx",posXact);
      this.circ.setAttribute("cy",posYact);


      this.x += this.velX;
      this.y += this.velY;


      this.circ.setAttribute("fill",this.color);

    if(posXact<=0+this.r ||posXact >= tamanoSvg.width-this.r){
      this.velX *=-1;
    }

    if(posYact<=0+this.r || posYact >= tamanoSvg.height-this.r){
      this.velY*=-1;
    }
    }

  }

  window.onload = () =>{
    var x = 10;
    bolas = [];
    for(i=1;i<11;i++){
      x +=30;
      bolas.push(new Bola(20,"red",x,20,19,3));
    }
    setInterval(animaTodasBolas,30);


  }
  function animaTodasBolas(){
    for(let i=0;i<bolas.length;i++){
      bolas[i].dibuja();
    }
    colision(bolas);
  }

  function colision(bolas){
    for(let i=0;i<bolas.length;i++){
      for(let j=0;j<bolas.length;j++){
        if(i!=j){ chocarBolas(bolas[i],bolas[j]); }
      }
    }
  }

    function chocarBolas(a,b){
      if (Math.sqrt(((a.x-b.x)**2)+((a.y-b.y)**2)) <= a.r + b.r) {

        let cambiox = 0;
        let cambioy = 0;

        cambiox = a.velX;
        a.velX = b.velX;
        b.velX = cambiox;
        cambioy = a.velY;
        a.velY = b.velY;
        b.velY = cambioy;

        a.dibuja();
        b.dibuja();

        }
  }
