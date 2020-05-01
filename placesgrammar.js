var nameendingpool = [];
var notnameendingpool = [];
var currentmutpos = 0;
var clausepoolsize = 30;
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

// Reload page if needed.

$('#refreshbutton').click(function(){
window.location.reload();
});

//Display resize function.
var pageHeight = $('html').height();
var pageWidth = $('body').width();
var portHeight = $(window).height();
var portWidth = $(window).width();
console.log(pageHeight + ", " + pageWidth);
console.log(portHeight + ", " + portWidth);

if (portHeight < pageHeight
|| portWidth < pageWidth)
{
$('#arrows').css(
"display", "block"
);
}

$('#refreshbutton').hover(function(){
$('#refreshbutton span').css({
"transform": "rotate(180deg)"});
}, function() {
$('#refreshbutton span').css({
"transform": "rotate(0deg)"});
});

//Get the current year
  $("#year").text( (new Date).getFullYear());

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
  console.log("Name Ending");
  console.log(nameendingpool[k]);
  console.log("Not Name Ending");
  console.log(notnameendingpool[k]);
}

console.log("All name element pools generated.");

console.log("//---------------------------- OPTIONAL MUTATIONS")

//Cycle through each of the possible names, applying mutations to them.
for (o = 0; o < notnameendingpool.length; o++) {
  console.log("Attempt to mutate " + notnameendingpool[o].toString());
  notnameendingpool[o] = optionalMutations(notnameendingpool[o]);
  console.log("After mutations: " + notnameendingpool[o].toString());

}

console.log("//---------------------------- NAME POOL GENERATION");

// Take random name endings and notnameendings from the pools, and construct a pool of name types, making sure that elements are not repeated wholesale in names.

//Generate a small word, of one clause.

smallword = generateName(1, 1);

//Generate a word with one to three clauses.

if (percentageChance(20)) {
oneword = generateName(1,1);
} else if (percentageChance(75)) {
oneword = generateName(2,1);
} else {
oneword = generateName(3,1);
oneword = optionalMutations(oneword);
}

//Repeat to retrieve a second word.

if (percentageChance(20)) {
oneword2 = generateName(1,1);
} else if (percentageChance(75)) {
oneword2 = generateName(2,1);
} else {
oneword2 = generateName(3,1);
oneword2 = optionalMutations(oneword2);
}

//Generate two words.

if (percentageChance(50)) {
twowords  = generateName(2,2);
twowords = optionalMutations(twowords);
} else {
twowords  = generateName(1,2);
}

// Place finalised names into an array.
placenamepool.push(smallword);
placenamepool.push(oneword);
placenamepool.push(oneword2);
placenamepool.push(twowords);

finalsmallword = smallword.capitalize();
finaloneword = oneword.capitalize();
finaloneword2 = oneword2.capitalize();
finaltwoword = twowords.capitalize();


console.log("Final name elements (with mutations): " + finalsmallword + ", " + finaloneword + ", " + finaloneword2 + ", " + finaltwoword + ", Nighthead.");

console.log("//---------------------------- CONSTRUCTING FINAL NAME")

//Pick a final name, either: one word, two words, small word, one of the 'variants', or Nighthead.

var chance = Math.floor(Math.random() * 13) + 1;

switch (chance) {
case 1:
placenamefinal = finalsmallword;

case 2:
case 3:
case 4:
case 5:
placenamefinal = finaloneword;
break;

case 6:
case 7:
placenamefinal = finaltwoword;
break;

case 8:
placenamefinal = finalsmallword;
break;

case 9:
case 10:
case 11:
case 12:
placenamefinal = nameVariants()
break;

case 13:
placenamefinal = "Nighthead";
break;

default:
placenamefinal = "randomiser not working";
break;
}


//Put the name into the DOM.
console.log("Final name is " + placenamefinal + ".");

document.getElementById('placenamerepo').value = placenamefinal;
});

//=========================================================


// FUNCTIONS

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
"plane","lace","mill","axe","hoop","stick","brush","pan","rake","riddle","chisel","charm","tang", "grain", "thresh", "scythe", "winnow","bow", "bell", "boat", "coach", "knife", "cudge", "rattle", "spade", "silk", "sword", "gun", "cannon", "net", "staff", "stick", "drum", "rein", "bridle", "griddle", "glass", "cotton", "cloth", "twill", "seat", "chair", "hearth", "poker", "lamp", "pot", "bench", "book", "frame", "wax", "candle", "taper", "oil", "grist", "gravel", "yield", "shield", "pack", "lawn", "knap","whisk", "cart", "wagon", "bindle", "creel", "bobbin", "shuttle", "trowel", "loom", "rule", "dagger", "tray", "fork", "spoon", "whisk", "book", "glass", "hook", "maul", "mattock", "spear", "cane", "whip", "switch", "van", "dupe", "oar", "paddle", "light", "wicker", "coal", "door", "shoe", "scoop", "mat", "step", "axe", "harp", "pipe", "lute", "mace", "crook", "byre", "cosh", "shelf", "loft", "yard", "fetch", "coin", "purse", "belt", "brace", "hook", "board", "saw", "sickle", "slide", "scale", "weight", "rein", "rug", "bed", "chest", "coffer", "thread", "needle", "crock", "doil", "trench", "ewer", "jug", "soap", "lye", "brush", "rod", "net", "fly", "drink", "meal", "lunch", "supper", "tea",

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

function generatenameEnding() {

var grammar = tracery.createGrammar({

"name_ending":[
"ash", "beech", "beach",

"earth","court","meet","moot","moat",

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

function optionalMutations(entry) {

vowels = ["a", "e", "i", "o", "u"];
consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
namearray = entry.split("");
console.log(namearray);


//--------------------------------------

//Add a 'y' to a single clause.

if (namearray.length < 6) {
  if (percentageChance(35)) {
    namearray.push("y");
    console.log("(" + entry + "): " + "Added a 'y' to a single clause name.")
  }
}

//------------------------------------------

//Chance to swap vowels.
if (percentageChance(20)) {

voweltocheck = "";

//Choose a vowel, and find it in the name. If it isn't there, choose another.
while (namearray.includes(voweltocheck) == false) {
var voweltocheck = vowels[randomChoiceFromArray(vowels)];
if (namearray.length === 0) {
break;
}
}

//Substitute it for another.
var vowelpos = namearray.indexOf(voweltocheck);
var vowelsub = vowels[randomChoiceFromArray(vowels)];
namearray[vowelpos] = vowelsub;
console.log("(" + entry + "): " + "Substituted " + voweltocheck + " for " + vowelsub + " at position " + vowelpos + ".");
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

//--------------------------------------

//Put the name array back into a string.

var putbackentry = namearray.join("");
return putbackentry;
}
//--------------------------------------------------

function nameVariants() {

var chance2 = Math.floor(Math.random() * 34) + 1;

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

case 33:
console.log("Chosen an house name variant.");
return finaloneword + " House";
break;

case 34:
console.log("Chosen a Direction name variant.");
// LATIN
var variantArray1 = [finaloneword, finaloneword2];
var variantArray2 = ["East", "West", "North", "South"];
return variantArray1[randomChoiceFromArray(variantArray1)] + " " + variantArray2[randomChoiceFromArray(variantArray2)];
break;

default:
break;
}
}
