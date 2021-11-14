import { createSlice } from '@reduxjs/toolkit'
import constants from 'Constants'

const initialState = {
  isModal: false,
  activeLang: constants.languages.pl,
  activeStep: constants.steps.start,
}

const basicSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    onLangChange: (state, action) => {
      state.activeLang = action.payload
    },
    onModalChange: (state, action) => {
      state.isModal = !state.isModal
    },
    onStepChange: (state, action) => {
      state.activeStep = action.payload
    },
  },
  extraReducers: {},
})

export const selectIsModal = (state) => state.basic.isModal
export const selectActiveLang = (state) => state.basic.activeLang
export const selectActiveStep = (state) => state.basic.activeStep

export const { onLangChange, onModalChange, onStepChange } =
  basicSlice.actions

export default basicSlice.reducer
