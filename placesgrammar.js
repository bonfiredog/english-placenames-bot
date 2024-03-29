var nameendingpool = [];
var notnameendingpool = [];
var currentmutpos = 0;
var clausepoolsize = 50;
var tempclauseholder;
var grammar;
//-----------------------------
var placenamepool = [];
var smallword = [];
var oneword = [];
var twowords = [];
var finalwordConstructor = [];
var wordconstructor = [];
var currentWord = "";
var repetition = false;
var chosenending = "";
//-----------------------------
var vowels = [];
var consonants = [];
var namearray = [];
var loopretry = 0;
//-----------------------------
var chance;
var finalsmallword;
var finaltwoword;
var finaloneword;
var finaloneword2;
var placenamefinal1;
var placenamefinal2;
var placenamefinal3;
var placenamefinal4;
var variantArray;
var chosennamePool = [];

//-----------------------------
var currentid;
var popupid;
var circleid;

//-----------------------------

var mapnumber;
var mapurl;
var nametoadd;

var mapx1;
var mapy1;
var mappopx1;
var mappopy1;

var mapx2;
var mapy2;
var mappopx2;
var mappopy2;

var mapx3;
var mapy3;
var mappopx3;
var mappopy3;

var mapx4;
var mapy4;
var mappopx4;
var mappopy4;

//-----------------------------

var timer1;
var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var clicked4 = false;
var totalclicked = 0;
var clicktext = "0/4 Places Found";




//-----------------------------

window.onload = function(){
$('#maploader').css(
"opacity", "0"
);
};

