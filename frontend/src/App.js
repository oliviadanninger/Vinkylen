import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import Categories from './Pages/Categories';
import ChosenCategory from './Pages/ChosenCategory';
import ChosenWine from './Pages/ChosenWine';
import SearchPage from './Pages/SearchPage';
import AllWines from './Pages/AllWines';
import AddWine from './Pages/AddWine';
import { useDispatch } from 'react-redux';
import { actions } from './reducers/reducer';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()
  const url = 'http://localhost:5010/wines.json';
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(result => result.json())
      .then(data => dispatch(actions.updateStore(data))) //Uppdaterar store
  }, [])

  return (
    <Router>
      <main>
        <Header />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/chosen-category" element={<ChosenCategory />} />
            <Route path="/chosen-wine" element={<ChosenWine />} />
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="/all-wines" element={<AllWines />} />
            <Route path="/add-wine" element={<AddWine />} />
          </Routes>
        <Nav />
      </main>
    </Router>
  );
}
export default App;