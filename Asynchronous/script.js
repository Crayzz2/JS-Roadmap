// let btn = document.getElementById('btn')
// btn.onclick = async () => {
//     showOpenFilePicker()
// }



var timerPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
       resolve('Hello');
    }, 3000);
 });
 
 timerPromise.then(function(value) {
    console.log(value);
 });