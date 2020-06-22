import {ParagraphType} from './article';

export class Craft {

  static getArticles() {
    const articles = [
      {
        title: 'WebGL Gerstner waves',
        date: '2020/05/06',
        author: 'M. S',
        thumb: 'assets/img/craft/gerstner-2.jpg',
        body: [
          {type: ParagraphType.Title, content: 'Try it!' }, 
          {type: ParagraphType.Paragraph, content:
            'Waves and ocean rendering in WebGL is quite popular (see this famous <a href="https://www.shadertoy.com/view/Ms2SD1">shadertoy example</a> using procedural noise and this reference <a href="https://threejs.org/examples/webgl_shaders_ocean2.html">threejs example</a> using FFTs). These examples are impressive but they rely entirely on fragment processing. The Gerstner approach documented in <a href="https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-1-effective-water-simulation-physical-models">GPU Gems 1</a> is geometry-oriented; it is more suitable in a number of scenarios, as it puts less strain on the GPU and is more model-friendly (e.g. to synchronize ship position and pitch-roll-yaw). '
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/waves-gerstner/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/waves-gerstner/">Source code</a>'
          }
        ]
      },
      {
        title: 'Apporximate Shadow Volume for smooth geometry',
        date: '2020/05/05',
        author: 'M. S',
        thumb: 'assets/img/craft/shadow-volume.jpg',
        body: [
          {type: ParagraphType.Title, content: 'Try it!' }, 
          {type: ParagraphType.Paragraph, content:
            '“Shadow volume” is a 3D graphics technique to compute crisp, high-fidelity shadows. An important bottleneck to the technique is the high CPU load necessary to extract the shadow geometry. When the shadow caster is sufficiently smooth, however, this geometry extraction becomes trivial—and the shadowing artifacts are kept to a minimum. Here is an illustration with some smooth meshes (and a skinned character)! '
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/shadow-volume/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/shadow-volume/">Source code</a>'
          }
        ]
      },
      {
        title: 'First-person mobile controls for Three.js',
        date: '2020/04/25',
        author: 'M. S',
        thumb: 'assets/img/craft/widget-default.jpg',
        body: [
          {type: ParagraphType.Title, content: 'Try it!' }, 
          {type: ParagraphType.Paragraph, content:
            'Navigating a 3D scene on touch devices is challenging—pinch and drag movements are intuitive, but they require a fixed camera. These new controls provide a gamepad-inspired approach to camera movement! '
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/widget-mobile-controller/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/widget-mobile-controller/">Source code</a>'
          },
          {type: ParagraphType.Title, content: 'Themes' },
          {type: ParagraphType.Image,
            content: 'assets/img/craft/widget-playstation.jpg'
          },
          {type: ParagraphType.Image,
            content: 'assets/img/craft/widget-xbox.jpg'
          }
        ]
      },
      {
        title: 'Real-time Wormhole effect',
        date: '2020/03/03',
        author: 'M. S',
        thumb: 'assets/img/craft/wormhole.jpg',
        body: [
           {type: ParagraphType.Image,
            content: 'assets/img/craft/wormhole.jpg'
          },
          {type: ParagraphType.Title, content: 'Try it!' }, 
            {type: ParagraphType.Paragraph, content:
            'Interactive, (non-physical) real-time WebGL wormhole, inspired from <a href="https://github.com/sirxemic/Interstellar/">@sirxemic</a>. The achieved effect is designed entirely ad-hoc, based on a simple stretch shader and on a cubecam / envmap. '
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/wormhole/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/wormhole/">Source code</a>'
          }
        ]
      },
      {
        title: 'Image reconstruction with primitives',
        date: '2020/02/23',
        author: 'M. S',
        thumb: 'assets/img/craft/joconde.jpg',
        body: [
           {type: ParagraphType.Image,
            content: 'assets/img/craft/joconde.jpg'
          },
          {type: ParagraphType.Title, content: 'Try it!' }, 
            {type: ParagraphType.Paragraph, content:
            'This is an interactive WebGL-powered demo, based on the wonderful idea by <a href="https://github.com/fogleman/primitive/">@fogleman</a>, that reconstructs images from simple (primitive) shapes. Don’t forget to check out the <a href="https://primitive.lol/">original application</a> for macOS!'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/geotransform/">Demo (do NOT attempt on mobile!)</a>'
          },
          {type: ParagraphType.Paragraph, content:
              'Test it with different parameters (and with different images!) for interesting artistic effecs!'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/geotransform/">Source code</a>'
          }
        ]
      },
      {
        title: 'Persistent homology on an example',
        date: '2019/09/16',
        author: 'M. S',
        thumb: 'assets/img/craft/persistent2.jpg',
        body: [
           {type: ParagraphType.Image,
            content: 'assets/img/craft/persistent.jpg'
          },
          {type: ParagraphType.Title, content: 'Try it!' }, 
            {type: ParagraphType.Paragraph, content:
            'This short javascript demo presents the basic concepts of 1D and 2D persistent homology on a simple example.'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/persistence/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/persistence/">Source code</a>'
          }
        ]
      },
      {
        title: 'Peg rectangle self-intersecting surface',
        date: '2019/09/16',
        author: 'M. S',
        thumb: 'assets/img/craft/peg2.jpg',
        body: [
          {type: ParagraphType.Image,
            content: 'assets/img/craft/peg.jpg'
          },
          {type: ParagraphType.Title, content: 'Try it!' }, 
          {type: ParagraphType.Paragraph, content:
              'This is a small visualization of the self-intersecting surface involved in the peg rectangle problem [<i>Balancing acts</i>, M. Meyerson, 1981; <i>Rectangles and simple closed curves</i>, H. Vaughan, 1977].'
          },
         {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/self-curve/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/self-curve/">Source code</a>'
          }
        ]
      },
      {
        title: 'Persistence Wasserstein solver',
        date: '2019/09/10',
        author: 'M. S',
        thumb: 'assets/img/craft/sparseandtrack2.jpg',
        body: [
          {type: ParagraphType.Image,
            content: 'assets/img/craft/munk.jpg'
          },
          {type: ParagraphType.Image,
            content: 'assets/img/craft/sparseandtrack.jpg'
          },
          {type: ParagraphType.Title, content: 'Try it!' },
          {type: ParagraphType.Paragraph, content:
          'This little demo illustrates the optimized solver I made for computing the discrete <a href="https://en.wikipedia.org/wiki/Wasserstein_metric">Wasserstein distance</a> between <a href="https://en.wikipedia.org/wiki/Persistent_homology">persistence diagrams</a>.'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/assignment-examples/">Solver demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/sparse-examples/">Matrix sparsity demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/tracking-examples/">2D Feature tracking demo</a>'
          }
        ]
      },
      {
        title: 'Particle tracing for vector fields',
        date: '2019/08/05',
        author: 'M. S',
        thumb: 'assets/img/technical/particles12.jpg',
        body: [
          {type: ParagraphType.Image,
            content: 'assets/img/craft/particles12.jpg'
          },
          {type: ParagraphType.Title, content: 'CPU-based particle tracing' },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/particles-2d-cpu/">Try it!</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/particles-2d-cpu/">Source code</a>'
          },
          {type: ParagraphType.Title, content: 'GPU-based particle tracing' },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/particles-2d-gpu/">Try it!</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/particles-2d-gpu/">Source code</a>'
          },
        ]
      },
      {
        title: 'Lightspeed Japanese vocabulary learning',
        date: '2019/08/05',
        author: 'M. S',
        thumb: 'assets/img/craft/kanji.jpg',
        body: [
          {type: ParagraphType.Image,
            content: 'assets/img/craft/kanas.jpg'
          },
          {type: ParagraphType.Title, content: 'Try it!' },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/kanalearn/">Learn kana</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/kanjilearn/">Learn kanji (experimental)</a>'
          },
          {type: ParagraphType.Title, content: 'Quick notes' },
          {type: ParagraphType.Paragraph, content:
              'It has to be noted that it is best to write down characters ' +
              '(following the numbers appearing in the pictures) ' +
              'in order to properly assimilate Japanese kana. ' +
              'The same goes for kanji; which should rather ' +
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
              'Colored images introduce a bias in recognition, ' + 
              'so be sure to use the app with both modes, ' +
              ' characters and images, ' + 
              'alternatively. '
          }
        ]
      },
      {
        title: '2048-3D',
        date: '2019/07/29',
        author: 'M. S',
        thumb: 'assets/img/craft/20482.jpg',
        body: [
          {type: ParagraphType.Image,
            content: 'assets/img/craft/2048.jpg'
          },
          {type: ParagraphType.Title, content: 'Try it!' },
          {type: ParagraphType.Paragraph, content:
              'A little 3D extension to the mini-game by ' +
              '<a href="https://github.com/gabrielecirulli">@gabrielecirulli</a> ' +
              'made in 3 days.'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/2048-3D/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/2048-3D">Source code</a>'
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
