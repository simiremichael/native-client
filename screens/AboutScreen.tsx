import {View, Button, Heading, HStack, Text, ScrollView } from 'native-base'
import React from 'react'

export default function AboutScreen() {
  return (
    <View style={{flex: 1, margin: 5}}>
      <ScrollView  mt='5' mb='15' showsVerticalScrollIndicator={false} pr='15' pl='15'>
      <Heading mb='5'>Our mission: To motivate and inspire people to get living the life they deserve.</Heading>
      <Text fontSize='xl' mb='3'>When you look for a property, it’s not just a better home you seek, it’s a better future.</Text>
      <Text mb='2' fontSize='lg' bold>Property Finder at a Glance</Text>
      <Text fontSize='md'>
      Property Finder is the leading property website in the Nigeria connecting buyers, sellers and tenants, so that every real estate requirement in the region is fulfilled in a seamless, user-friendly manner.Going above and beyond just providing a database of available listings for rent and sale, Property Finder has taken the onus of becoming the most reliable source for ‘all things real estate’. In the Nigeria today, every question that a potential end user could encounter is answered through the resources Property Finder has created.
        As a result of our dedicated efforts to fill this gap with value added services and features, today Property Finder stands as the most trusted real estate website in the Nigeria.
        As a part of the growing Emerging Markets Property Group, Property Finder has access to a wealth of knowledge and resources that have been conceptualized to facilitate the needs of users and agents in emerging markets, including the Nigeria.
        We are very proud of the fact that we’re not just another portal that helps you look at properties to rent and buy. We have studied the market very carefully and tried to address the major concerns/questions users have around different areas when they’re searching for a property.
        As a homegrown Nigeria brand, we are keen to address the needs of both the local and expat community. In order to make sure we are as popular in the local community as we are in the expat domain.
        We are well aware that the performance of real estate agents and their exposure to the latest trends and technologies is pivotal to the growth of the real estate industry. To drive more success stories in the market, we provide agents in-house training covering various modules including customer service, communication skills, methods to create a perfect listing on Bayut, how to use social media to drive business. Our dedicated trainers also hold other engaging hourly sessions with agencies to elevate the overall level of service in the real estate industry.
        Today Property Finder is the proud market leader with the most organic traffic any real estate business/website/company has in the region. Apart from being the most popular and the fastest real estate website in the continent, we also take a lot of pride in the fact that we are technology disruptors with our innovative PropTech solutions. We have recently launched our PfinderCRM app just for agents and brokers to maximise their lead potential. The app is already gaining a lot of momentum in the agent community because of its results-driven features.
       Solving local problem through the use of technology and driving positive change is the crux of the Property Finder story. We live by our values of Honesty, Innovation and Ownership and every decision we make is aimed to elevate the market and support the growth of the nation.
      </Text>
      </ScrollView>
    </View>
  )
}