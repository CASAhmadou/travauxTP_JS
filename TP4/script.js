// console.log(moment('2023'))
const container = document.getElementById('container');
const days=document.getElementById('jours');
const hour=document.getElementById('heures');
const minute=document.getElementById('minutes');
const seconde=document.getElementById('second');

//UPDATE CONTDOWNTIME
function updateCountdowntime(){
    const currentYear =moment();
    const newYear =moment('20220915', 'YYYYMMDD');
    const diff = newYear - currentYear;

    const daysNumbers = newYear.diff(currentYear, 'day');

    const my_Object_duration = moment.duration(diff, 'milliseconds');
    
    console.log(my_Object_duration);
    days.innerHTML = daysNumbers;
    hour.innerHTML = my_Object_duration._data.hours;
    minute.innerHTML = my_Object_duration._data.minutes;
    seconde.innerHTML = my_Object_duration._data.seconds;
}

// setInterval(() => {
//     updateCountdowntime();
// }, 1000);

setInterval(updateCountdowntime, 1000);




















/* 
const days=document.querySelectorAll('days');
const hour=document.querySelectorAll('hours');
const minute=document.querySelectorAll('minutes');
const seconde=document.querySelectorAll('second');


const currentYear = new Date().getFullYear;

const newYear = new Date(`March 23 ${currentYear + 1} 00:00:00`);

//UPDATE CONTDOWNTIME

function updateCountdowntime(){
    const currentYear = new Date();
    const diff = newYear - currentYear;

    const d = Math.floor(diff /1000/60/60/24);
    const hr = Math.floor(diff /1000/60/60) % 24;
    const min = Math.floor(diff /1000/60) % 60;
    const s = Math.floor(diff /1000) % 60;

    days.innerHTML = d;
    hour.innerHTML = hr<10 ? '0'+ hr: hr;
    minute.innerHTML = min<10 ? '0'+ min: min;
    seconde.innerHTML = s<10 ? '0'+ s: s;

}

setInterval(updateCountdowntime, 1000); */





// const compteur = () => {
//     const coumpteurDate = new Date("Septembre 15, 2022 00:00:00").getTime();
//     const maintenant = new Date().getTime();
//     const dif = coumpteurDate - maintenant;

//     const seconde = 1000;
//     const minute = seconde * 60;
//     const heure = minute * 60;
//     const jour = heure * 24;

//     const textjour = Math.floor(dif / jour);
//     const textheure = Math.floor((dif % jour) / heure);
//     const textminute = Math.floor((dif % heure) / minute);
//     const textseconde = Math.floor((dif % minute) / seconde);

//     document.querySelector(".jour").innerText = textjour;
//     document.querySelector(".heure").innerText = textheure;
//     document.querySelector(".minute").innerText = textminute;
//     document.querySelector(".seconde").innerText = textseconde;

// };
// setInterval(compteur, 1000);