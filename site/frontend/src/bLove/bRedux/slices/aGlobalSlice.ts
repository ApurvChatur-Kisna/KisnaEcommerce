import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: "Hari Krishna",
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
});

export default globalSlice;
