import {ParagraphType} from './article';
import {A0} from './thoughts-detail/art0';
import {A1} from './thoughts-detail/art1';
import {A2} from './thoughts-detail/art2';
import {A3} from './thoughts-detail/art3';

export class Thoughts {

  static getArticles() {
    const articles = [
      A0.get(),
      A1.get(), 
      A2.get(),
      A3.get(),
    
      // { title: 'Univ. compression',
      //   date: '2019/01/01',
      //   body: [
      //     {type: ParagraphType.Paragraph, content: 'Coming soon' }
      //   ]
      // }
    ];

    for (let a = 0; a < articles.length; ++a) {
      articles[a]['type'] = 'thoughts';
    }

    return articles;
  }
}