$(document).ready(function() {

// PAGE FUNCTIONS



// Reload page when button clicked.

$('#refreshbutton').click(function(){
$(this).html("Reloading...");
window.location.reload();
});

$('#submitbutton').click(function(){
$(this).html("Submitting...");
timer1 = setTimeout(resetsubmit, 2000);
});

//Display resize icons if necessary.

var pageHeight = $('html').height();
var pageWidth = $('body').width();
var portHeight = $(window).height();
var portWidth = $(window).width();

if (portHeight < pageHeight - 5
|| portWidth < pageWidth - 5)
{
$('#arrow1').css(
"opacity", "1"
);
$('#arrow2').css(
"opacity", "1"
);
}

$(document).scroll(function(e){

var scrolldownAmount = $(window).scrollTop();
var documentHeight = $(document).height();
var windowHeight = $(window).height();

var scrolldownPercent = (scrolldownAmount / (documentHeight - windowHeight)) * 100;

var scrollrightAmount = $(window).scrollLeft();
var documentWidth = $(document).width();
var windowWidth = $(window).width();

var scrollrightPercent = (scrollrightAmount / (documentWidth - windowWidth)) * 100;

if (scrolldownPercent >= 95) {
$('#arrow2').css(
"opacity", "0"
);
} else {
var pageHeight = $('html').height();
var portHeight = $(window).height();
if (portHeight < pageHeight) {
$('#arrow2').css(
"opacity", "1"
);
}
}

if (scrollrightPercent >= 95) {
$('#arrow1').css(
"opacity", "0"
);
} else {
var pageWidth = $('body').width();
var portWidth = $(window).width();
if (portWidth < pageWidth) {
$('#arrow1').css(
"opacity", "1"
);
}
}
});


//Refresh Button Appearance

$('#refreshbutton').hover(function(){
$(this).css({
"border-left": "5px double white",
"border-bottom": "3px solid black",
"border-right": "3px solid black"
});

$('#refreshbutton span').css({
"transform": "rotate(360deg)"
});

}, function() {

$(this).css({
"border-left": "0px double white",
"border-bottom": "0px solid black",
"border-right": "0px solid black"
});

$('#refreshbutton span').css({
"transform": "rotate(0deg)"
});

});


//Get the current year and display
  $("#year").text( (new Date).getFullYear());


//Load a random map and its variables.

var mapnumber = getRandomArbitrary(1,20);
console.log("mapnum = " + mapnumber);
switch(mapnumber) {
case 1:
mapurl = "maps/map1.png";
mapx1 = "65.3%";
mapy1 = "17%";
mappopx1 = "53%";
mappopy1 = "20%";
$('#1').addClass("two");
$('#1').addClass("right");

mapx2 = "27.5%";
mapy2 = "89.5%";
mappopx2 = "29%";
mappopy2 = "48%";
$('#2').addClass("one");
$('#2').addClass("right");

mapx3 = "62.7%";
mapy3 = "91%";
mappopx3 = "48%";
mappopy3 = "49%";
$('#3').addClass("three");
$('#3').addClass("left");

mapx4 = "-0.5%";
mapy4 = "59%";
mappopx4 = "13%";
mappopy4 = "62%";
$('#4').addClass("three");
$('#4').addClass("left");
break;

//----------------------------------

case 2:
mapurl = "maps/map2.png";
mapx1 = "70%";
mapy1 = "4.5%";
mappopx1 = "59%";
mappopy1 = "7%";
$('#1').addClass("two");
$('#1').addClass("right");

mapx2 = "58.1%";
mapy2 = "55.5%";
mappopx2 = "32%";
mappopy2 = "48%";
$('#2').addClass("one");
$('#2').addClass("right");

mapx3 = "10.5%";
mapy3 = "20.5%";
mappopx3 = "13%";
mappopy3 = "24%";
$('#3').addClass("one");
$('#3').addClass("right");

mapx4 = "93.6%";
mapy4 = "80%";
mappopx4 = "68%";
mappopy4 = "51%";
$('#4').addClass("three");
$('#4').addClass("right");
break;

//----------------------------------

case 3:
mapurl = "maps/map3.png";
mapx1 = "54.7%";
mapy1 = "23.4%";
mappopx1 = "29%";
mappopy1 = "20%";
$('#1').addClass("one");
$('#1').addClass("right");

mapx2 = "48%";
mapy2 = "38.8%";
mappopx2 = "36%";
mappopy2 = "41%";
$('#2').addClass("one ");
$('#2').addClass("right");

mapx3 = "77.8%";
mapy3 = "12%";
mappopx3 = "57%";
mappopy3 = "15%";
$('#3').addClass("three");
$('#3').addClass("right");

mapx4 = "26.2%";
mapy4 = "92%";
mappopx4 = "13%";
mappopy4 = "49%";
$('#4').addClass("three");
$('#4').addClass("right");
break;

//----------------------------------

case 4:
mapurl = "maps/map4.png";
mapx1 = "-2%";
mapy1 = "69.2%";
mappopx1 = "6%";
mappopy1 = "25%";
$('#1').addClass("three");
$('#1').addClass("left");

mapx2 = "8.5%";
mapy2 = "82.5%";
mappopx2 = "11%";
mappopy2 = "48%";
$('#2').addClass("one");
$('#2').addClass("right");

mapx3 = "52.7%";
mapy3 = "94.2%";
mappopx3 = "48%";
mappopy3 = "49%";
$('#3').addClass("three");
$('#3').addClass("right");

mapx4 = "47.4%";
mapy4 = "30%";
mappopx4 = "46%";
mappopy4 = "34%";
$('#4').addClass("four");
$('#4').addClass("left");
break;

//----------------------------------

case 5:
mapurl = "maps/map5.png";
mapx1 = "85.5%";
mapy1 = "13%";
mappopx1 = "59%";
mappopy1 = "13%";
$('#1').addClass("two");
$('#1').addClass("right");

mapx2 = "80.5%";
mapy2 = "67.5%";
mappopx2 = "64%";
mappopy2 = "48%";
$('#2').addClass("two");
$('#2').addClass("left");

mapx3 = "68.7%";
mapy3 = "75%";
mappopx3 = "42%";
mappopy3 = "49%";
$('#3').addClass("three");
$('#3').addClass("right");

mapx4 = "39.5%";
mapy4 = "61%";
mappopx4 = "24%";
mappopy4 = "50%";
$('#4').addClass("four");
$('#4').addClass("left");
break;

//----------------------------------

case 6:
mapurl = "maps/map6.png";
mapx1 = "93.3%";
mapy1 = "6%";
mappopx1 = "68 %";
mappopy1 = "8%";
$('#1').addClass("one");
$('#1').addClass("right");

mapx2 = "8.3%";
mapy2 = "69.5%";
mappopx2 = "12%";
mappopy2 = "48%";
$('#2').addClass("one");
$('#2').addClass("right");

mapx3 = "65.7%";
mapy3 = "70%";
mappopx3 = "39%";
mappopy3 = "49%";
$('#3').addClass("two");
$('#3').addClass("right");

mapx4 = "30.5%";
mapy4 = "34%";
mappopx4 = "15%";
mappopy4 = "31%";
$('#4').addClass("three");
$('#4').addClass("left");
break;

//----------------------------------

case 7:
mapurl = "maps/map7.png";
mapx1 = "70.4%";
mapy1 = "26%";
mappopx1 = "66%";
mappopy1 = "30%";
$('#1').addClass("two");
$('#1').addClass("left");

mapx2 = "41.5%";
mapy2 = "10.7%";
mappopx2 = "29%";
mappopy2 = "14%";
$('#2').addClass("two");
$('#2').addClass("left");

mapx3 = "58.7%";
mapy3 = "70.6%";
mappopx3 = "33%";
mappopy3 = "49%";
$('#3').addClass("three");
$('#3').addClass("right");

mapx4 = "24.5%";
mapy4 = "7%";
mappopx4 = "13%";
mappopy4 = "12%";
$('#4').addClass("four");
$('#4').addClass("right");
break;

//----------------------------------

case 8:
mapurl = "maps/map8.png";
mapx1 = "91.6%";
mapy1 = "77.5%";
mappopx1 = "66%";
mappopy1 = "43%";
$('#1').addClass("two");
$('#1').addClass("right");

mapx2 = "51.5%";
mapy2 = "28.5%";
mappopx2 = "44%";
mappopy2 = "32%";
$('#2').addClass("two");
$('#2').addClass("left");

mapx3 = "3.6%";
mapy3 = "88.5%";
mappopx3 = "19%";
mappopy3 = "49%";
$('#3').addClass("one");
$('#3').addClass("left");

mapx4 = "58%";
mapy4 = "79.5%";
mappopx4 = "32%";
mappopy4 = "62%";
$('#4').addClass("four");
$('#4').addClass("right");
break;

//----------------------------------

case 9:
mapurl = "maps/map9.png";
mapx1 = "2.2%";
mapy1 = "13.2%";
mappopx1 = "8%";
mappopy1 = "16%";
$('#1').addClass("one");
$('#1').addClass("left");

mapx2 = "23.8%";
mapy2 = "17.5%";
mappopx2 = "11%";
mappopy2 = "21%";
$('#2').addClass("two");
$('#2').addClass("left");

mapx3 = "49.4%";
mapy3 = "58.5%";
mappopx3 = "24%";
mappopy3 = "49%";
$('#3').addClass("three");
$('#3').addClass("right");

mapx4 = "38.5%";
mapy4 = "35%";
mappopx4 = "18%";
mappopy4 = "41%";
$('#4').addClass("four");
$('#4').addClass("right");
break;

//----------------------------------

case 10:
mapurl = "maps/map10.png";
mapx1 = "74.9%";
mapy1 = "68.6%";
mappopx1 = "69%";
mappopy1 = "24%";
$('#1').addClass("one");
$('#1').addClass("left");

mapx2 = "29.4%";
mapy2 = "50.5%";
mappopx2 = "4%";
mappopy2 = "48%";
$('#2').addClass("one");
$('#2').addClass("right");

mapx3 = "55.7%";
mapy3 = "24%";
mappopx3 = "48%";
mappopy3 = "28%";
$('#3').addClass("one");
$('#3').addClass("right");

mapx4 = "72%";
mapy4 = "75.1%";
mappopx4 = "45%";
mappopy4 = "51%";
$('#4').addClass("four");
$('#4').addClass("right");
break;

//----------------------------------

case 11:
mapurl = "maps/map11.png";
mapx1 = "82.3%";
mapy1 = "13.6%";
mappopx1 = "56%";
mappopy1 = "9%";
$('#1').addClass("two");
$('#1').addClass("right");

mapx2 = "31.1%";
mapy2 = "84.5%";
mappopx2 = "47%";
mappopy2 = "48%";
$('#2').addClass("one");
$('#2').addClass("left");

mapx3 = "86.9%";
mapy3 = "72.4%";
mappopx3 = "60%";
mappopy3 = "49%";
$('#3').addClass("one");
$('#3').addClass("right");

mapx4 = "11.1%";
mapy4 = "44.5%";
mappopx4 = "13%";
mappopy4 = "48%";
$('#4').addClass("four");
$('#4').addClass("left");
break;

//----------------------------------

case 12:
mapurl = "maps/map12.png";
mapx1 = "12%";
mapy1 = "27%";
mappopx1 = "14%";
mappopy1 = "20%";
$('#1').addClass("one");
$('#1').addClass("right");

mapx2 = "57.5%";
mapy2 = "18%";
mappopx2 = "43%";
mappopy2 = "13%";
$('#2').addClass("two");
$('#2').addClass("left");

mapx3 = "81.7%";
mapy3 = "17%";
mappopx3 = "55%";
mappopy3 = "13%";
$('#3').addClass("two");
$('#3').addClass("right");

mapx4 = "28%";
mapy4 = "59%";
mappopx4 = "43%";
mappopy4 = "36%";
$('#4').addClass("three");
$('#4').addClass("left");
break;

//----------------------------------

case 13:
mapurl = "maps/map13.png";
mapx1 = "71.7%";
mapy1 = "72%";
mappopx1 = "64%";
mappopy1 = "28%";
$('#1').addClass("one");
$('#1').addClass("left");

mapx2 = "84.1%";
mapy2 = "78.7%";
mappopx2 = "61%";
mappopy2 = "33%";
$('#2').addClass("three");
$('#2').addClass("right");

mapx3 = "11.2%";
mapy3 = "65%";
mappopx3 = "11%";
mappopy3 = "21%";
$('#3').addClass("three");
$('#3').addClass("right");

mapx4 = "25.6%";
mapy4 = "11.5%";
mappopx4 = "15%";
mappopy4 = "15%";
$('#4').addClass("four");
$('#4').addClass("right");
break;

//----------------------------------

case 14:
mapurl = "maps/map14.png";
mapx1 = "13.1%";
mapy1 = "43%";
mappopx1 = "24%";
mappopy1 = "0%";
$('#1').addClass("one");
$('#1').addClass("left");

mapx2 = "58.7%";
mapy2 = "81.5%";
mappopx2 = "33%";
mappopy2 = "52%";
$('#2').addClass("three");
$('#2').addClass("right");

mapx3 = "8.5%";
mapy3 = "5%";
mappopx3 = "24%";
mappopy3 = "-2%";
$('#3').addClass("four");
$('#3').addClass("left");

mapx4 = "89.5%";
mapy4 = "76%";
mappopx4 = "64%";
mappopy4 = "52%";
$('#4').addClass("one");
$('#4').addClass("right");
break;

//----------------------------------

case 15:
mapurl = "maps/map15.png";
mapx1 = "13.3%";
mapy1 = "89%";
mappopx1 = "7%";
mappopy1 = "46%";
$('#1').addClass("one");
$('#1').addClass("right");

mapx2 = "56.5%";
mapy2 = "85.5%";
mappopx2 = "43%";
mappopy2 = "42%";
$('#2').addClass("one");
$('#2').addClass("right");

mapx3 = "28.7%";
mapy3 = "23%";
mappopx3 = "45%";
mappopy3 = "20%";
$('#3').addClass("one");
$('#3').addClass("left");

mapx4 = "69%";
mapy4 = "23.6%";
mappopx4 = "61%";
mappopy4 = "27%";
$('#4').addClass("four");
$('#4').addClass("right");
break;

//----------------------------------

case 16:
mapurl = "maps/map16.png";
mapx1 = "16.9%";
mapy1 = "16.8%";
mappopx1 = "19%";
mappopy1 = "20%";
$('#1').addClass("two");
$('#1').addClass("right");

mapx2 = "47.5%";
mapy2 = "11.5%";
mappopx2 = "29%";
mappopy2 = "14%";
$('#2').addClass("two");
$('#2').addClass("right");

mapx3 = "42.2%";
mapy3 = "90%";
mappopx3 = "26%";
mappopy3 = "49%";
$('#3').addClass("four");
$('#3').addClass("left");

mapx4 = "36.5%";
mapy4 = "50%";
mappopx4 = "21%";
mappopy4 = "40%";
$('#4').addClass("three");
$('#4').addClass("left");
break;

//----------------------------------

case 17:
mapurl = "maps/map17.png";
mapx1 = "76.5%";
mapy1 = "50%";
mappopx1 = "63%";
mappopy1 = "20%";
$('#1').addClass("three");
$('#1').addClass("left");

mapx2 = "28.5%";
mapy2 = "21.1%";
mappopx2 = "29%";
mappopy2 = "23%";
$('#2').addClass("two");
$('#2').addClass("right");

mapx3 = "75.7%";
mapy3 = "90%";
mappopx3 = "49%";
mappopy3 = "51%";
$('#3').addClass("three");
$('#3').addClass("right");

mapx4 = "52.5%";
mapy4 = "36%";
mappopx4 = "39%";
mappopy4 = "39%";
$('#4').addClass("four");
$('#4').addClass("right");
break;

//----------------------------------

case 18:
mapurl = "maps/map18.png";
mapx1 = "83.3%";
mapy1 = "4.5%";
mappopx1 = "72%";
mappopy1 = "7%";
$('#1').addClass("three");
$('#1').addClass("left");

mapx2 = "53.5%";
mapy2 = "20.5%";
mappopx2 = "45%";
mappopy2 = "23%";
$('#2').addClass("one");
$('#2').addClass("left");

mapx3 = "50.7%";
mapy3 = "8%";
mappopx3 = "48.2%";
mappopy3 = "10%";
$('#3').addClass("four");
$('#3').addClass("right");

mapx4 = "16.9%";
mapy4 = "29%";
mappopx4 = "13%";
mappopy4 = "31%";
$('#4').addClass("one");
$('#4').addClass("left");
break;

//----------------------------------

case 19:
mapurl = "maps/map19.png";
mapx1 = "7.3%";
mapy1 = "70%";
mappopx1 = "12%";
mappopy1 = "40%";
$('#1').addClass("two");
$('#1').addClass("right");

mapx2 = "55.5%";
mapy2 = "9.5%";
mappopx2 = "45%";
mappopy2 = "2%";
$('#2').addClass("two");
$('#2').addClass("left");

mapx3 = "75.7%";
mapy3 = "84%";
mappopx3 = "62%";
mappopy3 = "49%";
$('#3').addClass("four");
$('#3').addClass("left");

mapx4 = "40.5%";
mapy4 = "73%";
mappopx4 = "25%";
mappopy4 = "57%";
$('#4').addClass("four");
$('#4').addClass("left");
break;

//----------------------------------

case 20:
mapurl = "maps/map20.png";
mapx1 = "80.7%";
mapy1 = "2%";
mappopx1 = "66%";
mappopy1 = "5%";
$('#1').addClass("three");
$('#1').addClass("left");

mapx2 = "35.1%";
mapy2 = "81.5%";
mappopx2 = "29%";
mappopy2 = "38%";
$('#2').addClass("two");
$('#2').addClass("left");

mapx3 = "73.7%";
mapy3 = "91%";
mappopx3 = "48%";
mappopy3 = "49%";
$('#3').addClass("three");
$('#3').addClass("right");

mapx4 = "27.5%";
mapy4 = "55%";
mappopx4 = "13%";
mappopy4 = "58%";
$('#4').addClass("four");
$('#4').addClass("right");
break;

//----------------------------------
}

$('#mainmap').attr("src", mapurl);

$('#1').css({
"left": mapx1,
"top": mapy1
});

$('#2').css({
"left": mapx2,
"top": mapy2
});

$('#3').css({
"left": mapx3,
"top": mapy3
});

$('#4').css({
"left": mapx4,
"top": mapy4
});


//Open Popups
$('.placename span').click(function() {
var parentplacename = $(this).parent();

$('.placename span').css({
"background-color": "rgba(255,255,255,0.5)",
});
$(this).css({
"background-color": "rgba(255,255,0,0.9)"
});
currentid = $(parentplacename).attr('id');
console.log(currentid);
switch(currentid){
case "1":
$('#pop').css({
"left": mappopx1,
"top": mappopy1
});
if (clicked1 == false) {
clicked1 = true;
totalclicked += 1;
}
nametoadd = placenamefinal1;
break;
case "2":
$('#pop').css({
"left": mappopx2,
"top": mappopy2
});
if (clicked2 == false) {
clicked2 = true;
totalclicked += 1;
}
nametoadd = placenamefinal2;
break;
case "3":
$('#pop').css({
"left": mappopx3,
"top": mappopy3
});
if (clicked3 == false) {
clicked3 = true;
totalclicked += 1;
}
nametoadd = placenamefinal3;
break;
case "4":
$('#pop').css({
"left": mappopx4,
"top": mappopy4
});
if (clicked4 == false) {
clicked4 = true;
totalclicked += 1;
}
nametoadd = placenamefinal4;
break;
}

console.log(totalclicked);

$('#pop input').attr('value', nametoadd);

$('#pop').css(
"display", "block"
);

updatescoreText();
});



$('.cancelbutton').click(function(){
console.log("clicked");
$('.placenamepopup').css(
"display", "none"
);
$('.placename span').css({
"background-color": "rgba(255,255,255,0.5)",
});
});

$('#badgen').click(function(){
$('#etym').html("This name is not quite right. I think the algorithm has a bug. My reason for this is...");
$(this).css({
"background-color": "gray",
});
});

console.log("//---------------------------- NAME ELEMENTS");

//Variables for the four names chosen per map (Nighthead is always included).

placenamefinal1 = "";
placenamefinal2 = "";
placenamefinal3 = "";
placenamefinal4 = "Nighthead";

//Generate a pool of name endings and notnameendings, saved as two arrays.

for (i = 0; i < clausepoolsize; i++) {

tempclauseholder = generatenotnameEnding();
notnameendingpool.push(tempclauseholder);

tempclauseholder = generatenameEnding();
nameendingpool.push(tempclauseholder);

tempclauseholder = "";
}

for (k=0; k < clausepoolsize; k++) {
  console.log("Name Ending: " + nameendingpool[k]);
  console.log("Not Name Ending: " + notnameendingpool[k]);
  console.log("----------------------------------");
}

console.log("//////////////////////////////////////");
console.log("All name element pools generated.");
console.log("//////////////////////////////////////");

console.log("//---------------------------- OPTIONAL MUTATIONS")

//Cycle through each of the possible notnameendings, applying mutations to them.
for (o = 0; o < notnameendingpool.length; o++) {
  console.log("Attempt to mutate " + notnameendingpool[o].toString());
  notnameendingpool[o] = optionalMutations(notnameendingpool[o]);
  console.log("After mutations: " + notnameendingpool[o].toString());
  console.log("=========================")
}

console.log("//////////////////////////////////////");
console.log("All mutations done on notnameendings")
console.log("//////////////////////////////////////");

console.log("//---------------------------- NAME POOL GENERATION");

// Take random name endings and notnameendings from the pools, and construct a pool of name types, making sure that elements are not repeated wholesale in names.

//Generate a set of small words, of one clause.

for (g = 0; g < 10; g++) {
smallword[g] = generateName(1, 1).capitalize();
console.log("Small name generated: " + smallword[g]);
}

console.log("//////////////////////////////////////");
console.log("Generated small names.")
console.log("//////////////////////////////////////");

//Save one small word as the variant key.
var smallwordKey = smallword[randomChoiceFromArray(smallword)];

//Generate a set of words with one to three clauses (with a possible name variant).
for (g = 0; g < 10; g++) {
if (percentageChance(35)) {
oneword[g] = generateName(1,1).capitalize();
} else {
oneword[g] = generateName(2,1).capitalize();
} 

if (percentageChance(50)) {
oneword[g] = nameVariants(oneword[g], oneword[g - 1], smallwordKey);
}
console.log("One-word name generated: " + oneword[g]);
}
console.log("//////////////////////////////////////");
console.log("Generated one-word names.")
console.log("//////////////////////////////////////");

//Generate a set of two-word names.

for (g = 0; g < 10; g++) {
if (percentageChance(50)) {
twowords[g]  = generateName(2,2).capitalize();
} else {
twowords[g]  = generateName(1,2).capitalize();
}
console.log("Two-word name generated: " + twowords[g]);
}

console.log("//////////////////////////////////////");
console.log("Generated two-word names.")
console.log("//////////////////////////////////////");

console.log("//---------------------------- CONSTRUCTING FINAL NAMES")

placenamefinal1 = assignnameRandomly();
placenamefinal2 = assignnameRandomly();
placenamefinal3 = assignnameRandomly();

console.log("Chosen placenames: " + placenamefinal1 + ", " + placenamefinal2 + ", " + placenamefinal3 + ".")

//Add names to DOM.
$('#1 span').html(placenamefinal1.capitalize());
$('#2 span').html(placenamefinal2.capitalize());
$('#3 span').html(placenamefinal3.capitalize());
$('#4 span').html(placenamefinal4.capitalize());

});

