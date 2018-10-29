var txt;

function preload(){
  // p5 has a function named "loadStrings"
  txt = loadStrings("words.txt");
}
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);
  fill(200, 30, 150);
  console.log(txt);
bubbleSort();
console.log(txt);
}


function bubbleSort (){
  for (var i = 0; i<txt.length; i++){
    for (var j = 0; j <txt.length-i-1; j++){
      if (txt[j] >txt[j+1]){
          var temp = txt[j];
           txt[j] =txt[j+1];
             txt[j+1] = temp; //swap
           }



    }
  }


    }
