import React, {useState} from "react";
import Header from "../Components/Header";
import axios from "axios";
import MealList from "../Components/MealList";

const SearchPage = () => {

    const [inputMeal, setInputMeal] = useState("");
    const [searchMeal, setSearchMeal] = useState([]);
    const [searching, setSearching] = useState(false);

    const handleSearch = () => {
        setSearching(true);
        if (inputMeal.length > 0) {
            axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`)
                .then(({data}) => {
                    console.log(data.meals)
                    setSearchMeal(data.meals)
                })
        }
    }

    return (
        <>
            <div className={'container'}>
                <div className={'header'}>
                    <Header/>
                    <div className={'inner-wrapper'}>
                        <input type="text"
                               onChange={(e) => setInputMeal(e.target.value)}
                               placeholder={"Название"}
                        />
                        <button onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>

                <MealList meals={searchMeal} searching={searching}/>
            </div>
        </>
    )
}

export default SearchPage