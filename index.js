var fs = require('fs');

import { Craft } from './src/craft';
import { Homepage } from './src/homepage';
import { Pieces } from './src/pieces';
import { Technical } from './src/technical';
import { Thoughts } from './src/thoughts';

import { Categories } from './src/categories';

// Parse articles and form JSONs.

let outputFolder = './db';
let logfn = err => err ? console.log(err) : console.log('file saved');

let categories = Categories.getCategories();
let craft      = Craft.getArticles();
let homepage   = Homepage.getArticles();
let pieces     = Pieces.getArticles();
let technical  = Technical.getArticles();
let thoughts   = Thoughts.getArticles();
               
let allArticles = [];
allArticles.push(...craft    );
allArticles.push(...homepage );
allArticles.push(...pieces   );
allArticles.push(...technical);
allArticles.push(...thoughts );

// Json categories
fs.writeFile(
   './' + outputFolder + '/categories.json', 
   JSON.stringify(categories),
   logfn
); 

// Json all-titles
let allTitles = [];
for (let i = 0; i < allArticles.length; ++i) {
   allArticles[i].id = i;
   allTitles.push({
      'id': allArticles[i].id,
      'title': allArticles[i].title
   });
}
fs.writeFile(
   './' + outputFolder + '/all-titles.json',
   JSON.stringify(allTitles),
   logfn
);

// Json titles-per-category
function writeTitles(categoryString, array) {
   let titles = [];
   for (let i = 0; i < array.length; ++i) {
      titles.push({
         'id': array[i].id,
         'title': array[i].title,
         'date': array[i].date
      });   
   }
   fs.writeFile(
      './' + outputFolder + '/' + categoryString + '.json',
      JSON.stringify(titles),
      logfn
   );
}
writeTitles('craft', craft    , logfn);
writeTitles('homepage', homepage , logfn);
writeTitles('pieces', pieces   , logfn);
writeTitles('technical', technical, logfn);
writeTitles('thoughts', thoughts , logfn);

// Json per-article
for (let i = 0; i < allArticles.length; ++i) {
   fs.writeFile(
      './' + outputFolder + '/articles/' + allArticles[i].id + '.json',
      JSON.stringify(allArticles[i]),
      logfn
   );
}
