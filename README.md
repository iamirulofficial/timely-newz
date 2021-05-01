
# timely-newz [![npm][npm-image]][npm-url]
Short News Api, For educational purposes only. News are from inshorts and 60secondsnow

[npm-image]: https://img.shields.io/npm/v/timely-newz.svg
[npm-url]: https://www.npmjs.com/package/timely-newz


## install

```
npm install timely-newz
```

## Usage

```js
const newz = require('timely-newz');

newz.getNewz(specs, callback);
```

## Example

```js
const newz = require('timely-newz');

let specs = {
    lang: 'en',
    category: '',
    count: 2
}

newz.getNewz(specs, function (result) {
    console.log(result);
});
```
### Languages (lang)

|Hindi|English|
|---|---|
|hi|en|

### Category

|category|code|
|---|---|
|All News|leave it blank : ' '|
|India|national|
|World|world|
|Bussiness|bussiness|
|Sports|sports|
|Politics|politics|
|Technology|technology|
|Startup|startup|
|Entertainment|entertainment|
|Science|science|
|Automobile|automobile|

### Return Format

```js
[
  {
    sourceURL: 'https://twitter.com/ANI/status/1388430583781593088',
    imageLink: 'https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/05_may/1_sat/img_1619866358726_106.jpg?',
    title: 'Give Delhi its full 490 MT oxygen quota today by whatever means: HC to Centre',
    author: 'Sakshita Khosla',
    content: `The Delhi High Court on Saturday directed the Centre to ensure that Delhi received its full allocated quota of 490 Metric Tonnes (MT) of oxygen today "by whatever 
means". "Now the water has gone above our heads," said the High Court bench to Centre's counsel, adding, "You (Centre) will arrange everything now."`,
    newzTime: '04:36 pm 01 May'
  },
  {
    sourceURL: 'https://www.thenewsminute.com/article/telangana-health-minister-eatala-rajender-removed-after-allegations-land-grabbing-148130',
    imageLink: 'https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/05_may/1_sat/img_1619862427860_905.jpg?',
    title: 'Telangana Health Minister removed from post following land grab allegations',
    author: 'Sakshita Khosla',
    content: "Telangana Health Minister Eatala Rajender was removed from the post on Saturday after allegations of land grabbing emerged against him. The state's Health, Medical and Family Welfare portfolio was transferred to CM K Chandrashekar Rao after the Governor approved Rao's request. Several farmers from the Medak district have accused Rajender 
of forcibly occupying their land.",
    newzTime: '03:29 pm 01 May'
  }
]
```
