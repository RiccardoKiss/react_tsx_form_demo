import { createSlice } from '@reduxjs/toolkit'

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

// Actions
export const { formStep, formContributionData, formContactData } = formSlice.actions
export const formReducer = formSlice.reducer;
