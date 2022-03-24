import { useState } from 'react';

const FavouriteDrinkForm = () => {
    const [favDrink, setFavDrink] = useState('');
    const [favBubblyDrink, setFavBubblyDrink] = useState('');

    const handleFavDrinkChange = (e) => {
        setFavDrink(e.target.value);
    }

    const handleFavBubblyDrinkChange = (e) => {
        setFavBubblyDrink(e.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // form submitting logic here

        // reset form after submit:
        setFavDrink('');
        setFavBubblyDrink('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="favDrink">What is your favourite Drink?</label>
            <input value={favDrink} onChange={handleFavDrinkChange} type="text" id="favDrink" />

            <label htmlFor="favBubblyDrink">What is your favourite Bubbly Drink?</label>
            <input value={favBubblyDrink} onChange={handleFavBubblyDrinkChange} type="text" id="favBubblyDrink" />
            <button>Save</button>
        </form>
    )
}
export default FavouriteDrinkForm;