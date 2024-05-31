var word;
var sen;
var synth = window.speechSynthesis;
var inWord;
function onSubLoad()
{
    inWord=localStorage.getItem("inWord");
    word=localStorage.getItem("myWord");

    if(inWord==word)
    {
        console.log("correct")
        document.getElementById("co").style.display="inline";
    }
    else
    {
        document.getElementById("in").style.display="inline";
        console.log("wrong")
    }
    document.getElementById("yWord").innerHTML=inWord
    document.getElementById("cWord").innerHTML=word
}
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
    inWord=txtInput.value.trim()
    if(txtInput.value.trim()==word)
    {
        console.log("correct")
    }
    else
    {
        console.log("wrong")
    }
    localStorage.setItem("inWord",inWord);
    localStorage.setItem("sen",sen);
    localStorage.setItem("myWord",word);



    //console.log("submited")
}