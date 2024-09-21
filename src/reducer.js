
import { createSlice } from '@reduxjs/toolkit';  

const themeSlice = createSlice({  
  name: 'theme',  
  initialState: {  
    isDarkTheme: false, // Светлая тема по умолчанию  
  },  
  reducers: {  
    toggleTheme: (state) => {  
      state.isDarkTheme = !state.isDarkTheme;  
    },  
  },  
});  

export const { toggleTheme } = themeSlice.actions;  
export default themeSlice.reducer;