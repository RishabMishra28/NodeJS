import https from "https";
import readline  from "readline";
import chalk from "chalk";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const apiKey='2653887662aed18386ce3ed6';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

https.get(url,(response) => {

    let data="";
  response.on('data',(chunk)=> {
    data+=chunk;
  });

  response.on('end', () => {
    const rates=JSON.parse(data).conversion_rates;

    rl.question('Enter the amount in USD : ',(amount) => {
    rl.question('Enter the target currency (eg -: INR,NPR,EUR) : ',(currency) => {
      const rate =  (amount*rates[currency.toUpperCase()]).toFixed(2);
      if (rate) {
        console.log(`${amount} USD is approximately equal to ${rate} ${currency.toUpperCase()}`);

      }else{
        console.log(`Invalid Currency Code`);
      }

      rl.close();

    })
    })
  })
})