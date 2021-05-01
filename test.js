const getNewz = require('./src/getNewz');
var options = {
    lang: 'en',
    category: '',
    count: 2
}

getNewz.getNewz(options, function (result) {
    console.log(result);
});