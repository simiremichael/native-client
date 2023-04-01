import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
//import  {PropertyModel} from '../models';


interface FilterAuthState {

    propertyType: string;  
    propertyGroup: string; 
    paymentType: string;  
    bedroom: string;  
    bathroom: string;  
    minprice: string;  
    maxprice: string;  
    minSize: string;  
    maxSize: string;  
    toggle: string  
}

const initialState: FilterAuthState = { 
    propertyType:  '', 
    propertyGroup: '', 
    paymentType: '', 
    bedroom: '', 
    bathroom: '', 
    minprice: '', 
    maxprice: '', 
    minSize: '',  
    maxSize: '', 
    toggle: '', 
} 


export const  filterSlice = createSlice({
  name: 'FilterAuth',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ 
    propertyType:  string,
    propertyGroup: string; 
    paymentType: string,
    bedroom:  string,
    bathroom: string,
    minprice: string,
    maxprice: string,
    minSize: string,
    maxSize: string,
    toggle: string, 
     }>) => {
       state.propertyType = action.payload.propertyType;
       state.propertyGroup = action.payload.propertyGroup;
       state.paymentType = action.payload.paymentType;
       state.bedroom = action.payload.bedroom;
       state.bathroom = action.payload.bathroom;
       state.minprice = action.payload.minprice;
       state.maxprice = action.payload.maxprice;
       state.minSize = action.payload.minSize;
       state.maxSize = action.payload.maxSize;
       state.toggle = action.payload.toggle;
    },
    }
})
export const selectCurrentFilter = (state: RootState) => state.filterState
export const {setFilter} = filterSlice.actions;
export default filterSlice.reducer;



