var vowels;
var consonants;
var chance;
var grammar;
var placename;

$(document).ready(function() {

placename = "";
console.log("//---------------------------- NAME GENERATION")

while (placename = "" || containsDoubledName(placename)) {
if (placename != "") {
  console.log("Too many repeated elements in name. Trying again...")
}
  createplacenameGrammar();
}

//------------------------- VARIANTS

console.log("//---------------------------- OPTIONAL VARIANTS")

var chancetoVary = Math.random(1,100)


"latin":["#oneword# Parva", "#oneword# Magna", "#oneword# Superior", "#oneword# Episcopi", "#oneword# Regis", "#oneword# Abbas", "#oneword# Abbey", "#oneword#-cum-#oneword#"],

"holy":["#st#", "#saint#"],

"st":["St. #holyname#", "#oneword# St. #oneword#", "Saint #oneword#"],

"saint":["Saint #holyname#", "Saint #oneword#"],

"holyname":["Mary","Matthew", "Mark", "Luke", "John", "Judas", "Joseph", "Cuthbert", "Bernice", "Sarah", "Rebecca", "Swithin" ],

"port":["Port #oneword#"],

"royal":["Royal #oneword#", "Royal #oneword#", "Royal #oneword#", "Royal #twowords#"],

"sizeandposition":["Great #oneword#", "Little #oneword#", "Upper #oneword#", "Middle #oneword#", "Outer #oneword#", "Inner #oneword#", "Outer #oneword#"],

"under":["#oneword#-under-#smallword#"],
"over":["#oneword#-over-#smallword#"],
"beside":["#oneword#-beside-#smallword#"],
"upon":["#oneword#-upon-#smallword#"],

"on the":["#oneword#-on-the-#smallword#"],
"by the":["#oneword#-by-the-#smallword#"],
"in the":["#oneword#-in-the-#smallword#"],
"across the":["#oneword#-across-the-#smallword#"],

"x-ing-y":["#oneclause#ing #oneword#"],

"village":["#oneword# Village"],

"town":["#oneword# Town"],

"road":["#oneword# Road"],

"green":["#oneword# Green"],

"station":["#oneword Station"],

"castle":["#oneword# Castle", "Castle #oneword#"],

"hill":["#oneword# Hill"],

"island":["#oneword# Island"],

"water":["#oneword# Water"],

"isle":["Isle Of #oneword#"],

"valley":["#oneword# Valley"],

"heath":["#oneword# Heath"],

"end":["#oneword# End"],



//------------------------- PHONOLOGY

console.log("//------------------------------ PHONOLOGY");

console.log("Base word: " + placename);

vowels = ["a", "e", "i", "o", "u"];
consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var namearray = placename.split("");

//Removing any triplicate letters.

var twolettersago = "";
var previousLetter = "";

for (i=0; i< namearray.length; i++) {
twolettersago = namearray[i - 2];
previousLetter = namearray[i - 1];

if (previousLetter == namearray[i] && twolettersago == namearray[i]) {
console.log("Removed triplicate letters: " + namearray[i] + ".");
namearray.splice(i,1);
}
}

//Chance to remove doubled letters.

var previousLetter = "";

if (percentageChance(20)) {
for (i=0; i < namearray.length; i++) {
previousLetter = namearray[i - 1];
if (previousLetter == namearray[i]) {
console.log("Removed doubled letters: " + namearray[i] + ".");
namearray.splice(i,1);
}
}

}

//Add a 'y' to a single clause.

if (namearray.length < 6) {
  if (percentageChance(20)) {
    namearray.push("y");
  }
}

//Chance to swap vowels, or consonants.
if (percentageChance(20)) {

//Choose a vowel, and find it in the name. If it isn't there, choose another.
while (namearray.includes(voweltocheck) != true) {
var voweltocheck = vowels[randomChoiceFromArray(vowels)];
}

//Substitute it for another.
var vowelpos = namearray.indexOf(voweltocheck);
var vowelsub = vowels[randomChoiceFromArray(vowels)];
namearray[vowelpos] = vowelsub;
console.log("Substituted " + voweltocheck + " for " + vowelsub + " at position " + vowelpos + ".");
}


if (percentageChance(20)) {

//Choose a consonant, and find it in the name. If it isn't there, choose another.
while (namearray.includes(consonanttocheck) != true) {
var consonanttocheck = consonants[randomChoiceFromArray(consonants)];
}

//Substitute it for another.
var conpos = namearray.indexOf(consonanttocheck);
var consub = consonants[randomChoiceFromArray(consonants)];
namearray[conpos] = consub;
console.log("Substituted " + consonanttocheck + " for " + consub + " at position " + conpos + ".");
}


//Chance to change a vowel or consonant (Lenition and fortition)

if (percentageChance(10)) {

var swapchart1 = ["t","p","v","z","e","a","i","o","u","e","b","c","f","n","p"]
var swapchart2 = ["d","b","f","s","a","e","e","u","o","i","v","g","h","m","f"]

//Pick a random letter in word.
var randompos = 2 + Math.floor(Math.random() * namearray.length);
var chartoswap = namearray[randompos];

//Change according to swap chart.
if (vowels.includes(chartoswap)) {
var swappos = swapchart1.indexOf(chartoswap);
namearray[randompos] = swapchart2[swappos];
}
else if (consonants.includes(chartoswap)) {
var swappos = swapchart1.indexOf(chartoswap);
namearray[randompos] = swapchart2[swappos];
}
console.log("Swapped " + chartoswap + " for " + namearray[randompos] + ".");
}

//Chance for an addition of a vowel or consonant. (Epenthesis)

if (percentageChance(10)) {

var vowelorcon = ["v","c"];
var epenchoice = randomChoiceFromArray(vowelorcon);

if (epenchoice == "v") {

voweltocheck = "";
//Choose a vowel, and find it in the name. If it isn't there, choose another.
while (namearray.includes(voweltocheck) != true) {
var voweltocheck = vowels[randomChoiceFromArray(vowels)];
}

var vowelpos2 = namearray.indexOf(voweltocheck);
var vowelinsert = voweltocheck + voweltocheck;
namearray[vowelpos2] = vowelinsert;
console.log("Doubled " + voweltocheck + ".");

} else if (epenchoice == "c") {

consonanttocheck = "";

//Choose a consonant, and find it in the name. If it isn't there, choose another.
while (namearray.includes(consonanttocheck) != true) {
var consonanttocheck = consonants[randomChoiceFromArray(consonants)];
}

var conpos2 = namearray.indexOf(contocheck);
var coninsert = contocheck + contocheck;
namearray[conpos2] = coninsert;
console.log("Doubled " + contocheck + ".");

}
}

//Chance to remove a vowel or consonant. (Elision)

if (percentageChance(10)) {

var elchoice = randomChoiceFromArray(vowelorcon);

if (elchoice == "v") {

voweltocheck = "";
//Choose a vowel, and find it in the name. If it isn't there, choose another.
while (namearray.includes(voweltocheck) != true) {
var voweltocheck = vowels[randomChoiceFromArray(vowels)];
}

var vowelpos3 = namearray.indexOf(voweltocheck);
namearray[vowelpos3] = "";
console.log("Removed " + voweltocheck + ".");

} else if (elchoice == "c") {

consonanttocheck = "";
//Choose a consonant, and find it in the name. If it isn't there, choose another.
while (namearray.includes(consonanttocheck) != true) {
var consonanttocheck = consonants[randomChoiceFromArray(consonants)];
}
var conpos3 = namearray.indexOf(contocheck);
namearray[conpos3] = "";
console.log("Removed " + contocheck + ".");
}
}

//Put the name array back into a string and add to DOM.
var placenameveryfinal = namearray.join("");
$('#placestext').text(placenameveryfinal);
});


