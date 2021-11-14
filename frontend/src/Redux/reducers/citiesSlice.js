import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const existError = 'City already exists'

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/cities`
      )
      return response.data.cities
    } catch (error) {
      console.log(error)
    }
  }
)

export const createCity = createAsyncThunk(
  'cities/createCity',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      return await axios.post(
        `${process.env.REACT_APP_BASE_URL}/cities/add`,
        { ...data }
      )
    } catch (error) {
      return rejectWithValue(existError)
    }
  }
)

export const editCity = createAsyncThunk(
  'cities/editCity',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    const { values, id } = data
    try {
      return await axios.put(
        `${process.env.REACT_APP_BASE_URL}/cities/id/${id}`,
        { ...values }
      )
    } catch (error) {
      return rejectWithValue(existError)
    }
  }
)

export const deleteCity = createAsyncThunk(
  'cities/deleteCity',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      return await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/cities/id/${id}`
      )
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState = {
  cities: [],
  isLoading: true,
  error: null,
}

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    // onSearchValue: (state, action) => {
    //     state.search = action.payload;
    // },
  },
  extraReducers: {
    [fetchCities.fulfilled]: (state, action) => {
      state.isLoading = false
      state.cities = action.payload
    },
    [fetchCities.rejected]: (state, action) => {
      state.isLoading = false
    },
    [fetchCities.pending]: (state, action) => {
      state.isLoading = true
    },
    [createCity.fulfilled]: (state, action) => {
      const newDoctor = action.payload
      state.doctors = [...state.doctors, newDoctor]
      state.isLoading = false
      state.error = null
    },
    [createCity.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    [createCity.pending]: (state, action) => {
      state.isLoading = true
    },
    [editCity.fulfilled]: (state, action) => {
      const newDoctor = action.payload
      const activeIndex = state.doctors.findIndex(
        (el) => el._id === newDoctor._id
      )
      state.doctors[activeIndex] = newDoctor
      state.isLoading = false
      state.error = null
    },
    [editCity.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    [deleteCity.fulfilled]: (state, action) => {
      state.doctors = state.doctors.filter(
        (el) => el._id !== action.payload?.data?.movie._id
      )
      state.isLoading = false
    },
    [deleteCity.rejected]: (state, action) => {
      state.isLoading = false
    },
  },
})

export const selectCities = (state) => state.city.cities
export const isCitiesLoading = (state) => state.city.isLoading
export const selectCitiesError = (state) => state.city.error
export const selectDoctorCity = (state, ownProps) => {
  const cities = state.city.cities
  const activeLang = state.basic.activeLang
  const activeCity = cities.find((el) => el.id === ownProps.city)
  return activeCity?.name[activeLang]
}

// export const { onSearchValue } = doctorsSlice.actions;

export default citiesSlice.reducer
