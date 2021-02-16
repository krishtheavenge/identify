Webcam.set({
    width:300 ,
    height:350,
    image_format:"png",
    png_quality:100,
    contraints:{
        facingMode:"environment"
    }
});
var camera = document.getElementById("camera");
Webcam.attach(camera);
    function capture(){ 
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML="<img id='pic' src="+data_uri+">";
        })
}
            console.log("ml5 loaded", ml5.version);
            classifier = ml5.imageClassifier('MobileNet',modelloaded);
            function modelloaded(){
                console.log("mobile net has loaded");
            } 

            function check(){
                var pic = document.getElementById("pic");
                classifier.classify(pic,gotresult);
            
            }
            function gotresult(error,result){
                if(error){
                    console.error(error);
                }
                else{
                    console.log(result);
                   document.getElementById("object_name").innerHTML = result[0].label; 
                }
            }