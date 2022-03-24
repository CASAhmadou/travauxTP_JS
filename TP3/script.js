const container=document.getElementById('containerImage');
const btn = document.querySelectorAll("button")

// const section = document.getElementById('section')
var time = 3000

const img ="../Images/"

let images=[`${img}`+'aigle.jpg',`${img}`+'dev.jpg',`${img}`+'fo.jpg',`${img}`+'SonatelAcademy.jpg' ]
let photo=document.createElement('img');
let nbr=images.length;
var i=0;
    
    
     function change(i){ 
         
        photo.src=images[i]; 
        container.appendChild(photo); 
        
        setTimeout(() => { 
            container.removeChild(photo);             
            if(i==nbr-1){
                change(0)
            } else {
                change(++i);
            } 
        },
            time);
       }
        change(0);


btn.forEach((button,i) => {
    button.onclick=function(){
         
        if (button.getAttribute("data-carousel-button")=="precedent") {
            i=i>0 ? i-1 : 0;    
        }else{
            i=i<nbr-1 ? i+1 : 0;
            // alert('ok')
        }
        photo.src=images[i]
    }
});















// const offset = button.dataset.data-carousel-button === "precedent" ? 1 : -1
// console.log(offset)

//    const slides = button.closest("[data-carousel]").querySelector("[data-pictures]")

// slides.children[newIndex].dataset.active = true
// delete activeSlide.dataset.active
// console.log('newIndex')       




















//         var img = document.createElement('img')

// // var i =0
// var time = 3000

//          function change(){
// img.src = images[i]
//     if (i<nbr) {
//         i++
//     }else{
//         i=0
//     }
//     container.appendChild(img);
//        setTimeout("change()",time) 
// }
     
    



// var img = document.createElement('img')

// var i =0
// var time = 3000

// var images =[
//     "image1" = 'fo.jpg',
//     "image2" = 'aigle.jpg',
//     "image3" = 'dev.jpg'
// ]



// window.onload = change



