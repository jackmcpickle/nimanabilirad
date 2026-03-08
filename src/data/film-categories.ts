import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/img/video-titles/**/*.jpg',
  { eager: true }
);

function img(path: string): ImageMetadata {
  const key = `/src/assets/img/video-titles${path}`;
  const result = images[key];
  if (!result) throw new Error(`Image not found: ${key}`);
  return result.default;
}

export interface FilmEntry {
  slug: string;
  title: string;
  thumbnail1: ImageMetadata;
  thumbnail2: ImageMetadata;
}

// Featured page
export const featured: FilmEntry[] = [
  {
    slug: "casio-x-sneaker-freaker-gshock-night-owl",
    title: "CASIO X SNEAKER FREAKER - GSHOCK NIGHT OWL",
    thumbnail1: img("/branded/CASIO1.jpg"),
    thumbnail2: img("/branded/CASIO2.jpg"),
  },
  {
    slug: "w-hotels-x-mixcloud-future-rising-kuala-lumpur",
    title: "W HOTELS X MIXCLOUD - FUTURE RISING KUALA LUMPUR",
    thumbnail1: img("/branded/HOTELS1.jpg"),
    thumbnail2: img("/branded/HOTELS2.jpg"),
  },
  {
    slug: "in-the-shadow-of-young-boys-in-flower",
    title: "IN THE SHADOW OF YOUNG BOYS IN FLOWER",
    thumbnail1: img("/shorts/SHADOW1.jpg"),
    thumbnail2: img("/shorts/SHADOW2.jpg"),
  },
  {
    slug: "a-history-of-liquid-paper-and-other-things",
    title: "A HISTORY OF LIQUID PAPER & OTHER THINGS (TEASER)",
    thumbnail1: img("/shorts/LIQUID1.jpg"),
    thumbnail2: img("/shorts/LIQUID2.jpg"),
  },
  {
    slug: "favored-nations-i-can-see-you",
    title: "FAVORED NATIONS - I CAN SEE YOU",
    thumbnail1: img("/music/NATIONS1.jpg"),
    thumbnail2: img("/music/NATIONS2.jpg"),
  },
  {
    slug: "odesza-higher-ground",
    title: "ODESZA - HIGHER GROUND",
    thumbnail1: img("/music/ODESZA1.jpg"),
    thumbnail2: img("/music/ODESZA2.jpg"),
  },
  {
    slug: "dickies-they-said-it-couldnt-be-done",
    title: "DICKIES - THEY SAID IT COULDN'T BE DONE",
    thumbnail1: img("/fashion/DICKIES1.jpg"),
    thumbnail2: img("/fashion/DICKIES2.jpg"),
  },
  {
    slug: "paolo-sebastian-the-sleeping-garden",
    title: "PAOLO SEBASTIAN - THE SLEEPING GARDEN",
    thumbnail1: img("/fashion/SLEEPING1.jpg"),
    thumbnail2: img("/fashion/SLEEPING2.jpg"),
  },
];

