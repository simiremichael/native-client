import React, { useEffect, useState } from 'react'
import { useGetPropertiesByAgentQuery, useGetPropertyQuery } from '../services/api/propertyAPI';
import { useNavigation , useRoute, Route} from '@react-navigation/core';
import { AspectRatio, Heading, ScrollView, View, Text, Box, Flex, Icon, Divider, Avatar, Center, Image, Pressable, HStack, Button, Link } from 'native-base';
import { ImageSlider } from 'react-native-image-slider-banner';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectCurrentPropertyDetail, setPropertyDetail } from '../services/features/propertyDetailSlice';
import {  MaterialCommunityIcons, MaterialIcons, Ionicons, Entypo, FontAwesome, AntDesign, SimpleLineIcons} from "@expo/vector-icons";
import { Linking } from 'react-native';
import MapView from 'react-native-maps';
//import {  Route } from 'react-native-tab-view';

export default function PropertyDetailsScreen({route}: any) {

  const { propId } = route.params;
  const dispatch = useAppDispatch()
  const navigation = useNavigation();

  const { data } = useGetPropertyQuery(propId);
  // , {refetchOnMountOrArgChange: true }
  useEffect(() => {
    dispatch(setPropertyDetail({propertyDetail: data}));
  },[dispatch, data])

  const { propertyDetail } = useAppSelector(selectCurrentPropertyDetail)
  const agentId = propertyDetail?.creator
  const {data: getNumOfProperties} = useGetPropertiesByAgentQuery(agentId);

  const longitude = propertyDetail?.longitude
  const latitude = propertyDetail?.latitude

  return (
    <View  style={{  flex: 1}}>
     <ScrollView style={{height: '84%' }} showsVerticalScrollIndicator={false}>
     <AspectRatio  ratio={17 / 11}>
       {/* @ts-ignore:next-line */}
            <ImageSlider caroselImageStyle={{height: '100%'}} caroselImageContainerStyle={{height: '100%'}} data={propertyDetail?.images}
              localImg={false}
              autoPlay={false}
             closeIconColor="#fff"
              />
          </AspectRatio>
          <View pr={5} pl={5} mb={3}>
          <Heading textAlign='center' mt={5} fontWeight={400}>{propertyDetail?.price.toLocaleString()} NGN/{propertyDetail?.paymentType}</Heading>
          <Text textAlign='center' mt={2}>{propertyDetail?.propertyTitle}</Text>
           <Box bgColor='white.200' mt={10}>
            <Flex direction='row' alignItems='center' >
            {<Icon as={MaterialIcons} name='house' mr={2} size={6}/>}
           <Text  fontSize={16}>Property Type:</Text>
           <Text fontSize={16} ml={25}>{propertyDetail?.propertyType.slice(0,1).toUpperCase()}{propertyDetail?.propertyType.slice(1)}</Text>
           </Flex>
           <Flex direction='row' alignItems='center' mt={5} ml={1}>
            {<Icon as={MaterialCommunityIcons} name='vector-square-edit' mr={2} size={5}/>}
           <Text  fontSize={16}>Property Size:</Text>
           <Text fontSize={16} ml={30}>{propertyDetail?.size.toLocaleString()} sqft</Text>
           </Flex>
           <Flex direction='row' alignItems='center' mt={5} ml={1}>
            {<Icon as={Ionicons} name='bed-outline' mr={2} size={5}/>}
           <Text  fontSize={16} mr={4}>Bedrooms:</Text>
           <Text fontSize={16} ml={39}>{propertyDetail?.bedroom} sqft</Text>
           </Flex>
           <Flex direction='row' alignItems='center' mt={5} ml={1}>
            {<Icon as={MaterialCommunityIcons} name='bathtub-outline' mr={2} size={5}/>}
           <Text  fontSize={16} mr={2.5}>Bathrooms:</Text>
           <Text fontSize={16} ml={39}>{propertyDetail?.bathroom} sqft</Text>
           </Flex>
           </Box>
           <Divider mt={3.5} mb={3.5}/>
          <Heading fontWeight={400}  fontSize={22}>Amenities</Heading>
          <Box mt={3}>
            <Flex direction='row'>
              <Box mr={10}>
                <Text fontSize={20} mb={2}>Comfort</Text>
            {propertyDetail?.comfort.map((com: any, index: any) => 
              <Text fontSize={16} key={index}>{com}</Text>
              )}
              </Box>
              <Box ml={10}>
                <Text fontSize={20} mb={2}>Hvac</Text>
                {propertyDetail?.hvac.map((hv: any, index: any) => 
              <Text fontSize={16} key={index}>{hv}</Text>
              )}
              </Box>
            </Flex>
          </Box>
          <Box mt={3}>
          <Flex direction='row'>
              <Box mr={5}>
                <Text fontSize={20} mb={2}>Security</Text>
            {propertyDetail?.security.map((sec: any, index: any) => 
              <Text fontSize={16} key={index}>{sec}</Text>
              )}
              </Box>
              <Box ml={5}>
                <Text fontSize={20} mb={2}>Parking</Text>
                {propertyDetail?.parking.map((pa: any, index: any) => 
              <Text fontSize={16} key={index}>{pa}</Text>
              )}
              </Box>
            </Flex>
          </Box>
          <Divider mt={3.5} mb={3.5}/>
          <Text fontSize={16}>{propertyDetail?.description.slice(0,1).toUpperCase()}{propertyDetail?.description.slice(1)}</Text>
          <Divider mt={3.5} mb={3.5}/>
          <Heading fontWeight={400} mb={5} fontSize={22}>Agent</Heading>
          <Flex direction='row' alignItems='center'>
          <Avatar bg="amber.500" source={{ uri: propertyDetail?.profilePicture}} size="xl" />
          <Box ml={5}>
          <Text fontSize={16}>{propertyDetail?.name}</Text>
          <Text fontSize={16}>{propertyDetail?.role} at {propertyDetail?.companyName}</Text>
          </Box>
          </Flex>
          <Divider mt={4} mb={4}/>
           {/* @ts-ignore:next-line */}
           <Button onPress={() => navigation.navigate('Map', {longitude, latitude})} style={{ backgroundColor:"#008080"}}>View on map</Button>

          <Divider mt={4} mb={4}/>
          <Flex direction='row' justifyContent='space-between' alignItems='center' bgColor='gray.300' pt={2} pb={2} borderRadius={10}>
            <Box mr={20} ml={4}>
              <Text fontSize={16}>{propertyDetail?.companyName.slice(0,1).toUpperCase()}{propertyDetail?.companyName.slice(1)}</Text>
               {/* @ts-ignore:next-line */}
              <Pressable onPress={() => navigation.navigate('Agentproperties', {agentPropId: agentId})}>
              <Text mt={3} color='blue.500'>{getNumOfProperties?.data?.length} properties</Text>
              </Pressable>
            </Box>
            <Center ml={20}>
            <Image source={{ uri: propertyDetail?.logo }} alt='Logo' size="md"  borderRadius={20} />
            </Center>;
          </Flex>
          </View>
     </ScrollView>
     <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center" bottom={0}>
        <HStack bg="gray.200" alignItems="center" safeAreaBottom shadow={10} h={60} justifyContent='center'>
            <Center mr={4}>
            <Button  style={{ width: 'auto', height: 42, borderRadius: 10, backgroundColor:"#008080"}} onPress={() => Linking.openURL(`tel:${propertyDetail?.phone}`)}>
           <Flex direction='row' alignItems='center'>
          <Icon as={MaterialIcons} name="call" color="#fff" size='md' />
          <Text ml={3} color='white'>Call</Text>
          </Flex>
          </Button>
            </Center>
            <Center>
            <Button size='xs' style={{marginLeft: 8, width: 'auto', height: 42, borderRadius: 10, backgroundColor:"#008080"}} onPress={() => Linking.openURL(`mailto:${propertyDetail?.email}`)}>
            <Flex direction='row' alignItems='center'>
          <Icon as={Entypo} name="mail" color="#fff" size='md' />
          <Text ml={3} color='white'>Email</Text>
          </Flex>
          </Button>
             </Center>
            <Center ml={4}>
            <Button size='xs' style={{marginLeft: 8, width: 'auto', height: 42, borderRadius: 10, backgroundColor:"#24D366"}} onPress={() => Linking.openURL(`https://wa.me/+234${propertyDetail?.phone}?text=I'm%20inquiring%20about%20the%20${propertyDetail?.propertyType}%20listing`)}>
            <Flex direction='row' alignItems='center'>
          <Icon as={FontAwesome} name="whatsapp" color="#fff" size='md' />
          <Text ml={3} color='white'>WhatsApp</Text>
          </Flex>
          </Button>
            </Center>
        </HStack>
      </Box>
    </View>
  )
}

