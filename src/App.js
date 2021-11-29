import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import About from "./Components/About/About";
import Footer from "./Components/Footer";
import CategoriesContainer from "./Components/Categories/CategoriesContainer";
import ProductPageContainer from "./Components/Product/ProductPageContainer";
import HomeContainer from "./Components/Home/HomeContainer";
import NaviBarContainer from "./Components/NaviBar/NaviBarContainer";
import AdminPanel from "./Components/Admin/AdminPanel";
import BasketContainer from "./Components/Basket/BasketContainer";
import Profile from "./Components/Profile/Profile";
import ProductContainer from "./Components/Categories/CategoryPage/ProductsContainer";
import React from "react";

const App = () => {

    return (
        <>
            <NaviBarContainer/>
            <Switch>
                <Route exact path='/'
                       render={() => <Redirect to={'/home'}/>}/>
                <Route path="/home" render={() => <HomeContainer/>}/>
                <Route path="/product/:productId" render={() => <ProductPageContainer/>}/>
                <Route path="/categories/:categoryId" render={() => <ProductContainer/>}/>
                <Route path="/sector/:sectorId" render={() => <CategoriesContainer/>}/>
                <Route path="/about" render={() => <About/>}/>
                <Route path="/admin/:page" render={() => <AdminPanel/>}/>
                <Route path="/basket" render={() => <BasketContainer/>}/>
                <Route path="/profile/:page" render={() => <Profile/>}/>
            </Switch>
            <Footer/>
        </>
    )
}
export default App;
