/*Webcam.attach('#camera')

camera = document.getElementById("camera");

Webcam.set({
    width:300,
    height:300,
    img_format:'png',
    img_quality:90
});*/
Webcam.attach('#camera');

camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    img_quality:90
});

function saveSnapshot() {
    webcam.snap(function(data_uri){
        document.getElementById("div2").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    })
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9KwtJy0XS/model.json');