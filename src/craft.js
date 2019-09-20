import {ParagraphType} from './article';

export class Craft {

  static getArticles() {
    const articles = [
      {
        title: 'Persistent homology on an example',
        date: '2019/09/16',
        author: 'm.s',
        body: [
          {type: ParagraphType.Title, content: 'Screen' },
          {type: ParagraphType.Image,
            content: 'assets/craft/persistent.jpg'
          },
          {type: ParagraphType.Title, content: 'Links' }, 
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/persistence/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/persistence/">Source code</a>'
          },
          {type: ParagraphType.Title, content: 'About' },
          {type: ParagraphType.Paragraph, content:
              'Short demo presenting basic concepts of 1D and 2D persistent homology on an example.'
          }
        ]
      },
      {
        title: 'Peg rectangle self-intersecting surface',
        date: '2019/09/16',
        author: 'm.s',
        body: [
          {type: ParagraphType.Title, content: 'Screen' },
          {type: ParagraphType.Image,
            content: 'assets/craft/peg.jpg'
          },
          {type: ParagraphType.Title, content: 'Links' }, 
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/self-curve/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/self-curve/">Source code</a>'
          },
          {type: ParagraphType.Title, content: 'About' },
          {type: ParagraphType.Paragraph, content:
              'A small visualization of the self-intersecting surface involved in the peg rectangle problem [<i>Balancing acts</i>, M. Meyerson, 1981; <i>Rectangles and simple closed curves</i>, H. Vaughan, 1977].'
          }
        ]
      },
      {
        title: 'Persistence Wasserstein solver',
        date: '2019/09/10',
        author: 'm.s',
        body: [
          {type: ParagraphType.Title, content: 'Screens' },
          {type: ParagraphType.Image,
            content: 'assets/craft/munk.jpg'
          },
          {type: ParagraphType.Image,
            content: 'assets/craft/sparseandtrack.jpg'
          },
          {type: ParagraphType.Title, content: 'Links' },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/assignment-examples/">Solver demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/sparse-examples/">Matrix sparsity demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/tracking-examples/">2D Feature tracking demo</a>'
          },
          {type: ParagraphType.Title, content: 'About' },
          {type: ParagraphType.Paragraph, content:
              'An optimized solver for computing the discrete <a href="https://en.wikipedia.org/wiki/Wasserstein_metric">Wasserstein distance</a> between <a href="https://en.wikipedia.org/wiki/Persistent_homology">persistence diagrams</a>.'
          }
        ]
      },
      {
        title: 'Particle Tracing Demos',
        date: '2019/08/05',
        author: 'm.s',
        body: [
          {type: ParagraphType.Title, content: 'Screen' },
          {type: ParagraphType.Image,
            content: 'assets/craft/particles12.jpg'
          },
          {type: ParagraphType.Title, content: 'CPU-based particle tracing' },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/particles-2d-cpu/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/particles-2d-cpu/">Source code</a>'
          },
          {type: ParagraphType.Title, content: 'GPU-based particle tracing' },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/particles-2d-gpu/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/particles-2d-gpu/">Source code</a>'
          },
        ]
      },
      {
        title: 'Lightspeed Japanese kana learning',
        date: '2019/08/05',
        author: 'm.s',
        body: [
          {type: ParagraphType.Title, content: 'Screen' },
          {type: ParagraphType.Image,
            content: 'assets/craft/kanas.jpg'
          },
          {type: ParagraphType.Title, content: 'Links' },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/kanalearn/">Learn kana</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/kanjilearn/">Learn kanji (experimental)</a>'
          },
          {type: ParagraphType.Title, content: 'Quick notes' },
          {type: ParagraphType.Paragraph, content:
              'It has to be noted that it is best to write down characters ' +
              '(following the ordering of lines mentioned in the images) ' +
              'in order to properly assimilate Japanese kana. ' +
              'The same goes for kanji, which should really ' +
              'be learnt in full sentences context. '
          },
          {type: ParagraphType.Paragraph, content:
              'The purpose of these short demos is to ' + 
              'bullheadedly learn to recognize a great quantity of symbols ' + 
              'in a short amount of time. ' +
              'Characters with a high failure rate will be repeatedly ' + 
              'asked to the user until they are well assimilated. ' + 
              'Kanji support is very experimental at the moment. ' 
          },
          {type: ParagraphType.Paragraph, content:
              'Coloured images introduce a bias in recognition, ' + 
              'so be sure to use the app with both modes, ' +
              ' characters and images, ' + 
              'alternatively. '
          }
        ]
      },
      {
        title: '2048-3D',
        date: '2019/07/29',
        author: 'm.s',
        body: [
          {type: ParagraphType.Title, content: 'Screen' },
          {type: ParagraphType.Image,
            content: 'assets/craft/2048.jpg'
          },
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
          }
        ]
      }
    ];

    for (let a = 0; a < articles.length; ++a) {
      articles[a]['type'] = 'craft';
    }

    return articles;
  }
}
