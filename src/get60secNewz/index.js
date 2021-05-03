const cheerio = require('cheerio');
const fetch = require('node-fetch');

const get60secNewz = (options) => {
    const URL = `https://www.60secondsnow.com/${options.lang}/${options.category}`;

    return fetch(URL)
        .then((response) => response.text())
        .then((body) => {
            $ = cheerio.load(body);
            $('.post-container').each((i,element) => {
                //console.log($(element));
                const $element = $(element);
                const $content = $element.find('div.post-header div.article-content div.article-desc p');
                let content = $content.text();
                //console.log(content,'\n');
            })
        
        })
}

get60secNewz({lang:'',category:''});