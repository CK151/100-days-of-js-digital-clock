let today = new Date();

function getDate(d) {
    let months = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "Sept",
        "October",
        "November",
        "Dec"
    ];

    let days = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thur",
        "Fri",
        "Sat"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day}, ${date}, ${month}, ${year}`;
}


const date = document.querySelector(".date");

date.innerHTML = getDate(today);


//get time 

function showTime() {
    let date = new Date();

    let hour = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    

    let session = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        session = "PM"
    }

    //Append 0 to single digit

    hour = hour < 10 ? "0" + hour:hour;
    mins = mins < 10 ? "0" + mins:mins;
    secs = secs < 10 ? "0" + secs:secs;

    let time = `${hour}, ${mins}, ${secs} , ${session}`;
    document.querySelector(".time").innerHTML = time;

}

setInterval(showTime, 1000);