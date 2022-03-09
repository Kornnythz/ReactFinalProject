import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import { Switch as Switching, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Switch from '@material-ui/core/Switch'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { useState , useEffect } from 'react'
import ResumePage from "./pages/ResumePage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import rootReducer from './redux/reducers/index';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

function App() {

  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme
  },[theme])

  const themeToggle = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
      setChecked(false)
    }else{
      setTheme('light-theme')
      setChecked(true)
    }
  }

  return (
    <Provider store={store}>
    <div className="App">
      <Sidebar/>
      <MainContentStyled>

        <div className='light-dark-mode'>
          <div className="left-content">
              <Brightness4Icon/>
          </div>
          <div className="right-content">
              <Switch value="" inputProps={{'arial-label':''}} checked={checked} size="medium" onClick={themeToggle}/>
          </div>
        </div>

        <Switching>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
        </Switching>
      </MainContentStyled>
    </div>
    </Provider>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
`;

export default App;
