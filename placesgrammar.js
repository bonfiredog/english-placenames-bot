//ISSUES
// - Name construction (needs tweaking and new variants).
// Fix the while loops in optional mutations.

var nameendingpool = [];
var notnameendingpool = [];
var clausepoolsize = 20;
var tempclauseholder;
var grammar;
//-----------------------------
var placenamepool = [];
var smallword = "";
var oneword = "";
var twowords = "";
var oneword2 = "";
var finalwordConstructor = [];
var wordconstructor = [];
var currentWord = "";
var repetition = false;
var chosenending = "";
//-----------------------------
var vowels = [];
var consonants = [];
var namearray = [];
//-----------------------------
var chance;
var finalsmallword;
var finaltwoword;
var finaloneword;
var finaloneword2;
var placenamefinal;
var variantArray;


$(document).ready(function() {

console.log("//---------------------------- NAME ELEMENTS");

//Generate a pool of name endings and notnameendings, saved as two arrays.

for (i = 0; i < clausepoolsize; i++) {

tempclauseholder = generatenotnameEnding();
notnameendingpool.push(tempclauseholder);

tempclauseholder = generatenameEnding();
nameendingpool.push(tempclauseholder);

tempclauseholder = "";
}

for (k=0; k < clausepoolsize; k++) {
  console.log(nameendingpool[k]);
  console.log(notnameendingpool[k]);
}

console.log("All name element pools generated.");

console.log("//---------------------------- NAME POOL GENERATION");

// Take random name endings and notnameendings from the pools, and construct a pool of name types, making sure that elements are not repeated wholesale in names.

//Generate a small word, of one or two clauses.

if (percentageChance(66)) {
smallword = generateName(1, 1);
} else {
smallword = generateName(2, 1);
}

//Generate a word with one to three clauses.

if (percentageChance(20)) {
oneword = generateName(1,1);
} else if (percentageChance(75)) {
oneword = generateName(2,1);
} else {
oneword = generateName(3,1);
}

//Repeat to retrieve a second word.

if (percentageChance(20)) {
oneword2 = generateName(1,1);
} else if (percentageChance(75)) {
oneword2 = generateName(2,1);
} else {
oneword2 = generateName(3,1);
}

//Generate two words.

if (percentageChance(20)) {
twowords = generateName(1,2);
} else {
twowords = generateName(2,2);
}

// Place finalised names into an array.
placenamepool.push(smallword);
placenamepool.push(oneword);
placenamepool.push(oneword2);
placenamepool.push(twowords);

console.log("Names generated: " + placenamepool[0] + ", " + placenamepool[1] + ", " + placenamepool[2] + ", " + placenamepool[3] + ", Nighthead.");

console.log("//---------------------------- OPTIONAL MUTATIONS")

//Cycle through each of the possible names, applying mutations to them.
//for (o = 0; o < placenamepool.length; o++) {
  //optionalMutations(placenamepool[o], o);
//}

finalsmallword = placenamepool[0].capitalize();
finaloneword = placenamepool[1].capitalize();
finaloneword2 = placenamepool[2].capitalize();
finaltwoword = placenamepool[3].capitalize();


console.log("Final name elements (with mutations): " + finalsmallword + ", " + finaloneword + ", " + finaloneword2 + ", " + finaltwoword + ", Nighthead.");

console.log("//---------------------------- CONSTRUCTING FINAL NAME")

//Pick a final name, either: one word, two words, small word, one of the 'variants', or Nighthead.

var chance = Math.floor(Math.random() * 10) + 1;


switch (chance) {
case 1:
case 2:
placenamefinal = finaloneword;
break;

case 3:
case 4:
placenamefinal = finaltwoword;
break;

case 5:
placenamefinal = finalsmallword;
break;

case 6:
case 7:
case 8:
case 9:
placenamefinal = nameVariants()
break;

case 10:
placenamefinal = "Nighthead";
break;

default:
placenamefinal = "randomiser not working";
break;
}


//Put the name into the DOM.
console.log("Final name is " + placenamefinal + ".");
$('#placestext').text(placenamefinal);
});

//=========================================================


// FUNCTIONS

