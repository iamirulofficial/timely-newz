const cheerio = require('cheerio');
const fetch = require('node-fetch');

const getNewz = (options, callback) => {
    let flag = 0;
    const URL = `https://inshorts.com/${options.lang}/read/${options.category}`;

    return fetch(URL)
        .then(response => response.text())
        .then(body => {
            const newz = [];
            const $ = cheerio.load(body);
            $('.news-card').each((i, element) => {
                const $element = $(element);
                //Bg-Image
                const $imageLink = $element.find('div.news-card-image');
                let imageLink = $imageLink.attr("style");
                imageLink = imageLink.split('\'')[1];
                //Title
                const $title = $element.find('div.news-card-title a.clickable span');
                const title = $title.text();
                //Author
                const $author = $element.find('div.news-card-title div.news-card-author-time span.author');
                const author = $author.text();
                //Time
                const $time = $element.find('div.news-card-title div.news-card-author-time span.time');
                const time = $time.text();
                //Date
                const $date = $element.find('div.news-card-author-time');
                const date = $date.children().last().text();
                const createdAt = `${time} ${date}`;
                //Newz-Content
                const $content = $element.find('div.news-card-content div');
                let content = $content.text();
                content = content.substring(0, content.indexOf('\n'));
                //Read-More-News-Source-URL
                const $sourceUrl = $element.find('div.news-card-footer div a');
                let sourceUrl = $sourceUrl.attr("href");
                if(sourceUrl != undefined)
                    sourceUrl = sourceUrl.split('?')[0];

                const newzElem = {
                    sourceURL: sourceUrl,
                    imageLink: imageLink,
                    title: $title.text(),
                    author: $author.text(),
                    content: content,
                    newzTime: createdAt
                }
                newz.push(newzElem);
                if ((i + 1) == options.count) {
                    callback(newz);
                    flag = 1;
                }
            });
            if (!flag) {
                callback(newz);
            }
            if (newz.length < 1) {
                callback({
                    errorText: 'No data was returned. Check options object.'
                });
            }
        })
        .catch(err => {
            callback(err);
        })
};

module.exports.getNewz = getNewz;

