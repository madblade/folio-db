import {ParagraphType} from '../article.js';
export class A0 { static get() {
const a1 = 
{ title: 'Values are everywhere',
  date: '2019/09/05',
  author: 'M. S',
  thumb: 'assets/img/craft/spock.jpg',
  body: [
  	{type: ParagraphType.Title, content: 'Foreword' },
    {type: ParagraphType.Paragraph, content: 'Moral philosophy is an odd realm to venture to: most of the questions raised there are fated to remain partially open. In the following, we will explore some interesting ideas, drawing from a quote by E. Klein. ' },

  	{type: ParagraphType.Title, content: 'I. Kant and Spock'},
    {type: ParagraphType.Quotation, content: 'The value of principles is greater than the value of values.',
      origin: 'E. Klein',
      source: 'Recorded debate about the notion of progress'
    },
    {type: ParagraphType.Paragraph, content: 'Principles should be understood as “unbreakable rules” and values as “evaluations” enabling to compare situations (e.g. numerically). This somewhat circular statement by <a href="https://en.wikipedia.org/wiki/Étienne_Klein">Klein</a> illustrates an important conflict. In a given situation requiring one to act, should they stick to their principles no matter what or should they adapt their actions depending on the situation and values at stake? In a 1797 <a href="https://philpapers.org/archive/VARKAL.pdf">debated text</a>, Kant defends a surprising position in the special case of “lying” versus “telling the truth.” He opposes, notably, the views of <a href="https://en.wikipedia.org/wiki/Benjamin_Constant">Constant</a>, by saying that one should always tell the truth, even if that should produce unethical consequences. ' },
    {type: ParagraphType.Paragraph, content: 'Not everyone has such definite views on the matter. For example, in the <a href="https://en.wikipedia.org/wiki/Star_Trek_III:_The_Search_for_Spock">third Star Trek movie</a>, Spock undergoes a shift in his conception of duty: if initially he believed that the needs of the many outweighed the needs of the few (values prevail over principles), by the end he declares that the needs of the one outweigh the needs of the many (principles prevail; or, more specifically, friendship). ' },
    {type: ParagraphType.Paragraph, content: 'But sticking to one’s principles does not prove as easy as it seems. In the previous quotation by Klein, the concept of value was used to evaluate the worth of acting by following principles on the one hand, and the worth of acting by optimizing values on the other hand. Similarly, in <a href="https://en.wikipedia.org/wiki/Robot_series_(Asimov)">the Robot series</a> by Asimov, robots are subject to three laws, stated as perfect and unbreakable principles, but respecting these laws depends on solving some form of value optimization (and on interpreting rules). Between two situations more or less compatible with one’s principles, one would prefer the most compatible. But the measure of compatibility with principles <i>is</i> a value; values are, indeed, everywhere. ' },

  	{type: ParagraphType.Title, content: 'II. Values without value'}, 
    {type: ParagraphType.Paragraph, content: 'Value optimization problems are of critical importance for our everyday lives, notably with the example of self-driving cars [<a href="https://link.springer.com/chapter/10.1007/978-3-662-45854-9_4">Lin 2016</a>, <a href="https://www.nature.com/articles/d41586-018-07135-0">Nature 2018</a>], which may need to solve a <a href="https://en.wikipedia.org/wiki/Trolley_problem">trolley problem</a>. To someone who likes values better than principles, enforcing ethics could be seen as solving an optimization problem of this sort. This view, sometimes called <a href="https://en.wikipedia.org/wiki/Utilitarianism">utilitarian</a>, raises key issues. ' },
    {type: ParagraphType.Paragraph, content: 'Consider the following modified trolley problem: an unstoppable trolley advances towards ten tied-up people lying on the track. You are in front of a branching of the track, which you can trigger with a lever. But on the side track, there is one person lying and tied-up. Following an utilitarian recommendation, you should activate the lever, killing one person but saving ten. A few weeks later, one of the people you saved commits an attack in a train station, killing twenty people. Therefore you should not have triggered the lever<small>, right</small>? Suppose you did not. Few months after, the one person you saved, who was actually an engineer in the army, invents a weapon that is used to exterminate populations in some remote country. So maybe you should have activated the lever anyway? But what if, decades later, one of the survivor’s descendants becomes the root of an even darker evil? In a mathematician’s words, the number of lives that you have saved, modulo your choice, may well diverge as a function of time, therefore a stable evaluation of what you should do is impossible. ' },
    {type: ParagraphType.Paragraph, content: 'In other words, you have no way of knowing if an action is good or bad, because you have no way of understanding the overall good and bad it will bring to the world. Utilitarians will argue that you should act—or not—depending on what you know, depending on your <a href="https://plato.stanford.edu/entries/moral-responsibility/">moral responsibility</a>. This is a good start, yet it doesn’t solve the problem of choosing which values to consider; a choice that will inevitably be colored with some preconceptions of good and evil, cultural in nature. Even then, even if there is a perfect, consensual way to evaluate situations, (1) the process of optimization might be <a href="https://en.wikipedia.org/wiki/Test_functions_for_optimization">delicate</a> or <a href="https://en.wikipedia.org/wiki/Hungarian_algorithm">time-consuming</a> and (2) the optimal value might still differ at different points in time. ' },

  	{type: ParagraphType.Title, content: 'III. Values in the digital society'},
    {type: ParagraphType.Paragraph, content: 'Some oppose utilitarianism, either by <a href="https://en.wikipedia.org/wiki/Utility_monster">attacking the way values are defined</a>, or by stating that <a href="https://en.wikipedia.org/wiki/Objectivism_(Ayn_Rand)">in case of any doubt, we ought to do nothing</a>. The latter is quite interesting: not doing nothing, therefore acting, would indeed make someone responsible for whatever wrong would follow, even if the resulting situation was  “better” than the alternative. So, in some sense, making someone responsible would be <i>bad</i>, in a way that not having anyone to blame for the situation would be <i>better</i>: here again, a value is associated to the situation, as the number of people accountable for a bad action. '},
    {type: ParagraphType.Paragraph, content: 'Contrary to this <i>laisser-faire</i> point of view, which seems to be political at heart, Spock’s stance seems to be more about locality than principle—than the principle of not acting. If on one track of the trolley there were a bunch of strangers, and on the other track the one person you love, then there would be no dilemma. '},
    {type: ParagraphType.Paragraph, content: 'Nevertheless, bringing closeness or “social distance” to the discussion does not solve the trolley problem, nor does it add anything to the debate, which is still about the value we give to things. Simply, a world with machines making those kinds of decisions would be cold to me, so long as those machines are not capable of feeling more or less connected to people, say by having a small circle of friends or family. And I would not feel like buying a coffee machine that would poison me if it thought I could be a danger to the global well-being (or the well-being of a <a href="https://en.wikipedia.org/wiki/Colonization_of_Mars">selected few</a>). '},
    {type: ParagraphType.Paragraph, content: 'Of course, valuing locality in the context of human interaction in societies can get badly political. It also raises problems in social networking, with the formation and replication of resilient hatred sub-networks [<a href="https://www.nature.com/articles/s41586-019-1494-7">Johnson 2019</a>]. But seeing as in mathematics, focusing on local aspects can help bring up understanding and solutions in coarser domains, there must be a problem with our dealing with locality in society. The problems we encounter in our implementation of social interactions must be due to poorly modeling—and to encouraging simplistic behaviors. '},
    {type: ParagraphType.Paragraph, content: 'Popular modern social networks are often criticized [<a href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.442.2144&rep=rep1&type=pdf">Hui 2013</a>] in the sense that they should not only rely on simplistic models of social interactions such as <a href="https://en.wikipedia.org/wiki/Jacob_L._Moreno">Moreno</a> graphs. Simple models often revolve on static, one-to-one relationships and non-representative, down-to-earth metrics (which are often shared to third-parties with ulterior motives). They should also be taking into account things such as <a href="https://en.wikipedia.org/wiki/Gilbert_Simondon">Simondon</a>’s insights about <a href="https://en.wikipedia.org/wiki/Individuation">individuation</a>, <a href="https://en.wikipedia.org/wiki/Peter_Sloterdijk">Sloterdijk</a>’s insights about our relationship to space and each other. <a href="https://fr.wikipedia.org/wiki/Reddit">Some</a> social networks implement mechanisms to encourage healthier behaviors from their users, but this is not nearly enough. '},
    {type: ParagraphType.Paragraph, content: 'My personal belief is that mixing multiple networks and multiple localities, some of which we as users do not have direct control over, could be a first step towards a better integration of individuals within the digital society. We did not have much control over most of the natural networks we belonged to before the Internet, as we do not have the control over who we encounter when we go to school (well, in <a href="https://en.wikipedia.org/wiki/2019_college_admissions_bribery_scandal">theory</a>), or when we practice a sport or a cultural activity, etc. Virtual networks are quite practical as they link people who are geographically far away and therefore promote tolerance and openness. Very fluid networks, however, those in which sub-networks only require a click to join or leave, and promote addictive and self-centered behavior, though practical they are, can become problematic [<a href="https://www.nature.com/articles/s41586-019-1494-7">Johnson 2019</a>]. Maybe if the structure of our favorite networks was less fluid, instantaneous, confusing and addictive, and if we were a little more connected with different people by belonging to more diverse networks, and not just the ones we think we like, maybe then the situation of ending up tied to a trolley track would not have happened in the first place. '}
  ]
}; 
return a1;      
}}