import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const existError = 'Doctor already exists'

export const fetchDoctors = createAsyncThunk(
  'doctors/fetchDoctors',
  async ({ offset, search }) => {
    console.log(offset)
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/doctors?offset=${
          offset || 6
        }&search=${search || ''}`
      )
      return response.data.doctors
    } catch (error) {
      console.log(error)
    }
  }
)

export const fetchPopularDoctors = createAsyncThunk(
  'doctors/fetchPopularDoctors',
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/doctors/popular`
      )
      return response.data.doctors
    } catch (error) {
      console.log(error)
    }
  }
)

export const createDoctor = createAsyncThunk(
  'doctors/createDoctor',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      return await axios.post(
        `${process.env.REACT_APP_BASE_URL}/doctors/add`,
        { ...data }
      )
    } catch (error) {
      return rejectWithValue(existError)
    }
  }
)

export const updateDoctor = createAsyncThunk(
  'doctors/editDoctor',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    const { values, id } = data
    try {
      return await axios.put(
        `${process.env.REACT_APP_BASE_URL}/doctors/id/${id}`,
        { ...values }
      )
    } catch (error) {
      return rejectWithValue(existError)
    }
  }
)

export const deleteDoctor = createAsyncThunk(
  'doctors/deleteDoctor',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      return await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/doctors/id/${id}`
      )
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState = {
  doctors: [],
  popularDoctors: [],
  isLoading: true,
  error: null,
  search: '',
}

const doctorsSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    onSearchValue: (state, action) => {
      state.search = action.payload
    },
  },
  extraReducers: {
    [fetchDoctors.fulfilled]: (state, action) => {
      state.isLoading = false
      state.doctors = action.payload
    },
    [fetchDoctors.rejected]: (state, action) => {
      state.isLoading = false
    },
    [fetchDoctors.pending]: (state, action) => {
      state.isLoading = true
    },
    [fetchPopularDoctors.fulfilled]: (state, action) => {
      state.isLoading = false
      state.popularDoctors = action.payload
    },
    [fetchPopularDoctors.rejected]: (state, action) => {
      state.isLoading = false
    },
    [fetchPopularDoctors.pending]: (state, action) => {
      state.isLoading = true
    },
    [createDoctor.fulfilled]: (state, action) => {
      const newDoctor = action.payload
      state.doctors = [...state.doctors, newDoctor]
      state.isLoading = false
      state.error = null
    },
    [createDoctor.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    [updateDoctor.pending]: (state, action) => {
      state.isLoading = true
    },
    [updateDoctor.fulfilled]: (state, action) => {
      const newDoctor = action.payload
      const activeIndex = state.doctors.findIndex(
        (el) => el._id === newDoctor._id
      )
      state.doctors[activeIndex] = newDoctor
      state.isLoading = false
      state.error = null
    },
    [updateDoctor.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    [deleteDoctor.fulfilled]: (state, action) => {
      state.doctors = state.doctors.filter(
        (el) => el._id !== action.payload?.data?.movie._id
      )
      state.isLoading = false
    },
    [deleteDoctor.rejected]: (state, action) => {
      state.isLoading = false
    },
  },
})

export const selectDoctors = (state) => state.doctor.doctors
export const selectPopularDoctors = (state) => state.doctor.popularDoctors
export const isDoctorsLoading = (state) => state.doctor.isLoading
export const selectDoctorSearch = (state) => state.doctor.search
export const selectDoctorError = (state) => state.doctor.error

export const { onSearchValue } = doctorsSlice.actions

export default doctorsSlice.reducer
