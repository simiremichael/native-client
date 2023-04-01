import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { RootState } from '../../app/store';
import { setUsers} from '../features/userSlice';

const baseQuery = fetchBaseQuery({
  baseUrl:  'https://server-api-knl6.onrender.com',
  credentials: 'include',
  // 'http://192.168.174.143:8000' 
  prepareHeaders: (headers, { getState }) => {
    const token = ( getState() as RootState).userState.token
    // if ( token) {
      headers.set('authorization', `Bearer ${token}` );
    // }

      return headers;
    
}
})

// BaseQueryFn< string | FetchArgs, unknown, FetchBaseQueryError>

   const customFetchBase = async (args: any, api: any, extraOptions: any) => {
   
    let result = await baseQuery(args, api, extraOptions);
    //console.log(result.error);
console.log(result);
    // If you want, handle other status codes, too
    //result?.error?.status === 403
    {/* @ts-ignore:next-line */}
    if (!result?.data?.token) {
        console.log('sending refresh token')

        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/users/refresh', api, extraOptions)
  console.log(refreshResult)
        if (refreshResult?.data) {
       const user = ( api.getState() as RootState).userState.user
            // store the new token 
              console.log(user)
              {/* @ts-ignore:next-line */}
            api.dispatch(setUsers({ token: refreshResult?.data?.data?.token, user }))
                      
            // retry original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {
      //       if (refreshResult?.error?.status === 403) {
      //           // refreshResult.error.data.message = "Your login has expired. "
      //       }
      //       return refreshResult
      // }
     // api.dispatch(logoutUsers())
        }
    };
 
  return result;

  };
  
  export default customFetchBase;
  

  