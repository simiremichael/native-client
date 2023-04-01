//import {Appbar,Searchbar } from 'react-native-paper';
import React, { useState } from "react";
import { Text, Flex, Stack, Icon, StatusBar,View, Box, Input, HStack, Button, Pressable,} from "native-base";
import Svg, { Circle, Rect } from 'react-native-svg';
import { MaterialIcons, Ionicons} from "@expo/vector-icons";
// import {useNavigate } from "react-router-native";
import { useNavigation } from '@react-navigation/core';

function Navbar( props: {search: any, setSearch: any, handleFilter: any, handleFilter1: any, filter: any, setFilter: any, filter1: any, setFilter1: any}) {

const search = props.search;
const setSearch = props.setSearch
const filter = props.filter
const setFilter = props.setFilter
const filter1 = props.filter1
const setFilter1 = props.setFilter
const handleFilter = props.handleFilter
const handleFilter1 = props.handleFilter1
 
  const onChangeSearch = (query: any) => setSearch(query);
  //const [search, setSearch] = useState('');

  // const navigate = useNavigate ();
  
  //  if (filter1 === true) {
  //   setFilter1('Super agent')
  //  }
   const navigation = useNavigation();
  return (
    <>
       <StatusBar backgroundColor="#008080" barStyle="light-content" />
      <View mt='2'pr='15' pl='15'>
        <Box  style={{ marginTop: 3, width: '100%', height: 50, display: 'flex', flexDirection: 'row' }}>
          <Input w='88%' borderRadius={10} h={44} bgColor='white' color="muted.600" fontSize={15}
            placeholder="City, area or building"
            onChangeText={onChangeSearch}
            value={search}
            InputLeftElement={<Icon as={<Ionicons name="search" />} size={5} ml="2" color="muted.500" />}
            InputRightElement={<Pressable onPress={() => setSearch('')}>
            <Icon as={<MaterialIcons name='close' />} size={6} mr="2" color="muted.500" />
          </Pressable>}
           />
            {/* @ts-ignore:next-line */}
          <Button  style={{marginLeft: 8, width: 44, height: 44, borderRadius: 10, backgroundColor:"#008080"}} onPress={() => navigation.navigate('Filter')} >
          <Icon as={Ionicons} name="filter-outline" color="#fff" size='md' />
          </Button>
         </Box>
        <Box h={50} style={{ marginTop: 10 }}>
          <Stack direction={{
            base: "row",
            md: "row"
          }} space={3} alignItems="flex-start">

            <Pressable onPress={handleFilter} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="0">
              <View backgroundColor={filter === 'Verified' ? '#9fefef' : 'white'}>
                <Flex direction="row" justifyContent='center' alignItems='center' padding='1'>
                  <Icon as={MaterialIcons} name="verified-user" color="coolGray.800" />
                  <Text marginLeft='2'>Verified</Text>
                </Flex>
              </View>
            </Pressable>
            <Pressable onPress={handleFilter1} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="0">
              <View backgroundColor= {filter1 === 'Super agent' ? '#9fefef' : 'white'}>
                <Flex direction="row" justifyContent='center' alignItems='center' padding='1'>
                  <Icon as={MaterialIcons} name="star-rate" color="coolGray.800" />
                  <Text marginLeft='2'>Super agent</Text>
                </Flex>
              </View>
            </Pressable>
          </Stack>
        </Box> 
        </View>
    </>
  )
}

export default Navbar