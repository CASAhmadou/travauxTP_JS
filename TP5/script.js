const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
 
const affiche = document.getElementById('affiche')
const form = document.getElementById('form')
const search = document.getElementById('search')
var i=1

chargeFilm(APIURL);

function chargeFilm(url) {
    fetch(url).then(res => res.json()).then(data => {
        //   console.log(data.results)
        showMovies(data.results)
    })
}

function showMovies(dataa){
    // console.log(dataa)
    affiche.innerHTML=''
    dataa.forEach(movie => {
        const{title,poster_path,overview,vote_average}=movie
        var films = document.createElement('div')
        films.classList.add('film')
        const mov = document.createElement('div')
        mov.classList='movie'
        mov.innerHTML=`<img src="${IMGPATH+poster_path}" alt="${title}">`
        const movieInfo = document.createElement('div')
        movieInfo.classList='movie-info'
        const h = document.createElement('h3')
        h.innerHTML=`${title}`
        const span = document.createElement('span')
        span.classList=`${getcolor(vote_average)}`
        span.innerHTML=`${vote_average}`
        const text = document.createElement('div')
        text.classList='text'
        text.innerHTML=`${overview}`

        movieInfo.appendChild(h)
        movieInfo.appendChild(span)
        films.appendChild(mov)
        films.appendChild(movieInfo)
        films.appendChild(text)
        affiche.appendChild(films)
    });
}
function getcolor(vote){
    if (vote>=8) {
        return 'green'
    }else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }
}
form.addEventListener('input',(e)=>{
    e.preventDefault()
     
    const valid=search.value
    if (valid) {
        chargeFilm(SEARCHAPI+valid)
    }else{
        chargeFilm(APIURL);
    }

})

window.onscroll=function(){
    if((document.body.scrollHeight)<=(window.innerHeight+window.scrollY)) {
        i++
        // console.log(i)
        chargeFilm(APIURL+i)
        // console.log(chargeFilm(APIURL))
    }   
}