import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import {useParams} from "react-router-dom";
import axios from "axios";
import IngredientsList from "../Components/IngredientsList";

const MealPage = () => {
    const {idMeal} = useParams()
    const [meal , setMeal] = useState({})
    const [ingredients, setIngredient] = useState([])

    const filterIngredients = (meal) => {
        for (const key in meal) {
            if (key.startsWith('strIngredient') && meal[key] !== null && meal[key] !== '') {
                setIngredient(prev => [...prev, meal[key]])
            }
        }
    }

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v2/1/lookup.php?i=${idMeal}`)
            .then(({data}) => {
                filterIngredients(data.meals[0])
                setMeal(data.meals[0])
            })
    }, [idMeal]);

    return (
        <div>
            <div className={'header'}>
                <Header/>
            </div>
            <div className={'container'}>
               <div className="row">
                   <div className="col-5">
                       <div className="box">
                           <h2>{meal.strMeal}</h2>
                           <img src={meal.strMealThumb} alt=""/>
                           <h6>{meal.strInstructions}</h6>
                       </div>
                   </div>
                   <div className="col-7">
                       <div className="box">
                           <h2>Ingredients</h2>
                           <IngredientsList ingredients={ingredients}/>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default MealPage