// Branded page 1
export const branded1: FilmEntry[] = [
  {
    slug: "casio-x-sneaker-freaker-gshock-night-owl",
    title: "CASIO X SNEAKER FREAKER - GSHOCK NIGHT OWL",
    thumbnail1: img("/branded/CASIO1.jpg"),
    thumbnail2: img("/branded/CASIO2.jpg"),
  },
  {
    slug: "w-hotels-x-mixcloud-future-rising-kuala-lumpur",
    title: "W HOTELS X MIXCLOUD - FUTURE RISING KUALA LUMPUR",
    thumbnail1: img("/branded/HOTELS1.jpg"),
    thumbnail2: img("/branded/HOTELS2.jpg"),
  },
  {
    slug: "mazda-mazda-2-tvc",
    title: "MAZDA - MAZDA 2 TVC",
    thumbnail1: img("/branded/MAZDA1.jpg"),
    thumbnail2: img("/branded/MAZDA2.jpg"),
  },
  {
    slug: "chu-chu-digital-content",
    title: "CHU CHU - DIGITAL CONTENT",
    thumbnail1: img("/branded/CHU1.jpg"),
    thumbnail2: img("/branded/CHU2.jpg"),
  },
  {
    slug: "reach-for-the-facts-opioids-tvc",
    title: "REACH FOR THE FACTS - OPIOIDS TVC",
    thumbnail1: img("/branded/OPIOIDS1.jpg"),
    thumbnail2: img("/branded/OPIOIDS2.jpg"),
  },
  {
    slug: "rosemount-winery-mv-collection",
    title: "ROSEMOUNT WINERY - MV COLLECTION",
    thumbnail1: img("/branded/ROSEMOUNT1.jpg"),
    thumbnail2: img("/branded/ROSEMOUNT2.jpg"),
  },
  {
    slug: "blk-mrkt-coffee",
    title: "BLK MRKT COFFEE",
    thumbnail1: img("/branded/BLKFILM1.jpg"),
    thumbnail2: img("/branded/BLKFILM2.jpg"),
  },
  {
    slug: "spriing-lifestyle-tvc",
    title: "SPRIING LIFESTYLE TVC",
    thumbnail1: img("/branded/SLTVC1.jpg"),
    thumbnail2: img("/branded/SLTVC2.jpg"),
  },
  {
    slug: "immerse-adl-trailer",
    title: "IMMERSE ADL TRAILER",
    thumbnail1: img("/branded/IMM1.jpg"),
    thumbnail2: img("/branded/IMM2.jpg"),
  },
  {
    slug: "w-hotels-x-mixcloud-future-rising-bangkok",
    title: "W HOTELS X MIXCLOUD - FUTURE RISING BANGKOK",
    thumbnail1: img("/branded/BANGKOK1.jpg"),
    thumbnail2: img("/branded/BANGKOK2.jpg"),
  },
  {
    slug: "empire-artist",
    title: "EMPIRE ARTIST - LAUNCH FILM",
    thumbnail1: img("/branded/EE1.jpg"),
    thumbnail2: img("/branded/EE2.jpg"),
  },
  {
    slug: "curious-grace-digital-content",
    title: "CURIOUS GRACE - ONLINE CONTENT",
    thumbnail1: img("/branded/GRACE1.jpg"),
    thumbnail2: img("/branded/GRACE2.jpg"),
  },
  {
    slug: "w-hotels-x-mixcloud-future-rising-guangzhou",
    title: "W HOTELS X MIXCLOUD - FUTURE RISING GUANGZHOU",
    thumbnail1: img("/branded/GUANGZHOU1.jpg"),
    thumbnail2: img("/branded/GUANGZHOU2.jpg"),
  },
  {
    slug: "spendless-shoes-online-campaign",
    title: "SPENDLESS SHOES - ONLINE CAMPAIGN",
    thumbnail1: img("/branded/SPENDLESS1.jpg"),
    thumbnail2: img("/branded/SPENDLESS2.jpg"),
  },
];

// Branded page 2
export const branded2: FilmEntry[] = [
  {
    slug: "w-hotels-x-mixcloud-future-rising-goa",
    title: "W HOTELS X MIXCLOUD - FUTURE RISING GOA",
    thumbnail1: img("/branded/GOA1.jpg"),
    thumbnail2: img("/branded/GOA2.jpg"),
  },
  {
    slug: "sala-2015-tvc",
    title: "SALA - 2015 TVC",
    thumbnail1: img("/branded/SALA1.jpg"),
    thumbnail2: img("/branded/SALA2.jpg"),
  },
  {
    slug: "sa-health-tvc",
    title: "SA Health - Stop The Spread TVC",
    thumbnail1: img("/branded/SA1.jpg"),
    thumbnail2: img("/branded/SA2.jpg"),
  },
];