//---------------------------------- SCRIPTS

function percentageChance(p) {
var chance = Math.random(100);
if (chance <= p) {
return true;
} else {
  return false;
}
}

function randomChoiceFromArray(array) {

var rand = Math.random();
rand *= array.length;
rand = Math.floor(rand);
return rand;
}

function createplacenameGrammar() {

var grammar = tracery.createGrammar({

  //---------------------------------------------------------------

"placenamefinal":[
"#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#", "#placenameroot#",
"Nighthead", "Nighthead", "Nighthead", "Nighthead",
"small word",
"small word"
],

// -------------------------------------------------------------------

"placenameroot":["#oneword#","#oneword#","#oneword#","#oneword#","#oneword#","#oneword#","#oneword#",
"#twowords","#twowords","#twowords","#twowords"],

"oneword":["#oneclause#", "#oneclause#", "#oneclause#", "#oneclause#", "#oneclause#", "#oneclause#", "#oneclause#", "#oneclause#", "#twoclause#", "#twoclause#", "#twoclause#", "#twoclause#", "#twoclause#",  "#twoclause#","#threeclause#", "#threeclause#"],
"twowords":["#oneword#", "#oneword#"],

"smallword":["#oneclause#", "#oneclause#", "#twoclause#"],

//---------------------------------------------------------------------
// -------------------------------------------------------------------

"oneclause":["#notnameending#"],

"twoclause":["#notnameending##name_ending#"],

"threeclause":["#notnameending##notnameending##name_ending#"],

"fourclause":["#notnameending##notnameending##notnameending##name_ending#"],

// --------------------------------------------------------------------

// Not Name Endings

"notnameending":["#notnameendingroot##add_s#", "#notnameendingroot#", "#notnameendingroot#", "#notnameendingroot#", "#notnameendingroot#" ],

"notnameendingroot":[
"#eventsoractions#",
"#itemsandtools#",
"#building#",
"#abstract_nouns",
"#naturalfeatures#",
"#supernatural#",
"#ecclesiastical#",
"#add_s#",
"#times#",
"#character#",
"#animals#",
"#from_rest#",
"#oldnames#",
"#newnames#",
"#colours#",
"#dimensions#",
"#directions#",
"#food#",
"#bodilyfunction#",
"#biblical#",
"#numbers#",
"#adjectives#",
"#clothing#",
"#colours#"
],

"eventsoractions":["burn","hang","war","battle","meet", "lunch", "mulch","fight","reave","fall", "leap", "preach", "melt", "crush", "fair", "graze", "rob", "harvest", "raid", "tack", "hunt", "poach", "steal", "theft", "crop", "winnow", "cast", "tumble", "crash", "chop", "swing", "squabble", "jape", "joke", "lost", "fallow",  "feast","teach","tort","taught", "borrow", "steal", "trial", "grow", "lend", "kill", "jest", "fool", "fall", "quarrel", "quibble", "quest", "range", "rub", "barter", "bruise", "cut", "slice", "chop", "fire", "quarry", "jibe", "goss", "jill","dance","sing","play","work","tease","trip","tell", "taste", "sip", "try", "cross", "kill", "fill", "sit", "war", "pick", "duel", "force", "bully", "belt", "mash", "squash", "crush", "grind", "powder", "puff", "rule", "order", "tax", "writ", "write", "pine", "quiz", "quell", "loath", "touch", "shoot", "loose", "lob", "punt", "yeet", "drill", "dig", "point", "learn", "felch", "reach", "rhyme", "babble", "gabble", "gibber", "serve", "beg", "bore", "weep", "grieve", "stitch", "sew", "groove", "shape", "bicker", "crave", "rust", "clean", "curve", "trump", "cheat", "swindle", "furnish", "grovel", "simper", "sell", "scriven", "forge", "fire", "hammer", "grasp", "mill", "sack", "soak", "rest"],

"character":["knave", "squire", "knight", "lord","beggar", "butcher", "baker", "don", "monger", "king", "queen", "duke", "earl", "fiddler", "fletcher", "judge", "tinker", "gipsy", "gypsy", "pilgrim", "villain", "burgher", "jury", "prince", "slave", "juror", "hunter", "beater", "keeper", "guide", "maid", "fool", "farmer", "sailor", "soldier", "thief", "lord", "man", "wife", "husband", "cryer", "lighter", "toll", "seller", "gaoler", "jail", "pauper", "doctor", "knocker", "crofter", "free", "chum", "wright", "chap", "whelp"],

"bodilyfunction":["cough","sneeze","drip","step","sleep", "boast", "cry",  "groan", "die", "starve", "thirst", "eat", "hand", "touch", "grab", "burp", "belch","whistle","foot", "hoot", "cackle", "yelp", "draw", "whisper", "flex", "stretch", "yawn", "hear", "wince", "gurn", "grill", "tip", "kick", "nudge", "note", "break", "smash", "slash", "strangle", "stab", "gurgle", "squeak", "sigh", "huff", "flounce", "tantrum", "mark", "join", "clasp", "grip", "drown", "slap", "shank", "fry", "cook", "turn", "boil", "lie", "frisk", "wheedle", "simper", "suck", "bake", "mend", "cock", "blood", "tear", "spit", "sick", "ill", "fame"],

"ecclesiastical":["sister", "abbot", "canon", "charter", "child", "temple",  "friar", "abbey", "altar", "brother", "church", "cross", "apse","nave","altar","shrine","monk", "holy", "christ", "chris", "angel", "devil", "god", "alms", "lease", "fiddle", "saint", "pit", "aisle", "thorn", "pray", "grave"],

"from_rest":["ash","wick","rick","ladder","holt", "twist", "mark", "bed", "head","moor","mere","bridge","mile","bar","ten","hurst","hirst","by","bi","neck","tox","pox","sox","dox","fox","hox","lox","box","mast","horn","hurl","dray","cott","barn","stoke","coombe","combe","chester","caster","bore","ham","gran","hen","berk","birk","beck","den","dean","dale","holm","dun","seed","well","kiln","field","cant","purl","youth","roll","war","wort","wirt","wing","nut","tole","toll","night","day","leave","blew","blow","mink","monk","honk","queen","duke","latch","maul","growl","pell","mell", "firth","bight", "hun", "hell", "mist", "must", "thirst", "hunger","wrath","wroth","rage","sniff","grunt","hawk","spit","bellow","spittle","pot","pit","pet","belt","grin","fist","cough", "hott", "rink",  "flip", "whoop", "slip", "funge", "gel", "paste", "russet", "murk", "fen", "fag", "crag", "lick", "lap", "finger", "pulse", "lake", "pond", "purse", "oak", "mince", "pea", "stone", "chat", "chin", "vest", "string", "grease", "grond", "george", "ox", "fret", "first", "silt", "bog", "brook", "heck", "foot", "toe", "fig", "burp", "belch", "pert", "perf", "hoop", "wool", "moll", "fort", "eel", "grub", "yeast", "burn", "purple", "meddle", "drape", "grope", "cant",  "horse", "donk", "scare", "snare", "lair", "scutch","grange", "grant", "gravel", "grass"],

"add_s":["s"],

"times":["night","day","light","dark","eve","morning","old","new", "morn", "late", "early", "dawn", "dusk"],

"food":["milk","butter","cheese","meat","beer","bread","radish","sprout","cutlet","roll","pie","cake","wine","pudding","jam","honey","crisp","pop","quince","apple","plum","damson","pear","cider", "weed","beef", "egg", "mutton", "lamb", "eel","salt","pepper", "beer", "yeast", "barm", "wine", "grape", "berry", "pip", "sugar", "flour", "meal", "lunch", "dinner", "fast", "grain", "cream", "wort"],

"abstract_nouns":["love","all","pride","hope","grace","envy","lust","anger","rage","wrath","faith","pine","keen","regret","ever","harm", "health", "hale", "wish", "will", "worry", "fear", "peace", "calm", "grief", "sorrow", "pain", "hurt", "loss", "sin", "pity", "joy", "thrill"],

"itemsandtools":["plane","lace","mill","axe","hoop","stick","brush","pan","rake","riddle","chisel","charm","tang", "grain", "thresh", "scythe", "winnow","bow", "bell", "boat", "coach", "knife", "cudge", "rattle", "spade", "silk", "sword", "gun", "cannon", "net", "staff", "stick", "drum", "rein", "bridle", "griddle", "glass", "cotton", "cloth", "twill", "seat", "chair", "hearth", "poker", "lamp", "pot", "bench", "book", "frame", "wax", "candle", "taper", "oil", "grist", "gravel", "yield", "shield", "pack", "lawn", "knap"],

"building":["court", "mill", "church","tower","barn","gran","bridge", "span", "cellar", "orchard", "bar", "hall", "manor", "cloister", "bath", "wall", "gate", "lock", "fence", "ferry", "inn", "croft", "cott","moat", "farm", "hospital", "spital", "castle", "keep", "yard", "paddock", "stable", "pen", "fold", "home", "house"],

"naturalfeatures":["river","hill","beck","burn","rill","brook","mount","heather","elm","beech","oak","ash","thorn","sun","moon","star","rime","bloom","broom","flower","gorse","rock","stone","scree","iron","holly","ivy","vine","birch","box","hop", "spring", "field", "wool", "willow", "hazel", "spring", "meadow","wind", "breeze","tree","light","edge","scree", "fern", "fish", "flax", "bone", "wool", "bank", "branch", "root", "leaf", "twig", "corn", "crown", "bog", "common", "grove", "graze", "knoll", "moss", "dirt", "soil", "mud", "sea", "shore", "beach", "rock", "down", "frost" "leave", "pool"],

"dimensions":["long","short","far","near","tall","short","shallow","deep","thin","fat","round","broad","wide","top","bottom"],

"directions":["north", "south", "east", "west","up", "down", "left", "right"],

"supernatural":["hob","pock","angel","imp", "ghoul", "ghast", "skull", "ghost", "hang", "noose", "knell", "witch", "warg", "hag", "hound", "spell", "curse", "charm"],

"oldnames":["algar", "alston", "archer", "ashton", "carl", "edd", "horsa", "eric", "ribert", "wini", "wilfred", "wuther", "wutha"],
//old english etc.

"newnames":[""],
//new kings and queens

"biblical":[""],

"numbers":["one", "two", "three", "once", "twice", "thrice", "four", "five", "six", "seven", "eight", "nine", "ten" "many", "few", "most", "least"],

"adjectives":["bleak","blind","burnt","hungry","cold"],

"clothing":["shoe", "hood", "cloak", "stock", "stocking", "hose", "trouser", "shirt", "blouse", "lace", "button", "wimple", "robe", "boot"],

"animals":["fox","hare","coney","bat","roe","boar","bear","wolf","palfrey","steed","charger","deer","bee","fly","cod","herring","ling","mouse","beetle","hornet","wasp","gull","whelp","pup","dog","hound","crake","owl","otter", "goose", "char", "cod", "ling", "hake", "macker", "badger", "fly", "flea", "bug", "eagle", "heron"],
//fauna britannica

"colours":["red", "brown", "green","yellow", "dun", "dark", "light", "blue", "gold", "silver", "rud", "burnt" ,"white", "russet", "taupe", "black", "tan", "tinge", "shade"],

// ----------------------------------------------------------------------

"name_ending":[
"ash", "beech", "beach",

"earth","read","court","meet","moot","moat",

"wall",

"fen",

"lock",

"knoll","dene",

"wash","mouth","harbour","ferry","head", "bed","sea","cliffe","cliff","port",

"wherry", "berry", "derry","knock","lynn",

"end","vale","dale","nook","deep","cleave","moor","dell","den",

"wick","rick","flick","crick","bick","lick",

"forth","firth","frith","worth","with","werth","part",

"ney","ley","ly","foot",

"y",

"ing",

"ever",

"bottom",

"battle", "castle","fort",

"stair","stairs","step",

"holt", "wood","croft","hale","hurst","forest","hirst","combe","coombe", "holm", "holme","with","wich","holst","stead","stoke","stow","stowe","shaw","steed",

"bourne","beck","burn","lee", "birn", "river","brook", "beck","pool","pond","mere",

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

"side","down","wold","ridge","dridge","riding",

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

"land", "way", "wey", "broad", "ward", "heath", "swathe", "riott", "toll", "fell", "water",

"ney", "vey", "shot", "math", "bay", "more", "lair", "low", "lee",

"tail", "green", "sester", "vester", "fester",

"spleen", "van", "car", "scar", "scree", "hill", "hull", "ville", "field","right",

"ley", "gey", "gay", "ridge", "forth", "worth", "cross", "age", "notch", "worthy", "loo",

"stake", "gate", "door", "leap", "jump", "park", "strike", "fast", "rock", "slick", "slury",
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
]
});


grammar.addModifiers(baseEngModifiers);
var placename = grammar.flatten("#placenamefinal#");
}

function containsDoubledName(stringtocheck) {
}
