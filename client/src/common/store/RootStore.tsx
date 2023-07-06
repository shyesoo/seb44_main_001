import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { locationSlice } from './LocationStore';
import { createdPostSlice } from '../../pages/Write/store/CreatedPost';
import { currentCategorySlice } from '../../pages/Lists/store/CurrentCategory';
import { filteredListSlice } from '../../pages/Lists/store/FilteredList';
import { categorySlice } from './CategoryStore';

const rootReducer = combineReducers({
  location: locationSlice.reducer,
  createdPost: createdPostSlice.reducer,
  currentCategory : currentCategorySlice.reducer,
  filteredList: filteredListSlice.reducer,
  category: categorySlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
