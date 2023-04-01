import React, { useEffect } from 'react'
import {View, Button, Heading, HStack, Text } from 'native-base'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Save() {
  const [saveData, setSaveData] = useState({})

//   useEffect(() => {
//      setSaveData(AsyncStorage.getItem('saveProperty'))
//   // const value =  AsyncStorage.getItem('saveProperty')
//   // console.log(value)
// },[AsyncStorage, setSaveData])

  //const value =  AsyncStorage.getItem('saveProperty')
  //setCompany(JSON.parse(localStorage.getItem('company') || 'false'))

  console.log(AsyncStorage.getItem('saveProperty'))

  const [toggle, setToggle] = useState(false)
console.log(toggle)

  return (
    <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
      <Heading mt='5' textAlign='center'>Saved</Heading>
      <HStack marginTop={10}>
        <Button w='50%' h='12' variant={toggle === false ?"solid": 'outline'} color={toggle === false ? '#008080' : '#fff'} onPress={() => setToggle(false)}>Properties</Button>
        <Button w='50%' h='12' variant={toggle === true ?"solid": 'outline'}  color={toggle === true ? '#008080' : '#fff'} onPress={() => setToggle(true)}>Searches</Button>
      </HStack>
      {toggle === false && ( 
      <View p='5'>
        <Text textAlign='center' fontSize='lg' mt='5'>You don't have any saved properties</Text>
        <Text textAlign='center' mt='5'>Here you can view your saved  properties. Sign in or register to syncyour favourite properties across devices.</Text>
      </View>
      )}
      {toggle === true && ( 
      <View p='5'>
        <Text textAlign='center' fontSize='lg' mt='5'>Save your search</Text>
        <Text textAlign='center' mt='5'>HLog in or create account to save your searches and get updates on new listings.</Text>
      </View>
      )}
    </View>
  )
}

//style={{width: '50%',  height:'12', color: toggle === false ? '#008080' : '#fff'}}