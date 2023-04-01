import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import  {UserModel} from '../models/index'
import AsyncStorage from '@react-native-async-storage/async-storage';


interface UserAuthState {

  user:  undefined | string | UserModel | null ;   
  // name: string | null;
  
  token: string | null | undefined | {};
  refreshToken: string | null | string | undefined | {} ;
}

const initialState: UserAuthState = { 
  user: null, 
  refreshToken: null ,
  token: null 
} 


export const userSlice = createSlice({
  name: 'UserAuth',
  initialState,
  reducers: {
    setUsers:  (state, action: PayloadAction<{user:  undefined | string | UserModel | null, token: string | undefined | null | {} }>) => {

           AsyncStorage.setItem('my-property-finder-user', JSON.stringify({
            user: action.payload.user,
            token: action.payload.token,
           }))
      // localStorage.setItem('my-property-finder-user', JSON.stringify({
      //   user: action.payload.user,
      //   token: action.payload.token,
      //   refreshToken: action.payload.refreshToken,
      //  })
      //  );
       state.user = action.payload.user;
       state.token = action.payload.token;
    },
    logoutUsers: (state) => {
      AsyncStorage.removeItem('my-property-finder-user');
      AsyncStorage.clear();
      state.user = null;
      state.token = null;
    }
    }
})
export const selectCurrentUser = (state: RootState) => state.userState
export const {setUsers, logoutUsers} = userSlice.actions;
export default userSlice.reducer;