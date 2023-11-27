import React from "react";
import {Link} from "react-router-dom";
const MealCard = ({meal, searching}) => {

    return (
        <div className={'box'}>
            <img src={meal?.strMealThumb} alt=""/>
            <h4>
                <Link to={`/meal/${meal.idMeal}`} >
                    {meal?.strMeal}
                </Link>
            </h4>
            <h4>{meal?.strCategory}</h4>
            {searching && <p>{meal?.strInstructions}</p>}
        </div>
    )
}

export default MealCard