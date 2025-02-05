const franc = require('franc');
const langs = require('langs');

const langCode = franc('la casa de papel');

if (langCode === 'und') {
    console.log("Cant Figure Out!")
} else {
    const language = langs.where("3", langCode);
    console.log(language.name)
}

