import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance";

export const getEmployees = createAsyncThunk(
    'Employee/getEmployees',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('Employee')
            return response.data;
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }

    }
)

export const postEmployee = createAsyncThunk(
    'Employee/postEmployee',
    async (details, { rejectWithValue ,dispatch}) => {
        try {
            const response = await api.post('Employee',details)
            dispatch(getEmployees())
            return response.data;
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }

    }
)

export const deleteEmployee = createAsyncThunk(
    'Employee/deleteEmployee',
    async (id, { rejectWithValue ,dispatch}) => {
        try {
            const response = await api.delete(`Employee/${id}`)
            dispatch(getEmployees())
            return response.data;
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }

    }
)

export const updateEmployee = createAsyncThunk(
    'Employee/updateEmployee',
    async ({id,details}, { rejectWithValue ,dispatch}) => {
        try {
            const response = await api.put(`Employee/${id}`,details)
            dispatch(getEmployees())
            return response.data;
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }

    }
)