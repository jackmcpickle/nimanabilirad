import { test, expect } from '@playwright/test';

const LOCAL = 'http://localhost:4321';
const PROD = 'https://nimanabilirad.com';

// Normalize image URLs by stripping CDN prefix so local and prod paths match
function normalizeImgUrl(url: string): string {
  return url
    .replace('https://aextzfrieq.cloudimg.io/v7/nimanabilirad.com', '')
    .replace(/^https?:\/\/[^/]+/, '');
}

// Production uses .php URLs, local uses clean URLs
function prodUrl(path: string): string {
  if (path === '/') return `${PROD}/`;
  return `${PROD}${path}.php`;
}

function localUrl(path: string): string {
  return `${LOCAL}${path}`;
}

// Helper to get structured page info
async function getPageInfo(page: any, url: string) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(500);

  return await page.evaluate(() => {
    const title = document.title;
    const h2s = Array.from(document.querySelectorAll('h2')).map(
      (el: any) => el.textContent?.trim()
    );
    const h4s = Array.from(document.querySelectorAll('h4')).map(
      (el: any) => el.textContent?.trim()
    );
    const navLinks = Array.from(
      document.querySelectorAll('.menucontent a, .menucontent1 a')
    ).map((el: any) => ({
      text: el.textContent?.trim(),
    }));
    return { title, h2s, h4s, navLinks };
  });
}

// ==================== HOMEPAGE ====================

