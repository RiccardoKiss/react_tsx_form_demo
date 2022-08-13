import { createSlice } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

// Slice
const formSlice = createSlice({
  name: "form",
  initialState: {
    FormStep: 1,
    FormContributionData: "",
    FormContactData: ""
  },
  reducers: {
    formStep: (state, action) => { state.FormStep = action.payload },
    formContributionData: (state, action) => { state.FormContributionData = action.payload },
    formContactData: (state, action) => { state.FormContactData = action.payload }
  }
})

export type RootState = ReturnType<typeof reducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// Actions
export const { formStep, formContributionData, formContactData } = formSlice.actions;
export const reducer = formSlice.reducer;
