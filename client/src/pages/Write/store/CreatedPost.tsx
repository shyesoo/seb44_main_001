import { configureStore, createSlice } from '@reduxjs/toolkit';

export const createdPostSlice = createSlice({
  name: 'createdPost',
  initialState: {
    title: '',
    content: '',
    memberId: 0,
    categoryId: 0,
    tags: [],
    locationId: 1,
  },
  reducers: {
    setCreatedPost: (_state, action) => {
      console.log(action.payload); //! 배포 시 삭제
      return {
        title: action.payload.title,
        content: action.payload.content,
        memberId: action.payload.memberId,
        categoryId: action.payload.categoryId,
        tags: action.payload.tags,
        locationId: action.payload.locationId,
      };
    },
  },
});

export const store = configureStore({
  reducer: createdPostSlice.reducer,
});

export const { setCreatedPost } = createdPostSlice.actions;
