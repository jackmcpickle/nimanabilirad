const CDN = "/img/photo-titles";

function range(start: number, end: number): number[] {
  const arr: number[] = [];
  if (start <= end) {
    for (let i = start; i <= end; i++) arr.push(i);
  } else {
    for (let i = start; i >= end; i--) arr.push(i);
  }
  return arr;
}

function toUrls(folder: string, numbers: number[]): string[] {
  return numbers.map((n) => `${CDN}/${folder}/${n}.jpg`);
}

export interface PhotoCategory {
  left: string[];
  right: string[];
  mobile: string[];
}

// Travel: left=1-63, right=64-128 (skip 117-118), mobile=all (skip 117-118)
const travelLeft = range(1, 63);
const travelRight = [...range(64, 116), 119, ...range(120, 128)];
const travelMobile = [...range(1, 116), 119, ...range(120, 128)];
export const travel: PhotoCategory = {
  left: toUrls("Travel", travelLeft),
  right: toUrls("Travel", travelRight),
  mobile: toUrls("Travel", travelMobile),
};

// Nature: left=1-21, right=41 descending to 21, mobile=1-41
export const nature: PhotoCategory = {
  left: toUrls("Nature", range(1, 21)),
  right: toUrls("Nature", range(41, 21)),
  mobile: toUrls("Nature", range(1, 41)),
};

// Architecture: left=1-11, right=12-17,19-22,9, mobile=1-17,19-22
const archRight = [...range(12, 17), 19, 20, 21, 22, 9];
const archMobile = [...range(1, 17), 19, 20, 21, 22];
export const architecture: PhotoCategory = {
  left: toUrls("Architecture", range(1, 11)),
  right: toUrls("Architecture", archRight),
  mobile: toUrls("Architecture", archMobile),
};

// Fashion: left=1-3, right=4-6, mobile=1-6
export const photoFashion: PhotoCategory = {
  left: toUrls("Fashion", range(1, 3)),
  right: toUrls("Fashion", range(4, 6)),
  mobile: toUrls("Fashion", range(1, 6)),
};

// Portrait: left=1-5, right=6-10, mobile=1-10
export const portrait: PhotoCategory = {
  left: toUrls("Portrait", range(1, 5)),
  right: toUrls("Portrait", range(6, 10)),
  mobile: toUrls("Portrait", range(1, 10)),
};

// Commercial: left=3,2,1, right=5,6,4, mobile=6,2,3,4,5,1
export const commercial: PhotoCategory = {
  left: toUrls("Commercial", [3, 2, 1]),
  right: toUrls("Commercial", [5, 6, 4]),
  mobile: toUrls("Commercial", [6, 2, 3, 4, 5, 1]),
};
