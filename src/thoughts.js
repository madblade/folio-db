import {ParagraphType} from './article';
import {A1} from './thoughts-detail/art1';
import {A2} from './thoughts-detail/art2';
import {A3} from './thoughts-detail/art3';

export class Thoughts {

  static getArticles() {
    const articles = [
      A1.get(), 
      A2.get(),
      A3.get(),
    
      { title: 'JavaScript Quines',
        date: 'draft',
        body: [
          {type: ParagraphType.Title, content: 'Introduction' },
          {type: ParagraphType.Paragraph, content: 'Quines: definition' },
          {type: ParagraphType.Paragraph, content: 'Problematic' },
          {type: ParagraphType.Title, content: 'I. Readable quines' },
          {type: ParagraphType.Code, language: 'javascript',
              content:
                '(function quine(){\n' +
                '  console.log(\'(\' + quine.toString() + \')();\');\n' +
                '})();'
            },
          {type: ParagraphType.Code, language: 'javascript',
              content:
                '!function $(){console.log(\'!\'+$+\'()\')}()\n'
          },
          {type: ParagraphType.Paragraph, content: 'Discussion' },
          {type: ParagraphType.Title, content: 'II. Golfed quines' },
          {type: ParagraphType.Code, language: 'javascript',
            content:
              '$=_=>`$=${$};$()`;$()'
          },
          {type: ParagraphType.Paragraph, content: 'Discussion' },
          {type: ParagraphType.Code, language: 'javascript',
            content:
              '(_=$=>`(_=${_})()`)()'
          },
          {type: ParagraphType.Paragraph, content: 'Discussion' },
        ]
      },
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
