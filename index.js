const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const GoStumble = (auth) => new Promise((resolve, reject) => {

		
 fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  
  
console.log(chalk.bgRed('W E L C O M E'));
  
console.log('')  

console.log(chalk.bgGreen('S T U M B L E V I P S C R I P'));  
  
console.log('')  
  
  console.log(`TROPHY DAN CROWN HACK BY [Tanzz] 
`);
	
console.log(`${chalk.bgBlue(`
1. TROPHY HACK
2. CROWN HACK
SILAHKAN PILIH`)} 
`);
	
const round = rs.question(`[+] Select Number  : `);
    console.log('');
  
  
 
  const auth = rs.question('Input auth code! : ');
  console.log('');

  while (true) {

    const result = await GoStumble(auth);
    if (!result) {

      console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Code Not Valid :`));
      

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.red('Status:Succes'));
console.log('') 
console.log(chalk.green(`Time : [ ${moment().format('HH:mm:ss')} ]`),)     
console.log('')     
console.log(chalk.magenta(`User : ${username}`))   
console.log('')
console.log(chalk.yellow(`Trophy : ${trophy}`))   
console.log('')
console.log(chalk.cyan(`Crown : ${crown}`))
console.log('')
console.log(chalk.red('Akun Kamu Terkena Benetttt Tobatt !!'));
     
      
      await GoStumble(auth);
      await GoStumble(auth);
      await GoStumble(auth);
      await GoStumble(auth);
      console.log('')
      console.log('')
      await sleep(11000);
      
      

    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Your Account has been Banned`));
     break;
    }
  }


})();
