const btn = document.querySelectorAll('button')
const container = document.getElementById('container-tp')

var div = document.createElement('div')
div.className='create'
container.appendChild(div)

function create(color){
  
    var p = document.createElement('p');
    p.innerHTML='varie'
    p.classList='input '+color

    div.appendChild(p)

    setTimeout(()=>{p.remove()}, 1000)
}

btn.forEach((button,i) => {
    button.addEventListener('click',function(){
        create("click"+(i+1))          
    })
})
