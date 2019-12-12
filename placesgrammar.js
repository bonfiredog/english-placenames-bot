var vowels;
var consonants;
var chance;

$(document).ready(function() {

var grammar = tracery.createGrammar({

  //---------------------------------------------------------------

"placenamefinal":[
"#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#",
"#under#",
"#on the#",
"#by the#",
"#in the#",
"#across the#",
"#over#",
"#beside#",
"#upon#",
"#port#",
"#latin#",
"#royal#",
"#x-ing-y#",
"#sizeandposition#"
],

// -------------------------------------------------------------------

"placenameroot":["#oneword#","#oneword#","#oneword#","#oneword#","#oneword#","#oneword#","#oneword#",
"#twowords","#twowords","#twowords","#twowords"],

"oneword":["#oneclause#","#twoclause#","#threeclause#", "#fourclause#"],
"twowords":["#oneword#" "#oneword#"],

"smallword":["#oneclause#", "#oneclause#", "#twoclause#"],

"latin":["#oneword# Parva", "#oneword# Magna", "#oneword# Superior", "#oneword# Episcopi", "#oneword# Regis", "#oneword# Abbas", "#oneword# Abbey"],

"port":["Port #oneword#"],

"royal":["Royal #oneword#", "Royal #twowords#"],

"sizeandposition":["Great #oneword#", "Little #oneword#", "Upper #oneword#", "Middle #oneword#", "Outer #oneword#", "Inner #oneword#"],

"under":["#oneword#-under-#smallword#"],
"over":["#oneword#-over-#smallword#"],
"beside":["#oneword#-beside-#smallword#"],
"upon":["#oneword#-upon-#smallword#"],

"on the":["#oneword#-on-the-#smallword#"],
"by the":["#oneword#-by-the-#smallword#"],
"in the":["#oneword#-in-the-#smallword#"],
"across the":["#oneword#-across-the-#smallword#"],

"x-ing-y":["#oneclause#ing #oneword#"],

// -------------------------------------------------------------------

"oneclause":["#notnameending#"],

"twoclause":["#notnameending##name_ending#"],

"threeclause":["#notnameending##notnameending##name_ending#"],

"fourclause":["#notnameending##notnameending##notnameending##name_ending#"],

// --------------------------------------------------------------------

"notnameending":[
"#events#",
"#names#",
"#naturalfeatures#",
"#supernatural#",
"#ecclesiastical#",
"#add_s#",
"#colours#",
"#dimensions#",
"#directions#",
],

"food":["milk","butter","cheese","meat","beer","bread","radish","sprout","cutlet","roll","pie","cake","wine","pudding","jam","honey","crisp","pop","quince","apple","plum","damson","pear","cider"],

"bodilyfunction":["cough","sneeze","drip","step",""],

"abstract_nouns":["love","pride","hope","grace"],

"itemsandtools":["plane","lace","mill","axe","hoop","stick","brush","pan","rake","riddle","chisel","charm", "tang"],

"events":["burn","hang","war","battle","meet" "lunch", "mulch","fight",""],

"building":["court"],

"names":["martin","david",""],
//old english etc.
"naturalfeatures":["river","hill","beck","burn","rill","brook","mount","heather","elm","beech","oak","ash","thorn","sun","moon","star","rime","bloom","broom","flower","gorse","rock","stone","scree","iron","holly","ivy","vine","birch","box","hop"],

"character":["knave","squire","knight","lord","beggar","monger","king","queen","duke","earl"],

"animals":["fox","hare","coney","bat","roe","boar","bear","wolf","palfrey","steed","charger","deer","bee","fly","cod","herring","ling","mouse","beetle","hornet","wasp","gull","whelp","pup","dog","hound",],

"supernatural":["hob","pock","angel",""],

"ecclesiastical":["sister", "abbot", "canon", "charter", "child", "temple", "friar","abbey","brother","church","cross","apse","nave","altar","shrine"],

"colours":["red","green","yellow","dun","dark","light","blue","gold","silver","rud","burnt","white", "black","tan"],

"dimensions":["long","short","far","near","tall","short","shallow","deep","thin","fat"],

"directions":["north", "south", "east", "west","up","down"],

"times":["night","day","light","dark","eve",""]

"add_s":["s"],

"from rest":["ash","wick","rick","ladder","holt","mark","bed","head","moor","mere","bridge","mile","bar","ten","hurst","hirst","by","bi","neck","tox","pox","sox","dox","fox","hox","lox","box","mast","horn","hurl","dray","cott","barn","stoke","coombe","combe","chester","caster","bore","ham","gran","hen","berk","birk","beck","den","dean","dale","holm","dun","seed","well","kiln","field","cant","purl","youth","roll","war","wort","wirt","wing","nut","tole","toll","night","day","leave","blew","blow","mink","monk","honk","queen","duke","latch","maul","growl","pell","mell",
"bight","hun","hell","mist","must","thirst","hunger","wrath","wroth","rage","sniff","grunt","hawk","spit","bellow","spittle","pot","pit","pet","belt","grin","fist","cough", "hott", "rink",  "flip", "whoop", "slip", "funge", "gel", "paste", "russet", "murk", "fen", "fag", "crag", "lick", "lap", "finger", "pulse", "lake", "pond", "purse", "oak", "mince", "pea", "stone", "chat", "chin", "vest", "string", "grease", "grond", "george", "ox", "fret", "first", "silt", "bog", "brook", "heck", "foot", "toe", "fig", "burp", "belch", "pert", "perf", "hoop", "wool", "moll", "fort", "eel", "grub", "yeast", "burn", "purple", "meddle", "drape", "grope", "cant",  "horse", "donk", "scare", "snare", "lair", "scutch"],

// ----------------------------------------------------------------------

"name_ending":[
"ash", "beech", "beach",

"earth","read","court","meet",

"wash","mouth","harbour","ferry","head", "bed","sea","cliffe","cliff","port",

"wherry", "berry", "derry","knock","lynn",

"end","vale","dale","nook","deep","cleave","moor","dell","den",

"wick","rick","flick","crick","bick","lick",

"forth","firth","frith","worth","with","werth","part",

"ney","ley","ly",

"y",

"ing",

"battle", "castle","fort",

"holt", "wood","croft","hale","hurst","forest","hirst","combe","coombe", "holm", "holme","with","wich","holst","stead","stoke","stow","shaw","steed",

"bourne","beck","burn","lee", "birn", "river","brook", "beck","pool","pond","mere",

"shire", "reave","borough",

"bridge","cross","ford","forth","gate","gill","pen","hold","alley",

"win", "wyn", "wynn","wilt","child","friar","temple",

"street", "streat", "road","way","bury","lock","fall",

"tun", "ten", "ton", "ham", "stoke",

"by", "bey",

"church","kirk","abbey","mast","chester","caster","cester","minster","dean","villa","steeple","abbot","sister"

"nock","nick","neck",

"cott", "shott",

"side","down","wold","ridge","dridge","riding",

"hay","haye","hayes","hen",

"side",

"thorpe","thwaite""weald","mold","meald","mead","meade","fold","feald","shield","thorne","greave","grave","grove","peth","dith","staple",

"limp", "tarn", "was",

"teth","leath","heath","hock","ith","belt", "shot",

"land", "way", "wey", "broad", "ward", "heath", "swathe", "riott", "toll", "fell", "water",

"ney", "vey", "shot", "math", "bay", "more", "lair", "low", "lee",

"tail", "green", "sester", "vester", "fester",

"spleen", "van", "car", "scar", "scree", "hill", "hull", "ville", "field","right",

"ley", "gey", "gay", "ridge", "forth", "worth", "cross", "age", "notch", "worthy", "loo",

"stake", "gate", "door", "leap", "jump", "park", "strike", "fast", "rock", "slick", "slury",
"lip", "candle", "hunt", "shunt", "tall", "fall", "gall", "end", "start",

"north", "south", "east", "west",
]
});

grammar.addModifiers(baseEngModifiers);
var placename = grammar.flatten("#placenamefinal#");

vowels = ["a", "e", "i", "o", "u"];
consonants = "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var namearray = placename.split("");

//Removing any triplicate letters.

var twolettersago = "";
var previousLetter = "";

for (i=0; i< namearray.length; i++) {
twolettersago = namearray[i - 2];
previousLetter = namearray[i - 1];

if (previousLetter == namearray[i] && twolettersago == namearray[i]) {
namearray.splice(i,1);
}
}

//Chance to remove doubled letters.

var previousLetter = "";

if percentageChance(10) {
for (i=0; i < namearray.length; i++) {
previousLetter = namearray[i - 1];
if (previousLetter == namearray[i]) {
namearray.splice(i,1);
}
}
}

//Chance to swap vowels, or consonants.

if percentageChance(10) {
var voweltocheck = vowels[randomChoiceFromArray(vowels)];
var vowelpos = namearray.indexOf(voweltocheck);

}

if percentageChance(10) {
var contocheck = consonants[randomChoiceFromArray(consonants)];
var conpos = namearray.indexOf(contocheck);
}


//Chance to change a vowel <-> consonant, and vice versa. (Lenition and fortition)

//Chance to remove a vowel or consonant. (Elision)

//Chance for an addition of a vowel or consonant. (Epenthesis)

//Chance to double consonant.

$('#placestext').text(placename);
});


function percentageChance(p) {
chance = random(100);
if (chance <= p) {
return true;
} else {
  return false;
}
}

function randomChoiceFromArray(array) {

var rand = math.random();
rand *= array.length;
rand = Math.floor(rand);
return rand;
}