//=========================================================


// FUNCTIONS

// Pick a constructed name at random from the final pool, and assign it to one of the three slots for the map.
function assignnameRandomly(nameslot) {
var currentnameConsidered = "";
var chance3 = Math.floor(Math.random() * 8) + 1;

console.log(chance3);

switch(chance3) {
case 1:

while (

(currentnameConsidered == "") ||
(chosennamePool.includes(currentnameConsidered) == true)
) {
currentnameConsidered = smallword[randomChoiceFromArray(smallword)];
}
chosennamePool.push(currentnameConsidered);
return currentnameConsidered;
break;

case 2:
case 3:
case 4:
case 7:

while (
(currentnameConsidered == "") ||
(chosennamePool.includes(currentnameConsidered) == true)
) {
currentnameConsidered = oneword[randomChoiceFromArray(oneword)];
}
chosennamePool.push(currentnameConsidered);
return currentnameConsidered;
break;

case 5:
case 6:
case 8:
while (
(currentnameConsidered == "") ||
(chosennamePool.includes(currentnameConsidered) == true)
) {
currentnameConsidered = twowords[randomChoiceFromArray(twowords)];
}
chosennamePool.push(currentnameConsidered);
return currentnameConsidered;
break;
}
}

//Use Tracery to construct a part of a placename (not an ending)
function generatenotnameEnding() {

var grammar = tracery.createGrammar({

// Not Name Endings

"notnameending":["#notnameendingroot##add_s#", "#notnameendingroot#", "#notnameendingroot#", "#notnameendingroot#", "#notnameendingroot#" ],

"add_s":["s"],

"notnameendingroot":[

//Events Or Actions (x)
"burn","hang","war","battle","meet", "lunch", "mulch","fight","reave","fall", "leap", "preach", "melt", "crush", "fair", "graze", "rob", "harvest", "raid", "tack", "hunt", "poach", "steal", "theft", "crop", "winnow", "cast", "tumble", "crash", "chop", "swing", "squabble", "jape", "joke", "lost", "fallow",  "feast","teach","tort","taught", "borrow", "steal", "trial", "grow", "lend", "kill", "jest", "fool", "fall", "quarrel", "quibble", "quest", "range", "rub", "barter", "bruise", "cut", "slice", "chop", "fire", "quarry", "jibe", "goss", "jill","dance","sing","play","work","tease","trip","tell", "taste", "sip", "try", "cross", "kill", "fill", "sit", "war", "pick", "duel", "force", "bully", "belt", "mash", "squash", "crush", "grind", "powder", "puff", "rule", "order", "tax", "writ", "write", "pine", "quiz", "quell", "loath", "touch", "shoot", "loose", "lob", "punt", "yeet", "drill", "dig", "point", "learn", "felch", "reach", "rhyme", "babble", "gabble", "gibber", "serve", "beg", "bore", "weep", "grieve", "stitch", "sew", "groove", "shape", "bicker", "crave", "rust", "clean", "curve", "trump", "cheat", "swindle", "furnish", "grovel", "simper", "sell", "scriven", "forge", "fire", "hammer", "grasp", "mill", "sack", "soak", "rest","stream","zeal","yeal","wheel","stoney","throat","haugh","plough","sow","sew","wed","wake","sleep","snore","rape","slap","punch","swing","break","throw","holler","hop","jump","skip","leap","plant","pace","joke","rib","brew","prove","point","turn","tut","tisk","cluck","natter","gossip","gift","gurn","gripe","ache","hand","grasp","grab","trudge","weave","kill","mend","tidy","riding",

//Numbers (x)
"one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","once","twice","thrice","first","second","third","fourth","fifth","first","last","many","few","much", "less", "more", "most", "least",

//Characters (x)
"knave", "squire", "knight", "lord","beggar", "butcher", "baker", "don", "monger", "king", "queen", "duke", "earl", "fiddler", "fletcher", "judge", "tinker", "gipsy", "gypsy", "pilgrim", "villain", "burgher", "jury", "prince", "slave", "juror", "hunter", "beater", "keeper", "guide", "maid", "fool", "farmer", "sailor", "soldier", "thief", "lord", "man", "wife", "husband", "cryer", "lighter", "toll", "seller", "gaoler", "jail", "pauper", "doctor", "knocker", "crofter", "free", "chum", "wright", "chap", "whelp","waif","sire","heir", "jester", "groom"," bride", "maiden", "girl", "boy", "killer", "raper", "reaver", "pirate", "lawyer", "baron", "fisher", "worker", "lover", "rogue", "blaggard",

//Ecclesiastical (x)
"sister", "abbot", "canon", "charter", "child", "temple", "friar", "abbey", "altar", "brother", "church", "cross", "apse", "nave", "altar", "shrine", "monk", "holy", "christ", "chris", "angel", "devil", "god", "alms", "lease", "fiddle", "saint", "pit", "aisle", "thorn", "pray", "grave", "prayer", "kneel", "bishop", "priest", "rector", "deacon", "sexton", "novice", "vicar", "verger", "bell", "spire",

//Slang
"wallop", "crack", "blaze", "bonk", "twat", "ming", "blate", "ting", "bare", "hench", "tonk", "tosser", "mint", "bollock", "chuff", "duff", "gander", "ming", "muck", "posh", "tosh", "prick", "quid", "shag", "fanny", "plonk", "nonce", "pillock", "bonk", "mince", "jog", "cane",

//Bodily Function (x)
"cough","sneeze","drip","step","sleep", "boast", "cry",  "groan", "die", "starve", "thirst", "eat", "hand", "touch", "grab", "burp", "belch","whistle","foot", "hoot", "cackle", "yelp", "draw", "whisper", "flex", "stretch", "yawn", "hear", "wince", "gurn", "grill", "tip", "kick", "nudge", "note", "break", "smash", "slash", "strangle", "stab", "gurgle", "squeak", "sigh", "huff", "flounce", "tantrum", "mark", "join", "clasp", "grip", "drown", "slap", "shank", "fry", "cook", "turn", "boil", "lie", "frisk", "wheedle", "simper", "suck", "bake", "mend", "cock", "blood", "tear", "spit", "sick", "ill", "fame", "whoop", "growl", "leer", "clap", "click", "flick", "pick", "grind", "grin", "pout", "purse", "smack", "whack", "belt", "hurl", "bounce", "skim", "thrust", "pound", "work", "help", "ache", "mend", "throb", "gnaw", "roast", "munch", "chew", "chomp", "hawk", "scratch", "itch", "flex", "pick", "mourn", " moan", "gurgle", "mumble", "rumble", "fiddle", "stand", "sit", "swing", "shrug", "point", "thumb", "hear", "taste", "smell", "clonk", "bash", "rub", "stroke", "blink", "wink", "murmur", "snuff", "pinch", "tweak", "drum", "nibble", "bite", "nose", "eye", "brow", "head", "hair", "ear", "lobe", "chin", "teeth", "lip", "beard", "cheek", "jaw", "chest", "tum", "tit", "bum", "leg", "foot", "knee", "hand", "wrist", "crawl", "slide", "slither", "slip",

//Misc. (x)
"ash","wick","rick","ladder","holt", "twist", "mark", "bed", "head","moor","mere","bridge","mile","bar","ten","hurst","hirst","by","bi","neck","tox","pox","sox","dox","fox","hox","lox","box","mast","horn","hurl","dray","cott","barn","stoke","coombe","combe","chester","caster","bore","ham","gran","hen","berk","birk","beck","den","dean","dale","holm","dun","seed","well","kiln","field","cant","purl","youth","roll","war","wort","wirt","wing","nut","tole","toll","night","day","leave","blew","blow","mink","monk","honk","queen","duke","latch","maul","growl","pell","mell", "firth","bight", "hun", "hell", "mist", "must", "thirst", "hunger","wrath","wroth","rage","sniff","grunt","hawk","spit","bellow","spittle","pot","pit","pet","belt","grin","fist","cough", "hott", "rink",  "flip", "whoop", "slip", "funge", "gel", "paste", "russet", "murk", "fen", "fag", "crag", "lick", "lap", "finger", "pulse", "lake", "pond", "purse", "oak", "mince", "pea", "stone", "chat", "chin", "vest", "string", "grease", "grond", "george", "ox", "fret", "first", "silt", "bog", "brook", "heck", "foot", "toe", "fig", "burp", "belch", "pert", "perf", "hoop", "wool", "moll", "fort", "eel", "grub", "yeast", "burn", "purple", "meddle", "drape", "grope", "cant",  "horse", "donk", "scare", "snare", "lair", "scutch","grange", "grant", "gravel", "grass", "halt", "wheel", "wild","quarter","quart","hold","sin","star","short","tall","slay","spark","ditch","ship","boat","rope","hang","sand","barley","rye","ergot","round","rough","rotten","roach","nest","range","mange","quarrel", "bullock","mercury","dog","pudding","pardon","flutter","peace","pease","pax","pap","Pith","pale","payne","pain","organ","nod","nook","old","thumb","muscle","air","lust","bush","lace","marsh","cox","india","leak","long","bone","knit","king","kill","key","knock","knight","knave","fall","rise","tump","corpse","cold","hot","swine","pen","kin","inch","hope","ease","eaze","hedge","cold","cheap","lonely","brack","dew","camp","crux","gowt","farth","frith","fridd","brad","berg","berry","ball",

//Times (x)
"night","day","light","dark","eve","morning","old","new", "morn", "late", "early", "dawn", "dusk",

//Food & Drink (x)
"milk","butter","cheese","meat","beer","bread","radish","sprout","cutlet","roll","pie","cake","wine","pudding","jam","honey","crisp","pop","quince","apple","plum","damson","pear","cider", "weed","beef", "egg", "mutton", "lamb", "eel","salt","pepper", "yeast", "barm", "grape", "berry", "pip", "sugar", "flour", "meal", "lunch", "dinner", "fast", "grain", "cream", "wort","gin","brandy","tripe","light", "supper", "rind", "elv", "musk", "mint", "grass", "drip", "trifle", "straw", "hay", "bake", "boil", "burn", "pud", "goose", "hen", "simnel", "flan", "tart", "skim", "patty", "cob", "bun", "roll", "loaf", "mix", "soup", "stew", "gruel", "haunch", "thigh", "crust", "tongue", "breast", "leek", "beet", "root", "squash", "nut", "seed", "curd", "whey", "wrist", "prove", "knead", "fry", "flash", "sizzle", "fresh", "pickle", "dill", "crab", "shrimp", "prawn", "ice", "flake", "coke", "cask", "bottle", "grease", "splat", "ooze", "bubble", "stuff", "glaze", "sniff", "taste", "duck", "hog", "swine", "pork", "whelk", "mash", "pile", "plate", "fork", "spoon", "knife", "bowl", "cup", "glass", "gripe", "grumble", "rumble", "steak", "stake", "trencher", "clack", "farl", "treat", "grape", "grain", "belly", "germ", "corn", "rye", "wheat", "barb", "fish", "fowl", "faun", "cut", "rib", "lean", "brace", "lazy", "sick", "dead", "bone", "shock", "vain", "preen", "proud", "pride", "shy", "quiet", "ill", "blind", "fat", "mad", "dumb", "deaf", "brave", "giant", "loyal", "gross", "bad", "hot", "mould", "doze", "read", "flee", "jump", "litter", "sham", "shame", "soak", "vouch", "cook", "knit", "darn", "lace",

//Abstract Nouns (x)
"love","all","pride","hope","grace","envy","lust","anger","rage","wrath","faith","pine","keen","regret","ever","harm", "health", "hale", "wish", "will", "worry", "fear", "peace", "calm", "grief", "sorrow", "pain", "hurt", "loss", "sin", "pity", "joy", "thrill", "hate", "wroth", "hurt", "pain", "glut", "greed", "growl", "brave", "brute", "calm",  "evil", "good", "fear", "loyal", "weak", "wit", "wise", "trust", "past", "stress", "free", "sad", "fail", "child",

//Items & Tools (x)
"plane","lace","mill","axe","hoop","stick","brush","pan","rake","riddle","chisel","charm","tang", "grain", "thresh", "scythe", "winnow","bow", "bell", "boat", "coach", "knife", "cudge", "rattle", "spade", "silk", "sword", "gun", "cannon", "net", "staff", "stick", "drum", "rein", "bridle", "griddle", "glass", "cotton", "cloth", "twill", "seat", "chair", "hearth", "poker", "lamp", "pot", "bench", "book", "frame", "wax", "candle", "taper", "oil", "grist", "gravel", "yield", "shield", "pack", "lawn", "knap","whisk", "cart", "wagon", "bindle", "creel", "bobbin", "shuttle", "trowel", "loom", "rule", "dagger", "tray", "whisk", "book", "glass", "hook", "maul", "mattock", "spear", "cane", "whip", "switch", "van", "dupe", "oar", "paddle", "light", "wicker", "coal", "door", "shoe", "scoop", "mat", "step", "axe", "harp", "pipe", "lute", "mace", "crook", "byre", "cosh", "shelf", "loft", "yard", "fetch", "coin", "purse", "belt", "brace", "hook", "board", "saw", "sickle", "slide", "scale", "weight", "rein", "rug", "bed", "chest", "coffer", "thread", "needle", "crock", "doil", "trench", "ewer", "jug", "soap", "lye", "brush", "rod", "net", "fly", "drink", "meal", "lunch", "supper", "tea",

//Building (x)
"court", "mill", "church","tower","barn","gran","bridge", "span", "cellar", "orchard", "bar", "hall", "manor", "cloister", "bath", "wall", "gate", "lock", "fence", "ferry", "inn", "croft", "cott","moat", "farm", "hospital", "spital", "castle", "keep", "yard", "paddock", "stable", "pen", "fold", "home", "house", "fort", "well", "school", "shop", "stead", "lodge", "garret", "hut", "shed", "drove", "shelter", "mine", "colliery", "inn",

//Natural Features (x)
"river","hill","beck","burn","rill","brook","mount","heather","elm","beech","oak","ash","thorn","sun","moon","star","rime","bloom","broom","flower","gorse","rock","stone","scree","iron","holly","ivy","vine","birch","box","hop", "spring", "field", "wool", "willow", "hazel", "spring", "meadow","wind", "breeze","tree","light","edge","scree", "fern", "fish", "flax", "bone", "wool", "bank", "branch", "root", "leaf", "twig", "corn", "crown", "bog", "common", "grove", "graze", "knoll", "moss", "dirt", "soil", "mud", "sea", "shore", "beach", "down", "frost", "leave", "pool","weather", "cliff", "bee", "cave", "copse", "grove", "forest", "shore", "beach", "path", "marsh", "cove",

//Dimensions (x)
"long","short","far","near","tall","short","shallow","deep","thin","fat","round","broad","wide","top","bottom","big", "little", "narrow", "small", "wee", "great",

//Directions (x)
"north", "south", "east", "west","up", "down", "left", "right", "in", "out", "under", "over", "round", "top", "bottom", "turn", "straight", "tween", "twixt", "through", "yond", "yonder", "after", "fore", "aft",

//Supernatural (x)
"hob","pock","angel","imp", "ghoul", "ghast", "skull", "ghost", "hang", "noose", "knell", "witch", "warg", "hag", "hound", "spell", "curse", "charm", "pixie",

//Old Names (x)
"algar", "alston", "archer", "ashton", "carl", "edd", "horsa", "eric", "ribert", "wini", "wilfred", "wuther", "wutha", "brad", "bran", "chad", "brit", "brigg", "brax", "beck", "ains", "clay", "clint", "colt", "coop", "elf", "grant", "harl", "hark", "howl", "kenn", "lane", "marl", "rod", "roy", "saw", "sterl", "tuck", "van", "wes",

//New Names (x)
"george", "henry", "john", "james", "mary", "robert", "alfred", "ed", "alf", "edgar", "harold", "will", "hen", "richard", "rich", "rob", "phil", "jame", "charles", "mary", "anne",

//Rude Words (x)
"slag", "wank", "tit", "shit", "piss", "fuck", "bollock", "ball", "scrot",

//Adjectives (Other) (x)
"bleak","blind","burnt","hungry","cold","lone","busy","brief","out","in","aching",

//Clothing (x)
"shoe", "hood", "cloak", "stock", "stocking", "hose", "trouser", "shirt", "blouse", "lace", "button", "wimple", "robe", "boot",

//Animals (x)
"fox","hare","coney","bat","roe","boar","bear","wolf","palfrey","steed","charger","deer","bee","fly","cod","herring","ling","mouse","beetle","hornet","wasp","gull","whelp","pup","dog","hound","crake","owl","otter", "goose", "char", "cod", "ling", "hake", "macker", "badger", "fly", "flea", "bug", "eagle", "heron", "lion", "cur", "pip",

//Colours (x)
"red", "brown", "green","yellow", "dun", "dark", "light", "blue", "gold", "silver", "rud", "burnt" ,"white", "russet", "taupe", "black", "tan", "tinge", "shade", "pink", "grey", "brown","yellow", "teal", "russet", "fawn", "taupe", "navy", "beige", "bisque", "blond","umber", "mauve"
]

});

grammar.addModifiers(baseEngModifiers);

return grammar.flatten("#notnameending#");
}

