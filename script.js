const displayAgeElement = document.getElementById("displayAge");
const displayDayElement = document.getElementById("displayDay");
const inputYearElement = document.getElementById("inputYear");
const inputMonthElement = document.getElementById("inputMonth");
const inputDateElement = document.getElementById("inputDate");
const form = document.getElementById("getAgeForm");
form.addEventListener("submit", e =>{
    e.preventDefault();
     const inputYear = inputYearElement.value;
     const inputMonth = inputMonthElement.value;
     const inputDate =  inputDateElement.value;
    if(inputYear >=1  && inputMonth >=1  && inputDate >=1 )
    {
     const age = calculateAge(inputYear);
    //  const day = calculateDay(inputYear,inputMonth,inputDate);
    
     displayAgeElement.innerText = age;
    //  displayDayElement.innerText = day;
    }
    else
    {
        alert("Please enter all the input Fields and Try Again");
    }
})

function calculateAge(year){
    if(year>0)
    {
    const getDate = new Date();
    const age_call = getDate.getFullYear()-year;
    return age_call;
    }
}