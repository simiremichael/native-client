import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import  {PropertyModel} from '../models/index';


interface PropertyAuthState {

  property:   string | PropertyModel | null | {} | undefined;
}

const initialState: PropertyAuthState = { 
  property: null, 
} 


export const propertySlice = createSlice({
  name: 'PropertyAuth',
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<{property:   string | PropertyModel | null | {} | undefined }>) => {
       state.property = action.payload.property;
    },
    }
})
export const selectCurrentProperty = (state: RootState) => state.propertyState
export const {setProperties} = propertySlice.actions;
export default propertySlice.reducer;






// import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
// import  { PropertyModel  } from '../models/index'



//  interface Response {
//     property: PropertyModel | null;
//  } 

// const initialState: Response = {
//    property:  null,

// };

// export const propertySlice = createSlice({
//   name: 'propertySlice',
//   initialState,
//   reducers: {
//     propertyState: (state, action: PayloadAction<PropertyModel>) => {
//       state.property = action.payload;
//     },
//   },
// });


// export default propertySlice.reducer;
// export const { propertyState } = propertySlice.actions;
