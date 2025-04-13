import React from 'react';
import './App.css';
import { useState } from 'react';
import { picOfDay } from './types/picOfDay';
import { usePicOfDay } from './hooks/usePicOfDay';
import PicOfTheDayCard from './components/picOfTheDayCard';
import  DatePicker from './components/datePicker';
import FavouritesList from './components/favouritesList';

function App() {
  const today = new Date().toISOString().split('T')[0];
  const [favourites, setFavourites] = useState<picOfDay[]>([]);

  const [selectedDate, setSelectedDate] = useState<string>(today);

  const { data, loading, error} = usePicOfDay(selectedDate);
  
  const addToFavourite = (pic : picOfDay) => {
    console.log(`Adding {pic.title} to favourite!`);
    if(! favourites.find((fav) => fav.date === pic.date)) {
      setFavourites([...favourites, pic]);
    }
  };

  const removeFromFavourite = (date : string) =>{
    setFavourites(favourites.filter((item) => item.date !== date));
  };

  return (
    <div className="App">
      <header className="App-header">        
        <h1>NASA Picture Of the Day Explorer</h1>        
      </header>
      <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate}/>
      {loading && <p>Loading...</p>}
      {(error || data?.error != null)  && <p className='error'>{error} {data?.error.message}</p>}
      {data && <PicOfTheDayCard pic={data} addToFavourite={addToFavourite}/>}
      <FavouritesList favourites={favourites} onRemove={removeFromFavourite} onSelected={setSelectedDate}/>
    </div>
  );
}

export default App;
