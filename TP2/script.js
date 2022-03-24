const menu = document.getElementById('menu');
const toggle = document.getElementById('toggle');
const search = document.querySelector('.search')

var menus=[
    {
        "icona":'nav-icon fas fa-tachometer-alt',
        "root":'root',
        "text":'Dashboard',
        "iconb":'fas fa-angle-left right',
        "min":'min',
        "sous-menus":[]
    },
    {
        "icona":'nav-icon fas fa-th',
        "root":'root',
        "text":'Widgets',
        "iconb":'fas fa-angle-left right',
        "min":'min',
        "sous-menus":[]
    },
    {
        "icona":'nav-icon fas fa-copy',
        "root":'root',
        "text":'Layout Options',
        "iconb":'fas fa-angle-left right',
        "min":'min',
        "sous-menus":[
            {
                "icona":'fa-solid fa-circle',
                "root":'root',
                "text":'ChartJS',
                "min":'min'
            },
            {
                "icona":'fa-solid fa-circle',
                "root":'root',
                "text":'Flot',
                "min":'min'
            },
        ]
    },
    {
        "icona":'nav-icon fas fa-chart-pie',
        "root":'root',
        "text":'Charts',
        "iconb":'fas fa-angle-left right',
        "min":'min',
        "sous-menus":[
            {
                "icona":'fa-solid fa-circle',
                "root":'root',
                "text":'ChartJS',
                "min":'min'
            },
            {
                "icona":'fa-solid fa-circle',
                "root":'root',
                "text":'Flot',
                "min":'min'
            },
            {
                "icona":'fa-solid fa-circle',
                "root":'root',
                "text":'Inline',
                "min":'min'
            },
            {
                "icona":'fa-solid fa-circle',
                "root":'root',
                "text":'uPlot',
                "min":'min'
            },
        ]
    },   
    {
        "icona":'nav-icon fas fa-tree',
        "root":'root',
        "text":'UI Elements',
        "iconb":'fas fa-angle-left right',
        "min":'min',
        "sous-menus":[]
    },
    {
        "icona":'fa-solid fa-pen-to-square',
        "root":'root',
        "text":'Forms',
        "iconb":'fas fa-angle-left right',
        "min":'min',
        "sous-menus":[]
    },
    {
        "icona":'fa-solid fa-table',
        "root":'root',
        "text":'Tables',
        "iconb":'fas fa-angle-left right',
        "min":'min',
        "sous-menus":[]
    },
    {
        "root":'root',
        "text":'Exemples',
        "min":'min',
        "sous-menus":[]
    }
]

const ul= document.createElement('ul')
 
menus.forEach(element => {
    var li = document.createElement('li')
    var a = document.createElement('a')
    var ia = document.createElement('i')
    var spana = document.createElement('span')
    var spanb = document.createElement('span')
    var ib = document.createElement('i')

    ia.classList=element[`icona`]
    spana.classList=element[`root`]
    spana.innerHTML=element[`text`]
    spanb.classList=element[`min`]
    spanb.innerHTML=element[`text`]
    ib.classList=element[`iconb`]+" "+[`min`]

    a.appendChild(ia)
    a.appendChild(spana)
    a.appendChild(spanb)
    a.appendChild(ib)
    li.appendChild(a)
    ul.appendChild(li)

    const sous = element[`sous-menus`]
    
    if(sous.length!=0){
        
        // console.log(element[`sous-menus`])
        const uls= document.createElement('ul')
        sous.forEach(element => {
            var lis = document.createElement('li')
            var as = document.createElement('a')
            var ias = document.createElement('i')
            var spanas = document.createElement('span')
            var spanbs = document.createElement('span')
            // var ibs = document.createElement('i')
       

            
            ias.classList=element[`icona`]
            spanas.classList=element[`root`]
            spanas.innerHTML=element[`text`]
            spanbs.classList=element[`min`]
            spanbs.innerHTML=element[`text`]
            // ibs.classList=element[`iconb`]+" "+[`min`]

            li.appendChild(uls)
            uls.appendChild(lis)
            lis.appendChild(as)
            as.appendChild(ias)
            as.appendChild(spanas)
            as.appendChild(spanbs)
            // as.appendChild(ibs)       
        })  
        
        li.addEventListener('click',()=>{
            uls.classList.toggle('cache')
            // iconb.style.transform = "rotate(-90deg)";
        })
    }
// a.innerHTML='<i class="nav-icon fas "'+element[`icona`]+'">
    //</i><span class="root">Dashboard</span><span class="min">
    //Dashboard</span><i class="fas fa-angle-left right min"></i>'
});
menu.appendChild(ul)

toggle.addEventListener('click',()=>menu.classList.toggle('active'))


// ul.onclick= function(){
//     menu.classList.add('active')
// }
