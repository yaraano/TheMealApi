import React from "react";

const SearchCard = ({meal}) => {
    return (
        <div className={'box'}>
            <img src={meal?.strMealThumb} alt=""/>
            <h5>{meal?.strMeal}</h5>
            <p>{meal?.strCategory}</p>
            <p>{meal?.strInstructions}</p>
        </div>
    )
}

export default SearchCard