function generatenotnameEnding() {

var grammar = tracery.createGrammar({

// Not Name Endings

"notnameending":["#notnameendingroot##add_s#", "#notnameendingroot#", "#notnameendingroot#", "#notnameendingroot#", "#notnameendingroot#" ],

"notnameendingroot":[
"#eventsoractions#",
"#itemsandtools#",
"#building#",
"#abstract_nouns#",
"#naturalfeatures#",
"#supernatural#",
"#ecclesiastical#",
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
"#colours#",
"#slang#",
"#rudewords#",
"#existing_names#"
],

"eventsoractions":["burn","hang","war","battle","meet", "lunch", "mulch","fight","reave","fall", "leap", "preach", "melt", "crush", "fair", "graze", "rob", "harvest", "raid", "tack", "hunt", "poach", "steal", "theft", "crop", "winnow", "cast", "tumble", "crash", "chop", "swing", "squabble", "jape", "joke", "lost", "fallow",  "feast","teach","tort","taught", "borrow", "steal", "trial", "grow", "lend", "kill", "jest", "fool", "fall", "quarrel", "quibble", "quest", "range", "rub", "barter", "bruise", "cut", "slice", "chop", "fire", "quarry", "jibe", "goss", "jill","dance","sing","play","work","tease","trip","tell", "taste", "sip", "try", "cross", "kill", "fill", "sit", "war", "pick", "duel", "force", "bully", "belt", "mash", "squash", "crush", "grind", "powder", "puff", "rule", "order", "tax", "writ", "write", "pine", "quiz", "quell", "loath", "touch", "shoot", "loose", "lob", "punt", "yeet", "drill", "dig", "point", "learn", "felch", "reach", "rhyme", "babble", "gabble", "gibber", "serve", "beg", "bore", "weep", "grieve", "stitch", "sew", "groove", "shape", "bicker", "crave", "rust", "clean", "curve", "trump", "cheat", "swindle", "furnish", "grovel", "simper", "sell", "scriven", "forge", "fire", "hammer", "grasp", "mill", "sack", "soak", "rest","stream","zeal","yeal","wheel","stoney","throat","haugh"],

"numbers":[""],

"character":["knave", "squire", "knight", "lord","beggar", "butcher", "baker", "don", "monger", "king", "queen", "duke", "earl", "fiddler", "fletcher", "judge", "tinker", "gipsy", "gypsy", "pilgrim", "villain", "burgher", "jury", "prince", "slave", "juror", "hunter", "beater", "keeper", "guide", "maid", "fool", "farmer", "sailor", "soldier", "thief", "lord", "man", "wife", "husband", "cryer", "lighter", "toll", "seller", "gaoler", "jail", "pauper", "doctor", "knocker", "crofter", "free", "chum", "wright", "chap", "whelp"],

"slang":["wallop"],

"bodilyfunction":["cough","sneeze","drip","step","sleep", "boast", "cry",  "groan", "die", "starve", "thirst", "eat", "hand", "touch", "grab", "burp", "belch","whistle","foot", "hoot", "cackle", "yelp", "draw", "whisper", "flex", "stretch", "yawn", "hear", "wince", "gurn", "grill", "tip", "kick", "nudge", "note", "break", "smash", "slash", "strangle", "stab", "gurgle", "squeak", "sigh", "huff", "flounce", "tantrum", "mark", "join", "clasp", "grip", "drown", "slap", "shank", "fry", "cook", "turn", "boil", "lie", "frisk", "wheedle", "simper", "suck", "bake", "mend", "cock", "blood", "tear", "spit", "sick", "ill", "fame"],

"ecclesiastical":["sister", "abbot", "canon", "charter", "child", "temple",  "friar", "abbey", "altar", "brother", "church", "cross", "apse","nave","altar","shrine","monk", "holy", "christ", "chris", "angel", "devil", "god", "alms", "lease", "fiddle", "saint", "pit", "aisle", "thorn", "pray", "grave"],

"from_rest":["ash","wick","rick","ladder","holt", "twist", "mark", "bed", "head","moor","mere","bridge","mile","bar","ten","hurst","hirst","by","bi","neck","tox","pox","sox","dox","fox","hox","lox","box","mast","horn","hurl","dray","cott","barn","stoke","coombe","combe","chester","caster","bore","ham","gran","hen","berk","birk","beck","den","dean","dale","holm","dun","seed","well","kiln","field","cant","purl","youth","roll","war","wort","wirt","wing","nut","tole","toll","night","day","leave","blew","blow","mink","monk","honk","queen","duke","latch","maul","growl","pell","mell", "firth","bight", "hun", "hell", "mist", "must", "thirst", "hunger","wrath","wroth","rage","sniff","grunt","hawk","spit","bellow","spittle","pot","pit","pet","belt","grin","fist","cough", "hott", "rink",  "flip", "whoop", "slip", "funge", "gel", "paste", "russet", "murk", "fen", "fag", "crag", "lick", "lap", "finger", "pulse", "lake", "pond", "purse", "oak", "mince", "pea", "stone", "chat", "chin", "vest", "string", "grease", "grond", "george", "ox", "fret", "first", "silt", "bog", "brook", "heck", "foot", "toe", "fig", "burp", "belch", "pert", "perf", "hoop", "wool", "moll", "fort", "eel", "grub", "yeast", "burn", "purple", "meddle", "drape", "grope", "cant",  "horse", "donk", "scare", "snare", "lair", "scutch","grange", "grant", "gravel", "grass", "halt", "wheel", "wild","quarter","quart","hold","sin","star","short","tall","slay","spark","ditch","ship","boat","rope","hang","sand","barley","rye","ergot","round","rough","rotten","roach","nest","range","mange","quarrel", "bullock","mercury","dog","pudding","pardon","flutter","peace","pease","pax","pap","Pith","pale","payne","pain","organ","nod","nook","old","thumb","muscle","air","lust","bush","lace","marsh","cox","india","leak","long","bone","knit","king","kill","key","knock","knight","knave","fall","rise","tump","corpse","cold","hot","swine","pen","kin","inch","hope","ease","eaze","hedge","cold","cheap","lonely","brack","dew","camp","crux","gowt","farth","frith","fridd","brad","berg","berry","ball"],

"add_s":["s"],

"times":["night","day","light","dark","eve","morning","old","new", "morn", "late", "early", "dawn", "dusk"],

"food":["milk","butter","cheese","meat","beer","bread","radish","sprout","cutlet","roll","pie","cake","wine","pudding","jam","honey","crisp","pop","quince","apple","plum","damson","pear","cider", "weed","beef", "egg", "mutton", "lamb", "eel","salt","pepper", "beer", "yeast", "barm", "wine", "grape", "berry", "pip", "sugar", "flour", "meal", "lunch", "dinner", "fast", "grain", "cream", "wort"],

"abstract_nouns":["love","all","pride","hope","grace","envy","lust","anger","rage","wrath","faith","pine","keen","regret","ever","harm", "health", "hale", "wish", "will", "worry", "fear", "peace", "calm", "grief", "sorrow", "pain", "hurt", "loss", "sin", "pity", "joy", "thrill"],

"itemsandtools":["plane","lace","mill","axe","hoop","stick","brush","pan","rake","riddle","chisel","charm","tang", "grain", "thresh", "scythe", "winnow","bow", "bell", "boat", "coach", "knife", "cudge", "rattle", "spade", "silk", "sword", "gun", "cannon", "net", "staff", "stick", "drum", "rein", "bridle", "griddle", "glass", "cotton", "cloth", "twill", "seat", "chair", "hearth", "poker", "lamp", "pot", "bench", "book", "frame", "wax", "candle", "taper", "oil", "grist", "gravel", "yield", "shield", "pack", "lawn", "knap"],

"existing_names":[""],

"building":["court", "mill", "church","tower","barn","gran","bridge", "span", "cellar", "orchard", "bar", "hall", "manor", "cloister", "bath", "wall", "gate", "lock", "fence", "ferry", "inn", "croft", "cott","moat", "farm", "hospital", "spital", "castle", "keep", "yard", "paddock", "stable", "pen", "fold", "home", "house"],

"naturalfeatures":["river","hill","beck","burn","rill","brook","mount","heather","elm","beech","oak","ash","thorn","sun","moon","star","rime","bloom","broom","flower","gorse","rock","stone","scree","iron","holly","ivy","vine","birch","box","hop", "spring", "field", "wool", "willow", "hazel", "spring", "meadow","wind", "breeze","tree","light","edge","scree", "fern", "fish", "flax", "bone", "wool", "bank", "branch", "root", "leaf", "twig", "corn", "crown", "bog", "common", "grove", "graze", "knoll", "moss", "dirt", "soil", "mud", "sea", "shore", "beach", "rock", "down", "frost", "leave", "pool","weather"],

"dimensions":["long","short","far","near","tall","short","shallow","deep","thin","fat","round","broad","wide","top","bottom"],

"directions":["north", "south", "east", "west","up", "down", "left", "right"],

"supernatural":["hob","pock","angel","imp", "ghoul", "ghast", "skull", "ghost", "hang", "noose", "knell", "witch", "warg", "hag", "hound", "spell", "curse", "charm"],

"oldnames":["algar", "alston", "archer", "ashton", "carl", "edd", "horsa", "eric", "ribert", "wini", "wilfred", "wuther", "wutha"],
//old english etc.

"newnames":["george"],
//new kings and queens

"biblical":[""],

"rudewords":[""],

"numbers":["one", "two", "three", "once", "twice", "thrice", "four", "five", "six", "seven", "eight", "nine", "ten", "many", "few", "most", "least"],

"adjectives":["bleak","blind","burnt","hungry","cold"],

"clothing":["shoe", "hood", "cloak", "stock", "stocking", "hose", "trouser", "shirt", "blouse", "lace", "button", "wimple", "robe", "boot"],

"animals":["fox","hare","coney","bat","roe","boar","bear","wolf","palfrey","steed","charger","deer","bee","fly","cod","herring","ling","mouse","beetle","hornet","wasp","gull","whelp","pup","dog","hound","crake","owl","otter", "goose", "char", "cod", "ling", "hake", "macker", "badger", "fly", "flea", "bug", "eagle", "heron"],
//fauna britannica (around empire)

"colours":["red", "brown", "green","yellow", "dun", "dark", "light", "blue", "gold", "silver", "rud", "burnt" ,"white", "russet", "taupe", "black", "tan", "tinge", "shade"]
});

grammar.addModifiers(baseEngModifiers);

return grammar.flatten("#notnameending#");
}

