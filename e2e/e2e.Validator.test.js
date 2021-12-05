import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
      ignoreDefaultArgs: ['--disable-extensions'],
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('valid', async () => {
    await page.goto(baseUrl);
    const form = await page.$('.cardsForm');
    const input = await form.$('.input');
    await input.type('4111111111111111');
    const submit = await form.$('.submit');
    submit.click();
    await page.waitForSelector('.correct');
  });

  test('invalid', async () => {
    await page.goto(baseUrl);
    const form = await page.$('.cardsForm');
    const input = await form.$('.input');
    await input.type('411111111111111');
    const submit = await form.$('.submit');
    submit.click();
    await page.waitForSelector('.incorrect');
  });
});
