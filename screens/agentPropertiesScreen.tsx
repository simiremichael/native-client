import React, { useState } from 'react'
import { Text, Flex, Stack, Icon, Box, Center, Button,
  StatusBar,Avatar, ScrollView,View,  Divider, AspectRatio, Heading, HStack, Fab, Pressable } from "native-base";
import {  MaterialCommunityIcons, MaterialIcons, Ionicons, Entypo, FontAwesome, AntDesign} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core';
import { useGetPropertiesByAgentQuery } from '../services/api/propertyAPI';
import { ImageSlider } from 'react-native-image-slider-banner';

function AgentPropertiesScreen({route}: any) {

  const [heart, setHeart] = useState(false);


const handleHeart = () => {
  setHeart(!heart);
}
  const { agentPropId } = route.params;
  const navigation = useNavigation();
  const {data} = useGetPropertiesByAgentQuery(agentPropId);

  console.log(data);
  return (
    <View>
       <ScrollView style={{height: '98%'}} showsVerticalScrollIndicator={false} pr='15' pl='15'>
          {/* <View mb='3'>
            <Flex direction='row' justifyContent='space-between' alignItems='center'>
              <Text>{data?.data.length.toLocaleString()} properties</Text>
              <Flex direction='row'>
                <Button variant='outline' pl='4' pr='4'><Flex direction='row' alignItems='center'><Icon as={AntDesign} name="staro"  mr='2' color='#008080'  /><Text color='#008080'>Save</Text></Flex></Button>
              <Button variant='outline' ml='2' pl='4' pr='4'><Flex direction='row' alignItems='center'><Icon as={MaterialIcons} name="sort"  mr='2' color='#008080'  /><Text color='#008080'>Sort</Text></Flex></Button>
              </Flex>
            </Flex>
          </View> */}
          {data?.data.map((item: any) => ( 
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
            <Box w={7} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 50, padding: 5, marginRight: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Icon zIndex={1} as={AntDesign} name={heart === true ? 'heart' : "hearto"} color='white' onPress={handleHeart} size='md'  />
              </Box>
              <Pressable onPress={() => navigation.navigate('Propertydetails', {propId: item._id})}>
              <Box w={7} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 50, padding: 5, marginRight: 2, alignItems: 'center', justifyContent: 'center'}}>
              <Icon zIndex={1} as={Ionicons} name='md-ellipsis-vertical' color='white' onPress={handleHeart} size='md'  />
              </Box>
              </Pressable>
            </Flex> 
          </Center>
        </Box>
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
               Listed 6 mins ago
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
    </View>
  )
}

export default AgentPropertiesScreen