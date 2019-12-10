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


"events":[],

"names":[],

"naturalfeatures":[],

"animals":[],

"supernatural":[],

"ecclesiastical":["sister", "abbot", "canon", "charter", "child", "temple", "friar","abbey","brother",],

"colours":["red","green","yellow","dun","dark","light","blue","gold","silver","rud","burnt","white", "black","tan"],

"dimensions":["long","short","far","near","tall","short","shallow","deep","thin","fat"],

"directions":["north", "south", "east", "west","up","down"],

"add_s":["s"],


// ----------------------------------------------------------------------

"name_ending":[
"ash", "beech", "beach",

"earth","read",

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

"spleen", "van", "car", "scar", "scree", "hill", "hull", "ville", "field",

"ley", "gey", "gay", "ridge", "forth", "worth", "cross", "age", "notch", "worthy, "loo",

"stake", "gate", "door", "leap", "jump", "park", "strike", "fast", "rock", "slick", "slury",
"lip", "candle", "hunt", "shunt", "tall", "fall", "gall", "end", "start",

"north", "south", "east", "west",
]











all the variants
swapping out consonants
en-le
group them by type.
chapel
"n_firstpart":[
"ash","ast","wick","ladder","holt","bur","bir","ber","tren","mar","bed","head","mor","mer","ton","bridge","mil","bar","ten","tun","hurst","hirst","by","bi","car","neck","fil","ley","lee","mast","horn","hurl","dray","cott","barn","arn","stoke","car","coombe","combe","chester","caster","bor","bore","ham","gran","hen","moor","burn","birn","berk","birk","beck","den","dean","dale","holm","dun", "seed","well","hob","foss","kin","ness","nor","feald","cant","thorn","pirl","purl","youl","roll","wor","war","wer","wort","wirt","wing","nut","tole","toll",

"tox","pox","sox","dox","fox","hox","lox","box",

"night","ched","chud","bis","bes","blew","blow","mink","monk","queens","dukes","latch","morking","melling","bigh","hen","hun","hel","mist","must","rill","thirst","wrath","wroth","rage","snif","grunt","hawk","spit","spittle","pot","pit","pet","belt","grin","fist","cough","sniff", "blew", "hott", "rink", "bilge", "bligh", "vell", "flip", "whoop", "slip", "funge", "gel", "paste", "hawk", "russ", "murk", "fen", "hors", "fag", "lick", "lap", "finger", "pulse", "river", "lake", "pond", "purs", "oak", "mince", "pea", "stone", "chat", "chin", "vest", "string", "grese", "grond", "phil", "george", "tarquin", "ux", "ox", "oxo", "toll", "stix", "vell", "frell", "fret", "frett", "first", "honk", "silt", "bog", "brook", "heck", "foot", "toe", "vig", "fig", "burp", "belch", "purt", "pert", "perf", "hoop", "wool", "cott", "mell", "moll", "fort", "eil", "grub", "yeast", "burn", "vert",  "green", "red", "russ", "purple", "meddle", "drape", "grope", "cant", "feg", "blow", "horse", "donk", "scare", "snare", "slair", "scutt", "futt", "blunch", "lunch", "tidd", "con", "cock", "shel", "mast"],





});

grammar.addModifiers(baseEngModifiers);
var placename = grammar.flatten("#placenamefinal#");
$('#placestext').text(placename);
});
