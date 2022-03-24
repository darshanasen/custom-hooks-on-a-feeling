import {useState} from 'react'; 

function FavouriteFoodForm() {
  const [favFood, setFavFood] = useState('');
  const [favSoup, setFavSoup] = useState('');

  const handleFavFoodChange = (e) => {
      setFavFood(e.target.value);
  }

  const handleFavSoupChange = (e) => {
      setFavSoup(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submitting logic here

    // reset form after submit:
    setFavFood('');
    setFavSoup('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="favFood">What is your favourite food?</label>
      <input value={favFood} onChange={handleFavFoodChange} type="text" id="favFood" />

      <label htmlFor="favSoup">What is your favourite Soup?</label>
      <input value={favSoup} onChange={handleFavSoupChange} type="text" id="favSoup" />
      <button>Save</button>
    </form>
  )
}

export default FavouriteFoodForm; 