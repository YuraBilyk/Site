

var Everybody = new Array(
    'src/img/work/work-1.png',
    'src/img/work/work-2.png',
    'src/img/work/work-3.png',
    'src/img/work/work-4.png',
    'src/img/work/work-5.png',
    'src/img/work/work-6.png',
    'src/img/work/work-7.png',
    'src/img/work/work-8.png',
    'src/img/work/work-9.png',
    );
    
var Site = new Array(
    'src/img/work/work-2.png',
    'src/img/work/work-3.png',
    'src/img/work/work-5.png',
    'src/img/work/work-9.png',
    );

var Application = new Array(
    'src/img/work/work-1.png',
    'src/img/work/work-4.png',
    'src/img/work/work-8.png',
    );

var Bots = new Array(
    'src/img/work/work-6.png',
    'src/img/work/work-7.png',
    );

function OneButton(){
    var picture = document.getElementById('pictures')
    picture.innerHTML = '';

   for(i=0; i<Everybody.length; i++){
        var elem = document.createElement("img")
        elem.src = Everybody[i];
        elem.className = 'section__pictures__img'
        picture.appendChild(elem);
   }
}

function TwoButton(){
    var picture = document.getElementById('pictures')
    picture.innerHTML = '';

   for(i=0; i<Site.length; i++){
        var elem = document.createElement("img")
        elem.src = Site[i];
        elem.className = 'section__pictures__img'
        picture.appendChild(elem);
   }
}

function ThreeButton(){
    var picture = document.getElementById('pictures')
    picture.innerHTML = '';

   for(i=0; i<Application.length; i++){
        var elem = document.createElement("img")
        elem.src = Application[i];
        elem.className = 'section__pictures__img'
        picture.appendChild(elem);
   }
}

function FourButton(){
    var picture = document.getElementById('pictures')
    picture.innerHTML = '';

   for(i=0; i<Bots.length; i++){
        var elem = document.createElement("img")
        elem.src = Bots[i];
        elem.className = 'section__pictures__img'
        picture.appendChild(elem);
   }
}