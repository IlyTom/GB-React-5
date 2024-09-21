  
import React, { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { toggleTheme } from './reducer';  

const ThemeSwitcher = () => {  
  const dispatch = useDispatch();  
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);  

  const handleToggle = () => {  
    dispatch(toggleTheme());  
  };  


  useEffect(() => {  
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';  
  }, [isDarkTheme]);  

  return (  
    <div style={{ padding: '20px' }}>  
      <h1>Переключатель темы</h1>  
      <button onClick={handleToggle}>  
        {isDarkTheme ? 'Светлая тема' : 'Темная тема'}  
      </button>  
    </div>  
  );  
};  

export default ThemeSwitcher;