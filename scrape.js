// go to instagram.com
/// wait for article
// find closest article
// console.log closest h2


const { Chromeless } = require('chromeless')

async function run() {
  const chromeless = new Chromeless()

  const screenshot = await chromeless
    .goto('https://www.instagram.com/')
    .wait('button')
    .click('button')
    .type('nathan.froeh@gmail.com', 'input[name="email"]')
    .type('', 'input[name="pass"]')
    .click('input[name="login"]')
    .click('input[value="Continue as Nathan"]')
    .click('button[class="aOOlW   HoLwm "]')
    .wait('', 50000)

  await chromeless.end()
}

run().catch(console.error.bind(console))