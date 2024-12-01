import {ParagraphType} from './article.js';

export class Technical {

// Template
/*
	{
        title: '',
        author: '',
        type: 'welcome',
        date: '2024/11/27',
        thumb: '',
        body: [
          {type: ParagraphType.Title, content: ''},
		  {type: ParagraphType.Paragraph, content:
              ''
          },
		]
	}
*/


  static getArticles() {
    const articles = [
		{
        title: 'Secretely optimizing a patented algorithm',
			author: '',
			type: 'welcome',
			date: '2024/11/27',
			thumb: '',
			body: [
			  {type: ParagraphType.Title, content: ''},
			  {type: ParagraphType.Paragraph, content:
				'Ten years ago, I was asked to benchmark a few unsupervised clustering algorithms, like k-means, soft k-means, k-medoids, HAC with different linkages, etc. Among these methods, there was one that I had never heard about: <a href="https://patents.google.com/patent/US6295504B1/en">Multi-Resolution Graph-Based Clustering</a> (MRGC).'
			  },
			  {type: ParagraphType.Paragraph, content:
				'The difference with k-means is that it does not require the user to specify the number of clusters <em>a priori</em>, like <a href="https://en.wikipedia.org/wiki/DBSCAN">DBSCAN</a>. It is inspired by an earlier method by <a href="https://www.gretsi.fr/data/colloque/pdf/1991_017-0023_11628.pdf">Changquan Gan</a>, based on using nearest neighbors. The patent expired in 2020, so there weren’t many implementations available at the time.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'The algorithm itself is not particularly difficult to implement, but it is a bit tedious since there are many steps compared to other simple clustering algorithms. One of the initial stages is to compute a rank matrix.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'Suppose we have <small>$n$</small> points in space. These points are indexed from <small>$1$</small> to <small>$n$</small>. The rank matrix that we want to build is denoted <small>$C$</small>. It contains, for every point, the rank of this point in every other point’s neighborhood. These ranks are ordered in the neighborhood of the starting point. In other words, <small>$C[i][j]$</small> is the rank of <small>$i$</small> in the neighborhood of its <small>$j^{th}$</small> neighbor.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'To build this matrix <small>$C$</small>, the authors propose the following method: first, compute the matrix <small>$A$</small>, where <small>$A[i][j]$</small> is the index of the <small>$j^{th}$</small> neighbor of point <small>$i$</small>.'
			  },
			  {type: ParagraphType.Equation, content:
				  'A=\\begin{bmatrix}\n'+
					'5 & 2 & 6 & 4 & 3 & 1 \\\\\n'+
					'4 & 6 & 3 & 1 & 5 & 2 \\\\\n'+
					'6 & 1 & 5 & 2 & 4 & 3 \\\\\n'+
					'1 & 3 & 2 & 5 & 6 & 4 \\\\\n'+
					'6 & 2 & 4 & 3 & 1 & 5 \\\\\n'+
					'2 & 3 & 1 & 4 & 5 & 6 \\\\\n'+
					'\\end{bmatrix}\n'
			  },
			  {type: ParagraphType.Paragraph, content:
				'Then, build an intermediate matrix <small>$B$</small>, that contains the simple ascending sequence of integers in every row. Now sort every row of <small>$A$</small>, and modify every row of <small>$B$</small> in the same way as rows of <small>$A$</small> are modified during the sort. We’ll work with a copy of <small>$A$</small> because we’ll need it again later.'
			  },
			  {type: ParagraphType.Equation, content:
				  'B_0=\\begin{bmatrix}\n'+
					'1 & 2 & 3 & 4 & 5 & 6 \\\\\n'+
					'1 & 2 & 3 & 4 & 5 & 6 \\\\\n'+
					'1 & 2 & 3 & 4 & 5 & 6 \\\\\n'+
					'1 & 2 & 3 & 4 & 5 & 6 \\\\\n'+
					'1 & 2 & 3 & 4 & 5 & 6 \\\\\n'+
					'1 & 2 & 3 & 4 & 5 & 6 \\\\\n'+
					'\\end{bmatrix}\n'
			  },
			  {type: ParagraphType.Paragraph, content:
				'Which is transformed to:'
			  },
			  {type: ParagraphType.Equation, content:
				  'B=\\begin{bmatrix}\n'+
					'6 & 2 & 5 & 4 & 1 & 3 \\\\\n'+
					'4 & 6 & 3 & 1 & 5 & 2 \\\\\n'+
					'2 & 4 & 6 & 5 & 3 & 1 \\\\\n'+
					'1 & 3 & 2 & 6 & 4 & 5 \\\\\n'+
					'5 & 2 & 4 & 3 & 6 & 1 \\\\\n'+
					'3 & 1 & 2 & 4 & 5 & 6 \\\\\n'+
					'\\end{bmatrix}\n'
			  },
			  {type: ParagraphType.Paragraph, content:
				'The entry <small>$B[k][i]$</small> then gives the rank of <small>$i$</small> relative to <small>$k$</small>.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'But, since the index of the <small>$j^{th}$</small> nearest neighbor of <small>$i$</small> is <small>$A[i][j]$</small>, we can trivially build <small>$C$</small> by replacing <small>$k$</small> like so: <small>$C[i][j] = B[A[i][j]][i]$</small>.'
			  },
			  {type: ParagraphType.Equation, content:
				  'C=\\begin{bmatrix}\n'+
					'5 & 4 & 3 & 1 & 2 & 6 \\\\\n'+
					'3 & 1 & 4 & 2 & 2 & 6 \\\\\n'+
					'2 & 5 & 4 & 3 & 2 & 6 \\\\\n'+
					'4 & 5 & 1 & 3 & 4 & 6 \\\\\n'+
					'5 & 5 & 4 & 3 & 1 & 6 \\\\\n'+
					'2 & 1 & 3 & 5 & 1 & 6 \\\\\n'+
					'\\end{bmatrix}\n'
			  },
			  {type: ParagraphType.Paragraph, content:
				'Note that by convention, each point is considered to be its own <small>$n^{th}$</small> nearest neighbor.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'End of the story. …or is it?'
			  },
			  {type: ParagraphType.Paragraph, content:
				'The actual story is that I was sort of bothered by the storting step. I found it weird to have a quasilinear processing of rows there when every other manipulation was linear. The definition of the matrix <small>$C$</small> itself sounded linear, so the sort really didn’t feel justified. So I took a closer look to the rank matrices.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'After a bit of fiddling around, I realized that <small>$B[i][A[i][j]] = j$</small>. In other words, the rank of <small>$A[i][j]$</small> relative to <small>$i$</small> is <small>$j$</small>. Which is the definition of <small>$A$</small>. That makes this part of the algorithm linear: we just have to loop over <small>$j$</small> for a fixed <small>$i$</small>, and the corresponding row of the matrix <small>$B$</small> will be filled in linear time.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'After a while I asked myself, why bother with the sorting in the first place? Why is it not obvious to the eye that these manipulations on ranks can be simplified? I think the answer is that we are manipulating different entities here: ranks and indices, which both conveniently happen to be unsigned integers, and both happen to take all values between 1 and n. So the idea to use them interchangeably does not come naturally. Another possibility is that these manipulations on indices do not carry the initial intuition behind the approach, which is that if we want to manipulate indexing methods, there has to be some form of sorting involved.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'But, you might ask, what about the secrecy? Well, the complete story is that after I found this opportunity for optimization in the patent and told pepople about it, no one really seemed to care, and it ended not being implemented anywhere. So it really might be a secret optimization that nobody likely knows about, at least in the context of MRGC.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'Now, to be fair, I didn’t measure the performance delta at the time. Even if there are big gains in terms of memory because we don’t need to use a companion array for the sorting, there will be a lot of cache misses because we are reading from <small>$A$</small> at random.'
			  },
			]
		},
	
	
      {
        // id: -2,
        title: 'Two small problems in topology',
        author: 'M. S',
        type: 'welcome',
        date: '2019/09/15',
        thumb: 'assets/img/technical/crc.jpg',
        body: [
		  {type: ParagraphType.Paragraph, content:
              'This originally intended to serve as an introduction to topology, but ultimately didn’t go into my dissertation. Contains material from <a href="https://www.3blue1brown.com/">3Blue1Brown</a>.'
          },
          {type: ParagraphType.Title, content: 'Introduction'},
          {type: ParagraphType.Paragraph, content:
              'Topology investigates the fundamental structural properties of objects, that can be identified by looking at said objects regardless of any geometrical representation or measure. For that purpose, <i>homeomorphism</i> is a central concept, based on the notion of continuity, that allows us to construct a topological characterization, so as to group objects, called <i>topological spaces</i>, in equivalence classes. Nonetheless, it proves quite difficult in practice to demonstrate that two objects are homeomorphic using only continuity. Topologists would rather make use of the concept of <i>invariants</i>, which are computable quantities (or algebraic structures) that stay the same for all objects that are homeomorphic to one another. It can be seen as a way to introduce back the concept of measure, in a more fundamental sense, to study topological objects. '
          },
          {type: ParagraphType.Paragraph, content:
              'In the following, we will try to give some insights about what topology can actually do, based on two concrete examples, for readers who are not necessarily well acquainted with the subject. This is the occasion to present some of its core concepts in a non-formal manner. '
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
              '<b>Theorem</b> (<b>Borsuk-Ulam</b>): For every continuous function <small>$f: S_2 \\to \\mathbb{R}^2$</small>, there exists a point <small>$(x,y,z)\\in S_2$</small> such that <small>$f(x,y,z) = f(-x,-y,-z)$</small>.'
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

//      {
//        // id: -2,
//        title: '2D vector fields with CPU particle tracing',
//        author: 'M. S',
//        type: 'welcome',
//        date: '2019/02/05',
//        thumb: 'assets/img/technical/particles12.jpg',
//        body: [
//          {type: ParagraphType.Image, content: 'assets/img/technical/2.jpg'},
//          {type: ParagraphType.Title, content: 'Introduction'},
//          {type: ParagraphType.Paragraph, content:
//              'This short article introduces the concept of <i>vector field</i>, ' +
//              'and presents a method for rendering vector fields using particles on the CPU. ' +
//              'This method is easy to implement but not quite adapted for real-time graphics, ' +
//              'as the CPU may be put to more profitable use. '
//          },
//          {type: ParagraphType.Title, content: 'I. Vector fields and particle-based visualization'},
//          {type: ParagraphType.Paragraph, content:
//              'The visual shown above was obtained with a basic technique called particle advection. ' +
//              'It has been used for wind visualization in the browser for quite some time, ' +
//              'see the <a href="https://github.com/cambecc/earth">earth project started in 2013</a>, ' +
//              'which takes inspiration from <a href="http://hint.fm/wind/">hint.fm</a> and ' +
//              'has inspired <a href="https://github.com/Esri/wind-js">windy.js</a>. '
//          },
//          {type: ParagraphType.Paragraph, content:
//              'A vector field defined on a geometrical domain ' +
//              'associates every position in the domain with a distinct vector. ' +
//              'Continuous vector fields can be used to represent flow. ' +
//              'For instance, when looking at the earth from a very high altitude, wind can be seen ' +
//              'as a 2D vector field defined on the Earth’s 2D surface, ' +
//              'considering the atmosphere’s height is negligible. ' +
//              'If the vector field stays the same throughout time, it is called <i>steady</i>. ' +
//              'If not, it is called <i>unsteady</i>. '
//          },
//          {type: ParagraphType.Paragraph, content:
//              'There are different ways to get visual insights about vector fields: ' +
//              'drawing tiny glyphs, like arrows locally pointing in the direction of ' +
//              'the flow; ' +
//              'texture advection techniques such as the ' +
//              '<a href="https://en.wikipedia.org/wiki/Line_integral_convolution">' +
//              'LIC</a> which “combines” random noise with the vector field; ' +
//              'extraction of integral curves such as ' +
//              '<a href="https://en.wikipedia.org/wiki/Streamlines,_streaklines,_and_pathlines">' +
//              'streamlines, pathlines, timelines, streaklines</a>; ' +
//              'extraction of characteristic scalar fields such as the ' +
//              '<a href="https://en.wikipedia.org/wiki/Divergence">divergence field</a> ' +
//              'that can easily be visualized with a heatmap; ' +
//              'or particle advection which simply consists in launching many virtual particles ' +
//              'that locally follow the flow. ' +
//              'The latter is akin to progressively tracing randomly seeded pathlines. '
//          },
//          {type: ParagraphType.Paragraph, content:
//              'Computing the field’s topology may provide further insight. ' +
//              'Broadly speaking, it allows us to track singularities in the flow, ' +
//              'or to identify geometric zones where the flow’s behaviour is homogeneous. ' +
//              'The most important singularities are often called <i>critical points</i>. ' +
//              'These may correspond, for instance, to the center of vortices. '
//          },
//
//          {type: ParagraphType.Title, content: 'II. Defining a vector field'},
//          {type: ParagraphType.Paragraph, content:
//              'When one wants to draw a beautiful visual just for the sake of ' +
//              'it, they do not really care whether the underlying dynamics ' +
//              'are physically realistic or not. ' +
//              'Rather, staring at those wind maps for a while must have one realize ' +
//              'that what is captivating about them ' +
//              'dwells in their peaceful rotation and lack of symmetry. '
//          },
//          {type: ParagraphType.Paragraph, content:
//              'So let’s set up a vector field on a small rectangular geometric domain. ' +
//              'The field is generated by a fixed number of vortices. ' +
//              'Every vortex that shall be thrown into the domain should have ' +
//              'two properties: a range ' +
//              'defining the span of its influence zone, and an intensity ' +
//              'defining how “strong” the vector field’s influence is. ' +
//              'The sign of the intensity term determines whether ' +
//              'the field “spins” clockwise or counter-clockwise.'
//          },
//          {type: ParagraphType.Equation, content:
//              '\\mathbf{v} = \\mathbf{p} \\times (\\mathbf{z} \\cdot \\text{intensity} ' +
//              '\\cdot e^{- \\frac{1}{\\text{range}} \\cdot \\lVert \\mathbf{p} \\rVert }) '
//          },
//          {type: ParagraphType.Paragraph, content:
//              'For one single vortex, this formula gives <small>$\\mathbf{v}$</small>, a three-dimensional vector, ' +
//              'for any position <small>$\\mathbf{p}$</small>, when the origin is taken ' +
//              'at the only vortex. The vector <small>$\\mathbf{z}$</small> denotes the unit vector orthogonal ' +
//              'to the domain; the multiplicative symbol denotes the ' +
//              '<a href="https://en.wikipedia.org/wiki/Cross_product">cross product</a>. ' +
//              'Take the first two coordinates of <small>$\\mathbf{v}$</small> to get the desired ' +
//              'two-dimensional vector. ' +
//              'Now the only remaining task is to add the contribution of multiple vortices. '
//          },
//          {type: ParagraphType.Equation, content:
//              '\\mathbf{V} = \\sum_{\\text{vortices}} \\mathbf{v}'
//          },
//          {type: ParagraphType.Paragraph, content:
//              '<small>$\\mathbf{V}$</small> is the resulting vector field. ' +
//              'This is just a simple sum of the contributions of all vortices. ' +
//              'Bear in mind that <small>$\\mathbf{p}$</small> is distinct for every vortex. ' +
//              'When computing this sum in practice, ' +
//              'the intensity decay due to the exponential factor ' +
//              'makes it possible to use lookup structures to not ' +
//              'test against every vortex in the domain. ' +
//              ''
//          },
//
//          {type: ParagraphType.Title, content: 'III. Moving particles around'},
//          {type: ParagraphType.Paragraph, content:
//              'This is the easiest part. ' +
//              'No need to care about anything in particular here, ' +
//              'just crazily add thousands of particles at random locations, ' +
//              'and make them follow the flow. ' +
//              'The position <small>$\\mathbf{x}$</small> of a particle at a given frame ' +
//              'is updated the next frame so that ' +
//              'its new position equals the old position plus ' +
//              'the value of the vector field at its old position. ' +
//              'This is called the <a href="https://en.wikipedia.org/wiki/Euler_method">forward Euler method</a>.'
//          },
//          {type: ParagraphType.Equation, content:
//              '\\mathbf{x}(t+1) = \\mathbf{x}(t) + \\mathbf{V}(\\mathbf{x}(t))'
//          },
//
//          {type: ParagraphType.Title, content: 'IV. Unsteady fields'},
//          {type: ParagraphType.Paragraph, content:
//              'Never in practice is wind velocity a simple, smooth, ' +
//              'analytical vector field. Usually, it has to be either ' +
//              'simulated with complex models or measured ' +
//              'with technical instruments at a discrete number of locations. ' +
//              'Some of the javascript applications that were introduced earlier ' +
//              'query meteorological servers to get precomputed wind ' +
//              'velocity fields. Then the actual value of the field at a given ' +
//              'point is interpolated between known neighbour values. ' +
//              'This works well for <i>steady</i> fields.'
//          },
//          {type: ParagraphType.Paragraph, content:
//              'However, initially building the field and ' +
//              'computing interpolations are expensive. ' +
//              'Good news! There’s no need to do any of that ' +
//              'with the kind of vector field described in section II (which is simple, smooth and analytical). ' +
//              'This makes it actually possible to render an <i>unsteady</i> version ' +
//              'of that field, taking some precautions. ' +
//              'A simple adjustment can be made to the model, so that ' +
//              'for instance vortices can move inside the domain. ' +
//              'This would not change anything concerning the ' +
//              'computation of particles. '
//          },
//          {type: ParagraphType.Paragraph, content:
//              'The drawback is that the center of vortices must move consequently ' +
//              'slower than particles, so that particles actually capture ' +
//              'the state of the vector field at a given time. ' +
//              'An attractive force between punctual particles is out of ' +
//              'the question because there would be occasional ' +
//              'outbursts in vortex velocities due to couples of vortices ' +
//              'passing near one another (such as stars traveling near massive objects). ' +
//              'Repulsive forces seem better suited, for example in the following form: '
//          },
//          {type: ParagraphType.Equation, content:
//              '\\mathbf{x}(t+1) = \\mathbf{x}(t) + ' +
//              '\\sum_{j=0}^{t} \\sum_{\\text{other vortices } i}{ \\mathbf{d}_i(j) \\cdot \\frac' +
//              '{\\text{intensity}_i \\cdot \\text{range}_i} ' +
//              '{ \\lVert \\mathbf{d}_i(j) \\rVert^3 } } '
//          },
//          {type: ParagraphType.Paragraph, content:
//              'The evolution of vortex positions is summarized ' +
//              'in the equation above by putting together ' +
//              'Newton’s second law of motion and Newton’s law of universal gravitation, ' +
//              'approximated using the forward Euler ' +
//              'method with time-steps of duration 1. ' +
//              'Gravitation is made repulsive by using the appropriate convention ' +
//              'for the orientation of <small>$\\mathbf{d}$</small>; in this case, it is oriented from ' +
//              'the vortex <small>$i$</small> to the vortex whose position is being updated. '
//          },
//          {type: ParagraphType.Paragraph, content:
//              'Repulsion is also necessary at the border to prevent ' +
//              'all the vortices from flying away. ' +
//              'Besides, to avoid the system to get stuck into an oscillating state that would deserve a ' +
//              'separate discussion, ' +
//              'clockwise vortices are forced to move around the domain ' +
//              'in a clockwise fashion when they are nearing the border; conversely for counter-clockwise vortices. '
//          },
//
//          {type: ParagraphType.Title, content: 'V. User interaction'},
//          {type: ParagraphType.Paragraph, content:
//              'The essential characteristic of unsteady vector fields is that they evolve with time; therefore, ' +
//              'they can be tinkered with by the user.'
//          },
//          {type: ParagraphType.Paragraph, content:
//              'In the proposed example, two simple actions are possible. ' +
//              'The cursor is linked with a strongly repulsive virtual vortex, ' +
//              'so that simply moving the mouse around moves everything away ' +
//              'from the cursor. In the newly available free space, ' +
//              'the user may right-click to form a new clockwise vortex, or ' +
//              'left-click to form a counter-clockwise one. Holding the ' +
//              'makes the vortex grow in intensity and range. '
//          },
//         {type: ParagraphType.Paragraph, content:
//              'The limitation mentioned in section IV appears clearly thenceforth: ' +
//              'if the user drags the mouse cursor around too quickly, then particles do not have time to swirl around and ' +
//              'correctly capture how the vector field evolves. '
//          },
//
//          {type: ParagraphType.Title, content: 'VI. Canvas: the decay hack'},
//          {type: ParagraphType.Paragraph, content:
//              'The art of graphics carries a long tradition of clever hacks. ' +
//              'The following one is quite simple and may not deserve to be called a “hack,” but ' +
//              'is still quite interesting. ' +
//              'HTML’s Canvas ships functions that allow to draw lines: ' +
//              '“moveTo,” which sort of moves the virtual pencil Canvas draws with, ' +
//              'and “lineTo,” which effectively draws the line from the previous pencil location. ' +
//              'When all the lines in a frame have been drawn, and the frame has been rendered, ' +
//              'there is no function to get back whatever was drawn then, so no way to quickly apply ' +
//              'opacity on lines that would be “ready and waiting,” so to speak. ' +
//              'The idea then instead of expensively softening all trails ' +
//              'is to just draw a white rectangle with low opacity on the full Canvas so that ' +
//              'all previously rendered segments progressively disappear as new frames are drawn. '
//          }
//        ]
//      },

      {
        title: 'The Spearman correlation formula',
        author: 'M. S',
        date: '2019/01/10',
        thumb: 'assets/img/craft/lance.jpg',
        body: [
          {type: ParagraphType.Title, content: 'I. Context'},
          {type: ParagraphType.Paragraph, content:
              'There are two equivalent formulations of ' +
              '<a href="https://en.wikipedia.org/wiki/Spearman%27' +
              's_rank_correlation_coefficient">Spearman’s rho</a>. ' +
              'The claim is as follows: '
          },
          {type: ParagraphType.Equation, content:
              '\\frac{\\sum_i(x_i-\\bar x)(y_i-\\bar y)}{\\sqrt{\\sum_i(x_i-\\bar x)^2 \\sum_i(y_i-\\bar y)^2}} = ' +
              '1 - \\frac{6 \\sum_i(y_i-x_i)^2}{n(n^2-1)}'
          },
          {type: ParagraphType.Paragraph, content:
              'This is well-known in statistics. ' +
              'Let’s try to ' +
              'unroll the demonstration step by step ' +
              'and test equation rendering on this blog.'
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
              'At this point, since we are interested in the value of this multiplicative ' +
              'constant, it seems that there is little choice but to actually do some computation. ' +
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

      { title: 'Some quines',
         date: '2024/11/26',
         body: [
           {type: ParagraphType.Title, content: '' },
           {type: ParagraphType.Paragraph, content: 'A <a href="https://en.wikipedia.org/wiki/Quine_(computing)">quine</a> is a program that outputs its own source code when it is executed.' },
           {type: ParagraphType.Paragraph, content: 'Here is a quine in English:' },
		   {type: ParagraphType.Code, language: 'cpp',
               content:
                 'Write this sentence.'
             },
           {type: ParagraphType.Paragraph, content: 'There really is nothing more to it. It’s just that: instructing the machine to write these same instructions. Of course in the context of programming languages, this doesn’t mean much because nothing remains of the original programming language when it has been translated to machine code, but there can be some funny twists.' },
           {type: ParagraphType.Title, content: 'Javascript' },
           {type: ParagraphType.Code, language: 'javascript',
               content:
                 '(function quine(){\n' +
                 '  console.log(\'(\' + quine.toString() + \')();\');\n' +
                 '})();'
             },
			 {type: ParagraphType.Paragraph, content: 'This is literally the definition of a quine: a function that writes its own code as a string. Some people enjoy to golf them, which give funny strings:' },
           {type: ParagraphType.Code, language: 'javascript',
               content:
                 '!function $(){console.log(\'!\'+$+\'()\')}()\n'
           },
		   {type: ParagraphType.Code, language: 'javascript',
             content:
               '$=_=>`$=${$};$()`;$()'
           },
           {type: ParagraphType.Paragraph, content: 'This one looks fun: we assign a lambda to the name \\$. The lambda returns a string, but not an ordinary string: it is templated, which means that \\${x} will be replaced with x.toString(). This quine could also be rewritten as a=_=>`a=${a};a()`;a().' },
           {type: ParagraphType.Code, language: 'javascript',
             content:
               '(_=$=>`(_=${_})()`)()'
           },
		  {type: ParagraphType.Paragraph, content: 'This one uses the same construct, only without semicolons. It is exactly the same length. Quines can be even more <a href="https://github.com/kirjavascript/quine-howto">fun</a>.' },
           {type: ParagraphType.Title, content: 'GLSL' },
		   {type: ParagraphType.Code, language: 'glsl',
             content:
				'int y, i;ivec2 d;int[]c=int[116](0x007a995e,0x0083f840,0x009a9c40,0x006e5840,\n'+
				'0x0043f4dc,0x006659c0,0x0066595e,0x000c5661,0x006a595a,0x007a9a66,0x00f14938,\n'+
				'0x0062493f,0x00924918,0x00fe4918,0x00a2cb18,0x00145f84,0x3813813c,0x0003d100,\n'+
				'0x0087f840,0x0066bb5a,0x0085e000,0x00330604,0x00010800,0x00020000,0x00624918,\n'+
				'0x00f2081c,0x00024784,0x0001e840,0x0085e100,0x000047a1,0x00014800,0x00894200,\n'+
				'0x00214880,0x0023e208,0x00008208,0x00f2081c,0x00024784,0x0087f000,0x0003f840,\n'+
				'0x00918624,0x000ccc00,0x00916724,0x00a3b9d8,0x00514514,0x00310a24,0x00e0423c,\n'+
				'0x001a9080,0x00024000,0x00c766e3,0x00c8d17f,0x0052ca00,0x0083f040,0x0003f000,\n'+
				'0x0000413c,0x00000000,0x2cd9ab51,0x11791d96,0x3608c395,0x1ab5178d,0x11acc9a5,\n'+
				'0x010656ad,0xfefd4986,0x1161579b,0x11290d8d,0x132904ad,0x1a65850e,0x0430e576,\n'+
				'0x0e5562b6,0x1b2f608c,0x1546b35c,0x0b50230e,0x314569d7,0x19cd8c8e,0x17b5845a,\n'+
				'0x2c5cb8ac,0x0daec79b,0x211689d7,0x08a2c5cd,0x0d5871e9,0x0e551af0,0x1615408c,\n'+
				'0x2b29e6c8,0x1410c395,0x0582c5cd,0x275cbd34,0x171480e0,0x0182cd34,0x00b841c5,\n'+
				'0x1fb2532f,0x2532e0c3,0x05845a2c,0x2c820985,0x2a1a9170,0x20b2f0c6,0x2e1c00c1,\n'+
				'0x2b45494c,0x000c18ac,0x211686c8,0x20826086,0x06a45c11,0x14bc31aa,0x2b454aec,\n'+
				'0x1b0c38ac,0x2b6c1070,0x2f02e02b,0x2e06baec,0x2bb2f243,0x02b8006b,0x1194cbc2,\n'+
				'0x20981068,0x2c8860e0,0x0506a129,0x17360826,0x0d846a67,0x1b06ab17,0xfefbf75e)\n'+
				';void mainImage(out vec4 a,vec2 b){d=ivec2(b.x,iResolution.y-b.y);y=d.x/5+d.y\n'+
				'/8*77,d%=ivec2(5,8);a=vec4(d.y>5||b.x>385.||y>1574?0:c[y<33?c[y/5+55]>>y%5*6&\n'+
				'63:y>1307?c[(i=y-1308)/5+62]>>i%5*6&63:(y=(i=y-33)%11)==0?0:y==1?39:y==10?22:\n'+
				'c[i/11]>>36-y*4&15]>>d.x*6+d.y&1);}'
           },
           {type: ParagraphType.Paragraph, content: 'This is really fun because it actually tells the machine how to write the characters with an embedded font, in contrast to just using .toString(). See the <a href="https://www.shadertoy.com/view/MlGcRz">shadertoy</a> in action and an explanation here by <a href="https://gpfault.net/posts/shader-quine.txt.html">nice_byte</a>.' },
          ]
        },
      
       //{
       //  title: 'Example code',
       //  author: 'm.s',
       //  date: '2019/02/24',
       //  body: [
       //    {type: ParagraphType.Title, content: 'Introduction'},
       //    {type: ParagraphType.Paragraph, content:
       //        'This is just an example article to remember ' +
       //        'how to include code and accordion code.'
       //    },
       //    {type: ParagraphType.Title, content: 'Code'},
       //    {type: ParagraphType.Code, language: 'javascript',
       //      content:
       //        '$=_=>`$=${$};$()`;$()\n' +
       //        '(_=$=>`(_=${_})()`)()'
       //    },
       //    {type: ParagraphType.Title, content: 'Collapsible code'},
       //    {type: ParagraphType.Code, language: 'javascript',
       //      heading: 'JS fbomb ',
       //      content:
       //        '(function f() {\n' +
       //        '\trequire(\'child_process\')\n' +
       //        '\t\t.spawn(process.argv[0], [\'-e\', \'(\' + f.toString() + \'());\']);\n' +
       //        '\trequire(\'child_process\')\n' +
       //        '\t\t.spawn(process.argv[0], [\'-e\', \'(\' + f.toString() + \'());\']); \n' +
       //        '}\n' +
       //        '\/\/ Please don\'t do that.\n' +
       //        '\/\/()\n' +
       //        ');\n'
       //    }
       //  ]
       //},
    ];

    for (let a = 0; a < articles.length; ++a) {
      articles[a]['type'] = 'technical';
    }

    return articles;
  }
}
