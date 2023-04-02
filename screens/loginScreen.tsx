import React, { useEffect, useState } from 'react'
import { Text, Flex, Icon, Box, Center, Button,
    Image, ScrollView,View, Heading, HStack, Pressable, VStack, Link, FormControl, Input } from "native-base";
import { MaterialIcons} from "@expo/vector-icons";
import { useGoogleSignInMutation, useSigninUserMutation, useSignupUserMutation } from '../services/api/propertyAPI';
import { selectCurrentUser, setUsers } from '../services/features/userSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';

export default function LoginScreen(this: any) {

     const [image, setImage] = useState('');
    const [ isRegistered, setIsRegistered] = useState(false);
    const [show, setShow] = useState(false);
    const [picture, setPicture] = useState('')
    const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', familyName: '', givenName: '', picture: '', role: ''}
    const [userFormData, setUserFormData] = useState(initialState)
    const navigation = useNavigation();
    const [signinUser, { data, isError, error, isSuccess } ] = useSigninUserMutation()
    const [googleSignIn, { data: data1, isError: isError1, error: error1, isSuccess: isSuccess1 } ] =  useGoogleSignInMutation()  
     const [signupUser, {isSuccess: isSuccess2}] = useSignupUserMutation();
     const [logoutUser] = useSignupUserMutation();
      const dispatch = useAppDispatch()

      console.log(data)

     useEffect(() => {
      if(isSuccess) {
        dispatch(setUsers({ user: data, token: data?.token }));
        //toast.success('Login successfully....')
        setIsRegistered(false);
        {/* @ts-ignore:next-line */}
        navigation.navigate('More')
      clear();
      };
      if(isSuccess1) {
        localStorage.setItem('my-property-finder-user', JSON.stringify({ user: data1, token: data1?.token , refreshToken: data1?.refreshToken }))
        setIsRegistered(false);
       // toast.success('Login successfully....')
        //  navigate("/");
        // setLogin(false);
        // clear();
        };
        if(isSuccess2) {
           {/* @ts-ignore:next-line */}
          navigation.navigate('More')
        //   toast.success('Signup successfully....')
        // setLogin(false);
        setIsRegistered(false);
        // clear();
          }
      if(isError) {
        console.log(error)
      }
      }, [isSuccess, isSuccess1, isSuccess2, setIsRegistered, dispatch, error, isError, data, data1])

      const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

  //   useEffect(() => {
  //     setUser(JSON.parse(localStorage.getItem('user') || 'false'))
  //     // setCompany(JSON.parse(localStorage.getItem('company') || 'false'))
  //     // setAgent(JSON.parse(localStorage.getItem('agent') || 'false'))
  //     // const token = user?.token;
  //     // if(token) {
  //     //     const decodedToken = jwt_decode(token);
  //     //     if (decodedToken.exp * 1000 < new Date().getDate()) handleLogout();
  //     // }
  // }, [location]) 
    
  const {user} = useAppSelector(selectCurrentUser);
 // console.log(user)

  // const handleChange = (e: any) => {
  //   setUserFormData({...userFormData, formData: e.target.value})
  // }

    const  handleSubmit = async (e: any) => {
      e.preventDefault();
     // console.log(userFormData);
      if(isRegistered) {
      await signupUser(userFormData).unwrap().then((payload: any) => console.log('fulfilled', payload)).catch((error: any) => console.error('rejected', error));
        } else {
         await signinUser(userFormData).unwrap().then((payload: any) => console.log('fulfilled', payload)).catch((error: any) => console.error('rejected', error));
        } 
  
      }

    // const googleSuccess = async (res: any) => {
    //   const userObject = jwt_decode(res.credential)
    //   const result = userObject
    //   try {
    //          {/* @ts-ignore:next-line */}
    //       googleSignIn(result).unwrap().then((payload: any) => console.log('fulfilled', payload)).catch((error: any) => console.error('rejected', error));
    //       setLogin(false);
          
    //     } catch (error) {
    //     console.log(error);
    //   }
    //   // setGoogleData(JSON.parse(localStorage.getItem('user') || 'false'));
    //   // if (isSuccess1) {
    //   // window.location.reload();
    //   // }
    // }
    
    const googleFailure = () => {
      console.log('Google Sign In unsuccessful')
    }
     
    const clear = () => {
      setUserFormData(initialState)
        }
    // const dispatchLogOut = useDispatch();
    
    // const handleLogout = () => {
    //   // dispatchLogOut(logoutUser());
    //   {/* @ts-ignore:next-line */}
    //   logoutUser();

    // }

const handleUpload = async () => {
  
for ( const file of image) {
 const formData = new FormData();
 formData.append('file', file);
 formData.append('upload_preset', 'profileImg');
await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
 method: 'POST',
 body: formData,
})
.then(r => r.json())
.then(data => {
setImage(data.secure_url);
console.log(image, data)
   if (data.url) {
     //toast.success('Uploaded successfully....')
    } 
   })
   };

}
// const {user} = useAppSelector(selectCurrentUser);
//console.log(user)
// console.log(data)

  return (
    <View>
      <ScrollView style={{height: '98%'}} pl='5' pr='5'>
        { !isRegistered && ( 
      <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input type='text' value={userFormData.email} onChangeText={(e: any) => setUserFormData({...userFormData, email: e})} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} value={userFormData.password} onChangeText={(e: any) => setUserFormData({...userFormData, password: e})}   />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "#008080"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" background='#008080' onPress={handleSubmit}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Pressable  onPress={() => setIsRegistered(true)}>
            <Text color='#008080' fontWeight='medium' fontSize='sm'>
              Sign Up
            </Text>
            </Pressable>
          </HStack>
        </VStack>
      </Box>
    </Center>
    )}

    { isRegistered && ( 
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
        <View mb={1} style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Button mb={1}  background='#008080' onPress={pickImage}>Pick an image from camera roll</Button>
        <Flex direction='row' alignItems='center'>
       {image && <Image  source={{ uri: image }} style={{ width: 70, height: 70 }} alt='profile photo' />}
       { image && <Button h={10} w='1/2' ml={2}  background='#008080' onPress={handleUpload}>upload img</Button>}
       </Flex>
        </View>
        <FormControl>
            <FormControl.Label>First name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Last name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" background='#008080' onPress={handleSubmit}>
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              Already registered. {" "}
            </Text>
            <Pressable  onPress={() => setIsRegistered(false)}>
            <Text color='#008080' fontWeight='medium' fontSize='sm'>
              Sign In
            </Text>
            </Pressable>
            {/* <GoogleSigninButton
  style={{ width: 192, height: 48 }}
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={this._signIn}
  disabled={this.state.isSigninInProgress}
/> */}
          </HStack>
        </VStack>
      </Box>
    </Center>
    )}
    </ScrollView>
    </View>
  )
}