// Shorts
export const shorts: FilmEntry[] = [
  {
    slug: "in-the-shadow-of-young-boys-in-flower",
    title: "IN THE SHADOW OF YOUNG BOYS IN FLOWER",
    thumbnail1: img("/shorts/SHADOW2.jpg"),
    thumbnail2: img("/shorts/SHADOW1.jpg"),
  },
  {
    slug: "a-history-of-liquid-paper-and-other-things",
    title: "A HISTORY OF LIQUID PAPER & OTHER THINGS (TEASER)",
    thumbnail1: img("/shorts/LIQUID1.jpg"),
    thumbnail2: img("/shorts/LIQUID2.jpg"),
  },
  {
    slug: "perspective",
    title: "PERSPECTIVE",
    thumbnail1: img("/shorts/PERSPECTIVE1.jpg"),
    thumbnail2: img("/shorts/PERSPECTIVE2.jpg"),
  },
  {
    slug: "the-earth-who-fell-to-girl",
    title: "THE EARTH WHO FELL TO GIRL",
    thumbnail1: img("/shorts/EARTH1.jpg"),
    thumbnail2: img("/shorts/EARTH2.jpg"),
  },
  {
    slug: "winter-in-america",
    title: "WINTER IN AMERICA",
    thumbnail1: img("/shorts/WINTER2.jpg"),
    thumbnail2: img("/shorts/WINTER1.jpg"),
  },
  {
    slug: "le-stade",
    title: "LE STADE",
    thumbnail1: img("/shorts/STADE1.jpg"),
    thumbnail2: img("/shorts/STADE2.jpg"),
  },
  {
    slug: "the-shimmering-depths-of-the-heart",
    title: "THE SHIMMERING DEPTHS OF THE HEART",
    thumbnail1: img("/shorts/DEPTHS1.jpg"),
    thumbnail2: img("/shorts/DEPTHS2.jpg"),
  },
  {
    slug: "vienna-waits-for-you",
    title: "VIENNA WAITS FOR YOU",
    thumbnail1: img("/shorts/VIENNA1.jpg"),
    thumbnail2: img("/shorts/VIENNA2.jpg"),
  },
  {
    slug: "journey-to-paris",
    title: "JOURNEY TO PARIS",
    thumbnail1: img("/shorts/JOURNEY1.jpg"),
    thumbnail2: img("/shorts/JOURNEY2.jpg"),
  },
  {
    slug: "beta",
    title: "BETA",
    thumbnail1: img("/shorts/BETA1.jpg"),
    thumbnail2: img("/shorts/BETA2.jpg"),
  },
];

// Music page 1
export const music1: FilmEntry[] = [
  {
    slug: "favored-nations-i-can-see-you",
    title: "FAVORED NATIONS - I CAN SEE YOU",
    thumbnail1: img("/music/NATIONS1.jpg"),
    thumbnail2: img("/music/NATIONS2.jpg"),
  },
  {
    slug: "odesza-higher-ground",
    title: "ODESZA - HIGHER GROUND",
    thumbnail1: img("/music/ODESZA1.jpg"),
    thumbnail2: img("/music/ODESZA2.jpg"),
  },
  {
    slug: "luke-million-archetype",
    title: "LUKE MILLION - ARCHETYPE",
    thumbnail1: img("/music/LUKE1.jpg"),
    thumbnail2: img("/music/LUKE2.jpg"),
  },
  {
    slug: "venus-ii-i-want-u-4-myself",
    title: "VENUS II - I WANT U 4 MYSELF",
    thumbnail1: img("/music/VENUS1.jpg"),
    thumbnail2: img("/music/VENUS2.jpg"),
  },
  {
    slug: "fortunes-501",
    title: "FORTUNES - 501'S",
    thumbnail1: img("/music/FORTUNES1.jpg"),
    thumbnail2: img("/music/FORTUNES2.jpg"),
  },
  {
    slug: "claptone-dear-life",
    title: "CLAPTONE - DEAR LIFE",
    thumbnail1: img("/music/CLAPTONE1.jpg"),
    thumbnail2: img("/music/CLAPTONE2.jpg"),
  },
  {
    slug: "tkay-maidza-24k",
    title: "TKAY MAIDZA - 24K",
    thumbnail1: img("/music/24K1.jpg"),
    thumbnail2: img("/music/24K2.jpg"),
  },
  {
    slug: "memphis-lk-letters-in-concrete",
    title: "MEMPHIS LK - LETTERS IN CONCRETE",
    thumbnail1: img("/music/MEMPHIS1.jpg"),
    thumbnail2: img("/music/MEMPHIS2.jpg"),
  },
  {
    slug: "tkay-maidza-you-sad",
    title: "TKAY MAIDZA - YOU SAD (THE SOUND LIVE PERFORMANCE)",
    thumbnail1: img("/music/SAD1.jpg"),
    thumbnail2: img("/music/SAD2.jpg"),
  },
  {
    slug: "parra-for-cuva-wicked-games",
    title: "PARRA FOR CUVA - WICKED GAMES",
    thumbnail1: img("/music/PARRA1.jpg"),
    thumbnail2: img("/music/PARRA2.jpg"),
  },
  {
    slug: "allday-feat-japanese-wallpaper-in-motion",
    title: "ALLDAY FEAT. JAPANESE WALLPAPER - IN MOTION",
    thumbnail1: img("/music/ALLDAY1.jpg"),
    thumbnail2: img("/music/ALLDAY2.jpg"),
  },
  {
    slug: "thomston-acid-rain",
    title: "THOMSTON - ACID RAIN",
    thumbnail1: img("/music/THOMSTON1.jpg"),
    thumbnail2: img("/music/THOMSTON2.jpg"),
  },
  {
    slug: "harts-power",
    title: "HARTS - POWER",
    thumbnail1: img("/music/HARTS1.jpg"),
    thumbnail2: img("/music/HARTS2.jpg"),
  },
  {
    slug: "oliver-heldens-melody",
    title: "OLIVER HELDENS - MELODY",
    thumbnail1: img("/music/OLIVER1.jpg"),
    thumbnail2: img("/music/OLIVER2.jpg"),
  },
  {
    slug: "dialect-despair-new-testament",
    title: "DIALECT & DESPAIR - NEW TESTAMENT",
    thumbnail1: img("/music/DIALECT1.jpg"),
    thumbnail2: img("/music/DIALECT2.jpg"),
  },
  {
    slug: "est-get-money",
    title: "E^ST - GET MONEY!",
    thumbnail1: img("/music/MONEY1.jpg"),
    thumbnail2: img("/music/MONEY2.jpg"),
  },
];

