import { createSlice } from '@reduxjs/toolkit';

interface StateType {
  activeDir?: string | any;
  isLanguage?: string;
}
const localStorageLang = localStorage.getItem('language');
const currentLang = localStorageLang ? JSON.parse(localStorageLang) : null;

const initialState: StateType = {
  activeDir: 'ltr',
  isLanguage: currentLang,
};

export const CustomizerSlice = createSlice({
  name: 'customizer',
  initialState,
  reducers: {
    setDir: (state: StateType, action) => {
      state.activeDir = action.payload;
    },
    setLanguage: (state: StateType, action) => {
      state.isLanguage = action.payload;
    },
  },
});

export const {
  setDir,
  setLanguage,
} = CustomizerSlice.actions;
export default CustomizerSlice.reducer;
