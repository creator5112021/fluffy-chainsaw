function classification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/Dk17i4iX3/model.json", ml5audio)
}

function ml5audio() {
    classifier.classify(getresult)
}

function getresult(error, results){
    console.log(results)
    if (error) {
      console.log(error)
    }
    else{
       img1 = document.getElementById("imhg")

Random_no_r = Math.floor(Math.random() * 255) + 1
Random_no_g = Math.floor(Math.random() * 255) + 1
Random_no_b = Math.floor(Math.random() * 255) + 1

        document.getElementById("Percantage").innerHTML = " I can hear - "+ results[0].label
        document.getElementById("classofaudio").style.color = "rgb("+ Random_no_r +","+ Random_no_g +"," + Random_no_b + ")"
        document.getElementById("Percantage").innerHTML = " Percantage of hearing -  "+ results[0].confidence
        document.getElementById("classofaudio").style.color = "rgb("+ Random_no_r +","+ Random_no_g +"," + Random_no_b + ")"

        if (results[0].label == "Background noise"){
            img1.src = "ear.png"
        }
        else if (results[0].label == "Barking"){
            img1.src = "dog.png"
        }
        else{
            img1.src = "cat.png"
        }
    }
}


