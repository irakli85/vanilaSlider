let mainimage = document.querySelector('img');
let images = ['./1.jpg', './2.jpg', './3.jpg', './4.jpg'];
let num = 0;

function next(){
    num++;
    if( num >= images.length){
        num = 0;
        mainimage.src = images[num];
    }else{
        mainimage.src = images[num];
    }
};

function back(){
    num--;
    if( num < 0){
        num = images.length - 1;
        mainimage.src = images[num];
    }else{
        mainimage.src = images[num];
    }
};

setInterval(next, 1000);