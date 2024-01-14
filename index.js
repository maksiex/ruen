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

    const randomWords = getRandomWords(111);
    let currentIndex = 0;

    console.log(`${colors.magenta('Переведите слово')} ${colors.bold(randomWords[currentIndex][lang])} ${colors.underline('на другой язык:')} `);

    rl.on('line', (input) => {
        if (input.toLowerCase() === randomWords[currentIndex][lang === 'en' ? 'ru' : 'en'].toLowerCase()) {
            currentIndex++;
            if (currentIndex < randomWords.length) {
                console.log(`${colors.bold(colors.green('Правильно! Следующее слово:'))} ${colors.underline(randomWords[currentIndex][lang])}`);
            } else {
                console.log(colors.bgWhite(colors.grey(colors.italic(colors.bold('Игра окончена.')))));
                rl.close();
            }
        } else {
            console.log(`${colors.yellow(colors.bold('Неверный перевод. Попробуйте еще раз перевести'))} ${randomWords[currentIndex][lang]} на другой язык: `);
        }
    });
}

startGame('ru');