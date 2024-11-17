import {ParagraphType} from './article.js';

export class Homepage {

  static getArticles() {
    return [
      {
        // id: -3,
        title: 'About',
        author: 'm.s',
        type: 'welcome',
        date: '2019/02/05',
        body: [
          {type: ParagraphType.Title, content: 'About me'},
          {type: ParagraphType.Paragraph, content:
              'I am a software/R&D engineer ' +
              'with background in software development, topology, graphics, ' +
              'visualization and algorithms. I completed my PhD in  ' +
              'Computer Science from Sorbonne University in 2019 and ' +
              'I am currently looking for a position in the ' + 
              'animation or video game industry. ' +
              'Hire me!'
          },
          {type: ParagraphType.Paragraph, content:
              'My experience: ' +
              'visualization scientist / research engineer ' +
              'for 5 years (machine learning, meshing, CFD, and topology); ' +
              'graphics and game design experimenter for ' +
              '3 years on my free time (small side projects in ' +
              'JavaScript). ' +
              ''
          },
          {type: ParagraphType.Paragraph, content:
              'My skills: computer science (programming, architecture, ' +
              'real-time graphics, geometry, topology and algorithms); ' +
              'communication (redaction, edition, tutoring, ' +
              'binge-reading). ' +
              ''
          },
          {type: ParagraphType.Paragraph, content:
              'My interests: animation, tales, music, ' +
              'epistemology, sociology, metaphysics. '
          },
        //  {type: ParagraphType.Title, content: 'About this website'},
        //  {type: ParagraphType.Paragraph, content:
        //    'As outlined in Raph Koster\'s ' +
        //      '<a href="https://www.youtube.com/watch?v=zyVTxGpEO30">2017 GDC talk</a>, ' +
        //      'creativity hardly ever comes out of the blue: ' +
        //      'everything in the flow of human creation has to be inspired by something else, ' +
        //      'since humans share environment, history and ' +
        //      '<a href="https://www.nature.com/news/most-europeans-share-recent-ancestors-1.12950">ancestry</a>. ' +
        //      'Drawing inspiration from Sam Hughes’ <a href="https://qntm.org">delightful blog</a>, ' +
        //      'this place was originally intended to compile ' +
        //      'a medley of harebrained technical ideas, ' +
        //      'visual javascript demos, random thoughts ' +
        //      'and other things hardly worthy of interest. '
        //  },
        ]
      }
    ];
  }
}
