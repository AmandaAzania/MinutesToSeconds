function convertToSeconds(hours, minutes){
  
    var perHour = 60;
    var perMin = 60;
    var multiplyHoursAndSec;
    var multiplyHoursAndMin;
    var multiplyMinAndSec;
    var totalSec = document.getElementById("calculate").innerHTML;
    var hours = document.getElementById("hours").value;
    var minutes = +document.getElementById("minutes").value;
  
    multiplyHourAndSec = hours * perHour * perMin;
    multiplyMinAndSec = minutes * perMin;
    totalSec = multiplyHourAndSec + multiplyMinAndSec;
    
    multiplyHoursAndMin = hours * perMin + minutes;
   
    
    document.getElementById("calculate").innerHTML = multiplyHoursAndMin + " minutes, " + totalSec + " seconds";
    
  }
  
  