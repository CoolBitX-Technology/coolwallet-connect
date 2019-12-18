export const type = (text) => {
  const regNumber = /[0-9]/
  const regEng = /[a-z]/
  let seedType
  if(regNumber.test(text)&& regEng.test(text)){
    //error!
    seedType = 'mixed'
  }else if(regNumber.test(text)){
      seedType = 'number'
  }else{
      seedType = 'letters'
  }
  return seedType
}

export const linearSearh = (text, array) => {
	for (let element of array) {
		if (text === element) {
			return true;
		}
	}
	return false;
};

export const validateNmemonic = (mnemonic, array) => {
  return mnemonic.split(' ')
    .map((char) => linearSearh(char, array))
    .some((x) => {
      if (x === false ) {
        return false;
      }
      return true;
    })
}

export const validateLength = (mnemonic) => {
  if(mnemonic.split(' ').length >= 12 ){
    return true
  }
  return false
}

export const letters = ["abandon",
"ability",
"able",
"about",
"above",
"absent",
"absorb",
"abstract",
"absurd",
"abuse",
"access",
"accident",
"account",
"accuse",
"achieve",
"acid",
"acoustic",
"acquire",
"across",
"act",
"action",
"actor",
"actress",
"actual",
"adapt",
"add",
"addict",
"address",
"adjust",
"admit",
"adult",
"advance",
"advice",
"aerobic",
"affair",
"afford",
"afraid",
"again",
"age",
"agent",
"agree",
"ahead",
"aim",
"air",
"airport",
"aisle",
"alarm",
"album",
"alcohol",
"alert",
"alien",
"all",
"alley",
"allow",
"almost",
"alone",
"alpha",
"already",
"also",
"alter",
"always",
"amateur",
"amazing",
"among",
"amount",
"amused",
"analyst",
"anchor",
"ancient",
"anger",
"angle",
"angry",
"animal",
"ankle",
"announce",
"annual",
"another",
"answer",
"antenna",
"antique",
"anxiety",
"any",
"apart",
"apology",
"appear",
"apple",
"approve",
"april",
"arch",
"arctic",
"area",
"arena",
"argue",
"arm",
"armed",
"armor",
"army",
"around",
"arrange",
"arrest",
"arrive",
"arrow",
"art",
"artefact",
"artist",
"artwork",
"ask",
"aspect",
"assault",
"asset",
"assist",
"assume",
"asthma",
"athlete",
"atom",
"attack",
"attend",
"attitude",
"attract",
"auction",
"audit",
"august",
"aunt",
"author",
"auto",
"autumn",
"average",
"avocado",
"avoid",
"awake",
"aware",
"away",
"awesome",
"awful",
"awkward",
"axis",
"baby",
"bachelor",
"bacon",
"badge",
"bag",
"balance",
"balcony",
"ball",
"bamboo",
"banana",
"banner",
"bar",
"barely",
"bargain",
"barrel",
"base",
"basic",
"basket",
"battle",
"beach",
"bean",
"beauty",
"because",
"become",
"beef",
"before",
"begin",
"behave",
"behind",
"believe",
"below",
"belt",
"bench",
"benefit",
"best",
"betray",
"better",
"between",
"beyond",
"bicycle",
"bid",
"bike",
"bind",
"biology",
"bird",
"birth",
"bitter",
"black",
"blade",
"blame",
"blanket",
"blast",
"bleak",
"bless",
"blind",
"blood",
"blossom",
"blouse",
"blue",
"blur",
"blush",
"board",
"boat",
"body",
"boil",
"bomb",
"bone",
"bonus",
"book",
"boost",
"border",
"boring",
"borrow",
"boss",
"bottom",
"bounce",
"box",
"boy",
"bracket",
"brain",
"brand",
"brass",
"brave",
"bread",
"breeze",
"brick",
"bridge",
"brief",
"bright",
"bring",
"brisk",
"broccoli",
"broken",
"bronze",
"broom",
"brother",
"brown",
"brush",
"bubble",
"buddy",
"budget",
"buffalo",
"build",
"bulb",
"bulk",
"bullet",
"bundle",
"bunker",
"burden",
"burger",
"burst",
"bus",
"business",
"busy",
"butter",
"buyer",
"buzz",
"cabbage",
"cabin",
"cable",
"cactus",
"cage",
"cake",
"call",
"calm",
"camera",
"camp",
"can",
"canal",
"cancel",
"candy",
"cannon",
"canoe",
"canvas",
"canyon",
"capable",
"capital",
"captain",
"car",
"carbon",
"card",
"cargo",
"carpet",
"carry",
"cart",
"case",
"cash",
"casino",
"castle",
"casual",
"cat",
"catalog",
"catch",
"category",
"cattle",
"caught",
"cause",
"caution",
"cave",
"ceiling",
"celery",
"cement",
"census",
"century",
"cereal",
"certain",
"chair",
"chalk",
"champion",
"change",
"chaos",
"chapter",
"charge",
"chase",
"chat",
"cheap",
"check",
"cheese",
"chef",
"cherry",
"chest",
"chicken",
"chief",
"child",
"chimney",
"choice",
"choose",
"chronic",
"chuckle",
"chunk",
"churn",
"cigar",
"cinnamon",
"circle",
"citizen",
"city",
"civil",
"claim",
"clap",
"clarify",
"claw",
"clay",
"clean",
"clerk",
"clever",
"click",
"client",
"cliff",
"climb",
"clinic",
"clip",
"clock",
"clog",
"close",
"cloth",
"cloud",
"clown",
"club",
"clump",
"cluster",
"clutch",
"coach",
"coast",
"coconut",
"code",
"coffee",
"coil",
"coin",
"collect",
"color",
"column",
"combine",
"come",
"comfort",
"comic",
"common",
"company",
"concert",
"conduct",
"confirm",
"congress",
"connect",
"consider",
"control",
"convince",
"cook",
"cool",
"copper",
"copy",
"coral",
"core",
"corn",
"correct",
"cost",
"cotton",
"couch",
"country",
"couple",
"course",
"cousin",
"cover",
"coyote",
"crack",
"cradle",
"craft",
"cram",
"crane",
"crash",
"crater",
"crawl",
"crazy",
"cream",
"credit",
"creek",
"crew",
"cricket",
"crime",
"crisp",
"critic",
"crop",
"cross",
"crouch",
"crowd",
"crucial",
"cruel",
"cruise",
"crumble",
"crunch",
"crush",
"cry",
"crystal",
"cube",
"culture",
"cup",
"cupboard",
"curious",
"current",
"curtain",
"curve",
"cushion",
"custom",
"cute",
"cycle",
"dad",
"damage",
"damp",
"dance",
"danger",
"daring",
"dash",
"daughter",
"dawn",
"day",
"deal",
"debate",
"debris",
"decade",
"december",
"decide",
"decline",
"decorate",
"decrease",
"deer",
"defense",
"define",
"defy",
"degree",
"delay",
"deliver",
"demand",
"demise",
"denial",
"dentist",
"deny",
"depart",
"depend",
"deposit",
"depth",
"deputy",
"derive",
"describe",
"desert",
"design",
"desk",
"despair",
"destroy",
"detail",
"detect",
"develop",
"device",
"devote",
"diagram",
"dial",
"diamond",
"diary",
"dice",
"diesel",
"diet",
"differ",
"digital",
"dignity",
"dilemma",
"dinner",
"dinosaur",
"direct",
"dirt",
"disagree",
"discover",
"disease",
"dish",
"dismiss",
"disorder",
"display",
"distance",
"divert",
"divide",
"divorce",
"dizzy",
"doctor",
"document",
"dog",
"doll",
"dolphin",
"domain",
"donate",
"donkey",
"donor",
"door",
"dose",
"double",
"dove",
"draft",
"dragon",
"drama",
"drastic",
"draw",
"dream",
"dress",
"drift",
"drill",
"drink",
"drip",
"drive",
"drop",
"drum",
"dry",
"duck",
"dumb",
"dune",
"during",
"dust",
"dutch",
"duty",
"dwarf",
"dynamic",
"eager",
"eagle",
"early",
"earn",
"earth",
"easily",
"east",
"easy",
"echo",
"ecology",
"economy",
"edge",
"edit",
"educate",
"effort",
"egg",
"eight",
"either",
"elbow",
"elder",
"electric",
"elegant",
"element",
"elephant",
"elevator",
"elite",
"else",
"embark",
"embody",
"embrace",
"emerge",
"emotion",
"employ",
"empower",
"empty",
"enable",
"enact",
"end",
"endless",
"endorse",
"enemy",
"energy",
"enforce",
"engage",
"engine",
"enhance",
"enjoy",
"enlist",
"enough",
"enrich",
"enroll",
"ensure",
"enter",
"entire",
"entry",
"envelope",
"episode",
"equal",
"equip",
"era",
"erase",
"erode",
"erosion",
"error",
"erupt",
"escape",
"essay",
"essence",
"estate",
"eternal",
"ethics",
"evidence",
"evil",
"evoke",
"evolve",
"exact",
"example",
"excess",
"exchange",
"excite",
"exclude",
"excuse",
"execute",
"exercise",
"exhaust",
"exhibit",
"exile",
"exist",
"exit",
"exotic",
"expand",
"expect",
"expire",
"explain",
"expose",
"express",
"extend",
"extra",
"eye",
"eyebrow",
"fabric",
"face",
"faculty",
"fade",
"faint",
"faith",
"fall",
"false",
"fame",
"family",
"famous",
"fan",
"fancy",
"fantasy",
"farm",
"fashion",
"fat",
"fatal",
"father",
"fatigue",
"fault",
"favorite",
"feature",
"february",
"federal",
"fee",
"feed",
"feel",
"female",
"fence",
"festival",
"fetch",
"fever",
"few",
"fiber",
"fiction",
"field",
"figure",
"file",
"film",
"filter",
"final",
"find",
"fine",
"finger",
"finish",
"fire",
"firm",
"first",
"fiscal",
"fish",
"fit",
"fitness",
"fix",
"flag",
"flame",
"flash",
"flat",
"flavor",
"flee",
"flight",
"flip",
"float",
"flock",
"floor",
"flower",
"fluid",
"flush",
"fly",
"foam",
"focus",
"fog",
"foil",
"fold",
"follow",
"food",
"foot",
"force",
"forest",
"forget",
"fork",
"fortune",
"forum",
"forward",
"fossil",
"foster",
"found",
"fox",
"fragile",
"frame",
"frequent",
"fresh",
"friend",
"fringe",
"frog",
"front",
"frost",
"frown",
"frozen",
"fruit",
"fuel",
"fun",
"funny",
"furnace",
"fury",
"future",
"gadget",
"gain",
"galaxy",
"gallery",
"game",
"gap",
"garage",
"garbage",
"garden",
"garlic",
"garment",
"gas",
"gasp",
"gate",
"gather",
"gauge",
"gaze",
"general",
"genius",
"genre",
"gentle",
"genuine",
"gesture",
"ghost",
"giant",
"gift",
"giggle",
"ginger",
"giraffe",
"girl",
"give",
"glad",
"glance",
"glare",
"glass",
"glide",
"glimpse",
"globe",
"gloom",
"glory",
"glove",
"glow",
"glue",
"goat",
"goddess",
"gold",
"good",
"goose",
"gorilla",
"gospel",
"gossip",
"govern",
"gown",
"grab",
"grace",
"grain",
"grant",
"grape",
"grass",
"gravity",
"great",
"green",
"grid",
"grief",
"grit",
"grocery",
"group",
"grow",
"grunt",
"guard",
"guess",
"guide",
"guilt",
"guitar",
"gun",
"gym",
"habit",
"hair",
"half",
"hammer",
"hamster",
"hand",
"happy",
"harbor",
"hard",
"harsh",
"harvest",
"hat",
"have",
"hawk",
"hazard",
"head",
"health",
"heart",
"heavy",
"hedgehog",
"height",
"hello",
"helmet",
"help",
"hen",
"hero",
"hidden",
"high",
"hill",
"hint",
"hip",
"hire",
"history",
"hobby",
"hockey",
"hold",
"hole",
"holiday",
"hollow",
"home",
"honey",
"hood",
"hope",
"horn",
"horror",
"horse",
"hospital",
"host",
"hotel",
"hour",
"hover",
"hub",
"huge",
"human",
"humble",
"humor",
"hundred",
"hungry",
"hunt",
"hurdle",
"hurry",
"hurt",
"husband",
"hybrid",
"ice",
"icon",
"idea",
"identify",
"idle",
"ignore",
"ill",
"illegal",
"illness",
"image",
"imitate",
"immense",
"immune",
"impact",
"impose",
"improve",
"impulse",
"inch",
"include",
"income",
"increase",
"index",
"indicate",
"indoor",
"industry",
"infant",
"inflict",
"inform",
"inhale",
"inherit",
"initial",
"inject",
"injury",
"inmate",
"inner",
"innocent",
"input",
"inquiry",
"insane",
"insect",
"inside",
"inspire",
"install",
"intact",
"interest",
"into",
"invest",
"invite",
"involve",
"iron",
"island",
"isolate",
"issue",
"item",
"ivory",
"jacket",
"jaguar",
"jar",
"jazz",
"jealous",
"jeans",
"jelly",
"jewel",
"job",
"join",
"joke",
"journey",
"joy",
"judge",
"juice",
"jump",
"jungle",
"junior",
"junk",
"just",
"kangaroo",
"keen",
"keep",
"ketchup",
"key",
"kick",
"kid",
"kidney",
"kind",
"kingdom",
"kiss",
"kit",
"kitchen",
"kite",
"kitten",
"kiwi",
"knee",
"knife",
"knock",
"know",
"lab",
"label",
"labor",
"ladder",
"lady",
"lake",
"lamp",
"language",
"laptop",
"large",
"later",
"latin",
"laugh",
"laundry",
"lava",
"law",
"lawn",
"lawsuit",
"layer",
"lazy",
"leader",
"leaf",
"learn",
"leave",
"lecture",
"left",
"leg",
"legal",
"legend",
"leisure",
"lemon",
"lend",
"length",
"lens",
"leopard",
"lesson",
"letter",
"level",
"liar",
"liberty",
"library",
"license",
"life",
"lift",
"light",
"like",
"limb",
"limit",
"link",
"lion",
"liquid",
"list",
"little",
"live",
"lizard",
"load",
"loan",
"lobster",
"local",
"lock",
"logic",
"lonely",
"long",
"loop",
"lottery",
"loud",
"lounge",
"love",
"loyal",
"lucky",
"luggage",
"lumber",
"lunar",
"lunch",
"luxury",
"lyrics",
"machine",
"mad",
"magic",
"magnet",
"maid",
"mail",
"main",
"major",
"make",
"mammal",
"man",
"manage",
"mandate",
"mango",
"mansion",
"manual",
"maple",
"marble",
"march",
"margin",
"marine",
"market",
"marriage",
"mask",
"mass",
"master",
"match",
"material",
"math",
"matrix",
"matter",
"maximum",
"maze",
"meadow",
"mean",
"measure",
"meat",
"mechanic",
"medal",
"media",
"melody",
"melt",
"member",
"memory",
"mention",
"menu",
"mercy",
"merge",
"merit",
"merry",
"mesh",
"message",
"metal",
"method",
"middle",
"midnight",
"milk",
"million",
"mimic",
"mind",
"minimum",
"minor",
"minute",
"miracle",
"mirror",
"misery",
"miss",
"mistake",
"mix",
"mixed",
"mixture",
"mobile",
"model",
"modify",
"mom",
"moment",
"monitor",
"monkey",
"monster",
"month",
"moon",
"moral",
"more",
"morning",
"mosquito",
"mother",
"motion",
"motor",
"mountain",
"mouse",
"move",
"movie",
"much",
"muffin",
"mule",
"multiply",
"muscle",
"museum",
"mushroom",
"music",
"must",
"mutual",
"myself",
"mystery",
"myth",
"naive",
"name",
"napkin",
"narrow",
"nasty",
"nation",
"nature",
"near",
"neck",
"need",
"negative",
"neglect",
"neither",
"nephew",
"nerve",
"nest",
"net",
"network",
"neutral",
"never",
"news",
"next",
"nice",
"night",
"noble",
"noise",
"nominee",
"noodle",
"normal",
"north",
"nose",
"notable",
"note",
"nothing",
"notice",
"novel",
"now",
"nuclear",
"number",
"nurse",
"nut",
"oak",
"obey",
"object",
"oblige",
"obscure",
"observe",
"obtain",
"obvious",
"occur",
"ocean",
"october",
"odor",
"off",
"offer",
"office",
"often",
"oil",
"okay",
"old",
"olive",
"olympic",
"omit",
"once",
"one",
"onion",
"online",
"only",
"open",
"opera",
"opinion",
"oppose",
"option",
"orange",
"orbit",
"orchard",
"order",
"ordinary",
"organ",
"orient",
"original",
"orphan",
"ostrich",
"other",
"outdoor",
"outer",
"output",
"outside",
"oval",
"oven",
"over",
"own",
"owner",
"oxygen",
"oyster",
"ozone",
"pact",
"paddle",
"page",
"pair",
"palace",
"palm",
"panda",
"panel",
"panic",
"panther",
"paper",
"parade",
"parent",
"park",
"parrot",
"party",
"pass",
"patch",
"path",
"patient",
"patrol",
"pattern",
"pause",
"pave",
"payment",
"peace",
"peanut",
"pear",
"peasant",
"pelican",
"pen",
"penalty",
"pencil",
"people",
"pepper",
"perfect",
"permit",
"person",
"pet",
"phone",
"photo",
"phrase",
"physical",
"piano",
"picnic",
"picture",
"piece",
"pig",
"pigeon",
"pill",
"pilot",
"pink",
"pioneer",
"pipe",
"pistol",
"pitch",
"pizza",
"place",
"planet",
"plastic",
"plate",
"play",
"please",
"pledge",
"pluck",
"plug",
"plunge",
"poem",
"poet",
"point",
"polar",
"pole",
"police",
"pond",
"pony",
"pool",
"popular",
"portion",
"position",
"possible",
"post",
"potato",
"pottery",
"poverty",
"powder",
"power",
"practice",
"praise",
"predict",
"prefer",
"prepare",
"present",
"pretty",
"prevent",
"price",
"pride",
"primary",
"print",
"priority",
"prison",
"private",
"prize",
"problem",
"process",
"produce",
"profit",
"program",
"project",
"promote",
"proof",
"property",
"prosper",
"protect",
"proud",
"provide",
"public",
"pudding",
"pull",
"pulp",
"pulse",
"pumpkin",
"punch",
"pupil",
"puppy",
"purchase",
"purity",
"purpose",
"purse",
"push",
"put",
"puzzle",
"pyramid",
"quality",
"quantum",
"quarter",
"question",
"quick",
"quit",
"quiz",
"quote",
"rabbit",
"raccoon",
"race",
"rack",
"radar",
"radio",
"rail",
"rain",
"raise",
"rally",
"ramp",
"ranch",
"random",
"range",
"rapid",
"rare",
"rate",
"rather",
"raven",
"raw",
"razor",
"ready",
"real",
"reason",
"rebel",
"rebuild",
"recall",
"receive",
"recipe",
"record",
"recycle",
"reduce",
"reflect",
"reform",
"refuse",
"region",
"regret",
"regular",
"reject",
"relax",
"release",
"relief",
"rely",
"remain",
"remember",
"remind",
"remove",
"render",
"renew",
"rent",
"reopen",
"repair",
"repeat",
"replace",
"report",
"require",
"rescue",
"resemble",
"resist",
"resource",
"response",
"result",
"retire",
"retreat",
"return",
"reunion",
"reveal",
"review",
"reward",
"rhythm",
"rib",
"ribbon",
"rice",
"rich",
"ride",
"ridge",
"rifle",
"right",
"rigid",
"ring",
"riot",
"ripple",
"risk",
"ritual",
"rival",
"river",
"road",
"roast",
"robot",
"robust",
"rocket",
"romance",
"roof",
"rookie",
"room",
"rose",
"rotate",
"rough",
"round",
"route",
"royal",
"rubber",
"rude",
"rug",
"rule",
"run",
"runway",
"rural",
"sad",
"saddle",
"sadness",
"safe",
"sail",
"salad",
"salmon",
"salon",
"salt",
"salute",
"same",
"sample",
"sand",
"satisfy",
"satoshi",
"sauce",
"sausage",
"save",
"say",
"scale",
"scan",
"scare",
"scatter",
"scene",
"scheme",
"school",
"science",
"scissors",
"scorpion",
"scout",
"scrap",
"screen",
"script",
"scrub",
"sea",
"search",
"season",
"seat",
"second",
"secret",
"section",
"security",
"seed",
"seek",
"segment",
"select",
"sell",
"seminar",
"senior",
"sense",
"sentence",
"series",
"service",
"session",
"settle",
"setup",
"seven",
"shadow",
"shaft",
"shallow",
"share",
"shed",
"shell",
"sheriff",
"shield",
"shift",
"shine",
"ship",
"shiver",
"shock",
"shoe",
"shoot",
"shop",
"short",
"shoulder",
"shove",
"shrimp",
"shrug",
"shuffle",
"shy",
"sibling",
"sick",
"side",
"siege",
"sight",
"sign",
"silent",
"silk",
"silly",
"silver",
"similar",
"simple",
"since",
"sing",
"siren",
"sister",
"situate",
"six",
"size",
"skate",
"sketch",
"ski",
"skill",
"skin",
"skirt",
"skull",
"slab",
"slam",
"sleep",
"slender",
"slice",
"slide_in",
"slight",
"slim",
"slogan",
"slot",
"slow",
"slush",
"small",
"smart",
"smile",
"smoke",
"smooth",
"snack",
"snake",
"snap",
"sniff",
"snow",
"soap",
"soccer",
"social",
"sock",
"soda",
"soft",
"solar",
"soldier",
"solid",
"solution",
"solve",
"someone",
"song",
"soon",
"sorry",
"sort",
"soul",
"sound",
"soup",
"source",
"south",
"space",
"spare",
"spatial",
"spawn",
"speak",
"special",
"speed",
"spell",
"spend",
"sphere",
"spice",
"spider",
"spike",
"spin",
"spirit",
"split",
"spoil",
"sponsor",
"spoon",
"sport",
"spot",
"spray",
"spread",
"spring",
"spy",
"square",
"squeeze",
"squirrel",
"stable",
"stadium",
"staff",
"stage",
"stairs",
"stamp",
"stand",
"start",
"state",
"stay",
"steak",
"steel",
"stem",
"step",
"stereo",
"stick",
"still",
"sting",
"stock",
"stomach",
"stone",
"stool",
"story",
"stove",
"strategy",
"street",
"strike",
"strong",
"struggle",
"student",
"stuff",
"stumble",
"style",
"subject",
"submit",
"subway",
"success",
"such",
"sudden",
"suffer",
"sugar",
"suggest",
"suit",
"summer",
"sun",
"sunny",
"sunset",
"super",
"supply",
"supreme",
"sure",
"surface",
"surge",
"surprise",
"surround",
"survey",
"suspect",
"sustain",
"swallow",
"swamp",
"swap",
"swarm",
"swear",
"sweet",
"swift",
"swim",
"swing",
"switch",
"sword",
"symbol",
"symptom",
"syrup",
"system",
"table",
"tackle",
"tag",
"tail",
"talent",
"talk",
"tank",
"tape",
"target",
"task",
"taste",
"tattoo",
"taxi",
"teach",
"team",
"tell",
"ten",
"tenant",
"tennis",
"tent",
"term",
"test",
"text",
"thank",
"that",
"theme",
"then",
"theory",
"there",
"they",
"thing",
"this",
"thought",
"three",
"thrive",
"throw",
"thumb",
"thunder",
"ticket",
"tide",
"tiger",
"tilt",
"timber",
"time",
"tiny",
"tip",
"tired",
"tissue",
"title",
"toast",
"tobacco",
"today",
"toddler",
"toe",
"together",
"toilet",
"token",
"tomato",
"tomorrow",
"tone",
"tongue",
"tonight",
"tool",
"tooth",
"top",
"topic",
"topple",
"torch",
"tornado",
"tortoise",
"toss",
"total",
"tourist",
"toward",
"tower",
"town",
"toy",
"track",
"trade",
"traffic",
"tragic",
"train",
"transfer",
"trap",
"trash",
"travel",
"tray",
"treat",
"tree",
"trend",
"trial",
"tribe",
"trick",
"trigger",
"trim",
"trip",
"trophy",
"trouble",
"truck",
"true",
"truly",
"trumpet",
"trust",
"truth",
"try",
"tube",
"tuition",
"tumble",
"tuna",
"tunnel",
"turkey",
"turn",
"turtle",
"twelve",
"twenty",
"twice",
"twin",
"twist",
"two",
"type",
"typical",
"ugly",
"umbrella",
"unable",
"unaware",
"uncle",
"uncover",
"under",
"undo",
"unfair",
"unfold",
"unhappy",
"uniform",
"unique",
"unit",
"universe",
"unknown",
"unlock",
"until",
"unusual",
"unveil",
"update",
"upgrade",
"uphold",
"upon",
"upper",
"upset",
"urban",
"urge",
"usage",
"use",
"used",
"useful",
"useless",
"usual",
"utility",
"vacant",
"vacuum",
"vague",
"valid",
"valley",
"valve",
"van",
"vanish",
"vapor",
"various",
"vast",
"vault",
"vehicle",
"velvet",
"vendor",
"venture",
"venue",
"verb",
"verify",
"version",
"very",
"vessel",
"veteran",
"viable",
"vibrant",
"vicious",
"victory",
"video",
"view",
"village",
"vintage",
"violin",
"virtual",
"virus",
"visa",
"visit",
"visual",
"vital",
"vivid",
"vocal",
"voice",
"void",
"volcano",
"volume",
"vote",
"voyage",
"wage",
"wagon",
"wait",
"walk",
"wall",
"walnut",
"want",
"warfare",
"warm",
"warrior",
"wash",
"wasp",
"waste",
"water",
"wave",
"way",
"wealth",
"weapon",
"wear",
"weasel",
"weather",
"web",
"wedding",
"weekend",
"weird",
"welcome",
"west",
"wet",
"whale",
"what",
"wheat",
"wheel",
"when",
"where",
"whip",
"whisper",
"wide",
"width",
"wife",
"wild",
"will",
"win",
"window",
"wine",
"wing",
"wink",
"winner",
"winter",
"wire",
"wisdom",
"wise",
"wish",
"witness",
"wolf",
"woman",
"wonder",
"wood",
"wool",
"word",
"work",
"world",
"worry",
"worth",
"wrap",
"wreck",
"wrestle",
"wrist",
"write",
"wrong",
"yard",
"year",
"yellow",
"you",
"young",
"youth",
"zebra",
"zero",
"zone",
"zoo"
];

