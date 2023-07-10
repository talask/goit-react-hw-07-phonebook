import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        updateFilter(state, action) {
        return action.payload;
        },
    },
});

export const { updateFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const getFilter = state => state.filter;