function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  y=ml5.imageClassifier('MobileNet',modelLoaded);
  
}
function draw(){
  image(video,0,0,300 ,300);
  y.classify(video,getResult);
}
function modelLoaded(){
  console.log("ml5 loaded");

}
var previous_result="";
function getResult(error,result){
  if(error){
    console.log(error);
    }
    else{
      if((result[0].confidence > 0.5) && (previous_result != result[0].label))
      {
console.log(result);
previous_result=result[0].label;
document.getElementById("speaker").innerHTML= result[0].label;
document.getElementById("confidence").innerHTML=Math.floor(result[0].confidence*100)+"%";
ee=window.speechSynthesis;
AAAAA="This Object looks like "+result[0].label;
utterThis = new SpeechSynthesisUtterance(AAAAA);
ee.speak(utterThis);
      }
    }
  }





