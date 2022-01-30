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


  
const productsHandles = await page.$$('#featured-ads-carousel > section > a:nth-child(1) > article');


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