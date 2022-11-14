function Play(id) {
    var myAudio = document.getElementById(id.toString());
    if (myAudio.paused) {
        myAudio.play();
    }
    else {
        myAudio.pause();
    }
}