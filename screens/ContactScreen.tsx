import {View, Button, Heading, HStack, Text, VStack, Input, TextArea } from 'native-base'
import React from 'react'

export default function ContactScreen() {
  return (
    <View p='5'>
      <Text mt='2' fontSize='xl' bold mb='5'>ASK US ANYTHING</Text>
      <Text fontSize='lg'>Our doors are wide open at Property Finder. All enquiries and suggestions are welcome, and the occassional hilarious joke wouldn't come entirely amiss either.</Text>
      <VStack mt='3'>
      <Input mb='2' placeholder="Name" w="100%" borderWidth='3'/>
      <Input mb='2' placeholder="Email" w="100%" borderWidth='3'/>
      <Input mb='2' placeholder="Phone" w="100%" borderWidth='3'/>
      <TextArea h={20} placeholder="Your Messager" w="100%" borderWidth='3' autoCompleteType={undefined} />
      <Text mt='5' fontSize='md' color='gray.500' textAlign='center'>* All fields are required</Text>
      <Button mt='2'>Send</Button>
      </VStack>
    </View>
  )
}