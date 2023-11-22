import React from "react";
import MealCard from "./MealCard";
import Ingridients from "./Ingridients";

const MealList = ({meals, searching}) => {
    return (
        <div className={'row'}>
            {meals.map((meal) => (
                <div key={meal.idMeal} className={searching ? 'col-6' : 'col-4'}>
                    <MealCard meal={meal} searching={searching} />
                </div>
            ))}
            {meals.map((meal) => (
                <div key={meal.idMeal} className={searching ? 'col-6' : 'col-4'}>
                    <Ingridients meal={meal} searching={searching} />
                </div>
            ))}
        </div>
    );
}

export default MealList;