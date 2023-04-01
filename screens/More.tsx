// import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Heading, ScrollView, StatusBar, View, Text, HStack, VStack, Button, Flex, Icon, Divider, Pressable, Avatar } from 'native-base'
import { MaterialIcons, Ionicons,FontAwesome} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core';
import { useLogoutUserMutation } from '../services/api/propertyAPI';
import { useAppSelector } from '../app/hooks';
import { logoutUsers, selectCurrentUser } from '../services/features/userSlice';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';



function More () {
 
  const navigation = useNavigation();
  {/* @ts-ignore:next-line */}
  //const [logoutUsers, {isSuccess} ] = useLogoutUserMutation();
  const value =  AsyncStorage.getItem('my-property-finder-user')

  const {user} = useAppSelector(selectCurrentUser);
  //console.log(JSON.parse(value));

  // useEffect(() => {
  //   if (isSuccess) {
  //      {/* @ts-ignore:next-line */}
  //      navigation.navigate('Search')
  //   }
  // },[isSuccess])

  const dispatchLogOut = useDispatch();
    
  const handleLogout = () => {
     dispatchLogOut(logoutUsers());
    {/* @ts-ignore:next-line */}
    // logoutUser();

  }

  // const handleLogout = () => { 
  //   {/* @ts-ignore:next-line */}
  //   logoutUsers(); 
  //   {/* @ts-ignore:next-line */}
  //   //navigation.navigate('Search');
  // }

    return (
      <View style={{flex: 1}}>
          <StatusBar backgroundColor="#008080" barStyle="light-content" />
          <ScrollView h='82%'>
          <VStack  mr='9' ml='9' mt='12'>
          <Heading textAlign='center'>My Account</Heading>
          {!user ?
          <>
          <Text fontSize='md' textAlign='center' mt='5'>Sign in or register to sync your favourite properties across devices</Text>
         {/* @ts-ignore:next-line */}
          <Button borderRadius='10' bgColor='#008080' mt='5' onPress={() => navigation.navigate('Login')}>Log In / Create Account</Button>
          </> :
            <Flex direction='row' mt={10} mb={5} alignItems='center'>
              {/* @ts-ignore:next-line */}
            <Avatar bg="cyan.500" size='lg' source={{uri: user?.result?.picture}}></Avatar>
             <View ml={5}>
              {/* @ts-ignore:next-line */}
              <Text>{user?.result?.name}</Text>
              {/* @ts-ignore:next-line */}
              <Text>{user?.result?.email}</Text>
             </View>
            </Flex>
           }
          </VStack>
           <VStack mr='5' ml='5'>
           <Heading mt='5' mb='5'>More On Property Finder</Heading>
           {/* @ts-ignore:next-line */}
           <Pressable onPress={() => navigation.navigate('Contact')}>
           <Flex justifyContent='space-between' direction='row' alignItems='center'>
            <HStack alignItems='center' >
            <Icon as={MaterialIcons} name="contact-mail" size='6' color="coolGray.400" />
              <Text ml='2' fontSize='lg'>Contact Us</Text>
            </HStack>
            <Icon as={FontAwesome} name="angle-right" size='6' color="coolGray.400" />
           </Flex>
           </Pressable>
           </VStack>
           <Divider my="2" _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
           <VStack mr='5' ml='5'>
            {/* @ts-ignore:next-line */}
           <Pressable onPress={() => navigation.navigate('About')}>
           <Flex justifyContent='space-between' direction='row' alignItems='center'>
            <HStack alignItems='center' >
            <Icon as={Ionicons} name="information-circle" size='6' color="coolGray.400" />
              <Text ml='2' fontSize='lg'>About Us</Text>
            </HStack>
            <Icon as={FontAwesome} name="angle-right" size='6' color="coolGray.400" />
           </Flex>
           </Pressable>
           </VStack>
           <Divider my="2" _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
           <VStack mr='5' ml='5'>
            {/* @ts-ignore:next-line */}
           <Pressable onPress={() => navigation.navigate('Privacy')}>
           <Flex justifyContent='space-between' direction='row' alignItems='center'>
            <HStack alignItems='center' >
            <Icon as={MaterialIcons} name="privacy-tip" size='6' color="coolGray.400" />
              <Text ml='2' fontSize='lg'>Privacy Policy</Text>
            </HStack>
            <Icon as={FontAwesome} name="angle-right" size='6' color="coolGray.400" />
           </Flex>
           </Pressable>
           </VStack>
           <Divider my="2" _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
           {user && ( 
           <Button backgroundColor="#008080" mt={10} onPress={handleLogout}>Log out</Button>
           )}
        </ScrollView>
      </View>
    )
  }

export default More