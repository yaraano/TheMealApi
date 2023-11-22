import React from "react";
const MealCard = ({meal, searching}) => {

    return (
        <div className={'box'}>
            <img src={meal?.strMealThumb} alt=""/>
            <h1>{meal?.strMeal}</h1>
            <h2>{meal?.strCategory}</h2>
            {searching && <p>{meal?.strInstructions}</p>}
        </div>
    )
}

export default MealCard