export const number = [
  "00001","00049","00097","00145","00193","00241","00289","00337","00385","00433","00481","00529","00577","00625","00673","00721","00769","00817","00865","00913","00961","01009","01057","01105","01153","01201","01249","01297","01345","01393","01441","01489","01537","01585","01633","01681","01729","01777","01825","01873","01921","01969","02017","02065","02113","02161","02209","02257","02305","02353","02401","02449","02497","02545","02593","02641","02689","02737","02785","02833","02881","02929","02977","03025","03073","03121","03169","03217","03265","03313","03361","03409","03457","03505","03553","03601","03649","03697","03745","03793","03841","03889","03937","03985","04033","04081","04129","04177","04225","04273","04321","04369","04417","04465","04513","04561","04609","04657","04705","04753","04801","04849","04897","04945","04993","05041","05089","05137","05185","05233","05281","05329","05377","05425","05473","05521","05569","05617","05665","05713","05761","05809","05857","05905","05953","06001","06049","06097","06145","06193","06241","06289","06337","06385","06433","06481","06529","06577","06625","06673","06721","06769","06817","06865","06913","06961","07009","07057","07105","07153","07201","07249","07297","07345","07393","07441","07489","07537","07585","07633","07681","07729","07777","07825","07873","07921","07969","08017","08065","08113","08161","08209","08257","08305","08353","08401","08449","08497","08545","08593","08641","08689","08737","08785","08833","08881","08929","08977","09025","09073","09121","09169","09217","09265","09313","09361","09409","09457","09505","09553","09601","09649","09697","09745","09793","09841","09889","09937","09985","10033","10081","10129","10177","10225","10273","10321","10369","10417","10465","10513","10561","10609","10657","10705","10753","10801","10849","10897","10945","10993","11041","11089","11137","11185","11233","11281","11329","11377","11425","11473","11521","11569","11617","11665","11713","11761","11809","11857","11905","11953","12001","12049","12097","12145","12193","12241","12289","12337","12385","12433","12481","12529","12577","12625","12673","12721","12769","12817","12865","12913","12961","13009","13057","13105","13153","13201","13249","13297","13345","13393","13441","13489","13537","13585","13633","13681","13729","13777","13825","13873","13921","13969","14017","14065","14113","14161","14209","14257","14305","14353","14401","14449","14497","14545","14593","14641","14689","14737","14785","14833","14881","14929","14977","15025","15073","15121","15169","15217","15265","15313","15361","15409","15457","15505","15553","15601","15649","15697","15745","15793","15841","15889","15937","15985","16033","16081","16129","16177","16225","16273","16321","16369","16417","16465","16513","16561","16609","16657","16705","16753","16801","16849","16897","16945","16993","17041","17089","17137","17185","17233","17281","17329","17377","17425","17473","17521","17569","17617","17665","17713","17761","17809","17857","17905","17953","18001","18049","18097","18145","18193","18241","18289","18337","18385","18433","18481","18529","18577","18625","18673","18721","18769","18817","18865","18913","18961","19009","19057","19105","19153","19201","19249","19297","19345","19393","19441","19489","19537","19585","19633","19681","19729","19777","19825","19873","19921","19969","20017","20065","20113","20161","20209","20257","20305","20353","20401","20449","20497","20545","20593","20641","20689","20737","20785","20833","20881","20929","20977","21025","21073","21121","21169","21217","21265","21313","21361","21409","21457","21505","21553","21601","21649","21697","21745","21793","21841","21889","21937","21985","22033","22081","22129","22177","22225","22273","22321","22369","22417","22465","22513","22561","22609","22657","22705","22753","22801","22849","22897","22945","22993","23041","23089","23137","23185","23233","23281","23329","23377","23425","23473","23521","23569","23617","23665","23713","23761","23809","23857","23905","23953","24001","24049","24097","24145","24193","24241","24289","24337","24385","24433","24481","24529","24577","24625","24673","24721","24769","24817","24865","24913","24961","25009","25057","25105","25153","25201","25249","25297","25345","25393","25441","25489","25537","25585","25633","25681","25729","25777","25825","25873","25921","25969","26017","26065","26113","26161","26209","26257","26305","26353","26401","26449","26497","26545","26593","26641","26689","26737","26785","26833","26881","26929","26977","27025","27073","27121","27169","27217","27265","27313","27361","27409","27457","27505","27553","27601","27649","27697","27745","27793","27841","27889","27937","27985","28033","28081","28129","28177","28225","28273","28321","28369","28417","28465","28513","28561","28609","28657","28705","28753","28801","28849","28897","28945","28993","29041","29089","29137","29185","29233","29281","29329","29377","29425","29473","29521","29569","29617","29665","29713","29761","29809","29857","29905","29953","30001","30049","30097","30145","30193","30241","30289","30337","30385","30433","30481","30529","30577","30625","30673","30721","30769","30817","30865","30913","30961","31009","31057","31105","31153","31201","31249","31297","31345","31393","31441","31489","31537","31585","31633","31681","31729","31777","31825","31873","31921","31969","32017","32065","32113","32161","32209","32257","32305","32353","32401","32449","32497","32545","32593","32641","32689","32737","32785","32833","32881","32929","32977","33025","33073","33121","33169","33217","33265","33313","33361","33409","33457","33505","33553","33601","33649","33697","33745","33793","33841","33889","33937","33985","34033","34081","34129","34177","34225","34273","34321","34369","34417","34465","34513","34561","34609","34657","34705","34753","34801","34849","34897","34945","34993","35041","35089","35137","35185","35233","35281","35329","35377","35425","35473","35521","35569","35617","35665","35713","35761","35809","35857","35905","35953","36001","36049","36097","36145","36193","36241","36289","36337","36385","36433","36481","36529","36577","36625","36673","36721","36769","36817","36865","36913","36961","37009","37057","37105","37153","37201","37249","37297","37345","37393","37441","37489","37537","37585","37633","37681","37729","37777","37825","37873","37921","37969","38017","38065","38113","38161","38209","38257","38305","38353","38401","38449","38497","38545","38593","38641","38689","38737","38785","38833","38881","38929","38977","39025","39073","39121","39169","39217","39265","39313","39361","39409","39457","39505","39553","39601","39649","39697","39745","39793","39841","39889","39937","39985","40033","40081","40129","40177","40225","40273","40321","40369","40417","40465","40513","40561","40609","40657","40705","40753","40801","40849","40897","40945","40993","41041","41089","41137","41185","41233","41281","41329","41377","41425","41473","41521","41569","41617","41665","41713","41761","41809","41857","41905","41953","42001","42049","42097","42145","42193","42241","42289","42337","42385","42433","42481","42529","42577","42625","42673","42721","42769","42817","42865","42913","42961","43009","43057","43105","43153","43201","43249","43297","43345","43393","43441","43489","43537","43585","43633","43681","43729","43777","43825","43873","43921","43969","44017","44065","44113","44161","44209","44257","44305","44353","44401","44449","44497","44545","44593","44641","44689","44737","44785","44833","44881","44929","44977","45025","45073","45121","45169","45217","45265","45313","45361","45409","45457","45505","45553","45601","45649","45697","45745","45793","45841","45889","45937","45985","46033","46081","46129","46177","46225","46273","46321","46369","46417","46465","46513","46561","46609","46657","46705","46753","46801","46849","46897","46945","46993","47041","47089","47137","47185","47233","47281","47329","47377","47425","47473","47521","47569","47617","47665","47713","47761","47809","47857","47905","47953","48001","48049","48097","48145","48193","48241","48289","48337","48385","48433","48481","48529","48577","48625","48673","48721","48769","48817","48865","48913","48961","49009","49057","49105","49153","49201","49249","49297","49345","49393","49441","49489","49537","49585","49633","49681","49729","49777","49825","49873","49921","49969","50017","50065","50113","50161","50209","50257","50305","50353","50401","50449","50497","50545","50593","50641","50689","50737","50785","50833","50881","50929","50977","51025","51073","51121","51169","51217","51265","51313","51361","51409","51457","51505","51553","51601","51649","51697","51745","51793","51841","51889","51937","51985","52033","52081","52129","52177","52225","52273","52321","52369","52417","52465","52513","52561","52609","52657","52705","52753","52801","52849","52897","52945","52993","53041","53089","53137","53185","53233","53281","53329","53377","53425","53473","53521","53569","53617","53665","53713","53761","53809","53857","53905","53953","54001","54049","54097","54145","54193","54241","54289","54337","54385","54433","54481","54529","54577","54625","54673","54721","54769","54817","54865","54913","54961","55009","55057","55105","55153","55201","55249","55297","55345","55393","55441","55489","55537","55585","55633","55681","55729","55777","55825","55873","55921","55969","56017","56065","56113","56161","56209","56257","56305","56353","56401","56449","56497","56545","56593","56641","56689","56737","56785","56833","56881","56929","56977","57025","57073","57121","57169","57217","57265","57313","57361","57409","57457","57505","57553","57601","57649","57697","57745","57793","57841","57889","57937","57985","58033","58081","58129","58177","58225","58273","58321","58369","58417","58465","58513","58561","58609","58657","58705","58753","58801","58849","58897","58945","58993","59041","59089","59137","59185","59233","59281","59329","59377","59425","59473","59521","59569","59617","59665","59713","59761","59809","59857","59905","59953","60001","60049","60097","60145","60193","60241","60289","60337","60385","60433","60481","60529","60577","60625","60673","60721","60769","60817","60865","60913","60961","61009","61057","61105","61153","61201","61249","61297","61345","61393","61441","61489","61537","61585","61633","61681","61729","61777","61825","61873","61921","61969","62017","62065","62113","62161","62209","62257","62305","62353","62401","62449","62497","62545","62593","62641","62689","62737","62785","62833","62881","62929","62977","63025","63073","63121","63169","63217","63265","63313","63361","63409","63457","63505","63553","63601","63649","63697","63745","63793","63841","63889","63937","63985","64033","64081","64129","64177","64225","64273","64321","64369","64417","64465","64513","64561","64609","64657","64705","64753","64801","64849","64897","64945","64993","65041","65089","65137","65185","65233","65281","65329","65377","65425","65473","65521","65569","65617","65665","65713","65761","65809","65857","65905","65953","66001","66049","66097","66145","66193","66241","66289","66337","66385","66433","66481","66529","66577","66625","66673","66721","66769","66817","66865","66913","66961","67009","67057","67105","67153","67201","67249","67297","67345","67393","67441","67489","67537","67585","67633","67681","67729","67777","67825","67873","67921","67969","68017","68065","68113","68161","68209","68257","68305","68353","68401","68449","68497","68545","68593","68641","68689","68737","68785","68833","68881","68929","68977","69025","69073","69121","69169","69217","69265","69313","69361","69409","69457","69505","69553","69601","69649","69697","69745","69793","69841","69889","69937","69985","70033","70081","70129","70177","70225","70273","70321","70369","70417","70465","70513","70561","70609","70657","70705","70753","70801","70849","70897","70945","70993","71041","71089","71137","71185","71233","71281","71329","71377","71425","71473","71521","71569","71617","71665","71713","71761","71809","71857","71905","71953","72001","72049","72097","72145","72193","72241","72289","72337","72385","72433","72481","72529","72577","72625","72673","72721","72769","72817","72865","72913","72961","73009","73057","73105","73153","73201","73249","73297","73345","73393","73441","73489","73537","73585","73633","73681","73729","73777","73825","73873","73921","73969","74017","74065","74113","74161","74209","74257","74305","74353","74401","74449","74497","74545","74593","74641","74689","74737","74785","74833","74881","74929","74977","75025","75073","75121","75169","75217","75265","75313","75361","75409","75457","75505","75553","75601","75649","75697","75745","75793","75841","75889","75937","75985","76033","76081","76129","76177","76225","76273","76321","76369","76417","76465","76513","76561","76609","76657","76705","76753","76801","76849","76897","76945","76993","77041","77089","77137","77185","77233","77281","77329","77377","77425","77473","77521","77569","77617","77665","77713","77761","77809","77857","77905","77953","78001","78049","78097","78145","78193","78241","78289","78337","78385","78433","78481","78529","78577","78625","78673","78721","78769","78817","78865","78913","78961","79009","79057","79105","79153","79201","79249","79297","79345","79393","79441","79489","79537","79585","79633","79681","79729","79777","79825","79873","79921","79969","80017","80065","80113","80161","80209","80257","80305","80353","80401","80449","80497","80545","80593","80641","80689","80737","80785","80833","80881","80929","80977","81025","81073","81121","81169","81217","81265","81313","81361","81409","81457","81505","81553","81601","81649","81697","81745","81793","81841","81889","81937","81985","82033","82081","82129","82177","82225","82273","82321","82369","82417","82465","82513","82561","82609","82657","82705","82753","82801","82849","82897","82945","82993","83041","83089","83137","83185","83233","83281","83329","83377","83425","83473","83521","83569","83617","83665","83713","83761","83809","83857","83905","83953","84001","84049","84097","84145","84193","84241","84289","84337","84385","84433","84481","84529","84577","84625","84673","84721","84769","84817","84865","84913","84961","85009","85057","85105","85153","85201","85249","85297","85345","85393","85441","85489","85537","85585","85633","85681","85729","85777","85825","85873","85921","85969","86017","86065","86113","86161","86209","86257","86305","86353","86401","86449","86497","86545","86593","86641","86689","86737","86785","86833","86881","86929","86977","87025","87073","87121","87169","87217","87265","87313","87361","87409","87457","87505","87553","87601","87649","87697","87745","87793","87841","87889","87937","87985","88033","88081","88129","88177","88225","88273","88321","88369","88417","88465","88513","88561","88609","88657","88705","88753","88801","88849","88897","88945","88993","89041","89089","89137","89185","89233","89281","89329","89377","89425","89473","89521","89569","89617","89665","89713","89761","89809","89857","89905","89953","90001","90049","90097","90145","90193","90241","90289","90337","90385","90433","90481","90529","90577","90625","90673","90721","90769","90817","90865","90913","90961","91009","91057","91105","91153","91201","91249","91297","91345","91393","91441","91489","91537","91585","91633","91681","91729","91777","91825","91873","91921","91969","92017","92065","92113","92161","92209","92257","92305","92353","92401","92449","92497","92545","92593","92641","92689","92737","92785","92833","92881","92929","92977","93025","93073","93121","93169","93217","93265","93313","93361","93409","93457","93505","93553","93601","93649","93697","93745","93793","93841","93889","93937","93985","94033","94081","94129","94177","94225","94273","94321","94369","94417","94465","94513","94561","94609","94657","94705","94753","94801","94849","94897","94945","94993","95041","95089","95137","95185","95233","95281","95329","95377","95425","95473","95521","95569","95617","95665","95713","95761","95809","95857","95905","95953","96001","96049","96097","96145","96193","96241","96289","96337","96385","96433","96481","96529","96577","96625","96673","96721","96769","96817","96865","96913","96961","97009","97057","97105","97153","97201","97249","97297","97345","97393","97441","97489","97537","97585","97633","97681","97729","97777","97825","97873","97921","97969","98017","98065","98113","98161","98209","98257"

];
