 
import React from 'react';  
import { Provider } from 'react-redux';  
import store from './store';  
import ThemeSwitcher from './ThemeSwitcher';  
import './App.css'; // Убедитесь, что здесь импортируется файл стилей  

const App = () => {  
  return (  
    <Provider store={store}>  
      <div>  
        <ThemeSwitcher />  
        <h2>Добро пожаловать на наш сайт!</h2>  
        <p>Здесь вы можете переключать темы.</p>  
      </div>  
    </Provider>  
  );  
};  

export default App;
