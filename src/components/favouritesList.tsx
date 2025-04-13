import { picOfDay } from '../types/picOfDay';

interface Props {
  favourites: picOfDay[];
  onRemove: (date: string) => void;
  onSelected: (date: string) => void;
}

const FavouritesList = ({ favourites, onRemove, onSelected}: Props) => {
  return (
    <div className="favourites">
      <h3>Favourites</h3>
      <ul>
        {favourites.map((item) => (
          <li key={item.date}>
            <button onClick={() => onSelected(item.date)} style={{border:"none", cursor:"pointer"}}>{item.title} ({item.date})</button> 
            <button onClick={() => onRemove(item.date)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesList;
