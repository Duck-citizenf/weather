// JavaScript source code
let a = 0;
window.onload = function() {
    document.querySelector('.gallery').addEventListener('swiped-left', function(e) {
        console.log(e.type);
        console.log(e.target);
        console.log(e.detail);
        if (a==0){
            document.getElementById("o1").classList.remove('gallery', 'gallery-2');
            document.getElementById("o1").classList.add('gallery-2');
            document.getElementById("o2").classList.remove('text-2xl', 'leading-5');
            document.getElementById("o3").classList.add('text-2xl', 'leading-5'); 
            a=1;
        }
        console.log(a);
    });

    document.querySelector('.gallery').addEventListener('swiped-right', function(e) {
        console.log(e.type);
        console.log(e.target);
        console.log(e.detail);
        if (a==1){
            document.getElementById("o1").classList.remove('gallery', 'gallery-2');
            document.getElementById("o1").classList.add('gallery');
            document.getElementById("o3").classList.remove('text-2xl', 'leading-5');
            document.getElementById("o2").classList.add('text-2xl', 'leading-5'); 
            a=0;
        }
        console.log(a);
    });
}