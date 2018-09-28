(function () {
    var voices = window.speechSynthesis.getVoices();
    var arr = [];

    for (let key in voices) {
    voice = voices[key];
        if (voice['lang'].indexOf("en-") !== -1 ) {
            let message = "Man in his arrogance thinks himself a great work, worthy of the interposition of a deity. More humble, and I believe truer, to consider him created from animals."
            let buff = {lang: voice['lang'], msg: message};
            arr.push(buff);
            
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
    msg.text = voice['msg'];

    console.log(voice);
    speechSynthesis.speak(msg);

    msg.onend = function(e) {
    console.log('message ended');
    ++nr;
    doSpeak(arr[nr]);
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
