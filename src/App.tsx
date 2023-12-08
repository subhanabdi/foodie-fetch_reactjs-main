import { MouseEvent, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import FoodQuotes from './components/FoodQuotes';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import axios from 'axios';

export interface IMeal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [initialSearchQuery, setInitialSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<IMeal[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>('');

  const errorMessages = [
    `Sorry, no recipes found for ${searchQuery}. Time to try a different ingredient!`,
    `Looks like ${searchQuery} isn't cooperating with our recipe database. How about a different ingredient?`,
    `We're stumped - can't seem to find any recipes for ${searchQuery}. Maybe try something else?`,
    `Oops, it looks like our recipe database is playing hard to get. We'll keep trying to find the perfect recipe for ${searchQuery}.`,
    `We're sorry, but ${searchQuery} is a little too elusive for our recipe database. Looks like we'll need to call in some culinary reinforcements!`,
  ];

  const handleSearch = async (event: MouseEvent) => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      setErrorMessage('Please enter an ingredient to search for recipe(s) 🔍');
      setSearchResults([]);
      setSearchQuery('');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQuery}`
      );
      if (response.data.meals === null) {
        const randomIndex = Math.floor(Math.random() * errorMessages.length);
        setErrorMessage(errorMessages[randomIndex]);
        setSearchResults([]);
      } else {
        setSearchResults(response.data.meals);
        setInitialSearchQuery(searchQuery);
        setErrorMessage(null);
      }
    } catch (error) {
      console.error(error);
      setSearchResults([]);
      setErrorMessage('An error occurred while searching for recipes. ⛔🔍');
    }
    setIsLoading(false);
    setSearchQuery('');
  };

  return (
    <div className='relative flex min-h-screen flex-col bg-gradient-to-br from-slate-800 to-slate-900 font-sans text-white'>
      <div className='container mx-auto px-4'>
        <Header />
        <main className='mb-72 flex-grow'>
          <div className='header mt-28 mb-4 text-center'>
            <h1 className='hero-text anim-up mb-6 text-3xl font-bold md:text-4xl'>
              Find{' '}
              <span className='bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent'>
                Recipes
              </span>{' '}
              with the{' '}
              <span className='mb-2 bg-gradient-to-r from-amber-500 to-emerald-600 bg-clip-text text-transparent'>
                Ingredients
              </span>{' '}
              You Have! <span className='whitespace-nowrap'>🧅🍅</span>
            </h1>
            <FoodQuotes />
          </div>

          {/* == Search bar == */}
          <form className='search-bar anim-up mx-auto mb-8 max-w-4xl py-4'>
            <label
              htmlFor='search'
              className='sr-only mb-2 text-sm font-medium text-white'
            >
              Search
            </label>
            <div className='relative'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                {/* Search icon */}
                <svg
                  aria-hidden='true'
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
              <input
                type='search'
                id='search-bar'
                className='block w-full rounded-lg border border-gray-600 bg-gray-700 p-4 pl-10 text-sm text-white placeholder-gray-400 outline-none focus:border-amber-500 focus:ring-amber-500'
                placeholder='Enter an ingredient to search recipes 🥗...'
                required
                autoComplete='off'
                onChange={(event) => setSearchQuery(event.target.value)}
                value={searchQuery}
              />
              <button
                type='submit'
                className='search-btn absolute right-2.5 bottom-2.5 rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition duration-300 ease-in-out hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-400 active:bg-amber-700'
                id='search-btn'
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </form>

          {isLoading && (
            <div className='loading mb-4'>
              <div className='dot dot-1'></div>
              <div className='dot dot-2'></div>
              <div className='dot dot-3'></div>
            </div>
          )}
          {errorMessage && (
            <div
              className='error text-clamp-10-12 mb-8 text-center font-normal text-white sm:text-red-500'
              id='error'
            >
              {errorMessage}
            </div>
          )}
          {/* {searchResults && <SearchResults meals={searchResults} />} */}
          {searchResults && searchResults.length > 0 && (
            <SearchResults
              meals={searchResults}
              searchQuery={initialSearchQuery}
            />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
