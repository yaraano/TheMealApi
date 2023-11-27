import React, {useState} from "react";
import Header from "../Components/Header";
import axios from "axios";
import MealList from "../Components/MealList";
import {useNavigate} from "react-router-dom";

const SearchPage = () => {
    const navigate = useNavigate();
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

                    if (data.meals && data.meals.length > 0) {
                        const firstMeal = data.meals[0];
                        navigate(`/meal/${firstMeal.idMeal}`);
                    }
                })
        }
    }
    return (
        <>
            <div className={'header'}>
                <Header/>
                <div className={'inner-wrapper'}>
                    <input
                        className={'input'}
                        type="text"
                        onChange={(e) => setInputMeal(e.target.value)}
                        placeholder={"Название"}
                    />
                    <button className={'btn-search'} onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            <div className={'container'}>
                <MealList meals={searchMeal} searching={searching}/>
            </div>
        </>
    )
}

export default SearchPage