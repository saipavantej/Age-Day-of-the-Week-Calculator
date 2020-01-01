const displayAgeElement = document.getElementById("displayAge");
const displayDayElement = document.getElementById("displayDay");
const inputYearElement = document.getElementById("inputYear");
const inputMonthElement = document.getElementById("inputMonth");
const inputDateElement = document.getElementById("inputDate");
const form = document.getElementById("getAgeForm");
form.addEventListener("submit", e =>{
    e.preventDefault();
     const inputYear = inputYearElement.value;
     const inputMonth = inputMonthElement.value -1;
     const inputDate =  inputDateElement.value;
     const date = new Date();
    if(inputYear <= date.getFullYear() && inputMonth >=0  && inputDate >=1)
    {
     const age = calculateAge(inputYear);
     const day = calculateDay(inputYear,inputMonth,inputDate);
    
     displayAgeElement.innerText =`${age}`;
     displayDayElement.innerText = day;
    }
    else
    {
        alert("Please valid input Fields and Try Again");
    }
})

function calculateAge(year){

    const getDate = new Date();
    const age_call = getDate.getFullYear()-year;
    return age_call;
    
}
 function calculateDay(year,month,day)
 {
     const thatDate = new Date(year,month,day);
     const day_call = thatDate.getDay();
     const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"]
     return days[day_call];
 }