//----------------------------------------------------

//Generate some placename endings from common (and less common/invented) patterns in English topynymy.
function generatenameEnding() {

var grammar = tracery.createGrammar({

"name_ending":[
"ash", "beech", "beach",

"earth","court","meet","moot","moat",

"wall",

"fen",

"lock",

"knoll","dene","law",

"wash","mouth","harbour","ferry","head", "bed","sea","cliffe","cliff","port",

"wherry", "berry", "derry","knock","lynn",

"end","vale","dale","nook","deep","cleave","moor","dell","den",

"wick","rick","flick","crick","bick","lick",

"forth","firth","frith","worth","with","werth","part",

"ney","ley","ly","foot",

"y","y","y","y","y","y","y","y","y",

"ing","ing","ing","ing","ing","ing","ing","ing",

"ever",

"bottom",

"battle", "castle","fort",

"stair","stairs","step",

"holt", "wood","croft","hale","hurst","forest","hirst","combe","coombe", "holm","holme","with","wich","holst","stead","stoke","stow","stowe","shaw","steed",

"bourne","beck","burn","lee", "birn", "river","brook","pool","pond","mere",

"shire", "reave","borough",

"bridge","cross","ford","forth","gate","gill","pen","hold","alley",

"win", "wyn", "wynn","wilt","child","friar","temple",

"street", "streat", "road","way","bury","lock","fall",

"tree","light",

"tun", "ten", "ton", "ham", "stoke",

"by", "bey",

"church","kirk","abbey","mast","chester","caster","cester","minster","dean","villa","steeple","abbot","sister",

"nock","nick","neck",

"edge", "lake", "hull", "turn", "tern",

"sage", "hedge",

"cott", "shott",

"side","down","wold","ridge","dridge",

"dish", "dyke", "more",

"hay","haye","hayes","hen",

"meadow",

"rigg", "coe", "hoe", "loe", "poe",

"whistle",

"side",

"thorpe","thwaite","weald","mold","meald","mead","meade","fold","feald","shield","thorne","greave","grave","grove","peth","dith","staple",

"waite",

"bow",

"limp", "tarn", "was",

"teth","leath","heath","hock","ith","belt", "shot",

"land", "way", "wey", "broad", "ward", "heath", "swathe", "riot", "toll", "fell", "water",

"ney", "vey", "shott", "math", "bay", "more", "lair", "low", "lee",

"tail", "green", "sester", "vester", "fester",

"van", "car", "scar", "scree", "hill", "hull", "ville", "field","right",

"ley", "gey", "gay", "ridge", "forth", "worth", "cross", "age", "notch", "worthy", "loo",

"stake", "gate", "door", "leap", "jump", "park", "fast", "rock", "slick", "slury",
"lip", "candle", "hunt", "shunt", "tall", "fall", "gall", "end", "start",

"deth","dith",

"leaze",

"pill",
"spill",
"beth",
"bath",
"buth",
"ditch",
"beer",

"north", "south", "east", "west","top", "moss", "barrow",

"sash",
"weather",

"corn","glow","marsh","week","gang","shaw","acre","quay","market","more","court","ray","vey","toft","ter","door","dore","coat","hole","gutter","age","acre","burn","hoe","sey","mead","camp","compe","dean","den","don"
]
});
grammar.addModifiers(baseEngModifiers);
return grammar.flatten("#name_ending#");
}

