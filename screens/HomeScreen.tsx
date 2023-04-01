import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign} from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Save from './Save';
import More from './More';
import SearchScreen from './SearchScreen';
import { Icon } from 'native-base';

export default function HomeScreen() {

  const Tab = createBottomTabNavigator();
  const searchName = 'Search';
  const saveName = 'Save'
  const  moreName = 'More'

  return (
    <Tab.Navigator  
    initialRouteName='Home' 
       screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size}: { focused: any; color: any; size: any; }) => {
        let iconName;
        let rn = route.name;

        if (rn === searchName ) {
          iconName = focused ? "search" : "search-outline"
        } else if (rn === saveName) {
          iconName = focused ? "heart" : "heart-outline"
        } else if (rn === moreName) {
          iconName = focused ? "md-ellipsis-vertical" : "md-ellipsis-vertical-outline"
        }
        return <Ionicons name={iconName} size={size} color={color} />
       },
       tabBarActiveTintColor: '#008080',
       tabBarInactiveTintColor: 'gray',
       tabBarLabelStyle: {padding: 3, fontSize: 12},
       tabBarStyle: {padding: 10, height: 70}
       })}
       >
    <Tab.Screen name={searchName} component={SearchScreen} options={{ headerShown: false }}/>  
    {/* tabBarBadge: 3 */}
    <Tab.Screen name={saveName} component={Save} options={{ headerShown: false }} />
    <Tab.Screen name={moreName} component={More} options={{ headerShown: false }} />
    {/* <Tab.Screen name="Filter" component={FilterScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Privacy" component={PrivacyScreen} />
      <Tab.Screen name="Propertydetails/:id" component={PropertyDetailsScreen}/> */}
    </Tab.Navigator>
  
  )
}