function attachEventsListeners() {
    let ratios = {
       minutes: 1440,
       seconds: 86400
   };
   
   function convertValue(value, from) {
       const inDays = value / ratios[from];
       return {
           minutes: inDays * ratios.minutes,
           seconds: inDays * ratios.seconds
       };
   }
   
  
   const minutesDiv = document.getElementById('minutes');
   const secondsDiv = document.getElementById('seconds');

  
   document.getElementById('minutesBtn').addEventListener('click', convertTime);
   document.getElementById('secondsBtn').addEventListener('click', convertTime);


   function convertTime(e) {
       let value = Number(e.target.parentNode.querySelector('input[type="text"]').value);
       let from = e.target.parentNode.querySelector('input[type="text"]').id;
       const convertedValues = convertValue(value, from);
       display(convertedValues);
   }
   

   function display(valuesToDisplay) {
       minutesDiv.value = valuesToDisplay.minutes;
       secondsDiv.value = valuesToDisplay.seconds;

   }
}