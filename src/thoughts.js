import {ParagraphType} from './article';

export class Thoughts {

  static getArticles() {
    const articles = [
      { title: 'A genealogy of Qualia',
        date: 'draft',
        body: [
          {type: ParagraphType.Title, content: 'Introduction' },
          {type: ParagraphType.Paragraph, content: 'Qualia: definition and state of the art' },
          {type: ParagraphType.Paragraph, content: 'Problematic' },
          {type: ParagraphType.Title, content: 'I. Objective genealogy' },
          {type: ParagraphType.Paragraph, content: 'Biological argument' },
          {type: ParagraphType.Title, content: 'II. Relative genealogy' },
          {type: ParagraphType.Paragraph, content: 'Relativity argument' },
        ]
      },
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
