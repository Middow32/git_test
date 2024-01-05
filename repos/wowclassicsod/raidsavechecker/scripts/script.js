window.onload = function date() {
    //var currentdate = new Date();
    var currentdate = new Date();    
    //currentdate.setHours(3,27,30,0); // for testing. delete later
    document.getElementById("resetdate").innerHTML = currentdate;
    console.log("Current Date: " + currentdate);
    
    var newdate = new Date();
    newdate.setDate(newdate.getDate() +  3);

    console.log(newdate);

    var ms = newdate - currentdate;
    console.log("New time: " + ms);

    var days = Math.floor(ms / 86400000);
    console.log("Days: " + days);

    var hours = Math.floor((ms / 3600000) % 24);
    console.log("Hours: " + hours);

    var minutes = Math.floor((ms / 60000) % 60)
    console.log("Minutes: " + minutes);

    var seconds = Math.floor((ms / 1000)% 60);
    console.log("Seconds: " + seconds);

    var countdown = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds.";
    document.getElementById("time").innerHTML = countdown;
}