// Music page 2
export const music2: FilmEntry[] = [
  {
    slug: "messrs-desert",
    title: "MESSRS - DESERT",
    thumbnail1: img("/music/MESSRS1.jpg"),
    thumbnail2: img("/music/MESSRS2.jpg"),
  },
  {
    slug: "watermat-bullit",
    title: "WATERMAT - BULLIT",
    thumbnail1: img("/music/WATERMA1.jpg"),
    thumbnail2: img("/music/WATERMA2.jpg"),
  },
  {
    slug: "martin-garrix-virus",
    title: "MARTIN GARRIX - VIRUS",
    thumbnail1: img("/music/MARTIN1.jpg"),
    thumbnail2: img("/music/MARTIN2.jpg"),
  },
  {
    slug: "tiesto-mike-williams-i-want-you",
    title: "TIESTO & MIKE WILLIAMS - I WANT YOU",
    thumbnail1: img("/music/TIESTO1.jpg"),
    thumbnail2: img("/music/TIESTO2.jpg"),
  },
  {
    slug: "mhe-the-sounds-of-silence",
    title: "MHE - THE SOUNDS OF SILENCE",
    thumbnail1: img("/music/MHE1.jpg"),
    thumbnail2: img("/music/MHE2.jpg"),
  },
  {
    slug: "dvbbs-dropgun-pyramids",
    title: "DVBBS & DROPGUN - PYRAMIDS",
    thumbnail1: img("/music/DVBBS1.jpg"),
    thumbnail2: img("/music/DVBBS2.jpg"),
  },
  {
    slug: "nelson-dialect-2-train-with-the-7",
    title: "NELSON DIALECT - 2 TRAIN WITH THE 7",
    thumbnail1: img("/music/NELSON1.jpg"),
    thumbnail2: img("/music/NELSON2.jpg"),
  },
  {
    slug: "sachi-no-more",
    title: "SACHI - NO MORE",
    thumbnail1: img("/music/SACHI1.jpg"),
    thumbnail2: img("/music/SACHI2.jpg"),
  },
  {
    slug: "arj-barker-disgracebook",
    title: "ARJ BARKER - DISGRACEBOOK",
    thumbnail1: img("/music/ARJ1.jpg"),
    thumbnail2: img("/music/ARJ2.jpg"),
  },
  {
    slug: "allday-raceway",
    title: "ALLDAY - RACEWAY",
    thumbnail1: img("/music/ALLDAY11.jpg"),
    thumbnail2: img("/music/ALLDAY22.jpg"),
  },
  {
    slug: "watermat-empire",
    title: "WATERMAT - EMPIRE",
    thumbnail1: img("/music/WATERMAT1.jpg"),
    thumbnail2: img("/music/WATERMAT2.jpg"),
  },
  {
    slug: "lb-one-chilly",
    title: "L.B. ONE - CHILLY",
    thumbnail1: img("/music/CHILLY1.jpg"),
    thumbnail2: img("/music/CHILLY2.jpg"),
  },
  {
    slug: "firebeatz-schella-switch",
    title: "FIREBEATZ & SCHELLA - SWITCH",
    thumbnail1: img("/music/FIREBEATZ1.jpg"),
    thumbnail2: img("/music/FIREBEATZ2.jpg"),
  },
  {
    slug: "lvndscape-waterfalls",
    title: "LVNDSCAPE - WATERFALLS",
    thumbnail1: img("/music/LVNDSCAPE1.jpg"),
    thumbnail2: img("/music/LVNDSCAPE2.jpg"),
  },
  {
    slug: "pep-rash-red-roses",
    title: "PEP & RASH - RED ROSES",
    thumbnail1: img("/music/PEP1.jpg"),
    thumbnail2: img("/music/PEP2.jpg"),
  },
  {
    slug: "dvbbs-jay-hardway-voodoo",
    title: "DVBBS & JAY HARDWAY - VOODOO",
    thumbnail1: img("/music/DVBBS11.jpg"),
    thumbnail2: img("/music/DVBBS22.jpg"),
  },
];

