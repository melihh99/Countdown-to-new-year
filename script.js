const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const newYears = '1 Jan 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const Totalseconds = (newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(Totalseconds / 3600 / 24);
    const hours = Math.floor(Totalseconds / 3600) % 24;
    const mins = Math.floor(Totalseconds / 60) % 60;
    const secs = Math.floor(Totalseconds % 60);

daysEl.innerHTML = days; 
hoursEl.innerHTML = hours; 
minsEl.innerHTML = mins; 
secsEl.innerHTML = secs; 

}

countdown(); 

setInterval(countdown,1000);








