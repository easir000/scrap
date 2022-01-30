//const fs = require("fs");
const puppeteer = require("puppeteer");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp",
  });

  const page = await browser.newPage();
  await page.goto(
    "https://www.otomoto.pl/");


  /*we can try one by one uncomment the  following lines*/

  
//const productsHandles = await page.$$('#featured-ads-carousel > section > a:nth-child(2)');

// const productsHandles = await page.$$('#featured-ads-carousel > section > a:nth-child(3)');
// const productsHandles = await page.$$('#featured-ads-carousel > section > a:nth-child(4)');
// const productsHandles = await page.$$('#featured-ads-carousel');
// const productsHandles = await page.$$('#featured-ads-carousel > section');
// const productsHandles = await page.$$("#highlighted-ads");
// const productsHandles = await page.$$("#__next > div > div > div > main > div.ooa-dr0w7h.eo51ucb2");
// const productsHandles = await page.$$("#__next > div > div > div > main > div.ooa-dr0w7h.eo51ucb2 > div.ooa-hpeugt.e4b5enj1");
// const productsHandles = await page.$$("#offer-photos > div.offer-photos-thumbs.slider-nav.slick-initialized.slick-slider > div > div");

const productsHandles = await page.$$("#__next > div");










for(const producthandle of productsHandles){

  try {
    const title = await page.evaluate(el => el.innerText, producthandle);
    console.log(title) ;
    
  } catch (error) {
    
  }

}

// const grabTechnologies = await page.evaluate(()=>{
//   const techTags = document.querySelectorAll("#featured-ads-carousel > section > a:nth-child(1) > article");
//   techTags.forEach((tag) =>{
//   technologies.push(tag.innerText);
//   });
//   return technologies;


// });

// console.log(grabTechnologies);
// await browser.close();



}) ();