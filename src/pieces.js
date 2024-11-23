import {ParagraphType} from './article.js';

export class Pieces {

  static getArticles() {
    const articles = [
      { title: 'Simon Stalenhag’s flooded paintings',
        date: '2019/02/24',
        author: 'M. S',
        thumb: 'assets/img/pieces/stalenhag/1.jpg',
        body: [
          {type: ParagraphType.Title, content: 'The artist'},
          {type: ParagraphType.Paragraph, content:
              'Fragments of the universe imagined by Swedish artist ' +
              '<a href="http://www.simonstalenhag.se/">Simon Stalenhag</a> ' +
              'have attracted praise and interest from around the world. ' +
              'Following his recognition, he was able to publish narrative art books and ' +
              'successfully kickstart a ' +
              '<a href="https://en.wikipedia.org/wiki/Tales_from_the_Loop_(role-playing_game)">table-top game</a>, ' +
              'developing further his world and giving it backstories. '
          },
          {type: ParagraphType.Paragraph, content:
              'Regardless of the praise and upcoming adaptations, ' +
              'there is something oddly magnetic to Stalenhag’s original illustrations. ' +
              'Somehow, they feel intimate and connected, ' +
              'as if the impressions they give could have been memories ' +
              'and the observer wanted to make sense of them. ' +

              'This is something rarely ever achieved in ' +
              'novels, films and games due to their being explicit art. '
          },
          {type: ParagraphType.Paragraph, content:
              'This is also a very good example of how making the familiar unfamiliar, ' +
              'for instance by mixing vintage objects with futuristic thematics, ' +
              'can achieve a visceral sensation of connection. ' +
              'Here is a sample of Stalenhag’s work.'
          },
          {type: ParagraphType.Title, content: 'Seminal illustrations'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/1.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/2.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/3.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/4.jpg'},
          {type: ParagraphType.Title, content: ' “The Flood” '},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/flood/1.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/flood/2.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/flood/3.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/flood/4.jpg'},
          {type: ParagraphType.Title, content: 'Deep impressions'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/explore/1.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/explore/2.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/explore/3.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/explore/4.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/explore/5.jpg'},
          {type: ParagraphType.Title, content: 'Other works'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/din/1.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/stalenhag/din/2.jpg'},
        ]
      },
      { title: 'Twisted nightmares from Anatoly Fomenko',
        date: '2019/01/24',
        author: 'M. S',
        thumb: 'assets/img/pieces/fomenko/color/10.jpg',
        body: [
          {type: ParagraphType.Title, content: 'The artist'},
          {type: ParagraphType.Paragraph, content:
              '<a href="https://en.wikipedia.org/wiki/Anatoly_Fomenko">Anatoly Fomenko</a> ' +
              'is a perfect example of the following two facts: ' +
              '1. scientists can do art and 2. they can also ' +
              'talk nonsense and put ' +
              '<i><a href="https://en.wikipedia.org/wiki/New_Chronology_(Fomenko)">' +
              'substantial effort</a></i> into it. ' +
              'Fomenko’s wicked mathematical landscapes are filled with ghastly wraiths, ' +
              'as emanations from an abyss that was stared at for too long. '
          },
          {type: ParagraphType.Paragraph, content:
              'The following pieces each illustrate a distinct concept in physics or mathematics, ' +
              'such as <a href="https://en.wikipedia.org/wiki/Fluid_dynamics">fluid flow</a> and ' +
              '<a href="https://en.wikipedia.org/wiki/Rigid_body">rigid body</a> motion in mechanics; ' +
              'the <a href="https://en.wikipedia.org/wiki/Alexander_horned_sphere">Alexander horned sphere</a> and ' +
              'the <a href="https://en.wikipedia.org/wiki/Mapping_cylinder">mapping cylinder</a> in topology; ' +
              'or more arcane techniques such as the method of killing spaces to compute ' +
              '<a href="https://en.wikipedia.org/wiki/Homotopy_groups_of_spheres"> homotopy groups</a>.'
          },

          {type: ParagraphType.Title, content: 'Seminal work'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/fomenko/bw/1.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/fomenko/bw/2.jpg'},
          {type: ParagraphType.TwoImages,
            image1: 'assets/img/pieces/fomenko/bw/3.jpg',
            image2: 'assets/img/pieces/fomenko/bw/4.jpg'
          },
          {type: ParagraphType.TwoImages,
            image1: 'assets/img/pieces/fomenko/bw/5.jpg',
            image2: 'assets/img/pieces/fomenko/bw/6.jpg'
          },
          {type: ParagraphType.Title, content: 'Color works'},
          {type: ParagraphType.TwoImages,
            image1: 'assets/img/pieces/fomenko/color/1.jpg',
            image2: 'assets/img/pieces/fomenko/color/2.jpg'
          },
          {type: ParagraphType.TwoImages,
            image1: 'assets/img/pieces/fomenko/color/5.jpg',
            image2: 'assets/img/pieces/fomenko/color/4.jpg'
          },
          {type: ParagraphType.TwoImages,
            image1: 'assets/img/pieces/fomenko/color/3.jpg',
            image2: 'assets/img/pieces/fomenko/color/7.jpg'
          },
          {type: ParagraphType.TwoImages,
            image1: 'assets/img/pieces/fomenko/color/6.jpg',
            image2: 'assets/img/pieces/fomenko/color/8.jpg'
          },
          {type: ParagraphType.Image, content: 'assets/img/pieces/fomenko/color/9.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/fomenko/color/10.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/fomenko/color/11.jpg'},
          {type: ParagraphType.Image, content: 'assets/img/pieces/fomenko/color/12.jpg'},

        ]
      },
      // { title: 'MIA',
      //   date: '2019/01/01',
      //   body: [
      //     {type: ParagraphType.Paragraph, content: 'Coming soon' }
      //   ]
      // },
      // { title: 'D. Bl',
      //   date: '2019/01/01',
      //   body: [
      //     {type: ParagraphType.Paragraph, content: 'Coming soon' }
      //   ]
      // },
      // { title: 'Noon.',
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
