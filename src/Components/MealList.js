import React from "react";
import MealCard from "./MealCard";
const MealList = ({ meals, searching }) => {
    const mealData = meals || [];

    return (
        <div className={'row'}>
            {mealData.map((meal, idx) => (
                <div className={'col-md-4'} key={idx}>
                    <MealCard meal={meal} searching={searching} />
                </div>
            ))}
        </div>
    );
};

export default MealList;