//----------------------------------------------------

function generatenameEnding() {

var grammar = tracery.createGrammar({

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

"land", "way", "wey", "broad", "ward", "heath", "swathe", "riot", "toll", "fell", "water",

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

"sash",
"weather",

"corn","glow","marsh","week","gang","shaw","acre","quay","market","more","court","sea","horn","ray","vey","toft","ter","door","dore","mor","coat","hole","gutter","age","acre","firth","burn","hoe","sey","mead","camp","compe","dean","den","don"
]
});
grammar.addModifiers(baseEngModifiers);
return grammar.flatten("#name_ending#");
}

//--------------------------------------------------------

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

function generateName(clausenumber, wordnumber) {

//Reset the array.
finalwordConstructor.length = 0;

//Cycle through as many words as are required.
for (i = 0; i < wordnumber; i++) {
//Create/reset variables for holding the current word.
wordconstructor.length = 0;
currentWord = "";
chosenending = "";

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
return finalwordConstructor.join("");
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
return rand;
}

//------------------------------------------------------

function optionalMutations(entry, position) {

vowels = ["a", "e", "i", "o", "u"];
consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
namearray = entry.split("");

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

//---------------------------------------

//Chance to remove doubled letters.

var previousLetter = "";

if (percentageChance(20)) {
for (i=0; i < namearray.length; i++) {
previousLetter = namearray[i - 1];
if (previousLetter == namearray[i]) {
console.log("(" + entry + "): " + "Removed doubled letters: " + namearray[i] + ".");
namearray.splice(i,1);
}
}

}

//---------------------------------------

//Add a 'y' to a single clause.

if (namearray.length < 7) {
  if (percentageChance(35)) {
    namearray.push("y");
    console.log("(" + entry + "): " + "Added a 'y' to a single clause name.")
  }
}

//------------------------------------------

//Chance to swap vowels.
if (percentageChance(20)) {

//Choose a vowel, and find it in the name. If it isn't there, choose another.
while (namearray.includes(voweltocheck) != true && namearray.length > 0) {
var voweltocheck = vowels[randomChoiceFromArray(vowels)];
}

//Substitute it for another.
var vowelpos = namearray.indexOf(voweltocheck);
var vowelsub = vowels[randomChoiceFromArray(vowels)];
namearray[vowelpos] = vowelsub;
console.log("(" + entry + "): " + "Substituted " + voweltocheck + " for " + vowelsub + " at position " + vowelpos + ".");
}

//------------------------------------------

//Chance to swap consonants.
if (percentageChance(20)) {

//Choose a consonant, and find it in the name. If it isn't there, choose another.
while (namearray.includes(consonanttocheck) != true) {
var consonanttocheck = consonants[randomChoiceFromArray(consonants)];
}

//Substitute it for another.
var conpos = namearray.indexOf(consonanttocheck);
var consub = consonants[randomChoiceFromArray(consonants)];
namearray[conpos] = consub;
console.log("(" + entry + "): " + "Substituted " + consonanttocheck + " for " + consub + " at position " + conpos + ".");
}

//------------------------------------------

//Chance to change a vowel or consonant (Lenition and fortition)

if (percentageChance(20)) {

var swapchart1 = ["t","p","v","z","e","a","i","o","u","e","b","c","f","f","n","p","t","i"];
var swapchart2 = ["d","b","f","s","a","e","e","u","o","i","v","g","h","th","m","f","ght","y"];
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

//Swap one of the letters at random.

var chartoswap = randomChoiceFromArray(swapsinname);
var originalpos = namearray.indexOf(swapsinname[chartoswap]);

namearray[originalpos] = sinswap[chartoswap];

console.log("(" + entry + "): " + "Lenition/Fortition: Swapped " + swapsinname[chartoswap] + " for " + namearray[originalpos]);
}

//------------------------------------------

//Chance for an addition of a vowel or consonant. (Epenthesis)

if (percentageChance(20)) {

var vowelorcon = ["v","c"];
var epenchoice = vowelorcon[randomChoiceFromArray(vowelorcon)];


// ADDING A VOWEL
if (epenchoice == "v") {

console.log("Epenthesis: adding a vowel.")

//Reset the vowel.
voweltocheck = "";

//Choose a vowel, and find it in the name. If it isn't there, choose another.
while (namearray.includes(voweltocheck) != true && namearray.length > 0) {
var voweltocheck = vowels[randomChoiceFromArray(vowels)];
}

//Get the position in the array of the chosen vowel, and then double, replacing the original with the doubled entry.
var vowelpos2 = namearray.indexOf(voweltocheck);
var vowelinsert = voweltocheck + voweltocheck;
namearray[vowelpos2] = vowelinsert;

console.log("(" + entry + "): " + "Doubled " + voweltocheck + ".");

// ADDING A CONSONANT
} else if (epenchoice == "c") {

console.log ("Epenthesis: adding a consonant.")

//Reset the consonant.
consonanttocheck = "";

//Choose a consonant, and find it in the name. If it isn't there, choose another.
while (namearray.includes(consonanttocheck) != true && namearray.length > 0) {
var consonanttocheck = consonants[randomChoiceFromArray(consonants)];
}

//Get the position in the array of the chosen consonant, and then double, replacing the original with the doubled entry.
var conpos2 = namearray.indexOf(consonanttocheck);
var coninsert = consonanttocheck + consonanttocheck;
namearray[conpos2] = coninsert;
console.log("(" + entry + "): " + "Doubled " + consonanttocheck + ".");
}
}


//Chance to remove a vowel or consonant. (Elision)

if (percentageChance(20)) {

var vowelorcon = ["v","c"];
var elchoice = vowelorcon[randomChoiceFromArray(vowelorcon)];

if (elchoice == "v") {

console.log("Elision: removing a vowel.");

//Reset the vowel.
voweltocheck = "";
//Choose a vowel, and find it in the name. If it isn't there, choose another.

while (namearray.includes(voweltocheck) != true && namearray.length > 0) {
voweltocheck = vowels[randomChoiceFromArray(vowels)];
}

//Replace the chosen entry with an empty string.
var vowelpos3 = namearray.indexOf(voweltocheck);
namearray[vowelpos3] = "";
console.log("(" + entry + "): " + "Removed " + voweltocheck + ".");

} else if (elchoice == "c") {

  console.log("Elision: removing a vowel.");

//Reset the consonant.
consonanttocheck = "";
//Choose a consonant, and find it in the name. If it isn't there, choose another.
while (namearray.includes(consonanttocheck) != true && namearray.length > 0) {
consonanttocheck = consonants[randomChoiceFromArray(consonants)];
}

//Replace the chosen entry with an empty string.
var conpos3 = namearray.indexOf(consonanttocheck);
namearray[conpos3] = "";
console.log("(" + entry + "): " + "Removed " + consonanttocheck + ".");
}
}

//Put the name array back into a string.
var putbackentry = namearray.join("");
placenamepool[position] = putbackentry;

}

//--------------------------------------------------

function nameVariants() {

var chance2 = Math.floor(Math.random() * 28) + 1;

switch (chance2) {

case 1:
console.log("Chosen a Latin name variant.");
// LATIN
var variantArray = [finaloneword + " Parva", finaloneword + "Magna", finaloneword + " Superior", finaloneword + " Regis", finaloneword + " Episcopi", finaloneword + " Abbas", finaloneword + " Abbey", finaloneword + "-cum-" + finaloneword2];
return variantArray[randomChoiceFromArray(variantArray)];
break;

case 2:
console.log("Chosen a holy name variant.");
//HOLY
var holyName = ["Mary","Matthew", "Mark", "Luke", "John", "Judas", "Joseph", "Cuthbert", "Bernice", "Sarah", "Rebecca", "Swithin"];
var holyNameFinal = holyName[randomChoiceFromArray(holyName)];
variantArray = ["St. " + holyNameFinal, finaloneword + " St. " + holyNameFinal, "Saint " + finaloneword, "Saint " + holyNameFinal];
return variantArray[randomChoiceFromArray(variantArray)];
break;

case 3:
//PORT
console.log("Chosen a Port name variant.");
return "Port " + finaloneword;
break;

case 4:
console.log("Chosen a Royal name variant.");
//ROYAL
var royalNames = ["Royal " + finaloneword, "Royal " + finaloneword, "Royal " + finaltwoword];
return royalNames[randomChoiceFromArray(royalNames)];
break;

case 5:
console.log("Chosen a Size & Position name variant.");
//SIZE & POSITION
var sizeNames = ["Great " + finaloneword, "Little " + finaloneword, "Upper " + finaloneword, "Lower " + finaloneword, "Middle " + finaloneword, "Outer " + finaloneword, "Inner " + finaloneword];
return sizeNames[randomChoiceFromArray(sizeNames)];
break;

case 6:
console.log("Chosen a under/over name variant.");
return finaloneword + "-under-" + finalsmallword;
break;

case 7:
console.log("Chosen a under/over name variant.");
return finaloneword + "-over-" + finalsmallword;
break;

case 8:
console.log("Chosen a under/over name variant.");
return finaloneword + "-beside-" + finalsmallword;
break;

case 9:
console.log("Chosen a under/over name variant.");
return finaloneword + "-upon-" + finalsmallword;
break;

case 10:
console.log("Chosen a under/over name variant.");
return finaloneword + "-on-the-" + finalsmallword;
break;

case 11:
console.log("Chosen a under/over name variant.");
return finaloneword + "-by-the-" + finalsmallword;
break;

case 12:
console.log("Chosen a under/over name variant.");
return finaloneword + "-in-the-" + finalsmallword;
break;

case 13:
console.log("Chosen a under/over name variant.");
return finaloneword + "-across-the-" + finalsmallword;
break;

case 14:
console.log("Chosen a under/over name variant.");
return finalsmallword + "ing " + finaloneword;
break;

case 15:
console.log("Chosen a village name variant.");
return finaloneword + " Village";
break;

case 16:
console.log("Chosen a town name variant.");
return finaloneword + " Town";
break;

case 17:
console.log("Chosen a green name variant.");
return finaloneword + " Green";
break;

case 18:
console.log("Chosen a station name variant.");
return finaloneword + " Station";
break;

case 19:
console.log("Chosen a road name variant.");
return finaloneword + " Road";
break;

case 20:
console.log("Chosen a castle name variant.");
return finaloneword + " Castle";
break;

case 21:
console.log("Chosen a castle name variant.");
return "Castle " + finaloneword;
break;

case 22:
console.log("Chosen a hill name variant.");
return finaloneword + " Hill";
break;

case 23:
console.log("Chosen an island name variant.");
return finaloneword + " Island";
break;

case 24:
console.log("Chosen a water name variant.");
return finaloneword + " Water";
break;

case 25:
console.log("Chosen a heath name variant.");
return finaloneword + " Heath";
break;

case 26:
console.log("Chosen a valley name variant.");
return finaloneword + " Valley";
break;

case 27:
console.log("Chosen an end name variant.");
return finaloneword + " End";
break;

case 28:
console.log("Chosen an isle of name variant.");
return "Isle Of " + finalsmallword;
break;

case 29:
console.log("Chosen an park name variant.");
return finaloneword + " Park";
break;

case 30:
console.log("Chosen an nether name variant.");
return "Nether " + finaloneword;
break;

case 31:
console.log("Chosen an pond name variant.");
return finaloneword + " Pond";
break;

case 32:
console.log("Chosen an corner name variant.");
return finaloneword + " Corner";
break;

case 3:
console.log("Chosen an house name variant.");
return finaloneword + " House";
break;



default:
break;
}
}
