import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    logData: {
      email: "",
      password: "",
    },
    allData: [],
    DataById:{},
    regData:{
      name:"",
      email: "",
      password: "",
      address:"",
    },
    guest:0

  },
  reducers: {
    setData: (state, action) => {
      state.allData = action.payload
    },
    logoutAction: (state, action) => {
      state.allData = action.payload
    },
    logAction: (state, action) => {
      state.logData = action.payload
    },
    setDataById: (state, action) => {
      state.DataById = action.payload
    },
    setRegData: (state, action) => {
      state.regData = action.payload
    },
    setViewId: (state, action) => {
      state.guest = action.payload
    }
  },
})

export const { setData, logoutAction, logAction, setDataById, setRegData,setViewId } = userSlice.actions

export default userSlice.reducer