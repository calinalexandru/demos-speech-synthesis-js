(function () {
    var voices = window.speechSynthesis.getVoices();

//     console.log(voices);
    var arr = [];

    for (let key in voices) {
    voice = voices[key];
        if (voice['lang'].indexOf("ro") !== -1 ) {
            for (let k = 1.5; k <= 2; k+=0.1) {
                            for (let i = -1; i <= 2; i++) {
                let buff = {lang: voice['lang'], pitch: i, rate: k};
                 arr.push(buff);
            }
            }


            
//            arr.push(JSON.parse(JSON.stringify(msg)));
//            console.log(msg);
    //         speechSynthesis.speak(msg);
        }
    
    }

    console.log(arr)

let nr = 0;

function doSpeak(voice) {
    msg = new SpeechSynthesisUtterance();

    msg.lang = voice['lang'];
    msg.text = "Cine mi-a înfipt zambila în Uranus este o planetă foarte senzuală!";
    msg.pitch = voice['pitch'];
    msg.rate = voice['rate'];

    console.log(voice);
    speechSynthesis.speak(msg);

    msg.onend = function(e) {
    console.log('message ended');
    ++nr;

    if (arr[nr]) {
            doSpeak(arr[nr]);

    }
}
}




doSpeak(arr[0]);

})();


// console.log(voices)
// msg.voice = voices[10]; // Note: some voices don't support altering params
// msg.voiceURI = 'native';
// msg.volume = 1; // 0 to 1
// msg.rate = 1; // 0.1 to 10
// msg.pitch = 2; //0 to 2
// msg.text = 'Hello World';
// msg.lang = 'en-US';

// msg.onend = function(e) {
//   console.log('Finished in ' + event.elapsedTime + ' seconds.');
// };

// speechSynthesis.speak(msg);
