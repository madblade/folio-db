import {ParagraphType} from './article';

export class Craft {

  static getArticles() {
    const articles = [
      {
        title: '2048-3D',
        date: '2019/07/29',
        author: 'm.s',
        body: [
          {type: ParagraphType.Title, content: 'Links' },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/2048-3D/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/2048-3D">Source code</a>'
          },
          {type: ParagraphType.Title, content: 'About' },
          {type: ParagraphType.Paragraph, content:
              'A little 3D extension to the mini-game by ' +
              '<a href="https://github.com/gabrielecirulli">@gabrielecirulli</a> ' +
              'made in 3 days.'
          },
          {type: ParagraphType.Title, content: 'Screens' },
          {type: ParagraphType.Image,
            content: 'https://raw.githubusercontent.com/madblade/2048-3D/master/static/screens/1.png'
          }
        ]
      },
    ];

    for (let a = 0; a < articles.length; ++a) {
      articles[a]['type'] = 'craft';
    }

    return articles;
  }
}
