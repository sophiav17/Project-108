function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nQTEJg14m/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults()
{
    if (error) {
        console.error(error);
    } else {
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = "I can hear - ";
        result[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - ";
        (result[0].confidence * 100).toFixed(2)+" % ";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+ "," +random_number_g+ "," +random_number_b+ ")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+ "," +random_number_g+ "," +random_number_b+ ")";
        
        img = document.getElementById('bird');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('cow');
        img3 = document.getElementById('dog');

        if (result[0].label == Bird) {
            img.src = 'bird2.gif';
            img1.src = 'cat1.png';
            img2.src = 'cow1.webp';
            img3.src = 'dog1.webp';
        } else if (result[0].label == Cat) {
            img.src = 'bird1.png';
            img1.src = 'cat2.gif';
            img2.src = 'cow1.webp';
            img3.src = 'dog1.webp';
        } else if (result[0].label == Cow) {
            img.src = 'bird1.png';
            img1.src = 'cat1.png';
            img2.src = 'cow2.gif';
            img3.src = 'dog1.webp';
        } else {
            img.src = 'bird1.png';
            img1.src = 'cat1.png';
            img2.src = 'cow1.webp';
            img3.src = 'dog2.gif';
        }
    }
}