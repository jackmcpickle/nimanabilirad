import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/img/photo-titles/**/*.jpg',
  { eager: true }
);

function range(start: number, end: number): number[] {
  const arr: number[] = [];
  if (start <= end) {
    for (let i = start; i <= end; i++) arr.push(i);
  } else {
    for (let i = start; i >= end; i--) arr.push(i);
  }
  return arr;
}

function toImages(folder: string, numbers: number[]): ImageMetadata[] {
  return numbers.map((n) => {
    const key = `/src/assets/img/photo-titles/${folder}/${n}.jpg`;
    const img = images[key];
    if (!img) throw new Error(`Image not found: ${key}`);
    return img.default;
  });
}

export interface PhotoCategory {
  left: ImageMetadata[];
  right: ImageMetadata[];
  mobile: ImageMetadata[];
}

// Travel: left=1-63, right=64-128 (skip 117-118), mobile=all (skip 117-118)
const travelLeft = range(1, 63);
const travelRight = [...range(64, 116), 119, ...range(120, 128)];
const travelMobile = [...range(1, 116), 119, ...range(120, 128)];
export const travel: PhotoCategory = {
  left: toImages("Travel", travelLeft),
  right: toImages("Travel", travelRight),
  mobile: toImages("Travel", travelMobile),
};

// Nature: left=1-21, right=41 descending to 21, mobile=1-41
export const nature: PhotoCategory = {
  left: toImages("Nature", range(1, 21)),
  right: toImages("Nature", range(41, 21)),
  mobile: toImages("Nature", range(1, 41)),
};

// Architecture: left=1-11, right=12-17,19-22,9, mobile=1-17,19-22
const archRight = [...range(12, 17), 19, 20, 21, 22, 9];
const archMobile = [...range(1, 17), 19, 20, 21, 22];
export const architecture: PhotoCategory = {
  left: toImages("Architecture", range(1, 11)),
  right: toImages("Architecture", archRight),
  mobile: toImages("Architecture", archMobile),
};

// Fashion: left=1-3, right=4-6, mobile=1-6
export const photoFashion: PhotoCategory = {
  left: toImages("Fashion", range(1, 3)),
  right: toImages("Fashion", range(4, 6)),
  mobile: toImages("Fashion", range(1, 6)),
};

// Portrait: left=1-5, right=6-10, mobile=1-10
export const portrait: PhotoCategory = {
  left: toImages("Portrait", range(1, 5)),
  right: toImages("Portrait", range(6, 10)),
  mobile: toImages("Portrait", range(1, 10)),
};

// Commercial: left=3,2,1, right=5,6,4, mobile=6,2,3,4,5,1
export const commercial: PhotoCategory = {
  left: toImages("Commercial", [3, 2, 1]),
  right: toImages("Commercial", [5, 6, 4]),
  mobile: toImages("Commercial", [6, 2, 3, 4, 5, 1]),
};
