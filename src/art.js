import {ParagraphType} from './article.js';
import {A0} from './art-detail/art0.js';
import {A1} from './art-detail/art1.js';
import {A2} from './art-detail/art2.js';

export class Art {

  static getArticles() {
    const articles = [
      //A0.get(),
      //A1.get(),
      A2.get(),
    
      // { title: 'Univ. compression',
      //   date: '2019/01/01',
      //   body: [
      //     {type: ParagraphType.Paragraph, content: 'Coming soon' }
      //   ]
      // }
    ];

    for (let a = 0; a < articles.length; ++a) {
      articles[a]['type'] = 'art';
    }

    return articles;
  }
}
