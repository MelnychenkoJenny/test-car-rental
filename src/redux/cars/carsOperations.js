import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6501548e736d26322f5b8194.mockapi.io';


export const getAllCars = createAsyncThunk(
    'cars/getAll',
    async (page, { rejectWithValue }) => {
        try {
          const {data} = await axios.get(`/adverts?p=${page}&l=8`);
console.log('data res', data)
          return data;
        } catch (e) {
          return rejectWithValue(e.message);
        }
      }
)