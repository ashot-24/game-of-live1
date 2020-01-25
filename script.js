// var clickCount = 0;
// function bodyClick(evt){
//     console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);
//  }
//  window.onclick = bodyClick;
 
// // function clickHandler(evt){
// //     if (clickCount <= 15 ){
// //    clickCount++;
// //    var str = "Thanks for clicking " + clickCount;
// //    console.log(str);
// //    this.innerText = str;
// //     }
// //   else if {
// //       console.log("ashxatec")
// // }  


// var p = document.getElementById("pElement");
// p.addEventListener("click", clickHandler);

function keydown(evt) {
    console.log("You printed " + evt.key);
 }
 window.onkeydown = keydown;