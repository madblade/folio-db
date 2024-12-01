
export class Categories {
  static getCategories() {
    return [
      ['technical blog',
        'technical things of interest',
        'Articles related to algorithms, graphics, programming and mathematics.',
        'technical',
        '', // img
        'Problems worthy of attack prove their worth by hitting back', // quote
        'Piet Hein',
        'Grooks'
      ],
      ['showcase',
        'experimental web demos',
        'Experimental, possibly interactive, handcrafted web demos.',
        'craft',
        '', // img
        'Variables are the spice of life', // quote
        'Ursula K. Le Guin',
        'The Language of the Night.'
      ],
      ['art blog',
        'some pieces worth a look',
        'An invitation to discover artful pieces and striking creators.',
        'pieces', // link
        '', // image
        'Art is the unexpected use of our craft', // quotation
        'Edwin Catmull',
        'Creativity, Inc.'
      ],
      ['rambling blog',
        'arguably useless thoughts',
        'Things one may wonder on a walk in nature or when taking a shower.',
        'art', // link
        '', // image
        'Near the iridescent surface, we shall understand the value of depth', // quote
        'Gaston Bachelard',
        'Water and Dreams'
      ],
    ];
  }

}
