import { useState, useEffect } from 'react';
import axios from 'axios';
import { IMeal } from '../App';
import MealDetailsModal from './MealDetailsModal';

interface ISearchResultsProps {
  meals: IMeal[];
  searchQuery: string;
}

export interface IMealDetails {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strYoutube: string;
  strSource: string;
}

const SearchResults = ({ meals, searchQuery }: ISearchResultsProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [mealDetails, setMealDetails] = useState<IMealDetails | null>(null);

  const handleOpenModal = async (mealId: string): Promise<void> => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      // console.log(response.data.meals[0]);
      setMealDetails(response.data.meals[0]);
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(mealDetails);
  }, [mealDetails]);

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className='anim-up'>
      {/* == Search Results & Cards == */}
      <h2
        className='mb-8 text-center text-2xl font-semibold'
        id='search-result-title'
      >
        Recipe Ideas for{' '}
        <span>
          {searchQuery.charAt(0).toUpperCase()}
          {searchQuery.slice(1)}
        </span>
      </h2>
      <div
        className='search-results flex flex-row flex-wrap justify-evenly gap-6'
        id='search-results'
      >
        {/* Search Results */}
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className='card w-sm mx-auto mb-4 max-w-full border-spacing-4 rounded-lg border border-gray-700 bg-gray-800 shadow'
          >
            <div className='card-img-container rounded'>
              <img
                className='rounded-t-lg object-cover'
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
            </div>
            <div className='p-5'>
              <h5 className='mb-2 text-center text-xl font-medium text-white'>
                {/* Recipe Name */}
                {meal.strMeal}
              </h5>
              <div className='flex w-full items-center justify-center'>
                <button
                  className='recipe-btn mt-4 inline-flex items-center rounded-lg  bg-amber-500 px-3 py-2 text-center text-sm font-medium text-slate-900 transition duration-300 ease-in-out hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-400 active:bg-amber-700'
                  id='recipe-btn'
                  key='1'
                  type='button'
                  onClick={() => handleOpenModal(meal.idMeal)}
                >
                  Recipe Details 🍲
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && (
        <MealDetailsModal
          mealDetails={mealDetails}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SearchResults;