//--------------------------------------------------------

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

//Actually constructing words of different clause patterns and common naming patterns from the generated elements.
function generateName(clausenumber, wordnumber) {

//Reset the array.
finalwordConstructor.length = 0;

//Cycle through as many words as are required.
for (i = 0; i < wordnumber; i++) {
//Create/reset variables for holding the current word.
wordconstructor.length = 0;
currentWord = "";
chosenending = "";

//If we are onto the second word, make it either two clauses or a name ending
if (i > 0) {
var choice = Math.random();

if (choice < 0.5) {
wordconstructor.push(nameendingpool[randomChoiceFromArray(nameendingpool)]);
} else {
wordconstructor.push(notnameendingpool[randomChoiceFromArray(notnameendingpool)]);
wordconstructor.push(nameendingpool[randomChoiceFromArray(nameendingpool)]);
}
} else {

//3 clause names should be 1 nne, 2 ne. (ing as one)
if (clausenumber > 2) {
wordconstructor.push(notnameendingpool[randomChoiceFromArray(notnameendingpool)]);
var randomChoice = randomChoiceFromArray(nameendingpool);
wordconstructor.push(nameendingpool[randomChoice]);
var randomChoice2 = randomChoiceFromArray(nameendingpool);
while (randomChoice == randomChoice2) {
randomChoice2 = randomChoiceFromArray(nameendingpool);
}
wordconstructor.push(nameendingpool[randomChoice2]);

} else {
// Add the correct number of notnameendings to the wordconstructor array.
//(Added an exception for one-clause words)
if (clausenumber < 2) {
wordconstructor.push(notnameendingpool[randomChoiceFromArray(notnameendingpool)]);
} else {
for (k = 0; k < clausenumber - 1; k++) {
wordconstructor.push(notnameendingpool[randomChoiceFromArray(notnameendingpool
)]);
}
}

//Choose a nameending (if more than a single clause), and compare to see if a repetition between notnameending and nameending.
if (clausenumber > 1) {
while (chosenending == "" || wordconstructor.indexOf(chosenending) > -1) {
chosenending = nameendingpool[randomChoiceFromArray(nameendingpool)];
}
//If the chosenending is not already in the array, there's no repetition: add it to the array and move on.
wordconstructor.push(chosenending);
}
}
}

//When the word is successfully constructed, turn it into a string and add it to the finalwordConstructor array. Put a space in if there will be more than one word.
currentWord = wordconstructor.join("");
finalwordConstructor.push(currentWord);
if (wordnumber > 1) {
finalwordConstructor.push(" ");
}
}


//Finally, turn the finalwordConstructor array into a string and save it to the specified variable.
if (finalwordConstructor[finalwordConstructor.length - 1] == " ") {
finalwordConstructor.splice(finalwordConstructor.length - 1,1);
}
var wordcapitalholder = finalwordConstructor.join("");
wordcapitalholder.capitalize();
return wordcapitalholder;
}

