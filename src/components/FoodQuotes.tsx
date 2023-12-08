import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FoodQuotes = () => {
  const foodQuotes = [
    {
      author: 'Oscar Wilde',
      quote:
        'After a good dinner, one can forgive anybody, even one’s own relations.',
    },
    {
      author: 'Charles M. Schulz',
      quote:
        'All you need is love. But a little chocolate now and then doesn’t hurt.',
    },
    {
      author: 'Julia Child',
      quote:
        'The only time to eat diet food is while you’re waiting for the steak to cook.',
    },
    {
      author: 'Mitch Hedberg',
      quote:
        'Rice is great if you’re hungry and want to eat two thousand of something.',
    },
    {
      author: 'Mark Twain',
      quote:
        'Part of the secret of success in life is to eat what you like and let the food fight it out inside.',
    },
    {
      author: 'George Bernard Shaw',
      quote: 'There is no love sincerer than the love of food.',
    },
    {
      author: 'W.C. Fields',
      quote:
        'I never drink water because of the disgusting things that fish do in it.',
    },
    {
      author: 'Erma Bombeck',
      quote: 'I am not a glutton - I am an explorer of food.',
    },
    {
      author: 'Julia Child',
      quote: 'People who love to eat are always the best people.',
    },
    {
      author: 'Virginia Woolf',
      quote:
        'One cannot think well, love well, sleep well, if one has not dined well.',
    },
    {
      author: 'Mitch Hedberg',
      quote:
        'I like rice. Rice is great if you’re hungry and want to eat two thousand of something.',
    },
    {
      author: 'Winston Churchill',
      quote: 'Dinner was made for eating, not for talking.',
    },
    {
      quote:
        "I don't like food that's too carefully arranged; it makes me think that the chef is spending too much time arranging and not enough time cooking. If I wanted a picture I'd buy a painting.",
      author: 'Andy Rooney',
    },
    {
      quote:
        'I love pizza. I want to marry it, but it would just be to eat her family at the wedding.',
      author: 'Mike Birbiglia',
    },
    {
      quote:
        'Soup is a lot like a family. Each ingredient enhances the others; each batch has its own characteristics; and it needs time to simmer to reach full flavor.',
      author: 'Marge Kennedy',
    },
    {
      quote: 'Life is uncertain. Eat dessert first.',
      author: 'Ernestine Ulmer',
    },
    {
      quote: 'The only thing I like better than talking about food is eating.',
      author: 'John Walters',
    },
    {
      quote: 'A balanced diet is a cookie in each hand.',
      author: 'Barbara Johnson',
    },
  ];

  const randomIndex = Math.floor(Math.random() * foodQuotes.length);
  const randomQuote = foodQuotes[randomIndex];

  return (
    <div
      className='quote text-clamp-10-12 anim-up mx-auto max-w-4xl'
      id='quote'
    >
      <p>
        <FontAwesomeIcon icon={['fas', 'quote-left']} />{' '}
        <span>{randomQuote.quote}</span>{' '}
        <FontAwesomeIcon icon={['fas', 'quote-right']} />
        <br />
        <FontAwesomeIcon icon={['far', 'comments']} /> &nbsp;
        <span className='font-semibold'>{randomQuote.author}</span>
      </p>
    </div>
  );
};

export default memo(FoodQuotes);
