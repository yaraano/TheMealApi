import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import MealPage from "./Pages/MealPage";
import IngredientsPage from "./Pages/IngredientsPage";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/search"} element={<SearchPage/>}/>
            <Route path={"/meal/:idMeal"} element={<MealPage/>}/>
            <Route path={"/ingredients/:name"} element={<IngredientsPage/>}/>
        </Routes>
    );
}

export default App;