//------------------------------------------------------

function percentageChance(p) {
var chance = Math.floor(Math.random() * 100) + 1;
if (chance <= p) {
return true;
} else {
  return false;
}
}

//------------------------------------------------------

function randomChoiceFromArray(array) {
var rand = Math.random();
rand *= array.length;
rand = Math.floor(rand);
if (rand < 1)
{
  return 0;
} else {
return rand;
}
}

//------------------------------------------------------

function optionalMutations(entry) {

vowels = ["a", "e", "i", "o", "u"];
consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var doublingcons = ["b", "d", "f", "g", "l", "m", "n", "p", "r", "s", "t"]
var doublingvowels = ["e", "o"];
namearray = entry.split("");
console.log(namearray);

var mutationChoice = getRandomArbitrary(1,11);

switch (mutationChoice) {
case 1:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
//--------------------------------------
//Do nothing.
/*
case 2:
//------------------------------------------
//Chance to swap vowels.

voweltocheck = vowels[randomChoiceFromArray(vowels)];
retries = 0;

//Choose a vowel, and find it in the name. If it isn't there, or is at the end of the name, or if it is a 'u' that comes after a 'q', choose another.
while (
(namearray.includes(voweltocheck) == false
|| (namearray.includes(voweltocheck) == true && namearray.indexOf(voweltocheck) >= (namearray.length-1)
|| (namearray.includes(voweltocheck) == true && voweltocheck == "u" && namearray[namearray.indexOf(voweltocheck) - 1] == "q")
)
)
&& (retries < 10)
)
{
voweltocheck = vowels[randomChoiceFromArray(vowels)];
retries += 1;
}

//Substitute it for another.
if (namearray[namearray.indexOf(voweltocheck) + 1] != voweltocheck) {
var vowelpos = namearray.indexOf(voweltocheck);
var vowelsub = vowels[randomChoiceFromArray(vowels)];
namearray[vowelpos] = vowelsub;
console.log("(" + entry + "): " + "Substituted " + voweltocheck + " for " + vowelsub + " at position " + vowelpos + ".");
}
break;

case 3:

//------------------------------------------
//Chance to change a vowel or consonant to its 'flattened' form (Lenition and fortition)

var swapchart1 = ["t","p","v","z","i","a","o","b","c","f","f","n","p","t","i"];
var swapchart2 = ["d","b","f","s","e","e","u","v","g","h","th","m","f","ght","y"];
var swapsinname = [];
var sinswap = [];
var posin1;

//Find all the letters in the name that are in swapchart1 and add them to their own array.
for (y = 0; y < namearray.length; y++) {
if (swapchart1.includes(namearray[y])) {
  swapsinname.push(namearray[y]);

  //Add the corresponding 'swap' letter to a separate, complementary array.
  posin1 = swapchart1.indexOf(namearray[y]);
  sinswap.push(swapchart2[posin1]);
  
}
}
console.log("swap1: " + swapsinname);
console.log("swap2: " + sinswap);

var chartoswap = "";

//Swap one of the letters at random.
//Choose another if:
//1) The letter chosen is part of a digraph (consonant or vowel).
while (
chartoswap == "" ||
(chartoswap == "c" && namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "h") || (chartoswap == "h" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "c") ||
(chartoswap == "s" && namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "h") || (chartoswap == "h" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "s") ||
(chartoswap == "t" && namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "h") || (chartoswap == "h" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "t") ||
(chartoswap == "w" && namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "h") || (chartoswap == "h" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "w") ||
(chartoswap == "e" &&  namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "o") || (chartoswap == "o" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "e") ||
(chartoswap == "a" &&  namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "a") || (chartoswap == "a" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "a") ||
(chartoswap == "e" &&  namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "e") || (chartoswap == "e" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "e") ||
(chartoswap == "i" &&  namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "i") || (chartoswap == "i" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "i") ||
(chartoswap == "o" &&  namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "o") || (chartoswap == "o" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "o") ||
(chartoswap == "k" &&  namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "n") || (chartoswap == "n" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "k") ||
(chartoswap == "p" &&  namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "h") || (chartoswap == "h" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "p") ||
(chartoswap == "w" &&  namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "r") || (chartoswap == "r" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "w") ||
(chartoswap == "c" &&  namearray[namearray.indexOf(swapsinname[chartoswap]) + 1] == "k") || (chartoswap == "k" && namearray[namearray.indexOf(swapsinname[chartoswap]) - 1] == "c") 
)
{
if (swapsinname.length <= 1) {
  chartoswap = swapsinname[0];
} else {
chartoswap = randomChoiceFromArray(swapsinname);
}
}

console.log("swapchar: " + chartoswap);

var originalpos = namearray.indexOf(swapsinname[chartoswap]);

namearray[originalpos] = sinswap[chartoswap];

console.log("(" + entry + "): " + "Lenition/Fortition: Swapped " + swapsinname[chartoswap] + " for " + namearray[originalpos]);
break;
*/
/*
case 4:

//------------------------------------------
//Chance for an addition of a vowel or consonant. (Epenthesis)

var vowelorcon = ["v","c"];
var epenchoice = vowelorcon[randomChoiceFromArray(vowelorcon)];

//----------------------------------------------------------
// ADDING A VOWEL
if (epenchoice == "v") {

console.log("Epenthesis: adding a vowel.")
var vowelstodouble = [];

//Find all the doubling vowels in the word.
//Make sure they are not already doubled.
for (i = 0; i < namearray.length; i++) {
if (doublingvowels.indexOf(namearray[i]) != -1
&& (namearray[i + 1] != namearray[i] && namearray[i-1] != namearray[i])
) {
vowelstodouble.push(namearray[i]);
}
}

console.log("Doubling vowels in name: " + vowelstodouble);

if (vowelstodouble.length > 0) {
//Choose one at random.
var chosenvowel = "";
if (vowelstodouble.length == 1) {
  chosenvowel = vowelstodouble[0];
} else {
 chosenvowel = vowelstodouble[randomChoiceFromArray(vowelstodouble)];
}
//Find its position in the namearray.
var vowelpos = namearray.indexOf(chosenvowel);
namearray.splice(vowelpos,0,chosenvowel);
console.log("(" + entry + "): " + "Doubled " + chosenvowel + ".");
} else {
  console.log("No suitable vowel found to double, moving on...")
}

//----------------------------------------------------------
// ADDING A CONSONANT
} else if (epenchoice == "c") {

console.log ("Epenthesis: adding a consonant.")

var constodouble = [];

//Find all the doubling cons in the word.
//Make sure they are not already doubled.
for (i = 0; i < namearray.length; i++) {
if (doublingcons.indexOf(namearray[i]) != -1
&& (namearray[i + 1] != namearray[i] && namearray[i-1] != namearray[i])
) {
constodouble.push(namearray[i]);
}
}

console.log("Doubling cons in name: " + constodouble);

if (constodouble.length > 0) {
//Choose one at random.
var chosencon = "";
if (constodouble.length == 1) {
  chosencon = constodouble[0];
} else {
 chosencon = constodouble[randomChoiceFromArray(constodouble)];
}
console.log("chosencon: " + chosencon);
//Find its position in the namearray.
var conpos = namearray.indexOf(chosencon);
namearray.splice(conpos,0,chosencon);
console.log("(" + entry + "): " + "Doubled " + chosencon + ".");
} else {
  console.log("No suitable consonant found to double, moving on...")
}
}

break;
*/
}

//---------------------------------------

//Chance to remove doubled letters.

var previousLetter = "";

if (percentageChance(5)) {
for (i=0; i < namearray.length; i++) {
previousLetter = namearray[i - 1];
if (previousLetter == namearray[i]) {
console.log("(" + entry + "): " + "Removed doubled letters: " + namearray[i] + ".");
namearray.splice(i,1);
}
}

}

//---------------------------------------

//Remove doubled vowels if they are not in the allowed doubled vowels array.

var previousLetter = "";

for (i=0; i < namearray.length; i++) {
  //If it is a vowel...
if (vowels.indexOf(namearray[i]) != -1) {
//Check if it is doubled...
previousLetter = namearray[i - 1];
if (previousLetter == namearray[i]) {
  if (namearray[i] != "e" && namearray[i] != "o") {
  console.log("Removed disallowed doubled vowel: " + namearray[i]);
  namearray.splice(i,1);
}
}
}
}

//---------------------------------------

//Removing any triplicate letters.

var twolettersago = "";
var previousLetter = "";

for (i=0; i< namearray.length; i++) {
twolettersago = namearray[i - 2];
previousLetter = namearray[i - 1];

if (previousLetter == namearray[i] && twolettersago == namearray[i]) {
console.log("(" + entry + "): " + "Removed triplicate letters: " + namearray[i] + ".");
namearray.splice(i,1);
}
}

//Add a u after a q always.

if (namearray.includes("q")) {
var qindex = namearray.indexOf("q");
if (namearray[qindex + 1] != "u") {
namearray.splice(qindex + 1, 0, "u")
}
}

//Put the name array back into a string.

var putbackentry = namearray.join("");
return putbackentry;
}



