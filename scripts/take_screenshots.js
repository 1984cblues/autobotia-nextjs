const puppeteer = require('puppeteer');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const portfolioDir = 'C:\\Users\\Felipe\\Documents\\agencia\\portfolio';
const outDir = 'C:\\Users\\Felipe\\Documents\\agencia\\autobotia\\public\\works';

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// Start PHP Server
console.log('Iniciando servidor PHP...');
const phpServer = spawn('C:\\xampp\\php\\php.exe', ['-S', 'localhost:8080', '-t', portfolioDir]);

phpServer.stderr.on('data', data => {
    // PHP built-in server outputs to stderr
    // console.log(`PHP: ${data}`);
});

const sites = [
    { name: 'agronegocio.webp', url: 'http://localhost:8080/agronegocio/index.html' },
    { name: 'clean-work.webp', url: 'http://localhost:8080/clean-work/index.php' },
    { name: 'concreto.webp', url: 'http://localhost:8080/concreto/index.php' },
    { name: 'refrigeracao.webp', url: 'http://localhost:8080/refrigeracao/index.html' },
    { name: 'waso-strategy.webp', url: 'http://localhost:8080/waso-strategy/index.html' }
];

async function run() {
    console.log('Aguardando servidor iniciar (2s)...');
    await new Promise(r => setTimeout(r, 2000));
    
    console.log('Abrindo Puppeteer...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });

    for (const site of sites) {
        console.log(`Acessando ${site.url}...`);
        try {
            await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 15000 });
            await page.screenshot({ path: path.join(outDir, site.name), type: 'webp', quality: 90 });
            console.log(`✅ Salvo: ${site.name}`);
        } catch (e) {
            console.error(`❌ Erro em ${site.url}:`, e.message);
        }
    }

    await browser.close();
    phpServer.kill();
    console.log('Screenshots concluídos!');
}

run().catch(err => {
    console.error(err);
    phpServer.kill();
});
