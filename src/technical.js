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
        title: 'Nearest neighbors matrix',
			author: '',
			type: 'welcome',
			date: '2024/11/27',
			thumb: '',
			body: [
			  {type: ParagraphType.Title, content: ''},
			  {type: ParagraphType.Paragraph, content:
				'In 2014, I was asked to benchmark a few unsupervised clustering algorithms, such as k-means, soft k-means, k-medoids, HAC with different linkages, etc. Among these methods, there was the exotic <a href="https://patents.google.com/patent/US6295504B1/en">Multi-Resolution Graph-Based Clustering</a> (MRGC).'
			  },
			  {type: ParagraphType.Paragraph, content:
				'Like <a href="https://en.wikipedia.org/wiki/DBSCAN">DBSCAN</a>, the difference with k-means is that it does not require the user to specify the number of clusters <em>a priori</em>. It is inspired by an earlier method by <a href="https://www.gretsi.fr/data/colloque/pdf/1991_017-0023_11628.pdf">Changquan Gan</a>, based on using nearest neighbors. The patent expired in 2020, so there were not many implementations available at the time.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'The algorithm itself is not particularly difficult to implement, but it is a bit tedious since there are many steps compared to other simple clustering algorithms. One of the initial stages is to compute a rank matrix.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'Suppose we have <small>$n$</small> points in space. These points are indexed from <small>$1$</small> to <small>$n$</small>. The rank matrix that we want to build is denoted <small>$C$</small>. It contains, for every point, the rank of this point in every other point’s neighborhood. These ranks are ordered in the neighborhood of the starting point. In other words, <small>$C[i][j]$</small> is the rank of <small>$i$</small> in the neighborhood of its <small>$j^{th}$</small> neighbor.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'By convention, each point is considered to be its own <small>$n^{th}$</small> nearest neighbor. So, if I have three points <small>$P_1$</small>, <small>$P_2$</small>, <small>$P_3$</small>, then the 3-by-3 rank matrix will give me at row 1, column 1, the rank of <small>$P_1$</small> in the neighborhood of its closest point. If <small>$P_1$</small>’s closest neighbor is <small>$P_2$</small>, but <small>$P_2$</small>’s closest neighbor is <small>$P_3$</small>, then that value will be 2.'
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
				'Remember that by convention, each point is considered to be its own <small>$n^{th}$</small> nearest neighbor.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'I was bothered by this storting step. I found it weird to have a quasilinear processing of rows there when every other manipulation was linear. The definition of the matrix <small>$C$</small> itself sounded linear, so the sort really didn’t feel justified. I took a closer look at the rank matrices.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'After a bit of fiddling around, I realized that <small>$B[i][A[i][j]] = j$</small>. In other words, the rank of <small>$A[i][j]$</small> relative to <small>$i$</small> is <small>$j$</small>. Which is the definition of <small>$A$</small>. That makes this part of the algorithm linear: we just have to loop over <small>$j$</small> for a fixed <small>$i$</small>, and the corresponding row of the matrix <small>$B$</small> will be filled in linear time.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'Why is it not obvious to the eye that these manipulations on ranks can be simplified? I think the answer is that we are manipulating different entities here: ranks and indices, which both conveniently happen to be unsigned integers, and both happen to take all values between 1 and n. So the idea to use them interchangeably does not come naturally. Another possibility is that these manipulations on indices do not carry the initial intuition behind the approach, which is that if we want to manipulate indexing methods, there has to be some form of sorting involved.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'After I found this opportunity for optimization in the patent and told pepople about it, no one really seemed to care, and it ended not being implemented anywhere. Now, to be fair, even if there are interesting gains in terms of memory because we don’t need to use a companion array for the sorting, there will be a lot of cache misses because we are reading from <small>$A$</small> at random. But still! we could have saved a sort in a tight loop.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'What lessons can we learn from this? First, I’d say that once a complex approach has been engineered, it is hard for people to accept to come back to it later to understand it and optimize it, and the main reason for that is that we are cost-driven. Another of the offenders is the lack of time spent working on the approach, with patents lacking the peer-review process, although it can also be true of peer-reviewed papers with tight deadlines.'
			  },
			  {type: ParagraphType.Paragraph, content:
				'In the context of game engines in particular, the cost-driven approach to development is widespread. Ironically, there is a high cost to that approach, in terms of technical debt, loss of knowledge, and loss of efficiency, that has often been neglected in competitive industries.'
			  }
			]
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
			 {type: ParagraphType.Paragraph, content: 'This is the literal definition of a quine: a function that writes its own code as a string. Some people enjoy to golf them, which give funny strings:' },
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
           {type: ParagraphType.Paragraph, content: 'This is really fun because it tells the machine how to write the characters with an embedded font, in contrast to just using .toString(). See the <a href="https://www.shadertoy.com/view/MlGcRz">shadertoy</a> in action and an explanation here by <a href="https://gpfault.net/posts/shader-quine.txt.html">nice_byte</a>.' },
          ]
        },
    ];

    for (let a = 0; a < articles.length; ++a) {
      articles[a]['type'] = 'technical';
    }

    return articles;
  }
}