// Music page 3
export const music3: FilmEntry[] = [
  {
    slug: "adam-rickfors-someone-like-you",
    title: "ADAM RICKFORS - SOMEONE LIKE YOU",
    thumbnail1: img("/music/ADAM1.jpg"),
    thumbnail2: img("/music/ADAM2.jpg"),
  },
  {
    slug: "justice-crew-rise-fall",
    title: "JUSTICE CREW - RISE & FALL",
    thumbnail1: img("/music/JUSTICE1.jpg"),
    thumbnail2: img("/music/JUSTICE2.jpg"),
  },
];

// Fashion
export const fashion: FilmEntry[] = [
  {
    slug: "dickies-they-said-it-couldnt-be-done",
    title: "DICKIES - THEY SAID IT COULDN'T BE DONE",
    thumbnail1: img("/fashion/DICKIES1.jpg"),
    thumbnail2: img("/fashion/DICKIES2.jpg"),
  },
  {
    slug: "paolo-sebastian-the-sleeping-garden",
    title: "PAOLO SEBASTIAN - THE SLEEPING GARDEN",
    thumbnail1: img("/fashion/SLEEPING1.jpg"),
    thumbnail2: img("/fashion/SLEEPING2.jpg"),
  },
  {
    slug: "paolo-sebastian-passage-of-spring",
    title: "PAOLO SEBASTIAN - PASSAGE OF SPRING",
    thumbnail1: img("/fashion/SPRING1.jpg"),
    thumbnail2: img("/fashion/SPRING2.jpg"),
  },
  {
    slug: "designer-duchess-fallen-angel",
    title: "DESIGNER DUCHESS - FALLEN ANGEL",
    thumbnail1: img("/fashion/ANGEL1.jpg"),
    thumbnail2: img("/fashion/ANGEL2.jpg"),
  },
  {
    slug: "paolo-sebastian-heirloom",
    title: "PAOLO SEBASTIAN - HEIRLOOM",
    thumbnail1: img("/fashion/HEIRLOOM2.jpg"),
    thumbnail2: img("/fashion/HEIRLOOM1.jpg"),
  },
  {
    slug: "paolo-sebastian-the-nightingale",
    title: "PAOLO SEBASTIAN - THE NIGHTINGALE",
    thumbnail1: img("/fashion/NIGHTINGALE1.jpg"),
    thumbnail2: img("/fashion/NIGHTINGALE2.jpg"),
  },
  {
    slug: "paolo-sebastian-gilded-wings",
    title: "PAOLO SEBASTIAN - GILDED WINGS",
    thumbnail1: img("/fashion/WINGS1.jpg"),
    thumbnail2: img("/fashion/WINGS2.jpg"),
  },
  {
    slug: "paolo-sebastian-reverie",
    title: "PAOLO SEBASTIAN - REVERIE",
    thumbnail1: img("/fashion/REVERIE1.jpg"),
    thumbnail2: img("/fashion/REVERIE2.jpg"),
  },
  {
    slug: "couture-love-madness-aw-2015",
    title: "COUTURE LOVE MADNESS - A/W 2015",
    thumbnail1: img("/fashion/MADNESS1.jpg"),
    thumbnail2: img("/fashion/MADNESS2.jpg"),
  },
  {
    slug: "img-models-paris-dorothee-grant",
    title: "IMG MODELS PARIS - DOROTHÉE GRANT",
    thumbnail1: img("/fashion/GRANT1.jpg"),
    thumbnail2: img("/fashion/GRANT2.jpg"),
  },
  {
    slug: "paolo-sebastian-east-of-the-sun-west-of-the-moon",
    title: "PAOLO SEBASTIAN - EAST OF THE SUN & WEST OF THE MOON",
    thumbnail1: img("/fashion/MOON1.jpg"),
    thumbnail2: img("/fashion/MOON2.jpg"),
  },
];
