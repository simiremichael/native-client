import React, { useEffect, useState } from "react";
//import { FlatList, Image,  } from "react-native";
import { Text, Flex, Stack, Icon, Box, Center, Button,
  StatusBar,Avatar, ScrollView,View,  Divider, AspectRatio, Heading, HStack, Fab, Pressable, CheckIcon, Select, Modal } from "native-base";
import {  MaterialCommunityIcons, MaterialIcons, Ionicons, Entypo, FontAwesome, AntDesign, Feather} from "@expo/vector-icons";
import { ImageSlider } from "react-native-image-slider-banner";
import { useNavigation } from '@react-navigation/core';
import Navbar from '../components/Navbar';;
import { useGetPropertiesQuery, useGetSavePropertyQuery, useNativeSearchPropertiesQuery, useSavePropertyMutation} from '../services/api/propertyAPI';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectCurrentProperty, setProperties } from '../services/features/propertySlice';
import moment from "moment";
import { selectCurrentFilter } from "../services/features/filterSlice";
import { useDisclose } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { selectCurrentUser } from "../services/features/userSlice";

function SearchScreen( {route}: any)  {

 const [heart, setHeart] = useState(false);
 const [saveUserProperty, setSaveUserProperty] = useState([])
 const [service, setService] = useState("");
 const [featured, setFeatured] = useState('')
 const [newest, setNewest] = useState('');
const [minPrice, setMinPrice] = useState('');
const [maxPrice, setMaxPrice] = useState('');
const [toggleSort, setToggleSort] = useState(false)
const [ sort, setSort] = useState('');
const [filterLowPrice, setFilterLowPrice] = useState('')

 const [search, setSearch] = useState('');
 const { isOpen, onOpen, onClose } = useDisclose();

 const [filter, setFilter] = useState('')
 const [filter1, setFilter1] = useState('')
 console.log(filter);
 console.log(filter1);

  const handleFilter = () => {
    setFilter('Verified');
    setFilter1('');
    setNewest('');
  setMaxPrice('');
  setMinPrice('');
  setSort('Verified')
  onClose()
   }
 
   const handleFilter1 = () => {
    setFilter1('Super agent');
    setFilter('');
    setNewest('');
  setMaxPrice('');
  setMinPrice('');
  setSort('Super agent')
  onClose()
   }

 const handleFeatured = () => {
  setFeatured('featured');
  setNewest('');
  setMaxPrice('');
  setMinPrice('');
  setFilter1('');
    setFilter('');
    setSort('featured')
  onClose()
 };
 const handleNewest = () => {
  setFeatured('');
  setNewest('new');
  setMaxPrice('');
  setMinPrice('');
  setMinPrice('');
  setFilter1('');
  setSort('new')
  onClose()
 };
 const handleMinPrice = () => {
  setFeatured('');
  setNewest('');
  setMaxPrice('');
  setMinPrice('minPrice');
  setMinPrice('');
  setFilter1('');
  setSort('minPrice')
  onClose()
 };
 const handleMaxPrice = () => {
  setFeatured('');
  setNewest('');
  setMaxPrice('maxPrice');
  setMinPrice('');
  setMinPrice('');
  setFilter1('');
  setSort('maxPrice')
  onClose()
 }
 
const handleHeart = () => {
  setHeart(!heart);
}
const navigation = useNavigation();
const dispatch = useAppDispatch();

const {user} = useAppSelector(selectCurrentUser);
{/* @ts-ignore:next-line */}
const id = user?.result?._id
console.log(id);

const { propertyType, paymentType, bedroom, bathroom, minprice, maxprice, minSize, maxSize, toggle, propertyGroup } = useAppSelector(selectCurrentFilter)

const [saveProperty] = useSavePropertyMutation()

const {data: saveproperty} = useGetSavePropertyQuery(id)
{/* @ts-ignore:next-line */}
const saveId = saveproperty?.data?._id

console.log(propertyType, paymentType, bedroom, bathroom, minprice, maxprice, minSize, maxSize, toggle, propertyGroup)
//const { data } = useGetPropertiesQuery();

const { data } = useNativeSearchPropertiesQuery({search, propertyType, paymentType, bedroom, bathroom, minprice, maxprice, minSize, maxSize, toggle, propertyGroup, sort });
console.log(data);

useEffect (() => {
dispatch(setProperties({property: data}))
},[dispatch, data])

const { property} = useAppSelector(selectCurrentProperty);
{/* @ts-ignore:next-line */}
 property?.data?.filter(i => i >= 5000 )
//const fiilterLowPrice = property?.data?.filter(i => i >= 5000 );


// const [saveProperty] = useSavePropertyMutation()

  return (
    <>
     <View style={{  flex: 1 }}>
     <Navbar  search={search} setSearch={setSearch} handleFilter={handleFilter} handleFilter1={handleFilter1} filter={filter} setFilter={setFilter} filter1={filter1} setFilter1={setFilter1} />
         <ScrollView style={{height: '66%'}} showsVerticalScrollIndicator={false} pr='15' pl='15'>
          <View mb='3'>
            <Flex direction='row' justifyContent='space-between' alignItems='center'>
              {/* @ts-ignore:next-line */}
              <Text>{property?.data?.length.toLocaleString()} properties</Text>
              <Flex direction='row'>
              <Button variant='outline' pl='4' pr='4'><Flex direction='row' alignItems='center'><Icon as={AntDesign} name="staro"  mr='2' color='#008080'  /><Text color='#008080'>Save</Text></Flex></Button>
              <Button onPress={onOpen} variant='outline' ml='2' pl='4' pr='4'><Flex direction='row' alignItems='center'><Icon as={MaterialIcons} name="sort"  mr='2' color='#008080'  /><Text color='#008080'>Sort</Text></Flex></Button>
              <Modal isOpen={isOpen} onClose={onClose} w='1/2' ml='52%'  mt='-26%'>
              <Modal.Content>
          <Modal.CloseButton />
          <Modal.Body mt={5}>
          <Box>
                <Pressable onPress={handleFeatured}>
                  <Flex direction="row" alignItems='center'>
                <Text pl={2.5} pr={7} mt={3} mb={2}>Featured</Text>
                {featured === 'featured' ? <Icon as={AntDesign} name="check" size={15} color="black"  /> : ''}
                </Flex>
                </Pressable>
                <Pressable onPress={handleNewest}>
                <Flex direction="row" alignItems='center'>
                <Text pl={2.5} pr={8} mt={2} mb={2}>Newest</Text>
                {newest === 'newest' ? <Icon as={AntDesign} name="check" size={15} color="black"  /> : ''}
                </Flex>
                </Pressable>
                <Pressable onPress={handleMinPrice}>
                <Flex direction="row" alignItems='center'>
                <Text pl={2.5} pr={5} mt={2} mb={2}>Price(low)</Text>
                {minPrice === '5000' ? <Icon as={AntDesign} name="check" size={15} color="black"  /> : ''}
                </Flex>
                </Pressable>
                <Pressable onPress={handleMaxPrice}>
                <Flex direction="row" alignItems='center'>
                <Text pl={2.5} pr={4} mt={2} mb={3}>Price(high)</Text>
                {maxPrice === '5000000000' ? <Icon as={AntDesign} name="check" size={15} color="black"  /> : ''}
                </Flex>
                </Pressable>
               </Box>
          </Modal.Body>
         </Modal.Content>
         </Modal>
              </Flex>
            </Flex>
          </View>
          {/* @ts-ignore:next-line */}
          {property?.data?.map((item: any) => ( 
        <Box maxW='100%' rounded="lg" marginBottom={3} overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700"
        }} _web={{
          shadow: 2,
          borderWidth: 0
        }} _light={{
          backgroundColor: "gray.50"
        }} key={item._id}>
        
        <Box> 
          <AspectRatio  ratio={16 / 11}>
            <ImageSlider caroselImageStyle={{ height: "100%" }}
            data={item.images}
              localImg={false}
              autoPlay={false}
              preview={false}
             //onItemChanged={(item) => console.log("item", item)}
             closeIconColor="#fff"
             />
          </AspectRatio>
          <Center bg="white" height='6' _dark={{
            bg: "violet.400"
          }}  _text={{
            color: "#494949",
            fontWeight: '600',
            fontSize: "12"
          }} position="absolute" top= '6' py='0' ml='2' px="3" borderRadius='5'>
            <Flex direction='row'alignItems='center'><Icon as={MaterialIcons} name="verified-user" marginRight='2'  color="coolGray.800" />Verified</Flex> 
          </Center>
          <Center  height='6' marginLeft='80%' _dark={{
            bg: "violet.400"
          }}  _text={{
            color: "#494949",
            fontWeight: '600',
            fontSize: "12"
          }} position="absolute" top= '6' py='0' ml='2' px="3" borderRadius='5'>
            <Flex direction='row'alignItems='center'>
           <Pressable onPress={ () => saveProperty(item._id)}> 
            <Box w={8} h={8} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 50, padding: 5, marginRight: 10, alignItems: 'center', justifyContent: 'center'}}>
              <Icon zIndex={1} as={AntDesign} name={saveId ===  item._id ? 'heart' : "hearto"} color='white' onPress={handleHeart} size='md'  />
              </Box>
              </Pressable>
              {/* @ts-ignore:next-line */}
              <Pressable onPress={() => navigation.navigate('Propertydetails', {propId: item._id})}>
              <Box w={8} h={8} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 50, padding: 5, marginRight: 10, alignItems: 'center', justifyContent: 'center'}}>
              <Icon zIndex={1} as={Ionicons} name='md-ellipsis-vertical' color='white' size='md'  />
              </Box>
              </Pressable>
            </Flex> 
          </Center>
        </Box>
        {/* @ts-ignore:next-line */}
        <Pressable onPress={() => navigation.navigate('Propertydetails', {propId: item._id})}>
        <Stack p="4" space={3}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
          <Stack space={2}>
          <Text fontWeight="400">{item.propertyType.slice(0, 1).toUpperCase()}{item.propertyType.slice(1)}</Text>
            <Heading size="md" ml="-1">{item.price.toLocaleString()}/{item.paymentType.slice(0, 1).toUpperCase()}{item.paymentType.slice(1)}</Heading>
            <Text fontSize="xs" _light={{ 
              color: "#494949"
            }} _dark={{
              color: "#494949"
            }} fontWeight="500" ml="-0.5" mt="-1">
              {item.address1}.
            </Text>
            <Flex direction="row">
            <Flex direction="row"  alignItems='center' marginRight='1' width='10'>
            <Icon as={Ionicons} name="bed-outline" color="coolGray.800" />
              <Text fontSize='xs'> {item.bedroom}</Text>
            </Flex>
            <Flex direction="row"   alignItems='center' marginRight='1' width='10'>
            <Icon as={MaterialCommunityIcons} name="bathtub-outline" color="coolGray.800" />
              <Text fontSize='xs'> {item.bathroom}</Text>
            </Flex>
            <Flex direction="row"   alignItems='center' marginRight='1' width='80'>
            <Icon as={MaterialCommunityIcons} name="vector-square-edit" color="coolGray.800" marginRight='1' />
              <Text fontSize='xs'>{item.size.toLocaleString()} sqft</Text>
            </Flex>
            </Flex>
            </Stack>
          <Divider my="2" _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
          
          <Flex direction="row" alignItems='center' justifyContent='space-between'>
          <Flex direction="row" alignItems='center'>
          <Avatar bg="green.500" source={{
      uri: item.profilePicture
    }} size='sm' marginRight='2'>
        AJ
      </Avatar>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }} fontWeight="400" fontSize='xs' >
               Listed {moment(item.createdAt, 'DDMMYYYY').fromNow()}
              </Text>
            </HStack>  
          </HStack>
          </Flex>
          <Flex direction="row">
          <Button size='xs' style={{width: 42, height: 42, borderRadius: 10, backgroundColor:"#008080"}} onPress={() => console.log("hello world")}>
          <Icon as={MaterialIcons} name="call" color="#fff" size='md' />
          </Button>
          <Button size='xs' style={{marginLeft: 8, width: 42, height: 42, borderRadius: 10, backgroundColor:"#008080"}} onPress={() => console.log("hello world")}>
          <Icon as={Entypo} name="mail" color="#fff" size='md' />
          </Button>
          <Button size='xs' style={{marginLeft: 8, width: 42, height: 42, borderRadius: 10, backgroundColor:"#24D366"}} onPress={() => console.log("hello world")}>
          <Icon as={FontAwesome} name="whatsapp" color="#fff" size='md' />
          </Button>
          </Flex>
          </Flex>
        </Stack>
        </Pressable>
        </Box>
         ))}
      </ScrollView>
      <Center zIndex={1000}>
        <Flex alignItems='center' ml='34%'>
           {/* @ts-ignore:next-line */}
        <Fab mt='-16'  pt={2} pb={2} pr={4} pl={4} borderRadius={8} renderInPortal={false} shadow={2} placement="top-right" size="lg" icon={<Icon color="white" as={Feather} name="map-pin" size="6" />} label="Map" onPress={() => navigation.navigate('AllPropertyMap', {property})} />
        </Flex>
    </Center>
   </View>
    </>
  )
}

export default SearchScreen

