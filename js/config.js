/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.04
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/dir-logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
        "backgrounds/images/w1.jpg",
	"backgrounds/images/w2.jpg",
	"backgrounds/images/w3.jpg",
	"backgrounds/images/w4.jpg",
	"backgrounds/images/w5.jpg",
	"backgrounds/images/w6.jpg",
	"backgrounds/images/w7.jpg",
	"backgrounds/images/w8.jpg",
	"backgrounds/images/w9.jpg"
	
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 20000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 3000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "E4UxwO4kxX4", name: "TS - There's A Candle Burning Bright"},
	{youtube: "ChD-IWPRxsA", name: "TS - The Generals Never Listen"},
	{youtube: "F9fNOPwqa4g", name: "TS - The Sailor's Life For Me"},
	{youtube: "ltUXJmUc8tM", name: "O du Deutschland, Ich muß Marschieren"},
	{youtube: "sImy_hQ8Jvk", name: "HM II, 145 VDHM - Unsere Marine"}

];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 10;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"They've won the war that ended all wars. -American President Woodrow Wilson",
"As a soldier I survived the World War when most of my comrades did not. -Cpl Lester B Pearson",
"Give me a woman who really loves beer and and I will conquer the world... -Kaiser Wilhelm II",
"I have a slight attraction to Panzerwagens... -Kürassier Adolf Karlheinz",
"Break the chains! Down with the Kaiser! -British Syndicalist Roland Rorrow",
"I always fancied Georgy but he wanted this war. -Kaiser Wilhelm II",
"America should be first and always first. -Huey Long Leader of America First Union Party",
"The independence of France will always be at risk if Germany is allowed to live. -French Head of State Sébastien Faure",
"Germany will always be the pinnacle of mankind. -Feldwebel Adolf Hitler",
"Czar Nicholaas is only fit to live in a country house and grow turnips. -Kaiser Wilhelm II",
"But how? Oy vey! -Chaim Goldstein Commercial Bank Owner"

];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 10000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 2000;
