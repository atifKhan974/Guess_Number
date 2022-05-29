let random = Math.floor(Math.random() * 100);
var myN;
console.log(random)
var attempts = 0;
function submit() {
   var n = document.getElementById('input').value;
   console.log(n);
   myN = n;
   if (document.getElementById('input').value == "") {
      document.getElementById('hint').innerHTML = "Error! Enter any Value..";
      document.getElementById('hint').style.visibility = "visible";
   }
   else {
      if (random == myN) {
         document.getElementById('hint').innerHTML = "Wow! You have Guessed Right!";
         document.getElementById('hint').style.visibility = "visible";
         document.getElementById('hint').style.color = "green";
         document.getElementById('input').value = "";
         attempts++;
         attempts.toString();
         let attStr = attempts.toString();
         document.getElementById('attempts').innerHTML = attStr;
         document.getElementById('result').style.visibility = "visible";
      }
      else if (random < myN) {
         document.getElementById('hint').innerHTML = "Oops! Too High, Try Agian..";
         document.getElementById('hint').style.visibility = "visible";
         document.getElementById('hint').style.color = "red";
         document.getElementById('input').value = "";
         attempts++;
         attempts.toString();
         let attStr = attempts.toString();
         document.getElementById('attempts').innerHTML = attStr;
         console.log(attStr);

         if (attempts >= 10) {
            document.getElementById('result').innerHTML = "OOh! You Lost..";
            document.getElementById('result').style.visibility = "visible";
         }
      }
      else {
         document.getElementById('hint').innerHTML = "Oops! Too Low, Try Agian..";
         document.getElementById('hint').style.visibility = "visible";
         document.getElementById('hint').style.color = "red";
         document.getElementById('input').value = "";
         attempts++;
         attempts.toString();
         let attStr = attempts.toString();
         document.getElementById('attempts').innerHTML = attStr;
         console.log(attStr);

         if (attempts >= 10) {
            document.getElementById('result').innerHTML = "OOh! You Lost..";
            document.getElementById('result').style.visibility = "visible";
         }
      }
   }
}
