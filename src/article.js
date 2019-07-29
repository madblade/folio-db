// export enum ParagraphType
export class ParagraphType {
  Title() { return 0; }
  Subtitle() { return 1; }
  Paragraph() { return 2; }
  Link() { return 3; }
  Image() { return 4; }
  TwoImages() { return 5; }
  Quotation() { return 6; }
  Equation() { return 7; }
  Lettrine() { return 8; }
  Video() { return 9; }
  Code() { return 10; }
  CollapsibleCode() { return 11; }
  ListItemFR() { return 12; }
  ListItem() { return 13; }
  ClickableDemo() { return 14; }
}

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
