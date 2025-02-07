function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6W8Sk9PBGqz":
        Script1();
        break;
      case "6qVdwsL6uda":
        Script2();
        break;
      case "5ZZ0Xqmp2KX":
        Script3();
        break;
      case "5q4Tjr814pM":
        Script4();
        break;
      case "5eXrtzWqG1y":
        Script5();
        break;
      case "62rTDIOYlI1":
        Script6();
        break;
      case "5WK1vnzELil":
        Script7();
        break;
      case "6ZasVCca16M":
        Script8();
        break;
      case "6evS2opYyBe":
        Script9();
        break;
      case "5k3psz2Q7n4":
        Script10();
        break;
      case "6Xr7FeyQ3oT":
        Script11();
        break;
      case "61W3a9PVHxl":
        Script12();
        break;
      case "5tLOtiTCyFZ":
        Script13();
        break;
      case "6oKwaDtfJdW":
        Script14();
        break;
      case "6qOZK6xdqgc":
        Script15();
        break;
      case "6Ly1XIy5iAi":
        Script16();
        break;
      case "6D3TLrEvXth":
        Script17();
        break;
      case "6Wjdr8HAXzc":
        Script18();
        break;
      case "5gCHn3AUSEP":
        Script19();
        break;
      case "5aE5qlz7wYS":
        Script20();
        break;
      case "6jsifeAeqlf":
        Script21();
        break;
      case "5mRiSFo8OIo":
        Script22();
        break;
      case "6FYB3RWvdLd":
        Script23();
        break;
      case "6I3vRl5nr2n":
        Script24();
        break;
      case "63cN400rT8m":
        Script25();
        break;
      case "6lPW2gfrG8v":
        Script26();
        break;
      case "679g2fVZVDC":
        Script27();
        break;
      case "5e09vo3Wfh9":
        Script28();
        break;
      case "6aUcooMh2vc":
        Script29();
        break;
      case "6eulGw8mPQr":
        Script30();
        break;
      case "6qkI1YZT0Xp":
        Script31();
        break;
      case "5kmzD9VwZmm":
        Script32();
        break;
      case "5lvE1rORn3M":
        Script33();
        break;
      case "6RdH2UjiGBd":
        Script34();
        break;
      case "6JqhYGvL4rp":
        Script35();
        break;
      case "6ZiMiNxyIX5":
        Script36();
        break;
      case "6273USC91q5":
        Script37();
        break;
      case "5zGrvo5STlw":
        Script38();
        break;
      case "6NutCJQjeTw":
        Script39();
        break;
      case "6kHc49j5Ylw":
        Script40();
        break;
      case "6UPIgu192MA":
        Script41();
        break;
      case "67R2gZBQj8D":
        Script42();
        break;
      case "66xCLOtcWS6":
        Script43();
        break;
      case "5eO3V7GtUMs":
        Script44();
        break;
      case "6B5gFtVzXh4":
        Script45();
        break;
      case "5sTkugSRnZH":
        Script46();
        break;
      case "6PtogIjLPNn":
        Script47();
        break;
      case "6G2KhV82zJE":
        Script48();
        break;
      case "5r6ce1I2OAi":
        Script49();
        break;
      case "6TChFquBi58":
        Script50();
        break;
      case "5WUeQGL8ym2":
        Script51();
        break;
      case "6nfMCUOfVfe":
        Script52();
        break;
      case "6Znb7SstT1L":
        Script53();
        break;
      case "61uFDvIQARb":
        Script54();
        break;
      case "680d9bJS7iB":
        Script55();
        break;
      case "5qv4Idqaaqb":
        Script56();
        break;
      case "6LcpZXNnpT0":
        Script57();
        break;
      case "6Ja0GEAhjjM":
        Script58();
        break;
      case "6XnErkJNyeS":
        Script59();
        break;
      case "6PA3euV3Gtv":
        Script60();
        break;
      case "6g5jQZoph3J":
        Script61();
        break;
      case "5wSt38fICX7":
        Script62();
        break;
      case "6bOTghJg5Qu":
        Script63();
        break;
      case "6fMThd3HM5t":
        Script64();
        break;
      case "6AWkubG2KGf":
        Script65();
        break;
      case "5xJuH8vgmIe":
        Script66();
        break;
      case "5j7ec8H02ZI":
        Script67();
        break;
      case "6p1HKouY1Kj":
        Script68();
        break;
      case "6Tp7yTpvGHE":
        Script69();
        break;
      case "66abfEHZX6m":
        Script70();
        break;
      case "6KGyrLVQFBa":
        Script71();
        break;
  }
}

function Script1()
{
  function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

}

function Script2()
{
  if (!document.getElementById('bgSong')) {
    var audio = document.createElement('audio');
    audio.id = 'bgSong';
    audio.src = "story_content/external_files/music_bg_dmi.mp3";
    audio.preload = "auto";
    document.body.appendChild(audio);
}
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.src="story_content/external_files/music_bg_dmi.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script6()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script8()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script10()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script12()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script13()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script14()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script15()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script16()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script17()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script18()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script19()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script20()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script21()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script22()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script23()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script24()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script25()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script26()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script27()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script28()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script29()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script30()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script31()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script32()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script33()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script34()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script35()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script36()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script37()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script38()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script39()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script40()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script41()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script42()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script43()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script44()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script45()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script46()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script47()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script48()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script49()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script50()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script51()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script52()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script53()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script54()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script55()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script56()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script57()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script58()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script59()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script60()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script61()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script62()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script63()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script64()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script65()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script66()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script67()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script68()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script69()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script70()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script71()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