test.describe('Homepage', () => {
  test('has correct title', async ({ page }) => {
    await page.goto(localUrl('/'), { waitUntil: 'domcontentloaded' });
    const localTitle = await page.title();
    await page.goto(prodUrl('/'), { waitUntil: 'domcontentloaded' });
    const prodTitle = await page.title();
    expect(localTitle).toBe(prodTitle);
  });

  test('has logo and menu links', async ({ page }) => {
    await page.goto(localUrl('/'), { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.logo-icon img')).toBeVisible();
    await expect(page.locator('#bottommenu')).toBeVisible();
    await expect(page.locator('#leftmenu')).toBeVisible();
    await expect(page.locator('#rightmenu')).toBeVisible();
  });

  test('has vimeo wrapper iframe', async ({ page }) => {
    await page.goto(localUrl('/'), { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.vimeo-wrapper iframe')).toBeAttached();
  });

  test('has LogoText content', async ({ page }) => {
    await page.goto(localUrl('/'), { waitUntil: 'domcontentloaded' });
    await expect(page.locator('#logo-text')).toBeAttached();
  });
});

// ==================== FILM CATEGORY PAGES ====================

const filmPages = [
  { path: '/film', prodPath: '/film', name: 'Featured' },
  { path: '/film-branded', prodPath: '/film-branded', name: 'Branded' },
  { path: '/film-shorts', prodPath: '/film-shorts', name: 'Shorts' },
  { path: '/film-music', prodPath: '/film-music', name: 'Music Videos' },
  { path: '/film-fashion', prodPath: '/film-fashion', name: 'Fashion' },
];

for (const filmPage of filmPages) {
  test.describe(`Film page: ${filmPage.name} (${filmPage.path})`, () => {
    test('page loads and has correct title', async ({ page }) => {
      const local = await getPageInfo(page, localUrl(filmPage.path));
      const prod = await getPageInfo(page, prodUrl(filmPage.prodPath));
      expect(local.title).toBe(prod.title);
    });

    test('has film grid with nav links matching production', async ({
      page,
    }) => {
      const local = await getPageInfo(page, localUrl(filmPage.path));
      const prod = await getPageInfo(page, prodUrl(filmPage.prodPath));

      const localNavTexts = local.navLinks.map((l: any) => l.text);
      const prodNavTexts = prod.navLinks.map((l: any) => l.text);
      expect(localNavTexts).toEqual(prodNavTexts);
    });

    test('has film grid thumbnails matching production', async ({ page }) => {
      await page.goto(localUrl(filmPage.path), {
        waitUntil: 'domcontentloaded',
      });
      const localTitles = (await page
        .locator('.newFilmTitles')
        .allTextContents()).map((t: string) => t.replace(/[\u2018\u2019]/g, "'").trim());

      await page.goto(prodUrl(filmPage.prodPath), {
        waitUntil: 'domcontentloaded',
      });
      const prodTitles = (await page
        .locator('.newFilmTitles')
        .allTextContents()).map((t: string) => t.replace(/[\u2018\u2019]/g, "'").trim());

      expect(localTitles.length).toBeGreaterThan(0);
      expect(localTitles).toEqual(prodTitles);
    });

    test('thumbnail images match production', async ({ page }) => {
      await page.goto(localUrl(filmPage.path), {
        waitUntil: 'domcontentloaded',
      });
      const localImgs = (await page
        .locator('.animate-img img')
        .evaluateAll((imgs: any[]) =>
          imgs.map((img) => img.getAttribute('src'))
        )).map(normalizeImgUrl);

      await page.goto(prodUrl(filmPage.prodPath), {
        waitUntil: 'domcontentloaded',
      });
      const prodImgs = (await page
        .locator('.animate-img img')
        .evaluateAll((imgs: any[]) =>
          imgs.map((img) => img.getAttribute('src'))
        )).map(normalizeImgUrl);

      expect(localImgs).toEqual(prodImgs);
    });
  });
}

// ==================== FILM PAGINATED PAGES ====================

const paginatedFilmPages = [
  { path: '/film-branded2', name: 'Branded Page 2' },
  { path: '/film-music2', name: 'Music Videos Page 2' },
  { path: '/film-music3', name: 'Music Videos Page 3' },
];

for (const filmPage of paginatedFilmPages) {
  test.describe(`Film paginated: ${filmPage.name}`, () => {
    test('has correct titles and content matching production', async ({
      page,
    }) => {
      const local = await getPageInfo(page, localUrl(filmPage.path));
      const prod = await getPageInfo(page, prodUrl(filmPage.path));

      expect(local.title).toBe(prod.title);
      expect(local.h4s).toEqual(prod.h4s);
    });
  });
}

// ==================== PHOTO PAGES ====================

const photoPages = [
  { path: '/photo', prodPath: '/photo', name: 'Travel' },
  { path: '/photo-nature', prodPath: '/photo-nature', name: 'Nature' },
  {
    path: '/photo-architecture',
    prodPath: '/photo-architecture',
    name: 'Architecture',
  },
  { path: '/photo-fashion', prodPath: '/photo-fashion', name: 'Fashion' },
  { path: '/photo-portrait', prodPath: '/photo-portrait', name: 'Portrait' },
  {
    path: '/photo-commercial',
    prodPath: '/photo-commercial',
    name: 'Commercial',
  },
];

for (const photoPage of photoPages) {
  test.describe(`Photo page: ${photoPage.name} (${photoPage.path})`, () => {
    test('page loads and has correct title', async ({ page }) => {
      const local = await getPageInfo(page, localUrl(photoPage.path));
      const prod = await getPageInfo(page, prodUrl(photoPage.prodPath));
      expect(local.title).toBe(prod.title);
    });

    test('has correct nav links', async ({ page }) => {
      const local = await getPageInfo(page, localUrl(photoPage.path));
      const prod = await getPageInfo(page, prodUrl(photoPage.prodPath));

      const localNavTexts = local.navLinks.map((l: any) => l.text);
      const prodNavTexts = prod.navLinks.map((l: any) => l.text);
      expect(localNavTexts).toEqual(prodNavTexts);
    });

    test('has carousel images', async ({ page }) => {
      await page.goto(localUrl(photoPage.path), {
        waitUntil: 'domcontentloaded',
      });
      const localLeftImgs = await page
        .locator('#left .slider img')
        .evaluateAll((imgs: any[]) =>
          imgs.map((img) => img.getAttribute('src'))
        );
      const localRightImgs = await page
        .locator('#right .slider img')
        .evaluateAll((imgs: any[]) =>
          imgs.map((img) => img.getAttribute('src'))
        );
      const localMobileImgs = await page
        .locator('#mobile .mslider img')
        .evaluateAll((imgs: any[]) =>
          imgs.map((img) => img.getAttribute('src'))
        );

      expect(localLeftImgs.length).toBeGreaterThan(0);
      expect(localRightImgs.length).toBeGreaterThan(0);
      expect(localMobileImgs.length).toBeGreaterThan(0);
    });

    test('carousel image count matches production', async ({ page }) => {
      await page.goto(localUrl(photoPage.path), {
        waitUntil: 'domcontentloaded',
      });
      const localCount = await page
        .locator('#left .slider img, #right .slider img, #mobile .mslider img')
        .count();

      await page.goto(prodUrl(photoPage.prodPath), {
        waitUntil: 'domcontentloaded',
      });
      const prodCount = await page
        .locator('#left .slider img, #right .slider img, #mobile .mslider img')
        .count();

      expect(localCount).toBe(prodCount);
    });

    test('carousel image URLs match production', async ({ page }) => {
      await page.goto(localUrl(photoPage.path), {
        waitUntil: 'domcontentloaded',
      });
      const localImgs = (await page
        .locator('#left .slider img, #right .slider img, #mobile .mslider img')
        .evaluateAll((imgs: any[]) =>
          imgs.map((img) => img.getAttribute('src'))
        )).map(normalizeImgUrl);

      await page.goto(prodUrl(photoPage.prodPath), {
        waitUntil: 'domcontentloaded',
      });
      const prodImgs = (await page
        .locator('#left .slider img, #right .slider img, #mobile .mslider img')
        .evaluateAll((imgs: any[]) =>
          imgs.map((img) => img.getAttribute('src'))
        )).map(normalizeImgUrl);

      expect(localImgs).toEqual(prodImgs);
    });
  });
}

// ==================== SAMPLE FILM PROJECT PAGES ====================

const sampleFilmProjects = [
  '/casio-x-sneaker-freaker-gshock-night-owl',
  '/paolo-sebastian-gilded-wings',
  '/mazda-mazda-2-tvc',
  '/empire-artist',
];

for (const slug of sampleFilmProjects) {
  test.describe(`Film project: ${slug}`, () => {
    test('page loads with correct title', async ({ page }) => {
      const local = await getPageInfo(page, localUrl(slug));
      const prod = await getPageInfo(page, prodUrl(slug));
      expect(local.title).toBe(prod.title);
    });

    test('has correct heading', async ({ page }) => {
      const local = await getPageInfo(page, localUrl(slug));
      const prod = await getPageInfo(page, prodUrl(slug));
      expect(local.h2s).toEqual(prod.h2s);
    });

    test('has matching video embed', async ({ page }) => {
      await page.goto(localUrl(slug), { waitUntil: 'domcontentloaded' });
      const localIframes = await page
        .locator('.videobar iframe')
        .evaluateAll((iframes: any[]) =>
          iframes.map((f) => f.getAttribute('src'))
        );

      await page.goto(prodUrl(slug), { waitUntil: 'domcontentloaded' });
      const prodIframes = await page
        .locator('.videobar iframe')
        .evaluateAll((iframes: any[]) =>
          iframes.map((f) => f.getAttribute('src'))
        );

      expect(localIframes.length).toBe(prodIframes.length);
      for (let i = 0; i < localIframes.length; i++) {
        const localId =
          localIframes[i]?.match(/(?:video|embed)\/(\w+)/)?.[1] || '';
        const prodId =
          prodIframes[i]?.match(/(?:video|embed)\/(\w+)/)?.[1] || '';
        expect(localId).toBe(prodId);
      }
    });

    test('has matching project images', async ({ page }) => {
      await page.goto(localUrl(slug), { waitUntil: 'domcontentloaded' });
      const localImgs = (await page
        .locator('.imgspace img')
        .evaluateAll((imgs: any[]) =>
          imgs.map((img) => img.getAttribute('src'))
        )).map(normalizeImgUrl);

      await page.goto(prodUrl(slug), { waitUntil: 'domcontentloaded' });
      const prodImgs = (await page
        .locator('.imgspace img')
        .evaluateAll((imgs: any[]) =>
          imgs.map((img) => img.getAttribute('src'))
        )).map(normalizeImgUrl);

      expect(localImgs).toEqual(prodImgs);
    });
  });
}

// ==================== STRUCTURAL CHECKS ====================

test.describe('Structural checks', () => {
  test('all film category nav links are consistent', async ({ page }) => {
    await page.goto(localUrl('/film'), { waitUntil: 'domcontentloaded' });
    const navLinks = await page
      .locator('.menucontent a')
      .evaluateAll((links: any[]) =>
        links.map((l) => ({
          text: l.textContent?.trim(),
          href: l.getAttribute('href'),
        }))
      );

    const expectedNav = [
      { text: 'Featured', href: '/film' },
      { text: 'Branded', href: '/film-branded' },
      { text: 'Shorts', href: '/film-shorts' },
      { text: 'Music Videos', href: '/film-music' },
      { text: 'Fashion', href: '/film-fashion' },
    ];

    expect(navLinks).toEqual(expectedNav);
  });

  test('all photo category nav links are consistent', async ({ page }) => {
    await page.goto(localUrl('/photo'), { waitUntil: 'domcontentloaded' });
    const navLinks = await page
      .locator('.menucontent1 a')
      .evaluateAll((links: any[]) =>
        links.map((l) => ({
          text: l.textContent?.trim(),
          href: l.getAttribute('href'),
        }))
      );

    const expectedNav = [
      { text: 'Travel', href: '/photo' },
      { text: 'Nature', href: '/photo-nature' },
      { text: 'Architecture', href: '/photo-architecture' },
      { text: 'Fashion', href: '/photo-fashion' },
      { text: 'Portrait', href: '/photo-portrait' },
      { text: 'Commercial', href: '/photo-commercial' },
    ];

    expect(navLinks).toEqual(expectedNav);
  });

  test('film project pages have Film and Photo nav links', async ({
    page,
  }) => {
    await page.goto(
      localUrl('/casio-x-sneaker-freaker-gshock-night-owl'),
      { waitUntil: 'domcontentloaded' }
    );
    await expect(page.locator('#film')).toBeAttached();
    await expect(page.locator('#photo')).toBeAttached();
    expect(await page.locator('#film').getAttribute('href')).toBe('/film');
    expect(await page.locator('#photo').getAttribute('href')).toBe('/photo');
  });
});
