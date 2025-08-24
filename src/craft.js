import {ParagraphType} from './article.js';

export class Craft {

  static getArticles() {
    const articles = [
      {
        title: 'Inverse kinematics in WebGL',
        date: '2021/01/16',
        author: 'M. S',
        thumb: 'assets/img/craft/ik.jpg',
        body: [
          {type: ParagraphType.Image,
            content: 'assets/img/craft/ik.jpg'
          },
          {type: ParagraphType.Paragraph, content:
            'A short take on common IK algorithms.'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/inverse-kinematics-arm/">Full article</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/inverse-kinematics-arm/">Source code</a>'
          }
        ]
      },
      {
        title: 'Painterly rendering in WebGL',
        date: '2021/01/06',
        author: 'M. S',
        thumb: 'assets/img/craft/painterly-1.jpg',
        body: [
          {type: ParagraphType.Image,
            content: 'assets/img/craft/painterly-1.jpg'
          },
          {type: ParagraphType.Image,
            content: 'assets/img/craft/painterly-2.jpg'
          },
          {type: ParagraphType.Paragraph, content:
            'Barbara Meier proposed in her Disney paper, <a href="https://disneyanimation.com/publications/painterly-rendering-for-animation/">Painterly Rendering for Animation</a>, to use particles instead of triangles to render brush strokes. Since then, many similar approaches have been proposed to tackle the (challenging) problem of placing and orienting those particle-brushes while keeping temporal coherence.'
          },
          {type: ParagraphType.Paragraph, content:
            'In this demo, information from the depth buffer and object UV coordinates is used to compute particle sizes, colors and orientations. The method is not robust temporally, with obvious instances of the “shower-door” effect (see the interesting paper: <a href="https://www-sop.inria.fr/reves/Basilic/2011/BBT11/paper.pdf">Temporal Coherence for Stylized Animations</a>).'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/brush-renderer/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/brush-renderer/">Source code</a>'
          }
        ]
      },
    
      {
        title: 'Minecraft with Portals in WebGL',
        date: '2020/06/20',
        author: 'M. S',
        thumb: 'assets/img/craft/spix-portals.jpg',
        body: [
           {type: ParagraphType.Image,
            content: 'assets/img/craft/spix-portals.jpg'
          },
          {type: ParagraphType.Paragraph, content:
            'This small WebGL project is a javascript minecraft clone prototype with portals, generic gravity, multiplayer sandbox, and other basic effects, based on ThreeJS. The nature of javascript, its design and especially the JIT runtime, make it extremely fast to get a basic idea running and then to iterate. Browsers also provide out-of-the-box profilers and debugging tools. This greatly reduces the time spent on debugging or investigating low-level technical details irrelevant to prototyping.'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/spix/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/spix/">Source code</a>'
          },
          {type: ParagraphType.Title, content: 'Some technical challenges' }, 
          {type: ParagraphType.Paragraph, content:
            '<b>Texture bleeding</b>: using atlasing with texture filtering (linear mipmapping or anisotropic filtering) will produce bleeding artifacts on the edge of block tiles, because linear filters query neighbor tiles. At the time I worked on this, in WebGL, anisotropic filtering was performed by an extension called <i>EXT_texture_filter_anisotropic</i>, for which:'
          },
		{type: ParagraphType.Quotation, content: 'Implementations are (…) permitted to ignore the minification or magnification filter and implement the highest quality of anisotropic filtering possible. Applications seeking the highest quality anisotropic filtering available are advised to request a LINEAR_MIPMAP_LINEAR minification filter, a LINEAR magnification filter, and a large maximum degree of anisotropy.',
		  origin: '',
		  source: ''
		},
		  {type: ParagraphType.Paragraph, content:
            'This means that the magnification filter is most likely LINEAR (where we want NEAREST). If we don’t really care about bleeding in the distance at grazing angles, we certainly do care about having sharp, pixelated, minecraft-like textures when they’re magnified, and we want to keep them as small as they should be. Without much control on how anisotropic filtering combines mipmaps in WebGL, I just disabled anisotropic filtering and only used nearest filters. This produces ugly grain at the distance. The other workaround to the bleeding edges artifact would be to add padding to each atlas tile, as in virtual texturing. This, however, requires a constant 1-pixel pad for all mips, and since WebGL does not have compute shaders, there is no viable option for mip generation other than the default one (without pads).'
          },
          {type: ParagraphType.Paragraph, content:
            '<b>Portals</b>: performance and flexibility. Using render target textures (RTTs) is a flexible solution for rendering nested portals (and allows me to further apply distortion effects if I want), at the cost of performance. The other well-documented technique, that uses stencil masks, offers performance at the cost of being somewhat less flexible and more programmatically involved. Here I somewhat combined the advantages of both: first, rendering a scene that contains only the portal frame to the stencil buffer, then rendering the “otherworldly” scene into an RTT using the stencil buffer to restrict the screen space needing rasterization. There is a neat performance gain over only using RTTs! In Threejs, however, this comes with a drawback: there is no default anti-aliasing for rendering to textures, so I needed an additional software FXAA pass.'
          },
		  {type: ParagraphType.Paragraph, content:
            'Edit (2024/11): this excellent <a href="https://www.youtube.com/watch?v=w-Z1Fx0LvDc">Psychonauts 2 talk</a> mentions a few other technical points related to seamless portals, including one that I also implemented at the time from a discussion with Tom Hulton: culling with an oblique view frustum.'
          },
          {type: ParagraphType.Paragraph, content:
            '<b>Performance issues, I</b>: in a browser, performance is a major bottleneck. When a CPU task cannot be completed in less than 7ms (for 144Hz displays), it must be made progressive (which means, it must pause when its time budget has been exhausted, only to resume at the next game loop iteration). Having algorithms work in a streaming manner (and caching their work) is necessary for the terrain generation part, as well as for some topological algorithms that run there.'
          },
          {type: ParagraphType.Paragraph, content:
            '<b>Performance issues, II</b>: because of the generality of ThreeJS, it is necessary to use instancing for materials when rendering a given scene from multiple cameras in a single frame, which is the case for portals and water reflection. Without instancing materials and swapping between them after each render call, ThreeJS used to automatically recompile them because it thought that the lighting had changed. It was not storing the appropriate shader permutation key. This has been addressed a while ago by the ThreeJS people, but there are many other performance concerns with the way ThreeJS does things lazily. For examile, shader compilation warmups for all the material permutations and light configurations are not possible if we don’t know the exact lighting setup of every scene beforehand.'
          },
          {type: ParagraphType.Paragraph, content:
            '<b>Multiplayer</b>: network bandwidth and latency are major bottlenecks that make it key to think about the project architecture from the start. Here I am using a simple lockstep model, only transmitting client inputs and world updates, but because of the SocketIO/TCP overhead, I found that client interpolation was necessary. An advantage of doing everything in javascript is that I can easily bundle the server and the client together—and launch the game locally in the browser. This is what is done in the demo, where the default game setting has the client running as fast as the display can handle, while the server is sending entity updates at 20Hz.'
          },
          {type: ParagraphType.Paragraph, content:
            'This project came with other challenges (physics, crisp shadows, skies, terrain generation…) that I could talk about in more detail.'
          },
          {type: ParagraphType.Title, content: 'Gallery' },
          {type: ParagraphType.Image,
            content: 'assets/img/craft/spix-scene.jpg'
          },
          {type: ParagraphType.Image,
            content: 'assets/img/craft/spix-shadows.jpg'
          },
          {type: ParagraphType.TwoImages,
            image1: 'assets/img/craft/spix-cube.jpg',
            image2: 'assets/img/craft/spix-portals.jpg'
          },
          {type: ParagraphType.Image,
            content: 'assets/img/craft/spix-demo-1.gif'
          },
          {type: ParagraphType.Image,
            content: 'assets/img/craft/spix-demo-2.gif'
          },
          {type: ParagraphType.Image,
            content: 'assets/img/craft/spix-demo-3.gif'
          },
        ]
      },
      {
        title: 'Gerstner waves in WebGL',
        date: '2020/05/06',
        author: 'M. S',
        thumb: 'assets/img/craft/gerstner-2.jpg',
        body: [
           {type: ParagraphType.Image,
            content: 'assets/img/craft/gerstner-1.jpg'
          },
           {type: ParagraphType.Image,
            content: 'assets/img/craft/gerstner-2.jpg'
          },
          {type: ParagraphType.Paragraph, content:
            'Ocean rendering has been done in WebGL for a while (see this <a href="https://www.shadertoy.com/view/Ms2SD1">shadertoy</a>, and the <i>webgl_shaders_ocean2</i> ThreeJS example that was already using FFTs without compute shaders). These examples are impressive but they rely entirely on fragment processing. The Gerstner approach documented in <a href="https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-1-effective-water-simulation-physical-models">GPU Gems 1</a> is geometry-oriented; it is more suitable in a number of scenarios, as it puts less strain on the GPU and is more model-friendly, e.g. to synchronize ship position and pitch-roll-yaw. '
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
        title: 'Smooth shadow volumes',
        date: '2020/05/05',
        author: 'M. S',
        thumb: 'assets/img/craft/shadow-volume.jpg',
        body: [
           {type: ParagraphType.Image,
            content: 'assets/img/craft/shadow-volume.jpg'
          },
          {type: ParagraphType.Paragraph, content:
            '“Shadow volumes” is the name of an old 3D graphics technique that computes crisp, high-fidelity shadows. An important bottleneck of the technique is the high CPU load necessary to extract the shadow geometry. When the shadow caster is sufficiently smooth, however, this geometry extraction becomes trivial—and the shadowing artifacts are kept to a minimum. Still, the method is demanding in terms of fillrate. This demo is an illustration with some smooth meshes and a skinned character.'
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
        title: 'Mobile controls for ThreeJS',
        date: '2020/04/25',
        author: 'M. S',
        thumb: 'assets/img/craft/widget-default.jpg',
        body: [
          {type: ParagraphType.Paragraph, content:
            'Navigating a 3D scene on touch devices is challenging—pinch and drag movements are intuitive, but they require a fixed camera. These controls emulate a gamepad for camera rotation and movement.'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/widget-mobile-controller/">Demo</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://github.com/madblade/widget-mobile-controller/">Source code</a>'
          },
          {type: ParagraphType.Title, content: 'Themes' },
          {type: ParagraphType.TwoImages,
            image1: 'assets/img/craft/widget-playstation.jpg',
            image2: 'assets/img/craft/widget-xbox.jpg'
          }
        ]
      },
      {
        title: 'Real-time wormhole effect',
        date: '2020/03/03',
        author: 'M. S',
        thumb: 'assets/img/craft/wormhole.jpg',
        body: [
           {type: ParagraphType.Image,
            content: 'assets/img/craft/wormhole.jpg'
          },
            {type: ParagraphType.Paragraph, content:
            'Interactive, non-physical real-time WebGL wormhole, inspired from <a href="https://github.com/sirxemic/Interstellar/">@sirxemic</a>. The achieved effect is designed entirely ad-hoc, based on a simple stretch shader and on a cubecam+envmap. '
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
            {type: ParagraphType.Paragraph, content:
            'This is based on the wonderful idea by <a href="https://github.com/fogleman/primitive/">@fogleman</a>, that reconstructs images from simple primitive shapes. Take a look at the <a href="https://primitive.lol/">original application</a> for macOS.'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/geotransform/">Demo</a>'
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
          {type: ParagraphType.Paragraph, content:
          'This illustrates the optimized solver I made for computing the discrete <a href="https://en.wikipedia.org/wiki/Wasserstein_metric">Wasserstein distance</a> between <a href="https://en.wikipedia.org/wiki/Persistent_homology">persistence diagrams</a>.'
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
        title: '2D particle tracing',
        date: '2019/08/05',
        author: 'M. S',
        thumb: 'assets/img/technical/particles12.jpg',
        body: [
          {type: ParagraphType.Image,
            content: 'assets/img/craft/particles12.jpg'
          },
			{type: ParagraphType.Paragraph, content:
          'This was inspired by interactive javascript <a href="https://github.com/Esri/wind-js">wind maps</a>.'
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
        title: 'Learning Japanese vocabulary',
        date: '2019/08/05',
        author: 'M. S',
        thumb: 'assets/img/craft/kanji.jpg',
        body: [
          {type: ParagraphType.Image,
            content: 'assets/img/craft/kanas.jpg'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/kanalearn/">Learn kana</a>'
          },
          {type: ParagraphType.Paragraph, content:
              '<a href="https://madblade.github.io/kanjilearn/">Learn kanji (experimental)</a>'
          },
          {type: ParagraphType.Title, content: 'Quick notes' },
          {type: ParagraphType.Paragraph, content:
              'It is best to write down characters ' +
              'following the numbers appearing in the pictures ' +
              'in order to properly assimilate and memorize Japanese kana. ' +
              'The same goes for kanji; which should ' +
              'be learned in context (in sentences). '
          },
          {type: ParagraphType.Paragraph, content:
              'The purpose of these short demos is to ' + 
              'learn to recognize a great quantity of symbols ' + 
              'in a short amount of time. ' +
              'Characters with a high failure rate will be repeatedly ' + 
              'asked to the user until they are well assimilated. ' + 
              'Kanji support is experimental. ' 
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
        title: '2048 in 3D',
        date: '2019/07/29',
        author: 'M. S',
        thumb: 'assets/img/craft/20482.jpg',
        body: [
          {type: ParagraphType.Image,
            content: 'assets/img/craft/2048.jpg'
          },
          {type: ParagraphType.Paragraph, content:
              'A little 3D extension to the mini-game by ' +
              '<a href="https://github.com/gabrielecirulli">@gabrielecirulli</a> ' +
              'made in a few days.'
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
