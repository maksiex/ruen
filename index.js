const words = require('./words.js');
const readline = require('readline');
const colors = require('colors/safe');

function getRandomWords(num) {
    const randomWords = [];
    for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        if (!randomWords.includes(words[randomIndex])) {
            randomWords.push(words[randomIndex]);
        }
    }
    return randomWords;
}

console.log(`${colors.blue('Сейчас в словаре')} ${colors.bold(colors.magenta(words.length))} ${colors.blue('слов')} `);

function startGame(lang) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const randomWords = getRandomWords(35);
    let currentIndex = 0;
    let mistake = 0;

    console.log(`${colors.magenta('Переведите слово')} ${colors.bold(randomWords[currentIndex][lang])} ${colors.underline('на другой язык:')} `);

    rl.on('line', (input) => {
        if (input.toLowerCase() === randomWords[currentIndex][lang === 'en' ? 'ru' : 'en'].toLowerCase()) {
            currentIndex++;
            if (currentIndex < randomWords.length) {
                console.log(`${colors.bold(colors.green('Правильно! Следующее слово:'))} ${colors.underline(randomWords[currentIndex][lang])}`);
                mistake = 0;
            } else {
                console.log(colors.bgWhite(colors.green(colors.italic(colors.bold('Игра окончена.')))));
                rl.close();
            }
        } else {
            console.log(`${colors.yellow(colors.bold('Неверный перевод. Попробуйте еще раз перевести'))} ${randomWords[currentIndex][lang]} на другой язык: `);
            mistake += 1;
            if (mistake >= 3) {
                console.log(`${colors.bgCyan(colors.bold('Первые буквы слова - '))} ${randomWords[currentIndex][lang]}: ${randomWords[currentIndex]['en'].slice(0,2)}... `);
            }
        }
    });
}

startGame('ru');