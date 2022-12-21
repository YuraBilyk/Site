var pictures = document.getElementById('pictures')

var elem = document.createElement("img")

var Everybody = new Array(
    '../img/work/work-1.png',
    'work-2.png',
    'work-3.png',
    'work-4.png',
    'work-5.png',
    'work-6.png',
    'work-7.png',
    'work-8.png',
    'work-9.png',
    );
elem.src = Everybody[1];
    
function OneButton(){
    document.pictures.append(elem);


    //document.getElementById('pictures').src=pics[cur];
   // for(i=1; i<Everybody.length; i++){
        //img.innerHTML = `<img src="${Everybody[i]}">`
    //img.innerHTML = '<img src="src/img/work/work-1.png">'
    //pictures.insertBefore(img, 0)
    //}
}