//--------------------------------------------------

function nameVariants(name, name2, smallname) {

var chance2 = Math.floor(Math.random() * 34) + 1;

switch (chance2) {

case 1:
console.log("Chosen a Latin name variant.");
// LATIN
var variantArray = [name + " Parva", name + " Magna", name + " Superior", name + " Regis", name + " Episcopi", name + " Abbas", name + " Abbey", name + "-cum-" + smallname];
return variantArray[randomChoiceFromArray(variantArray)];
break;

case 2:
console.log("Chosen a holy name variant.");
//HOLY
var holyName = ["Mary","Matthew", "Mark", "Luke", "John", "Judas", "Joseph", "Cuthbert", "Bernice", "Sarah", "Rebecca", "Swithin"];
var holyNameFinal = holyName[randomChoiceFromArray(holyName)];
variantArray = ["St. " + holyNameFinal, name + " St. " + holyNameFinal, "Saint " + name, "Saint " + holyNameFinal];
return variantArray[randomChoiceFromArray(variantArray)];
break;

case 3:
//PORT
console.log("Chosen a Port name variant.");
return "Port " + name;
break;

case 4:
case 5:
console.log("Chosen a Size & Position name variant.");
//SIZE & POSITION
var sizeNames = ["Great " + name, "Little " + name, "Upper " + name, "Lower " + name, "Middle " + name, "Outer " + name, "Inner " + name];
return sizeNames[randomChoiceFromArray(sizeNames)];
break;

case 6:
console.log("Chosen a under/over name variant.");
return name + "-under-" + smallname;
break;

case 7:
console.log("Chosen a under/over name variant.");
return name + "-over-" + smallname;
break;

case 8:
console.log("Chosen a under/over name variant.");
return name + "-beside-" + smallname;
break;

case 9:
console.log("Chosen a under/over name variant.");
return name + "-upon-" + smallname;
break;

case 10:
console.log("Chosen a under/over name variant.");
return name + "-on-the-" + smallname;
break;

case 11:
console.log("Chosen a under/over name variant.");
return name + "-by-the-" + smallname;
break;

case 12:
console.log("Chosen a under/over name variant.");
return name + "-in-the-" + smallname;
break;

case 13:
console.log("Chosen a under/over name variant.");
return name + "-across-the-" + smallname;
break;

case 14:
console.log("Chosen a under/over name variant.");
var snArray = smallname.split;
if (consonants.indexOf(snArray[snArray.length - 1]) != -1) {
var lastcon = snArray[snArray.length - 1];
if (snArray[snArray.length - 2] != lastcon) {
  var newsmallnameArray = snArray;
  newsmallnameArray.push(lastcon);
  var newsmallname = newsmallnameArray.toString();
  return newsmallname + "ing" + name;
} else {
  return smallname + "ing " + name;
} 
} else {
  return smallname + "ing " + name;
}
break;

case 15:
console.log("Chosen a village name variant.");
return name + " Village";
break;

case 16:
console.log("Chosen a town name variant.");
return name + " Town";
break;

case 17:
console.log("Chosen a green name variant.");
return name + " Green";
break;

case 18:
console.log("Chosen a station name variant.");
return name + " Station";
break;

case 19:
console.log("Chosen a road name variant.");
return name + " Road";
break;

case 20:
console.log("Chosen a castle name variant.");
return name + " Castle";
break;

case 21:
console.log("Chosen a castle name variant.");
return "Castle " + name;
break;

case 22:
console.log("Chosen a hill name variant.");
return name + " Hill";
break;

case 23:
console.log("Chosen an island name variant.");
return name + " Island";
break;

case 24:
console.log("Chosen a water name variant.");
return name + " Water";
break;

case 25:
console.log("Chosen a heath name variant.");
return name + " Heath";
break;

case 26:
console.log("Chosen a valley name variant.");
return name + " Valley";
break;

case 27:
console.log("Chosen an end name variant.");
return name + " End";
break;

case 28:
console.log("Chosen an isle of name variant.");
return "Isle Of " + smallname;
break;

case 29:
console.log("Chosen an park name variant.");
return name + " Park";
break;

case 30:
console.log("Chosen an nether name variant.");
return "Nether " + name;
break;

case 31:
console.log("Chosen an pond name variant.");
return name + " Pond";
break;

case 32:
console.log("Chosen an corner name variant.");
return name + " Corner";
break;

case 33:
console.log("Chosen an house name variant.");
return name + " House";
break;

case 34:
console.log("Chosen a Direction name variant.");
// LATIN
var variantArray1 = [name];
var variantArray2 = ["East", "West", "North", "South"];
return variantArray1[randomChoiceFromArray(variantArray1)] + " " + variantArray2[randomChoiceFromArray(variantArray2)];
break;

default:
break;
}
}

//-------------------------------------

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function resetsubmit() {
$('#etym').val("");
$('#submitbutton').html("Submitted!");
setTimeout(resetsubmit2, 1000);
}

function resetsubmit2(){
$('#submitbutton').html("&#10132; Send");
$('#badgen').css({
"background-color": "#CA0061",
});
$('.placenamepopup').css(
"display", "none"
);
$('.placename span').css({
"background-color": "rgba(255,255,255,0.5)",
});
}

function updatescoreText() {
clicktext = totalclicked.toString() + "/4 Places Found";
$('#clicktext').html(clicktext);
}
