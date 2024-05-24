var word;
var sen;
var synth = window.speechSynthesis;

function firstSpeak()
{
    //alert("hi")
    word="milk"
    sen ="There is no milk in stock right now"

    var toSpeak = new SpeechSynthesisUtterance(word);
    synth.speak(toSpeak);
    var toSpeak = new SpeechSynthesisUtterance(sen);
    synth.speak(toSpeak);
}
function reapeatWord()
{
    var toSpeak = new SpeechSynthesisUtterance(word);
    synth.speak(toSpeak);
}
function reapeatSen()
{
    var toSpeak = new SpeechSynthesisUtterance(sen);
    synth.speak(toSpeak);
}
function onSubmit()
{
    var txtInput = document.querySelector('#textIn');
    if(txtInput.value.trim()==word)
    {
        console.log("correct")
    }
    else
    {
        console.log("wrong")
    }

    //console.log("submited")
}