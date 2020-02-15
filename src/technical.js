import {ParagraphType} from './article';

export class Technical {

  static getArticles() {
    const articles = [
      {
        // id: -2,
        title: 'Thesis: Topology, Lost Chapters',
        author: 'M. S',
        type: 'welcome',
        date: '2019/09/15',
        thumb: 'assets/img/technical/crc.jpg',
        body: [
          {type: ParagraphType.Title, content: 'Introduction'},
          {type: ParagraphType.Paragraph, content:
              'Here are a few short paragraphs concerning topology, heavily inspired by <a href="https://www.3blue1brown.com/">3Blue1Brown</a>, that I initially intended to put in my dissertation as an introductory discussion. '
          },
          {type: ParagraphType.Paragraph, content:
              'Topology investigates the fundamental structural properties of objects, that can be identified by looking at the said object regardless of any geometrical representation or measure. For that purpose, <i>homeomorphism</i> is a central concept, based on the notion of continuity, that allows to construct a topological characterization, so as to group objects, called <i>topological spaces</i>, in equivalence classes. Nonetheless, it proves quite difficult in practice to demonstrate that two objects are homeomorphic using only continuity. Topologists would rather make use of the concept of <i>invariants</i>, which are computable quantities (or algebraic structures) that stay the same for all objects that are homeomorphic to one another. It can be seen as a way to introduce back the concept of measure, in a more fundamental sense, to study topological objects. '
          },
          {type: ParagraphType.Paragraph, content:
              'In the following, we will try to give some insights about what topology can actually do, based on two concrete examples, for readers who are not necessarily well acquainted with the subject; this is the occasion to present some of its core concepts in a non-formal manner. '
          },
          {type: ParagraphType.Title, content: 'I. Inscribed rectangle problem'},
          {type: ParagraphType.Paragraph, content:
              '(<b>Inscribed rectangle problem</b>) Given any non-self-intersecting continuous loop <small>$S$</small> in the Euclidean plane, can one always find a rectangle whose vertices are on <small>$S$</small>?'
          },
          {type: ParagraphType.Paragraph, content:
              'In other words, the problem is to find whether there are two distinct pairs of points, <small>$\\{x_1,y_1\\} \\in S^2$</small>, and <small>$\\{x_2,y_2\\} \\in S^2$</small>, which form two segments of equal length and sharing a midpoint (Fig. 1, left). A quite simple solution to this problem, involving topology, is given in [<i>Balancing acts</i>, M. Meyerson, 1981; <i>Rectangles and simple closed curves</i>, H. Vaughan, 1977]. Let us denote <small>$M$</small> the set of (unordered) pairs of points in the closed curve <small>$S$</small>: <small>$M=\\{ \\{x,y\\}, (x,y)\\in S^2\\}$</small> and furthermore <small>$M$</small> can be understood as a two-dimensional surface: every element <small>$\\{x,y\\}$</small> of <small>$M$</small> can be plotted, for example, on a square part of the plane, with its abscissa corresponding to the choice of <small>$x$</small> and its ordinate corresponding to the choice of <small>$y$</small>. Here pairs are unordered, so <small>$\\{x,y\\}=\\{y,x\\}$</small>. By identifying the symmetric points <small>$\\{x,y\\}$</small> with <small>$\\{y,x\\}$</small>, and by properly identifying extremal segments of the square (because <small>$S$</small> is a loop), <small>$M$</small> can be shown to have the same topological structure as a Möbius strip (Fig. 1, right). '
          },
          {type: ParagraphType.Image, content: 'assets/img/technical/closed-rectangle-curve.jpg'},
          {type: ParagraphType.Paragraph, content:
              'Figure 1 - A closed curve with an inscribed rectangle (left), the rectangle is defined by the pairs of points forming its diagonal (center). Every unordered pair of points in a closed curve can be uniquely mapped to a point in a Möbius strip (right, 3D model adapted from <a href="http://www.craftsmanspace.com">craftmanspace</a>).'
          },
          {type: ParagraphType.Paragraph, content:
              'Now let us consider the function <small>$f: M \\to \\mathbb{R}^3$</small>, associating each pair of points <small>$\\{x,y\\}$</small> with the point whose first two coordinates give the midpoint of segment <small>$(xy)$</small> and whose third coordinate is the length of <small>$(xy)$</small>. <small>$f(M)$</small> can be seen as a two-dimensional surface which lies in the half-space <small>$z\\geq0$</small> and meets <small>$z=0$</small> in its boundary <small>$S$</small> (Fig. 2). Furthermore, by virtue of the continuity of <small>$f$</small>, <small>$f(M)$</small> is also a Möbius strip. The problem of finding an inscribed rectangle in <small>$S$</small> is then equivalent to the problem of finding a point in <small>$f(M)$</small> which is the image of two distinct elements of <small>$M$</small>; in other words, a self-intersection of the surface <small>$f(M)$</small>. But by adding the interior of <small>$S$</small> (a disk) to <small>$f(M)$</small> (a Möbius strip), one gets a <i>projective plane</i>, which has no embedding in <small>$\\mathbb{R}^3$</small>, as topology states [<i>Algebraic Topology</i>, A. Hatcher, 2000]. In other words, there exists no way to represent <small>$f(M)$</small> as a non-intersecting <small>$2$</small>-dimensional surface in a <small>$3$</small>-dimensional space, so a self-intersection of <small>$f(M)$</small> must exist. '
          },
          {type: ParagraphType.Image, content: 'assets/img/technical/curve-pegrectangle-reduced.jpg'},
          {type: ParagraphType.Paragraph, content:
              'Figure 2 - A pair of points in a closed curve <small>$\\frak{C}$</small> (left) is mapped by the function <small>$f$</small> to a point in the upper 3D space. The image of pairs of points in <small>$\\frak{C}$</small> by <small>$f$</small> is a two-dimensional surface (right) whose self-intersections correspond to a rectangle inscribed in <small>$\\frak{C}$</small>.'
          },
          {type: ParagraphType.Paragraph, content:
              'This first example shows that the study of topology can bring out coarse truths about problems (not necessarily formulated in terms of geometry), and can lead to understand deep properties that a broad class of geometric or continuous objects can or cannot have. Note that absolutely no computation was necessary to prove that there is always an inscribed rectangle in a closed curve, yet no real practical way to find such a rectangle was provided. '
          },
          {type: ParagraphType.Paragraph, content:
              'A small JavaScript demo showing the self-intersecting surface is available <a href="https://madblade.github.io/self-curve/">here</a> (<a href="https://github.com/madblade/self-curve">Source code</a>). '
          },

          {type: ParagraphType.Title, content: 'II. Splitting Necklace'},
          {type: ParagraphType.Paragraph, content:
              'The interest of topology, though, is not limited to proving the existence or non-existence of solutions to abstract, theoretical problems. A recently developed field of topology involving <i>continuous functions</i>, called <i>Morse theory</i> [<i>Morse theory indomitable</i>, R. Bott, 1988], popularized by Milnor [<i>Morse Theory</i>, Milnor, 1963] and which found many applications in computing [<i>Computational Topology</i>, H. Edelsbrunner and J. Harer, 2009] and proved very useful to the understanding of large data. Let us see, in another example, how topology relates not only to the mere concept of space, but also to <i>functions</i> defined on them (with sufficiently nice smoothness properties). '
          },
          {type: ParagraphType.Paragraph, content:
              '(<b>Necklace splitting problem</b>) A necklace has <small>$2n$</small> beads of two different colors, arranged in some order. What is the smallest number of cuts necessary to split the necklace evenly, so that beads of each color can be equally shared between two partners? '
          },

          {type: ParagraphType.Paragraph, content:
              'The question asked here is to minimize the number of cuts made to the necklace, with the constraint that there must be a fair assignment of the resulting fragments between two individuals Alice and Bob (note that such optimization issues are quite common in engineering and computing applications [<i>How to assemble tree machines</i>, Bhatt et al., 1982]). Incidentally, this problem has a connection to an important result in topology: the Borsuk-Ulam theorem [<i>The Borsuk-Ulam theorem and bisection of necklaces</i>, Alon et al., 1986]. '
          },
          {type: ParagraphType.Paragraph, content:
              'In the case where beads are only of two distinct colors, the optimal number of cuts is two. To demonstrate this fact, let us give a continuous formulation of the problem. Instead of a necklace with a discrete number of beads, consider a segment <small>$I=(0,1)$</small> divided in continuous intervals of two different colors (the discrete problem is the special case where the length of all intervals are a multiple of some basic length). The problem is then to find two cuts that divide <small>$I$</small> into three fragments, so that an equal length of each color can be distributed to Alice and Bob (Fig. 3, left). '
          },

          {type: ParagraphType.Image, content: 'assets/img/technical/necklace-text.jpg'},
          {type: ParagraphType.Paragraph, content:
              'Beads in a necklace can be shared between Alice and Bob with two cuts (left). The continuous formulation of the problem considers lengths of colors instead of discrete beads (center). The parameter space of cutting and distributing three fragments is a sphere and the amount of colors given to Alice defines a vector field on this sphere (right). '
          },

          {type: ParagraphType.Paragraph, content:
              'Remark that the choice of two cuts that yield three fragments is equivalent to the choice of three positive numbers <small>$a$</small>, <small>$b$</small> and <small>$c$</small> so that <small>$a+b+c=1$</small>. Then, the choice of an assignment of those fragments between two partners is equivalent to give the numbers <small>$a$</small>, <small>$b$</small> and <small>$c$</small> two possible states, say <i>Alice</i> or <i>Bob</i>. Ingeniously, one could simultaneously represent the choice of two cuts of <small>$I$</small> and their assignment in the following manner: choose three numbers <small>$x$</small>, <small>$y$</small> and <small>$z$</small>, so that <small>$x^2+y^2+z^2=1$</small>, with <small>$x^2$</small>, <small>$y^2$</small> and <small>$z^2$</small> defining the lengths of fragments, and the sign of <small>$x$</small>, <small>$y$</small> and <small>$z$</small> defining an assignment of the fragments (say positive for Alice and negative for Bob). Notice that <small>$x^2+y^2+z^2=1$</small> is actually the equation of a (two-)sphere in <small>$\\mathbb{R}^3$</small> centered at the origin, so every point on the sphere corresponds to two cuts and an assignment. Swapping a given assignment of fragments between Alice and Bob amounts to reverting the sign of <small>$x$</small>, <small>$y$</small> and <small>$z$</small>, so <i>antipodal</i> points on the sphere correspond to swapped assignments. '
          },
          {type: ParagraphType.Paragraph, content:
              'In this setup, remember that every point on the sphere is associated with the length of each color given to Alice (Fig. 3, right). Then, if two antipodal points give the same length of each color to Alice, then they correspond to a balanced assignment of colors. But do such antipodal points exist? The important topological fact, mentioned earlier, actually gives the answer to this question: '
          },

          {type: ParagraphType.Paragraph, content:
              '<b>Theorem</b> (<b>Borsuk-Ulam</b>): For every continuous function <small>$f: S^2 \\to \\mathbb{R}^2$</small>, there exists a point <small>$(x,y,z)\\in S^2$</small> such that <small>$f(x,y,z) = f(-x,-y,-z)$</small>.'
          },

          {type: ParagraphType.Paragraph, content:
              'Less formally, it states that if one defines a continuous <i>vector field</i> on the surface of a sphere, then the sphere admits a pair of antipodal points having exactly the same vector field value. For example, the Borsuk-Ulam theorem assures us that there exists a pair of diametrically opposed points on the surface of the Earth where the pressure and temperature are precisely the same (given pressure and temperature fields are two-dimensional and continuous). '
          },
          {type: ParagraphType.Paragraph, content:
              'Now considering the function <small>$f$</small> which takes the points on the sphere as an input (corresponding to two cuts and an assignment), and outputs a couple <small>$(c_1,c_2)$</small>, indicating the length of each color given to Alice, <small>$f$</small> is continuous, and we have all the ingredients to conclude that two cuts at most are necessary to split the necklace evenly. This approach using the Borsuk-Ulam theorem generalizes to higher dimensions [Alon 1986], i.e. for necklaces with a higher number of colors. '
          },
          {type: ParagraphType.Paragraph, content: 
            'As illustrated with this more practical example, Topology can indeed provide insights about spaces as well as functions defined on spaces. In engineering and scientific applications, large volumes of data are often found in the form of a well-known (geometrical or topological) space, on which <i>scalar fields</i> or <i>vector fields</i> are defined. The question often asked is to analyze the properties of such fields. Interestingly, apart from the Borsuk-Ulam theorem, there are other deep relations between functions and the space on which they are defined. The field of Morse theory, mentioned earlier, precisely examines this relationship. It relies on the central notions of <i>manifold</i>, <i>continuity</i>, <i>homeomorphism</i>, and <i>critical points</i>. '
          }
        ]
      },

      {
        // id: -2,
        title: '2D vector fields with CPU particle tracing',
        author: 'M. S',
        type: 'welcome',
        date: '2019/02/05',
        thumb: 'assets/img/technical/particles12.jpg',
        body: [
          {type: ParagraphType.Image, content: 'assets/img/technical/2.jpg'},
          {type: ParagraphType.Title, content: 'Introduction'},
          {type: ParagraphType.Paragraph, content:
              'This short article introduces the concept of <i>vector field</i>, ' +
              'and presents a method for rendering vector fields using particles on the CPU. ' +
              'This method is easy to implement but not quite adapted for real-time graphics, ' +
              'as the CPU may be put to more profitable use. '
          },
          {type: ParagraphType.Title, content: 'I. Vector fields and particle-based visualization'},
          {type: ParagraphType.Paragraph, content:
              'The visual shown above was obtained with a basic technique called particle advection. ' +
              'It has been used for wind visualization in the browser for quite some time, ' +
              'see the <a href="https://github.com/cambecc/earth">earth project started in 2013</a>, ' +
              'which takes inspiration from <a href="http://hint.fm/wind/">hint.fm</a> and ' +
              'has inspired <a href="https://github.com/Esri/wind-js">windy.js</a>. '
          },
          {type: ParagraphType.Paragraph, content:
              'A vector field defined on a geometrical domain ' +
              'associates every position in the domain with a distinct vector. ' +
              'Continuous vector fields can be used to represent flow. ' +
              'For instance, when looking at the earth from a very high altitude, wind can be seen ' +
              'as a 2D vector field defined on the Earth’s 2D surface, ' +
              'considering the atmosphere’s height is negligible. ' +
              'If the vector field stays the same throughout time, it is called <i>steady</i>. ' +
              'If not, it is called <i>unsteady</i>. '
          },
          {type: ParagraphType.Paragraph, content:
              'There are different ways to get visual insights about vector fields: ' +
              'drawing tiny glyphs, like arrows locally pointing in the direction of ' +
              'the flow; ' +
              'texture advection techniques such as the ' +
              '<a href="https://en.wikipedia.org/wiki/Line_integral_convolution">' +
              'LIC</a> which “combines” random noise with the vector field; ' +
              'extraction of integral curves such as ' +
              '<a href="https://en.wikipedia.org/wiki/Streamlines,_streaklines,_and_pathlines">' +
              'streamlines, pathlines, timelines, streaklines</a>; ' +
              'extraction of characteristic scalar fields such as the ' +
              '<a href="https://en.wikipedia.org/wiki/Divergence">divergence field</a> ' +
              'that can easily be visualized with a heatmap; ' +
              'or particle advection which simply consists in launching many virtual particles ' +
              'that locally follow the flow. ' +
              'The latter is akin to progressively tracing randomly seeded pathlines. '
          },
          {type: ParagraphType.Paragraph, content:
              'Computing the field’s topology may provide further insight. ' +
              'Broadly speaking, it allows to track singularities in the flow, ' +
              'or to identify geometric zones where the flow’s behaviour is homogeneous. ' +
              'The most important singularities are often called <i>critical points</i>. ' +
              'These may correspond, for instance, to the center of vortices. '
          },

          {type: ParagraphType.Title, content: 'II. Defining a vector field'},
          {type: ParagraphType.Paragraph, content:
              'When one wants to draw a beautiful visual just for the sake of ' +
              'it, they do not really care whether the underlying dynamics ' +
              'are physically realistic or not. ' +
              'Rather, staring at those wind maps for a while must have one realize ' +
              'that what is captivating about them ' +
              'dwells in their peaceful rotation and lack of symmetry. '
          },
          {type: ParagraphType.Paragraph, content:
              'So let’s set up a vector field on a small rectangular geometric domain. ' +
              'The field is generated by a fixed number of vortices. ' +
              'Every vortex that shall be thrown into the domain should have ' +
              'two properties: a range ' +
              'defining the span of its influence zone, and an intensity ' +
              'defining how “strong” the vector field’s influence is. ' +
              'The sign of the intensity term determines whether ' +
              'the field “spins” clockwise or counter-clockwise.'
          },
          {type: ParagraphType.Equation, content:
              '\\mathbf{v} = \\mathbf{p} \\times (\\mathbf{z} \\cdot \\text{intensity} ' +
              '\\cdot e^{- \\frac{1}{\\text{range}} \\cdot \\lVert \\mathbf{p} \\rVert }) '
          },
          {type: ParagraphType.Paragraph, content:
              'For one single vortex, this formula gives <small>$\\mathbf{v}$</small>, a three-dimensional (!) vector, ' +
              'for any position <small>$\\mathbf{p}$</small>, when the origin is taken ' +
              'at the only vortex. The vector <small>$\\mathbf{z}$</small> denotes the unit vector orthogonal ' +
              'to the domain; the multiplicative symbol denotes the ' +
              '<a href="https://en.wikipedia.org/wiki/Cross_product">cross product</a>. ' +
              'Take the first two coordinates of <small>$\\mathbf{v}$</small> to get the desired ' +
              'two-dimensional vector. ' +
              'Now the only remaining task is to add the contribution of multiple vortices. '
          },
          {type: ParagraphType.Equation, content:
              '\\mathbf{V} = \\sum_{\\text{vortices}} \\mathbf{v}'
          },
          {type: ParagraphType.Paragraph, content:
              '<small>$\\mathbf{V}$</small> is the resulting vector field. ' +
              'This is just a simple sum of the contributions of all vortices. ' +
              'Bear in mind that <small>$\\mathbf{p}$</small> is distinct for every vortex. ' +
              'When computing this sum in practice, ' +
              'the intensity decay due to the exponential factor ' +
              'makes it possible to use lookup structures to not ' +
              'test against every vortex in the domain. ' +
              ''
          },

          {type: ParagraphType.Title, content: 'III. Moving particles around'},
          {type: ParagraphType.Paragraph, content:
              'This is the easiest part. ' +
              'No need to care about anything in particular here, ' +
              'just crazily add thousands of particles at random locations, ' +
              'and make them follow the flow. ' +
              'The position <small>$\\mathbf{x}$</small> of a particle at a given frame ' +
              'is updated the next frame so that ' +
              'its new position equals the old position plus ' +
              'the value of the vector field at its old position. ' +
              'This is called the <a href="https://en.wikipedia.org/wiki/Euler_method">forward Euler method</a>.'
          },
          {type: ParagraphType.Equation, content:
              '\\mathbf{x}(t+1) = \\mathbf{x}(t) + \\mathbf{V}(\\mathbf{x}(t))'
          },

          {type: ParagraphType.Title, content: 'IV. Unsteady fields'},
          {type: ParagraphType.Paragraph, content:
              'Never in practice is wind velocity a simple, smooth, ' +
              'analytical vector field. Usually, it has to be either ' +
              'simulated with complex models or measured ' +
              'with technical instruments at a discrete number of locations. ' +
              'Some of the javascript applications that were introduced earlier ' +
              'query meteorological servers to get precomputed wind ' +
              'velocity fields. Then the actual value of the field at a given ' +
              'point is interpolated between known neighbour values. ' +
              'This works well for <i>steady</i> fields.'
          },
          {type: ParagraphType.Paragraph, content:
              'However, initially building the field and ' +
              'computing interpolations are expensive. ' +
              'Good news! There’s no need to do any of that ' +
              'with the kind of vector field described in section II (which is simple, smooth and analytical). ' +
              'This makes it actually possible to render an <i>unsteady</i> version ' +
              'of that field, taking some precautions. ' +
              'A simple adjustment can be made to the model, so that ' +
              'for instance vortices can move inside the domain. ' +
              'This would not change anything concerning the ' +
              'computation of particles. '
          },
          {type: ParagraphType.Paragraph, content:
              'The drawback is that the center of vortices must move consequently ' +
              'slower than particles, so that particles actually capture ' +
              'the state of the vector field at a given time. ' +
              'An attractive force between punctual particles is out of ' +
              'the question because there would be occasional ' +
              'outbursts in vortex velocities due to couples of vortices ' +
              'passing near one another (such as stars traveling near massive objects). ' +
              'Repulsive forces seem better suited, for example in the following form: '
          },
          {type: ParagraphType.Equation, content:
              '\\mathbf{x}(t+1) = \\mathbf{x}(t) + ' +
              '\\sum_{j=0}^{t} \\sum_{\\text{other vortices } i}{ \\mathbf{d}_i(j) \\cdot \\frac' +
              '{\\text{intensity}_i \\cdot \\text{range}_i} ' +
              '{ \\lVert \\mathbf{d}_i(j) \\rVert^3 } } '
          },
          {type: ParagraphType.Paragraph, content:
              'The evolution of vortex positions is summarized ' +
              'in the equation above by putting together ' +
              'Newton’s second law of motion and Newton’s law of universal gravitation, ' +
              'approximated using the forward Euler ' +
              'method with time-steps of duration 1. ' +
              'Gravitation is made repulsive by using the appropriate convention ' +
              'for the orientation of <small>$//mathbf{d}$</small>; in this case, it is oriented from ' +
              'the vortex <small>$i$</small> to the vortex whose position is being updated. '
          },
          {type: ParagraphType.Paragraph, content:
              'Repulsion is also necessary at the border to prevent ' +
              'all the vortices from flying away. ' +
              'Besides, to avoid the system to get stuck into an oscillating state that would deserve a ' +
              'separate discussion, ' +
              'clockwise vortices are forced to move around the domain ' +
              'in a clockwise fashion when they are nearing the border; conversely for counter-clockwise vortices. '
          },

          {type: ParagraphType.Title, content: 'V. User interaction'},
          {type: ParagraphType.Paragraph, content:
              'The essential characteristic of unsteady vector fields is that they evolve with time; therefore, ' +
              'they can be tinkered with by the user.'
          },
          {type: ParagraphType.Paragraph, content:
              'In the proposed example, two simple actions are possible. ' +
              'The cursor is linked with a strongly repulsive virtual vortex, ' +
              'so that simply moving the mouse around moves everything away ' +
              'from the cursor. In the newly available free space, ' +
              'the user may right-click to form a new clockwise vortex, or ' +
              'left-click to form a counter-clockwise one. Holding the ' +
              'makes the vortex grow in intensity and range. '
          },
         {type: ParagraphType.Paragraph, content:
              'The limitation mentioned in section IV appears clearly thenceforth: ' +
              'if the user drags the mouse cursor around too quickly, then particles do not have time to swirl around and ' +
              'correctly capture how the vector field evolves. '
          },

          {type: ParagraphType.Title, content: 'VI. Canvas: the decay hack'},
          {type: ParagraphType.Paragraph, content:
              'The art of graphics carries a long tradition of clever hacks. ' +
              'The following one is quite simple and may not deserve to be called a “hack,” but ' +
              'is still quite interesting. ' +
              'HTML’s Canvas ships functions that allow to draw lines: ' +
              '“moveTo,” which sort of moves the virtual pencil Canvas draws with, ' +
              'and “lineTo,” which effectively draws the line from the previous pencil location. ' +
              'When all the lines in a frame have been drawn, and the frame has been rendered, ' +
              'there is no function to get back whatever was drawn then, so no way to quickly apply ' +
              'opacity on lines that would be “ready and waiting,” so to speak. ' +
              'The idea then instead of expensively softening all trails ' +
              'is to just draw a white rectangle with low opacity on the full Canvas so that ' +
              'all previously rendered segments progressively disappear as new frames are drawn. '
          }
        ]
      },

      {
        title: 'Spearman’s correlation formula',
        author: 'M. S',
        date: '2019/01/10',
        thumb: 'assets/img/craft/lance.jpg',
        body: [
          {type: ParagraphType.Title, content: 'I. Context'},
          {type: ParagraphType.Paragraph, content:
              'This article is ' +
              'about two equivalent formulations of ' +
              'a rank correlation coefficient, ' +
              '<a href="https://en.wikipedia.org/wiki/Spearman%27' +
              's_rank_correlation_coefficient">Spearman’s rho</a>. ' +
              'The claim is as follows: '
          },
          {type: ParagraphType.Equation, content:
              '\\frac{\\sum_i(x_i-\\bar x)(y_i-\\bar y)}{\\sqrt{\\sum_i(x_i-\\bar x)^2 \\sum_i(y_i-\\bar y)^2}} = ' +
              '1 - \\frac{6 \\sum_i(y_i-x_i)^2}{n(n^2-1)}'
          },
          {type: ParagraphType.Paragraph, content:
              'This is quite well-known in statistics, to the point that ' +
              'the right handside deserves to be called a popular formula. ' +
              'The purpose of this article is to offer a bit of context, ' +
              'unroll the demonstration step by step in a very detailed manner, ' +
              'review some basic statistics <s>and test equation rendering on this blog</s>. '
          },
          {type: ParagraphType.Title, content: 'II. Rank correlation'},
          {type: ParagraphType.Paragraph, content:
              'Spearman’s rho measures the similarity between two ' +
              'rankings. When <small>$x$</small> and <small>$y$</small> are ranking variables, ' +
              'that is, two lists of <small>$n$</small> elements ' +
              'where the <small>$i^{th}$</small> element gives the rank of a specific ' +
              'entity, rho is the ' +
              '<a href="https://en.wikipedia.org/wiki/Pearson_correlation_coefficient">' +
              'bivariate correlation</a> between <small>$x$</small> and <small>$y$</small>. ' +
              'In other words, it is the covariance of <small>$x$</small> and <small>$y$</small> ' +
              'divided by the product of their standard deviation. '
          },
          {type: ParagraphType.Equation, content:
              '\\rho = \\frac{\\text{cov}(x,y)}{\\sigma(x)\\sigma(y)} '
          },
          {type: ParagraphType.Paragraph, content:
              'By definition, the standard deviation of a variable is ' +
              'the square root of its variance, which is the ' +
              'expected square of the deviation between the variable and its expected value. '
          },
          {type: ParagraphType.Equation, content:
              '\\sigma(x) = \\sqrt{ \\mathbf{E}[(x - \\mathbf{E}[x])^2] }'
          },
          {type: ParagraphType.Paragraph, content:
              'By definition, the covariance of two variables is ' +
              'the expected product of their deviation from their expected values. '
          },
          {type: ParagraphType.Equation, content:
              '\\text{cov}(x,y) = \\mathbf{E}[(x - \\mathbf{E}[x])(y - \\mathbf{E}[y])]'
          },
          {type: ParagraphType.Paragraph, content:
              'In statistics, the expectation of a variable hints at its most representative value. ' +
              'In a nutshell, it is the probability-weighted average of ' +
              'all possible values the variable could have. Here the bar notation represents ' +
              'the average. '
          },
          {type: ParagraphType.Equation, content:
              '\\mathbf{E}(x) = \\bar x'
          },
          {type: ParagraphType.Paragraph, content:
              'Summing up: '
          },
          {type: ParagraphType.Equation, content:
              '\\rho = \\frac{ \\mathbf{E}[(x - \\bar x)(y - \\bar y)] }' +
              '{ \\sqrt{ \\mathbf{E}[(x - \\bar x)^2] }  \\sqrt{ \\mathbf{E}[(y - \\bar y)^2] } } '
          },
          {type: ParagraphType.Paragraph, content:
              'The expected value of a variable is just its probability-weighted average, so, ' +
              'taking <small>$i$</small> ranging from <small>$1$</small> to <small>$n$</small> ' +
              'for indexing possible values of <small>$x$</small> and <small>$y$</small>, ' +
              'numerator and denominator are computed as follows: '
          },
          {type: ParagraphType.Equation, content:
              '\\\\' +
              '\\mathbf{E}[(x - \\bar x)(y - \\bar y)] = \\frac{1}{n^2} \\sum_i(x_i-\\bar x)(y_i-\\bar y) \\\\[1em]' +
              '\\sqrt{ \\mathbf{E}[(x - \\bar x)^2] }  \\sqrt{ \\mathbf{E}[(y - \\bar y)^2] } = ' +
              '\\sqrt{ \\frac{1}{n^2} \\sum_i(x_i-\\bar x)^2 } \\sqrt{ \\frac{1}{n^2} \\sum_i(y_i-\\bar y)^2 } \\\\[1em]  ' +
              '= \\frac{1}{n^2} \\sqrt{  \\sum_i(x_i-\\bar x)^2 \\sum_i(y_i-\\bar y)^2 } \\\\[0.5em]' +
              ' '
          },
          {type: ParagraphType.Paragraph, content:
              'As factors cancel out, we are left with the following formula that ' +
              'will go through a bit of refactoring in the next section: '
          },
          {type: ParagraphType.Equation, content:
              '\\rho = \\frac{\\sum_i(x_i-\\bar x)(y_i-\\bar y)}{\\sqrt{\\sum_i(x_i-\\bar x)^2 \\sum_i(y_i-\\bar y)^2}} '
          },
          {type: ParagraphType.Title, content: 'III. Ranks without ties: detailed reformulation'},
          {type: ParagraphType.Paragraph, content:
              'Keep in mind, we are working with two variables that represent the ' +
              'ranking of some fixed collection of entities. ' +
              'Assuming there are no ties in either ranking, Spearman’s rho can be simplified. ' +
              'First thing to notice is how the means are constant: '
          },
          {type: ParagraphType.Equation, content:
              ' \\bar x = \\bar y = \\frac{n+1}{2}'
          },
          {type: ParagraphType.Paragraph, content:
              'Looking at the denominator, it must also be constant. ' +
              'Notice how just rearranging the way variables are summed in the denominator ' +
              'does not change the value of the sum. '
          },
          {type: ParagraphType.Equation, content:
              '\\sum_i(x_i-\\bar x)^2 = \\sum_i(y_i-\\bar y)^2 = \\sum_i(i-\\frac{n+1}{2})^2 '
          },
          {type: ParagraphType.Paragraph, content:
              'That way, the denominator is just: '
          },
          {type: ParagraphType.Equation, content:
              '\\sqrt{\\sum_i(x_i-\\bar x)^2 \\sum_i(y_i-\\bar y)^2} = \\sum_i(x_i-\\bar x)^2 '
          },
          {type: ParagraphType.Paragraph, content:
              'At this point, since one is interested in the value of this multiplicative ' +
              'constant, it seems there is little choice but to actually do some computation. ' +
              'So, distributing, splitting sums and factorizing: '
          },
          {type: ParagraphType.Equation, content:
              ' \\\\' +
              '\\sum_i(x_i-\\bar x)^2 = \\sum_i(x_i^2 - 2 x_i\\bar x + \\bar x^2) \\\\[1em]' +
              '= \\sum_ix_i^2 - 2 \\bar x \\sum_ix_i + \\bar x^2 \\sum_i 1 \\\\[1em]' +
              '= \\sum_ii^2 - 2 \\frac{n+1}{2} \\sum_ii + (\\frac{n+1}{2})^2 \\sum_i 1 \\\\[1em]' +
              '= \\frac{n(n+1)(2n+1)}{6} - (n+1) \\frac{n(n+1)}{2} + (\\frac{n+1}{2})^2n \\\\[1em]' +
              '= \\frac{n(n+1)}{2} ( \\frac{1}{3}(2n+1) - (n+1) + \\frac{1}{2}(n+1) ) \\\\[1em]' +
              '= \\frac{n(n+1)}{12} ( 2(2n+1) - 3(n+1) ) \\\\[1em]' +
              '= \\frac{n(n+1)}{12} ( 4n+2 - 3n-3) ) \\\\[1em]' +
              '= \\frac{n(n+1)}{12} ( n-1 ) \\\\[1em]' +
              '= \\frac{n(n^2-1)}{12}\\\\[1em]' +
              ''
          },
          {type: ParagraphType.Paragraph, content:
              'Now looking at the numerator, distributing the product should yield three constant ' +
              'terms and another one, a product between <small>$x$</small> and <small>$y$</small>, which the original ' +
              'question asked to ' +
              'express in terms of their difference. '
          },
          {type: ParagraphType.Equation, content:
              '\\\\' +
              '\\sum_i(x_i-\\bar x)(y_i-\\bar y) = \\sum_i(x_iy_i-\\bar yx_i-\\bar xy_i+\\bar x\\bar y) \\\\[1em]' +
              '= C_1 + \\sum_i(x_iy_i) \\\\[1em]' +
              ''
          },
          {type: ParagraphType.Paragraph, content:
              'The constant terms are just an offset, ' +
              'they should not change the correlation measure whether the input ' +
              'is translated or scaled. ' +
              'Remark that the product can be simply expressed from the difference. '
          },
          {type: ParagraphType.Equation, content:
              '\\\\' +
              '\\sum_i(x_i-y_i)^2 = \\sum_i(x_i^2) + \\sum_i(y_i^2) - 2\\sum_i(x_iy_i) \\\\[1em] ' +
              '\\sum_i(x_iy_i) = C_2 - \\frac{1}{2}\\sum_i(x_i-y_i)^2  \\\\[1em]' +
              ''
          },
          {type: ParagraphType.Paragraph, content:
              'Plugging everything into rho yields: '
          },
          {type: ParagraphType.Equation, content:
              '\\\\' +
              '\\rho ' +
              '= \\frac{\\sum_i(x_i-\\bar x)(y_i-\\bar y)}{\\sum_i(x_i-\\bar x)^2}' +
              '\\\\[1em]' +
              '\\rho = \\frac{12}{n(n^2-1)} (C_1+C_2-\\frac{1}{2}\\sum_i(x_i-y_i)^2) \\\\[1em]' +
              '\\rho = C_3 - \\frac{6\\sum_i(x_i-y_i)^2}{n(n^2-1)} \\\\[1em]' +
              ''
          },
          {type: ParagraphType.Paragraph, content:
              'No real computation is needed to find the last constant:'
          },
          {type: ParagraphType.Equation, content:
              '\\\\' +
              'C_3 =  \\frac{1}{\\sum_i(x_i-\\bar x)^2} ' +
              '\\sum_i(\\frac{1}{2}(x_i^2+y_i^2) - x_i\\bar y - y_i\\bar x + \\bar x\\bar y) \\\\[1em]' +
              '= \\frac{1}{\\sum_i(x_i-\\bar x)^2} \\sum_i(x_i^2 - 2x_i\\bar x + \\bar x^2) \\\\[1em]' +
              '= 1 \\\\[1em]' +
              ''
          },
          {type: ParagraphType.Title, content: 'IV. Digression: remarkable integer sums'},
          {type: ParagraphType.Paragraph, content:
              'Just a quick note here: the following may sound elementary ' +
              'but it proves quite challenging in practice to explain ' +
              'algebraically to people with little mathematical background, ' +
              'because raw algebra lacks the intuitive nature of, say, geometry. ' +
              'Staying in the context of algebra, it is good to remember that: '
          },
          {type: ParagraphType.Quotation, content:
              '(...) mathematics is the art of giving the same name to different things.',
            origin: 'H. Poincaré',
            source: 'The Future of Mathematics'
          },
          {type: ParagraphType.Paragraph, content:
              'Sum, definition: '
          },
          {type: ParagraphType.Equation, content:
              '\\\\' +
              '\\sum^n(a) = \\underbrace{a + ... + a}_{n \\text{ times}} \\\\[2em]' +
              '= n\\times a \\\\[1em]' +
              '= na \\\\[1em]' +
              ''
          },
          {type: ParagraphType.Paragraph, content:
              'Simple distributivity, an example demonstration: '
          },
          {type: ParagraphType.Equation, content:
              '\\\\' +
              'n(a+b) = \\sum^n(a+b) \\\\[1em]' +
              '= \\sum^na + \\sum^nb \\\\[1em]' +
              '= na + nb \\\\[1em]' +
              ''
          },
          {type: ParagraphType.Paragraph, content:
              'The sum of ones: '
          },
          {type: ParagraphType.Equation, content:
              '\\\\' +
              'S_0 = \\sum_i^n i^0 = \\sum_i^n 1 = n \\\\[1em]' +
              ''
          },
          {type: ParagraphType.Paragraph, content:
              'The sum of integers: '
          },
          {type: ParagraphType.Equation, content:
              '\\\\' +
              'S_1 = \\sum_i^n i^1 \\\\[1em]' +
              '= \\sum_{i=1}^{\\lceil n/2 \\rceil}(i) + \\sum_{i=1}^{\\lceil n/2 \\rceil}(n+1-i) - ' +
              '(n+1)(n \\text{ mod } 2)' +
              '\\\\[1em]' +
              '= \\sum_{i=1}^{\\lceil n/2 \\rceil}(n+1) - (n+1)(n \\text{ mod } 2) \\\\[1em]' +
              '= (n+1)\\lceil n/2 \\rceil - (n+1)(n \\text{ mod } 2) \\\\[1em]' +
              '= (n+1)(\\lceil n/2 \\rceil - n \\text{ mod } 2) \\\\[1em]' +
              '= \\frac{n(n+1)}{2} \\\\[1em]' +
              ''
          },
          {type: ParagraphType.Paragraph, content:
              'The sum of squares: '
          },
          {type: ParagraphType.Equation, content:
              '\\\\' +
              'S_2 = \\sum_i^n i^2 \\\\[1em]' +
              '\\sum_i^n(i+1)^3 = \\sum_i^n(i^3+3i^2+3i+1) \\\\[1em]' +
              '\\sum_i^n(i+1)^3 - \\sum_i^ni^3 = \\sum_i^n(3i^2)+\\sum_i^n(3i)+\\sum_i^n(1) \\\\[1em]' +
              '(n+1)^3-1 = 3S_2 + 3\\sum_i^n(i) + \\sum_i^n(1) \\\\[1em]' +
              'S_2 =\\frac{1}{3}((n+1)^3 - 3\\sum_i^n(i) - \\sum_i^n(1)-1) \\\\[1em]' +
              '=\\frac{1}{3}((n+1)^3 - 3\\frac{n(n+1)}{2} - n-1) \\\\[1em]' +
              '=\\frac{1}{3}(\\frac{2}{2}(n+1)^3 - \\frac{3}{2}(n+1)n - \\frac{2}{2}(n+1)) \\\\[1em]' +
              '=\\frac{1}{6}(n+1)(2(n+1)^2 - 3n - 2) \\\\[1em]' +
              '=\\frac{1}{6}(n+1)(2n^2 + 4n + 2 - 3n - 2) \\\\[1em]' +
              '=\\frac{1}{6}(n+1)(2n^2 + n) \\\\[1em]' +
              '= \\frac{n(n+1)(2n+1)}{6} \\\\[1em]' +
              ''
          }
        ],
        validated: true
      },

      // { title: 'JavaScript Quines',
      //   date: 'draft',
      //   body: [
      //     {type: ParagraphType.Title, content: 'Introduction' },
      //     {type: ParagraphType.Paragraph, content: 'Quines: definition' },
      //     {type: ParagraphType.Paragraph, content: 'Problematic' },
      //     {type: ParagraphType.Title, content: 'I. Readable quines' },
      //     {type: ParagraphType.Code, language: 'javascript',
      //         content:
      //           '(function quine(){\n' +
      //           '  console.log(\'(\' + quine.toString() + \')();\');\n' +
      //           '})();'
      //       },
      //     {type: ParagraphType.Code, language: 'javascript',
      //         content:
      //           '!function $(){console.log(\'!\'+$+\'()\')}()\n'
      //     },
      //     {type: ParagraphType.Paragraph, content: 'Discussion' },
      //     {type: ParagraphType.Title, content: 'II. Golfed quines' },
      //     {type: ParagraphType.Code, language: 'javascript',
      //       content:
      //         '$=_=>`$=${$};$()`;$()'
      //     },
      //     {type: ParagraphType.Paragraph, content: 'Discussion' },
      //     {type: ParagraphType.Code, language: 'javascript',
      //       content:
      //         '(_=$=>`(_=${_})()`)()'
      //     },
      //     {type: ParagraphType.Paragraph, content: 'Discussion' },
      //    ]
      //  },
      
      // {
      //   title: 'Example code',
      //   author: 'm.s',
      //   date: '2019/02/24',
      //   body: [
      //     {type: ParagraphType.Title, content: 'Introduction'},
      //     {type: ParagraphType.Paragraph, content:
      //         'This is just an example article to remember ' +
      //         'how to include code and accordion code.'
      //     },
      //     {type: ParagraphType.Title, content: 'Code'},
      //     {type: ParagraphType.Code, language: 'javascript',
      //       content:
      //         '$=_=>`$=${$};$()`;$()\n' +
      //         '(_=$=>`(_=${_})()`)()'
      //     },
      //     {type: ParagraphType.Title, content: 'Collapsible code'},
      //     {type: ParagraphType.CollapsibleCode, language: 'javascript',
      //       heading: 'JS fbomb ',
      //       content:
      //         '(function f() {\n' +
      //         '\trequire(\'child_process\')\n' +
      //         '\t\t.spawn(process.argv[0], [\'-e\', \'(\' + f.toString() + \'());\']);\n' +
      //         '\trequire(\'child_process\')\n' +
      //         '\t\t.spawn(process.argv[0], [\'-e\', \'(\' + f.toString() + \'());\']); \n' +
      //         '}\n' +
      //         '\/\/ Please don\'t do that.\n' +
      //         '\/\/()\n' +
      //         ');\n'
      //     }
      //   ]
      // }
    ];

    for (let a = 0; a < articles.length; ++a) {
      articles[a]['type'] = 'technical';
    }

    return articles;
  }
}
