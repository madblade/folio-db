// export enum ParagraphType
const ParagraphType = {
  Title: 0,
  Subtitle: 1,
  Paragraph: 2,
  Link: 3,
  Image: 4,
  TwoImages: 5,
  Quotation: 6,
  Equation: 7,
  Lettrine: 8,
  Video: 9,
  Code: 10,
  CollapsibleCode: 11,
  ListItemFR: 12,
  ListItem: 13,
  ClickableDemo: 14
}
export { ParagraphType };

/*
export class Article {
  id: number;
  title: string;
  type: string; // Text, Slides
  author: string;
  style: string;
  date: string;
  body:
    {
      id: number,
      type: ParagraphType,
      content: string,
      language: string,
      heading: string
    }[];

  constructor(copy) {
    this.id = copy.id;
    this.title = copy.title;
    this.author = copy.author;
    this.style = copy.style;
    this.date = copy.date;
    this.body = copy.body;
  }
}
*/
