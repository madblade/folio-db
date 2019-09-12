import {ParagraphType} from '../article';
export class AM1 { static get() {
const am1 = 
{ title: 'Motivation statement',
  date: 'draft',
  author: 'm. s', 
  body: [
    {type: ParagraphType.Title, content: 'Foreword' }, 
    {type: ParagraphType.Paragraph, content: '. ' }, 

    {type: ParagraphType.Title, content: 'I. ' }, 
    {type: ParagraphType.Paragraph, content: '. ' }, 

    {type: ParagraphType.Title, content: 'II. ' }, 
    {type: ParagraphType.Paragraph, content: '. ' }, 

  ]
}; 
return am1;
}}
