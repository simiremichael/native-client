//import {Appbar, BottomNavigation,Searchbar,Card, Title, Paragraph, RadioButton } from 'react-native-paper';
import * as NavigationBar from 'expo-navigation-bar';
import React, { useEffect, useState } from "react";
import {  TextInput, StyleSheet, Switch } from "react-native";
import { Text, FlatList,   Checkbox, Flex, Spacer, Stack, Icon, Box, Center, Button,
  StatusBar,Avatar, ScrollView,View, Divider, Image, NativeBaseProvider, FormControl, Pressable, AspectRatio, Heading, HStack, Select, CheckIcon,   } from "native-base";
import {  MaterialCommunityIcons, MaterialIcons, Ionicons, Entypo, FontAwesome, AntDesign, FontAwesome5} from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from '../app/hooks';
//import { setFilter } from '../services/features/filterSlice';
import { useNavigation } from '@react-navigation/core';
import { setFilter } from '../services/features/filterSlice';
import { selectCurrentProperty } from '../services/features/propertySlice';



function FilterScreen() {

  const dispatch = useAppDispatch()

  const navigation = useNavigation();
 
   const [apartment, setApartment] = useState('');
   const [pentHouse, setPentHouse] = useState('');
   const [semiDetached, setSemiDetached] = useState('');
   const [detached, setDetached] = useState('');
   const [office, setOffice] = useState('');
   const [flat, setFlat] = useState('');
   const [room, setRoom] = useState('');
   const [terraced, setTerraced] = useState('');
   const [fullFloor, setFullFloor] = useState('');
   const [duplex, setDuplex] = useState('');
   const [land, setLand] = useState('');
   const [wholeBuilding, setWholeBuilding] = useState('');
   const [bungalow, setBungalow] = useState('');
   const [shop, setShop] = useState('');
   const [warehouse, setWarehouse] = useState('');
   const [miniFlat, setMiniFlat] = useState('');
   const [selfContain, setSelfcontain] = useState('');
   const [hotelApartment, setHotelApartment] = useState('');
   const [industry, setIndustry] = useState('');
   const [retails, setRetails] = useState('');
   const [others, setOthers] = useState('');
   const [farm, setFarm] = useState('');

   const [yearly, setYearly] = useState('');
   const [monthly, setMonthly] = useState('');
   const [weekly, setWeekly] = useState('');
   const [daily, setDaily] = useState('');
   const [outright, setOutright] = useState('');

   const [studio, setStudio] = useState('');
   const [oneBed, setOneBed] = useState('');
   const [twoBed, setTwoBed] = useState('');
   const [threeBed, setThreeBed] = useState('');
   const [fourBed, setFourBed] = useState('');
   const [fiveBed, setFiveBed] = useState('');
   const [sixBed, setSixBed] = useState('');
   const [sevenBed, setSevenBed] = useState('');
   const [sevenPlusBed, setSevenPlusBed] = useState('');

   const [oneBath, setOneBath] = useState('');
   const [twoBath, setTwoBath] = useState('');
   const [threeBath, setThreeBath] = useState('');
   const [fourBath, setFourBath] = useState('');
   const [fiveBath, setFiveBath] = useState('');
   const [sixBath, setSixBath] = useState('');
   const [sevenBath, setSevenBath] = useState('');
   const [sevenPlusBath, setSevenPlusBath] = useState('');

   const [commercial, setcommercial] = useState('');
   const [ offPlans, setOffplans] = useState('');
   const [residential, setresidential] = useState('');
   const [newProject, setNewProject] = useState('');
   const [isEnabled, setIsEnabled] = useState(false);

   const [propertyType, setPropertyType] = useState('')
  const [paymentType, setPaymentType] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [propertyGroup, setPropertyGroup] = useState('');
  const [minprice, setMinPrice] = useState("");
   const [maxprice, setMaxPrice] = useState("");
   const [minSize, setMinSize] = useState("");
   const [maxSize, setMaxSize] = useState("");
   const [toggle, setToggle] = useState('rent');
   const [rent, setRent] = useState(true);
   const [sale, setSale] = useState(false);

   const handleRent = () => {
    setRent(true)
     setToggle('rent');
     setSale(false);
   }
   const handleSale = () => {
    setSale(true);
     setToggle('sale');
     setRent(false);
   }

   const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
      if (isEnabled === false) {
       setcommercial('Commercial');
       setOffplans('');
       setresidential('');
       setNewProject('');
       setPropertyGroup('Commercial');
      }
   }
   const handleOffplan = () => {
   setOffplans('Offplan');
   setcommercial('');
   setresidential('');
   setNewProject('');
   setPropertyGroup('Offplan');
   }

   const handleResidential = () => {
    setresidential('Residential');
    setcommercial('');
    setOffplans('');
    setNewProject('');
    setPropertyGroup('Residential')
   }
   const handleNewProject = () => {
    setresidential('');
    setcommercial('');
    setOffplans('');
    setNewProject('New Projects');
    setPropertyGroup('New Projects');
   }

  //console.log(propertyType, paymentType, bedroom, bathroom, comfort, minprice, maxprice, minSize, maxSize, toggle, propertyGroup)

useEffect(() => {
  dispatch(setFilter({propertyType: propertyType, paymentType: propertyGroup === 'Commercial'? 'outright' : paymentType, bedroom: bedroom, bathroom: bathroom, minprice: minprice, maxprice: maxprice, minSize: minSize, maxSize: maxSize, toggle: toggle, propertyGroup: propertyGroup }))
},[dispatch, propertyType, paymentType, bedroom, bathroom, minprice, maxprice, minSize, maxSize, toggle, propertyGroup ])

   const handleApartment = () => {
    setApartment('apartment');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('apartment');
   };
   const handlePenthouse = () => {
    setApartment('');
    setPentHouse('penthouse');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('penthouse')
   };
   const handleDetached = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('detached');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('detached')
   };
   const handleSemiDetached = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('semi detached');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('semi detached')
   }
   const handleOffice = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('office');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('office')
   }

   const handleShop = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('shop');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('shop')
   }
   const handleFullFloor = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('full floor');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('full floor')
   }
   const handleFlat = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('flat');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('flat')
   }
   const handleMiniFlat = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('mini flat');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('mini flat')
   }
   const handleDuplex = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('duplex');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('duplex')
   }
   const handleLand = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('land');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('land')
   }
   const handleWholeBuilding = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('whole building');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('whole building')
   }
   const handleWarehouse = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('warehouse');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('warehouse')
   }
   const handleBungalow = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('bungalow');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('bungalow')
   }
   const handleTerraced = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('terraced');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('terraced')
   }

   const handleSelfContainer = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('self contain');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('self contain')
   }
   const handleHotelApartment = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('hotel apartment');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('hotel apartment')
   }
   const handleIndustry = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('industrial');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('industrial')
   }
   const handleRoom = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('room');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('');
    setPropertyType('room')
   }
   const handleRetails = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('retail');
    setFarm('');
    setOthers('');
    setPropertyType('retail')
   }
   const handleFarm = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('farm');
    setOthers('');
    setPropertyType('farm')
   }
   const handleOthers = () => {
    setApartment('');
    setPentHouse('');
    setSemiDetached('');
    setDetached('');
    setOffice('');
    setFlat('');
    setRoom('');
    setTerraced('');
    setFullFloor('');
    setDuplex('');
    setLand('');
    setWholeBuilding('');
    setBungalow('');
    setShop('');
    setWarehouse('');
    setMiniFlat('');
    setSelfcontain('');
    setHotelApartment('');
    setIndustry('');
    setRetails('');
    setFarm('');
    setOthers('others');
    setPropertyType('others')
   }
 
  const handleYearly = () => {
setYearly('yearly');
setMonthly('');
setWeekly('');
setDaily('');
setOutright('')
setPaymentType('yearly')
  }
  const handleMonthly = () => {
    setYearly('');
    setMonthly('monthly');
    setWeekly('');
    setDaily('');
    setOutright('')
    setPaymentType('monthly')
  }
  const handleWeekly = () => {
    setYearly('');
    setMonthly('');
    setWeekly('weekly');
    setDaily('');
    setOutright('')
    setPaymentType('weekly')
  }
  const handleDaily = () => {
    setYearly('');
    setMonthly('');
    setWeekly('');
    setDaily('daily');
    setOutright('')
    setPaymentType('daily');
  }
  const handleOutright = () => {
    setOutright('outright')
    setYearly('');
    setMonthly('');
    setWeekly('');
    setDaily('');
    setPaymentType('outright');
  }

  const handleStudio = () => {
 setStudio('studio');
 setOneBed('');
 setTwoBed('');
 setThreeBed('');
 setFourBed('');
 setFiveBed('');
 setSixBed('');
 setSevenBed('');
 setSevenPlusBed('')
 setBedroom('studio')
  }

  const handleOneBed = () => {
    setStudio('');
    setOneBed('1');
    setTwoBed('');
    setThreeBed('');
    setFourBed('');
    setFiveBed('');
    setSixBed('');
    setSevenBed('');
    setSevenPlusBed('')
    setBedroom('1')
  }
  const handleTwoBed = () => {
    setStudio('');
    setOneBed('');
    setTwoBed('2');
    setThreeBed('');
    setFourBed('');
    setFiveBed('');
    setSixBed('');
    setSevenBed('');
    setSevenPlusBed('')
    setBedroom('2')
  }
  const handleThreeBed = () => {
    setStudio('');
    setOneBed('');
    setTwoBed('');
    setThreeBed('3');
    setFourBed('');
    setFiveBed('');
    setSixBed('');
    setSevenBed('');
    setSevenPlusBed('')
    setBedroom('3')
  }
  const handleFourBed = () => {
    setStudio('');
    setOneBed('');
    setTwoBed('');
    setThreeBed('');
    setFourBed('4');
    setFiveBed('');
    setSixBed('');
    setSevenBed('');
    setSevenPlusBed('')
    setBedroom('4')
  }
  const handleFiveBed = () => {
    setStudio('');
    setOneBed('');
    setTwoBed('');
    setThreeBed('');
    setFourBed('');
    setFiveBed('5');
    setSixBed('');
    setSevenBed('');
    setSevenPlusBed('')
    setBedroom('5')
  }

  const handleSixBed = () => {
    setStudio('');
    setOneBed('');
    setTwoBed('');
    setThreeBed('');
    setFourBed('');
    setFiveBed('');
    setSixBed('6');
    setSevenBed('');
    setSevenPlusBed('')
    setBedroom('6')
  }

  const handleSevenBed = () => {
    setStudio('');
    setOneBed('');
    setTwoBed('');
    setThreeBed('');
    setFourBed('');
    setFiveBed('');
    setSixBed('');
    setSevenBed('7');
    setSevenPlusBed('')
    setBedroom('7')
  }
  const handleSevenPlusBed = () => {
    setStudio('');
    setOneBed('');
    setTwoBed('');
    setThreeBed('');
    setFourBed('');
    setFiveBed('');
    setSixBed('');
    setSevenBed('');
    setSevenPlusBed('7+')
    setBedroom('7+')
  }

  const handleOneBath = () => {
    setOneBath('1');
    setTwoBath('');
    setThreeBath('');
    setFourBath('');
    setFiveBath('');
    setSixBath('');
    setSevenBath('');
    setSevenPlusBath('')
    setBathroom('1')
  }
  const handleTwoBath = () => {
    setOneBath('');
    setTwoBath('2');
    setThreeBath('');
    setFourBath('');
    setFiveBath('');
    setSixBath('');
    setSevenBath('');
    setSevenPlusBath('')
    setBathroom('2')
  }
  const handleThreeBath = () => {
    setOneBath('');
    setTwoBath('');
    setThreeBath('3');
    setFourBath('');
    setFiveBath('');
    setSixBath('');
    setSevenBath('');
    setSevenPlusBath('')
    setBathroom('3')
  }
  const handleFourBath = () => {
    setOneBath('');
    setTwoBath('');
    setThreeBath('');
    setFourBath('4');
    setFiveBath('');
    setSixBath('');
    setSevenBath('');
    setSevenPlusBath('')
    setBathroom('4')
  }

const handleFiveBath = () => { 
  setOneBath('');
  setTwoBath('');
  setThreeBath('');
  setFourBath('');
  setFiveBath('5');
  setSixBath('');
  setSevenBath('');
  setSevenPlusBath('')
  setBathroom('5')
}
const handleSixBath = () => {
  setOneBath('');
  setTwoBath('');
  setThreeBath('');
  setFourBath('');
  setFiveBath('');
  setSixBath('6');
  setSevenBath('');
  setSevenPlusBath('')
  setBathroom('6')
}
const handleSevenBath = () => {
  setOneBath('');
  setTwoBath('');
  setThreeBath('');
  setFourBath('');
  setFiveBath('');
  setSixBath('');
  setSevenBath('7');
  setSevenPlusBath('')
  setBathroom('7')
}
const handleSevenPlusBath = () => {
  setOneBath('');
  setTwoBath('');
  setThreeBath('');
  setFourBath('');
  setFiveBath('');
  setSixBath('');
  setSevenBath('');
  setSevenPlusBath('7+')
  setBathroom('7+')
}

 const handleClear = () => {
  setApartment('');
  setPentHouse('');
  setSemiDetached('');
  setDetached('');
  setOffice('');
  setFlat('');
  setRoom('');
  setTerraced('');
  setFullFloor('');
  setDuplex('');
  setLand('');
  setWholeBuilding('');
  setBungalow('');
  setShop('');
  setWarehouse('');
  setMiniFlat('');
  setSelfcontain('');
  setHotelApartment('');
  setIndustry('');
  setRetails('');
  setFarm('');
  setOthers('');
  setYearly('');
  setMonthly('');
  setWeekly('');
  setDaily('');
  setStudio('');
  setOneBed('');
  setTwoBed('');
  setThreeBed('');
  setFourBed('');
  setFiveBed('');
  setSixBed('');
  setSevenBed('');
  setSevenPlusBed('')
  setOneBath('');
  setTwoBath('');
  setThreeBath('');
  setFourBath('');
  setFiveBath('');
  setSixBath('');
  setSevenBath('');
  setSevenPlusBath('')
 }

 const { property} = useAppSelector(selectCurrentProperty);

    return (
        <>
        <StatusBar backgroundColor="#008080" barStyle="light-content" />
       
      <View style={{ flex: 1}}>
        {/* <View pl='5' pr='5' shadow='2'>
      <Appbar.Header statusBarHeight={0} >
      <Flex direction='row' alignItems='center'>
        <Icon as={Ionicons} name="arrow-back" color="coolGray.600" size='xl' mr='8' onPress={() =>  navigate('/')} />
        <Heading color="coolGray.600" fontWeight='500'>Filter</Heading>
        </Flex>
      </Appbar.Header>
      </View> */}
      <ScrollView style={{height: '83%'}} pl='5' pr='5'>
        <Flex direction='row' mt='5'>
            <Button borderColor='#008080' borderWidth='1' variant= {rent === true ? 'solid' : 'unstyled'} w='50%' borderTopRightRadius='0' borderBottomRightRadius='0' borderBottomLeftRadius='10' borderTopLeftRadius='10' bg={ rent === true ?'#008080' : '#fff'} onPress={handleRent}>Rent</Button>
            <Button borderColor='#008080' borderWidth='1' variant= {sale === true ? 'solid' : 'unstyled'} w='50%' borderBottomLeftRadius='0' borderTopLeftRadius='0' borderBottomRightRadius='10' borderTopRightRadius='10'  bg={ sale === true ?'#008080' : '#fff'} onPress={handleSale}>Buy</Button>
        </Flex>
        <Flex mt='2' direction='row' alignItems='center' justifyContent='space-between'>
            <Text fontSize='15'>View commercial properties only</Text>
            <Switch   trackColor={{ false: '#767577', true: '#029999' }}
        thumbColor={isEnabled ? '#008080' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled} />
           
        </Flex>
        <View mt='5'>
          <Flex direction='row' mb='5' alignItems='center'>
          <Icon as={FontAwesome} name="building-o" color="gray.500" size='md' mr='2' />
            <Heading size='sm' color="coolGray.600">Property Type</Heading>
          </Flex>
            <ScrollView h='10' horizontal showsHorizontalScrollIndicator={false}>
              {/* <Pressable > */}
             <Text onPress={handleApartment} style={{backgroundColor: apartment === 'apartment' ? '#008080' : '#fff', color: apartment === 'apartment' ? '#fff' : '#000'}}
               borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8' >
                Apartment</Text>
                {/* </Pressable> */}
             <Text style={{backgroundColor: pentHouse === 'penthouse' ? '#008080' : '#fff', color: pentHouse === 'penthouse' ? '#fff' : '#000'}}
              onPress={handlePenthouse}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >PentHouse</Text>
             <Text style={{backgroundColor: detached === 'detached' ? '#008080' : '#fff', color: detached === 'detached' ? '#fff' : '#000'}}
             onPress={handleDetached}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Detached</Text>
             <Text style={{backgroundColor: semiDetached === 'semi detached' ? '#008080' : '#fff', color: semiDetached === 'semi detached' ? '#fff' : '#000'}}
             onPress={handleSemiDetached}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Semi-detached</Text>
             <Text style={{backgroundColor: office === 'office' ? '#008080' : '#fff', color: office === 'office' ? '#fff' : '#000'}}
             onPress={handleOffice}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Office</Text>
             <Text style={{backgroundColor: shop === 'shop' ? '#008080' : '#fff', color: shop === 'shop' ? '#fff' : '#000'}}
             onPress={handleShop}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Shop</Text>
             <Text style={{backgroundColor: duplex === 'duplex' ? '#008080' : '#fff', color: duplex === 'duplex' ? '#fff' : '#000'}}
             onPress={handleDuplex}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Duplex</Text>
             <Text style={{backgroundColor: fullFloor === 'full floor' ? '#008080' : '#fff', color: fullFloor === 'full floor' ? '#fff' : '#000'}}
             onPress={handleFullFloor}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Full floor</Text>
             <Text style={{backgroundColor: flat === 'flat' ? '#008080' : '#fff', color: flat === 'flat' ? '#fff' : '#000'}}
             onPress={handleFlat}
               borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
              >Flat</Text>
           <Text style={{backgroundColor: wholeBuilding === 'whole building' ? '#008080' : '#fff', color: wholeBuilding === 'whole building' ? '#fff' : '#000'}}
           onPress={handleWholeBuilding}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Whole building</Text>
             <Text style={{backgroundColor: land === 'land' ? '#008080' : '#fff', color: land === 'land' ? '#fff' : '#000'}}
             onPress={handleLand}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Land</Text>
             <Text  style={{backgroundColor: terraced === 'terraced' ? '#008080' : '#fff', color: terraced === 'terraced' ? '#fff' : '#000'}}
             onPress={handleTerraced}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Terraced</Text>
             <Text style={{backgroundColor: miniFlat === 'mini flat' ? '#008080' : '#fff', color: miniFlat === 'mini flat' ? '#fff' : '#000'}}
             onPress={handleMiniFlat}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
            >Mini-flat</Text>
             <Text style={{backgroundColor: bungalow === 'bungalow' ? '#008080' : '#fff', color: bungalow === 'bungalow' ? '#fff' : '#000'}}
             onPress={handleBungalow}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Bungalow</Text>
             <Text style={{backgroundColor: hotelApartment === 'hotel apartment' ? '#008080' : '#fff', color: hotelApartment === 'hotel apartment' ? '#fff' : '#000'}}
             onPress={handleHotelApartment}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Hotel apartment</Text>
             <Text style={{backgroundColor: warehouse === 'warehouse' ? '#008080' : '#fff', color: warehouse === 'warehouse' ? '#fff' : '#000'}}
             onPress={handleWarehouse}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >WareHouse</Text>
             <Text style={{backgroundColor: selfContain === 'self contain' ? '#008080' : '#fff', color: selfContain === 'self contain' ? '#fff' : '#000'}}
             onPress={handleSelfContainer}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
            >Self-container</Text>
            <Text style={{backgroundColor: room === 'room' ? '#008080' : '#fff', color: room === 'room' ? '#fff' : '#000'}}
             onPress={handleRoom}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
            >Room</Text>
            <Text style={{backgroundColor: industry === 'industrial' ? '#008080' : '#fff', color: industry === 'industrial' ? '#fff' : '#000'}}
             onPress={handleIndustry}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
            >Industrial</Text>
            <Text style={{backgroundColor: retails === 'retail' ? '#008080' : '#fff', color: retails === 'retail' ? '#fff' : '#000'}}
             onPress={handleRetails}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
            >Retail</Text>
            <Text style={{backgroundColor: farm === 'farm' ? '#008080' : '#fff', color: farm === 'farm' ? '#fff' : '#000'}}
             onPress={handleFarm}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
            >Farm</Text>
            <Text style={{backgroundColor: others === 'others' ? '#008080' : '#fff', color: others === 'others' ? '#fff' : '#000'}}
             onPress={handleOthers}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
            >Others</Text>
            </ScrollView>
        </View>
        {/* {toggle === 'rent' && <> */}
        <Divider my="2" mt='3' mb='3' _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
        <View mt='2' mb='2'>
        <Flex direction='row' mb='5' alignItems='center'>
          <Icon as={FontAwesome} name="money" color="gray.500" size='md' mr='2' />
            <Heading size='sm' color="coolGray.600">Rent Period</Heading>
          </Flex>
          <Flex direction='row'>
          <ScrollView h='10' horizontal showsHorizontalScrollIndicator={false}>
          <Text style={{backgroundColor: yearly === 'yearly' ? '#008080' : '#fff', color: yearly === 'yearly' ? '#fff' : '#000'}}
          onPress={handleYearly}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Yearly</Text>
             <Text style={{backgroundColor: monthly === 'monthly' ? '#008080' : '#fff', color: monthly === 'monthly' ? '#fff' : '#000'}}
             onPress={handleMonthly}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Monthly</Text>
             <Text style={{backgroundColor: weekly === 'weekly' ? '#008080' : '#fff', color: weekly === 'weekly' ? '#fff' : '#000'}}
             onPress={handleWeekly}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Weekly</Text>
             <Text style={{backgroundColor: daily === 'daily' ? '#008080' : '#fff', color: daily === 'daily' ? '#fff' : '#000'}}
             onPress={handleDaily}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Daily</Text>
             <Text style={{backgroundColor: outright === 'outright' ? '#008080' : '#fff', color: outright === 'outright' ? '#fff' : '#000'}}
             onPress={handleOutright}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Outright</Text>
             </ScrollView>
          </Flex>
        </View> 
        {/* </>
        } */}
        <Divider my="2" mt='3' mb='3' _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
        <View mt='2' mb='2'>
        <Flex direction='row' mb='5' alignItems='center'>
          <Icon as={FontAwesome} name="money" color="gray.500" size='md' mr='2' />
            <Heading size='sm' color="coolGray.600">Price (NGN)</Heading>
          </Flex>
          <Flex direction='row' alignItems='center'>
          <Select selectedValue={minprice} minWidth="170" accessibilityLabel="Choose Service" placeholder="Min-Price" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setMinPrice(itemValue)}>
          <Select.Item label="5,000" value="5000" />
          <Select.Item label="10000" value="10000" />
          <Select.Item label="30000" value="30000" />
          <Select.Item label="50000" value="50000" />
          <Select.Item label="100000" value="100000" />
          <Select.Item label="200000" value="200000" />
          <Select.Item label="500000" value="500000" />
          <Select.Item label="800000" value="800000" />
          <Select.Item label="1000000" value="1000000" />
          <Select.Item label="1500000" value="1500000" />
          <Select.Item label="2000000" value="2000000" />
          <Select.Item label="2500000" value="2500000" />
          <Select.Item label="3000000" value="3000000" />
          <Select.Item label="4000000" value="4000000" />
          <Select.Item label="5000000" value="5000000" />
          <Select.Item label="10000000" value="10000000" />
          <Select.Item label="20000000" value="20000000" />
          <Select.Item label="40000000" value="40000000" />
          <Select.Item label="80000000" value="80000000" />
          <Select.Item label="100000000" value="100000000" />
          <Select.Item label="200000000" value="200000000" />
          <Select.Item label="350000000" value="35000000" />
          <Select.Item label="500000000" value="500000000" />
          <Select.Item label="800000000" value="800000000" />
          <Select.Item label="1000000000" value="1000000000" />
          <Select.Item label="2500000000" value="2500000000" />
          <Select.Item label="others" value="10000000000" />
        </Select>
        <Text mr='2' ml='2'>to</Text>
        <Select selectedValue={maxprice} minWidth="170" accessibilityLabel="Choose Service" placeholder="Max-Price" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setMaxPrice(itemValue)}>
          <Select.Item label="5,000" value="5000" />
          <Select.Item label="10000" value="10000" />
          <Select.Item label="30000" value="30000" />
          <Select.Item label="50000" value="50000" />
          <Select.Item label="100000" value="100000" />
          <Select.Item label="200000" value="200000" />
          <Select.Item label="500000" value="500000" />
          <Select.Item label="800000" value="800000" />
          <Select.Item label="1000000" value="1000000" />
          <Select.Item label="1500000" value="1500000" />
          <Select.Item label="2000000" value="2000000" />
          <Select.Item label="2500000" value="2500000" />
          <Select.Item label="3000000" value="3000000" />
          <Select.Item label="4000000" value="4000000" />
          <Select.Item label="5000000" value="5000000" />
          <Select.Item label="10000000" value="10000000" />
          <Select.Item label="20000000" value="20000000" />
          <Select.Item label="40000000" value="40000000" />
          <Select.Item label="80000000" value="80000000" />
          <Select.Item label="100000000" value="100000000" />
          <Select.Item label="200000000" value="200000000" />
          <Select.Item label="350000000" value="35000000" />
          <Select.Item label="500000000" value="500000000" />
          <Select.Item label="800000000" value="800000000" />
          <Select.Item label="1000000000" value="1000000000" />
          <Select.Item label="2500000000" value="2500000000" />
          <Select.Item label="others" value="10000000000" />
        </Select>
          </Flex>
        </View> 
        
        <Divider my="2" mt='3' mb='3' _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
        <View mt='2'>
        <Flex direction='row' mb='5' alignItems='center'>
          <Icon as={Ionicons} name="bed-outline" color="gray.500" size='md' mr='2' />
            <Heading size='sm' color="coolGray.600">Bedrooms</Heading>
          </Flex>
        <ScrollView h='10' horizontal showsHorizontalScrollIndicator={false}>
             <Text style={{backgroundColor: studio === 'studio' ? '#008080' : '#fff', color: studio === 'studio' ? '#fff' : '#000'}}
             onPress={handleStudio}
             borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8' >
                Studio</Text>
             <Text style={{backgroundColor: oneBed === '1' ? '#008080' : '#fff', color: oneBed === '1' ? '#fff' : '#000'}}
             onPress={handleOneBed}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >1</Text>
             <Text style={{backgroundColor: twoBed === '2' ? '#008080' : '#fff', color: twoBed === '2' ? '#fff' : '#000'}}
             onPress={handleTwoBed}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >2</Text>
             <Text style={{backgroundColor: threeBed === '3' ? '#008080' : '#fff', color: threeBed === '3' ? '#fff' : '#000'}}
             onPress={handleThreeBed}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >3</Text>
             <Text style={{backgroundColor: fourBed === '4' ? '#008080' : '#fff', color: fourBed === '4' ? '#fff' : '#000'}}
             onPress={handleFourBed}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >4</Text>
             <Text style={{backgroundColor: fiveBed === '5' ? '#008080' : '#fff', color: fiveBed === '5' ? '#fff' : '#000'}}
             onPress={handleFiveBed}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >5</Text>
             <Text style={{backgroundColor: sixBed === '6' ? '#008080' : '#fff', color: sixBed === '6' ? '#fff' : '#000'}}
             onPress={handleSixBed}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >6</Text>
             <Text style={{backgroundColor: sevenBed === '7' ? '#008080' : '#fff', color: sevenBed === '7' ? '#fff' : '#000'}}
             onPress={handleSevenBed}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >7</Text>
             <Text style={{backgroundColor: sevenPlusBed === '7+' ? '#008080' : '#fff', color: sevenPlusBed === '7+' ? '#fff' : '#000'}}
             onPress={handleSevenPlusBed}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >7+</Text>
            </ScrollView>
        </View>
        <Divider my="2" mt='4' mb='3' _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
        <View mt='2' mb='2'>
        <Flex direction='row' mb='5' alignItems='center'>
          <Icon as={MaterialCommunityIcons} name="bathtub-outline" color="gray.500" size='md' mr='2' />
            <Heading size='sm' color="coolGray.600">Bathrooms</Heading>
          </Flex>
        <ScrollView h='10' horizontal showsHorizontalScrollIndicator={false}>
             <Text style={{backgroundColor: oneBath === '1' ? '#008080' : '#fff', color: oneBath === '1' ? '#fff' : '#000'}}
             onPress={handleOneBath}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >1</Text>
             <Text style={{backgroundColor: twoBath === '2' ? '#008080' : '#fff', color: twoBath === '2' ? '#fff' : '#000'}}
             onPress={handleTwoBath}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >2</Text>
             <Text style={{backgroundColor: threeBath === '3' ? '#008080' : '#fff', color: threeBath === '3' ? '#fff' : '#000'}}
             onPress={handleThreeBath}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >3</Text>
             <Text style={{backgroundColor: fourBath === '4' ? '#008080' : '#fff', color: fourBath === '4' ? '#fff' : '#000'}}
             onPress={handleFourBath}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >4</Text>
             <Text style={{backgroundColor: fiveBath === '5' ? '#008080' : '#fff', color: fiveBath === '5' ? '#fff' : '#000'}}
             onPress={handleFiveBath}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >5</Text>
             <Text style={{backgroundColor: sixBath === '6' ? '#008080' : '#fff', color: sixBath === '6' ? '#fff' : '#000'}}
             onPress={handleSixBath}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >6</Text>
             <Text style={{backgroundColor: sevenBath === '7' ? '#008080' : '#fff', color: sevenBath === '7' ? '#fff' : '#000'}}
             onPress={handleSevenBath}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >7</Text>
             <Text style={{backgroundColor: sevenPlusBath === '7+' ? '#008080' : '#fff', color: sevenPlusBath === '7+' ? '#fff' : '#000'}}
             onPress={handleSevenPlusBath}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >7+</Text>
            </ScrollView>
        </View>

        {/* <Divider my="2" mt='3' mb='3' _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
        <View mt='2' mb='2'>
        <Flex direction='row' mb='5' alignItems='center'>
          <Icon as={FontAwesome5} name="couch" color="gray.500" size='md' mr='2' />
            <Heading size='sm' color="coolGray.600">Furnishing</Heading>
          </Flex>
          <Flex direction='row'>
        
        </View> */}
{/* 
        <Divider my="2" mt='4' mb='3' _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
        <View mt='2' mb='2'>
        <Flex direction='row' mb='5' alignItems='center'>
          <Icon as={FontAwesome} name="diamond" color="gray.500" size='md' mr='2' />
            <Heading size='sm' color="coolGray.600">Amenities</Heading>
          </Flex>
        <ScrollView h='10' horizontal showsHorizontalScrollIndicator={false}>
        <Text style={{backgroundColor: furnished === 'Furnished' ? '#008080' : '#fff', color: furnished === 'Furnished' ? '#fff' : '#000'}}
          onPress={handleFurnished}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Furnished</Text>
             <Text style={{backgroundColor: unfurnished === 'Unfurnished' ? '#008080' : '#fff', color: unfurnished === 'Unfurnished' ? '#fff' : '#000'}}
             onPress={handleUnFurnished}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Unfurnished</Text>
             <Text style={{backgroundColor: partlyFurnished === 'Partly furnished' ? '#008080' : '#fff', color: partlyFurnished === 'Partly furnished' ? '#fff' : '#000'}}
             onPress={handlePartlyFurnished}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Partly furnished</Text>
             {/* <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Daily</Text> */}
             {/* <Text style={{backgroundColor: fitness === 'Fitness room' ? '#008080' : '#fff', color: fitness === 'Fitness room' ? '#fff' : '#000'}}
             onPress={handleFitnessRoom}
             borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8' >
               Fitness room </Text>
             <Text style={{backgroundColor: homeAuto === 'Home automation' ? '#008080' : '#fff', color: homeAuto === 'Home automation' ? '#fff' : '#000'}}
              onPress={handleHomeAuto}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Home automation</Text>
             <Text style={{backgroundColor: homeCinema === 'Home cinema' ? '#008080' : '#fff', color: homeCinema === 'Home cinema' ? '#fff' : '#000'}}
             onPress={handleHomeCinema}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Home cinema</Text>
             <Text style={{backgroundColor: suna === 'Suna' ? '#008080' : '#fff', color: suna === 'Suna' ? '#fff' : '#000'}}
             onPress={handleSuna}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Suna</Text>
             <Text style={{backgroundColor: spa === 'Spa' ? '#008080' : '#fff', color: spa === 'Spa' ? '#fff' : '#000'}}
             onPress={handleSpa}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Spa</Text>
             <Text style={{backgroundColor: gym === 'Gym' ? '#008080' : '#fff', color: gym === 'Gym' ? '#fff' : '#000'}}
             onPress={handleGym}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Gym</Text>
             <Text style={{backgroundColor: closet === 'Walk-in-closet' ? '#008080' : '#fff', color: closet === 'Walk-in-closet' ? '#fff' : '#000'}}
             onPress={handleCloset}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Walk-in-closet</Text>
             <Text style={{backgroundColor: water === 'Waterfront' ? '#008080' : '#fff', color: water === 'Waterfront' ? '#fff' : '#000'}}
             onPress={handleWater}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Water front</Text>
             {/* <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Water View</Text>
              <Text borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8' >
                Landmark View</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Pets Allowed</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Study</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Private Garden</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Private Pool</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Private Gym</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Private Jacuzzy</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Built in Wardrobes</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Walk-in Closet</Text>
              <Text borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8' >
                Build in Kitchen Appliances</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Maid Service</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Children's Play Area</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Children's Pool</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Barbecue Area</Text> */}

        <Divider my="2" mt='3' mb='3' _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
        <View mt='2' mb='2'>
        <Flex direction='row' mb='5' alignItems='center'>
          <Icon as={MaterialCommunityIcons} name="image-size-select-small" color="gray.500" size='md' mr='2' />
            <Heading size='sm' color="coolGray.600">Property Size (sqft)</Heading>
          </Flex>
          <Flex direction='row' alignItems='center'>
          <Select selectedValue={minSize} minWidth="170" accessibilityLabel="Choose Service" placeholder="Min-Size" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setMinSize(itemValue)}>
          <Select.Item label="500" value="500" />
          <Select.Item label="800" value="800" />
          <Select.Item label="1000" value="1000" />
          <Select.Item label="1200" value="1200" />
          <Select.Item label="1500" value="1500" />
          <Select.Item label="1800" value="1800" />
          <Select.Item label="2000" value="2000" />
          <Select.Item label="2300" value="2300" />
          <Select.Item label="2500" value="2500" />
          <Select.Item label="2800" value="2800" />
          <Select.Item label="3000" value="3000" />
          <Select.Item label="3500" value="3500" />
          <Select.Item label="4000" value="4000" />
          <Select.Item label="4500" value="4500" />
          <Select.Item label="5000" value="5000" />
          <Select.Item label="5500" value="5500" />
          <Select.Item label="6000" value="6000" />
          <Select.Item label="6500" value="6500" />
          <Select.Item label="7000" value="7000" />
          <Select.Item label="7500" value="7500" />
          <Select.Item label="8000" value="8000" />
          <Select.Item label="8500" value="8500" />
          <Select.Item label="9000" value="9000" />
          <Select.Item label="others" value="others" />
        </Select>
        <Text mr='2' ml='2'>to</Text>
        <Select selectedValue={maxSize} minWidth="170" accessibilityLabel="Choose Service" placeholder="Max-Size" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setMaxSize(itemValue)}>
           <Select.Item label="500" value="500" />
          <Select.Item label="800" value="800" />
          <Select.Item label="1000" value="1000" />
          <Select.Item label="1200" value="1200" />
          <Select.Item label="1500" value="1500" />
          <Select.Item label="1800" value="1800" />
          <Select.Item label="2000" value="2000" />
          <Select.Item label="2300" value="2300" />
          <Select.Item label="2500" value="2500" />
          <Select.Item label="2800" value="2800" />
          <Select.Item label="3000" value="3000" />
          <Select.Item label="3500" value="3500" />
          <Select.Item label="4000" value="4000" />
          <Select.Item label="4500" value="4500" />
          <Select.Item label="5000" value="5000" />
          <Select.Item label="5500" value="5500" />
          <Select.Item label="6000" value="6000" />
          <Select.Item label="6500" value="6500" />
          <Select.Item label="7000" value="7000" />
          <Select.Item label="7500" value="7500" />
          <Select.Item label="8000" value="8000" />
          <Select.Item label="8500" value="8500" />
          <Select.Item label="9000" value="9000" />
          <Select.Item label="others" value="others" />
        </Select>
          </Flex>
        </View> 
        <Divider my="2" mt='3' mb='3' _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
        <View mt='2' mb='8'>
        <Flex direction='row' mb='5' alignItems='center'>
          <Icon as={AntDesign} name="playcircleo" color="gray.500" size='md' mr='2' />
            <Heading size='sm' color="coolGray.600">Virtual Viewings</Heading>
          </Flex>
          <Flex direction='row'>
          <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >360 Tours</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Video Tours</Text>
             <Text
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Live Viewings</Text>
          </Flex>
        </View>
        {toggle === 'rent' && <>
        <Divider my="2" mt='3' mb='3' _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
        <View mt='2' mb='2'>
        <Flex direction='row' mb='5' alignItems='center'>
          <Icon as={MaterialCommunityIcons} name="wall" color="gray.500" size='md' mr='2' />
            <Heading size='sm' color="coolGray.600">Completion Status</Heading>
          </Flex>
          <Flex direction='row'>
             <Text 
              style={{backgroundColor: propertyGroup === 'Residential' ? '#008080' : '#fff', color: propertyGroup === 'Residential' ? '#fff' : '#000'}}
             onPress={handleResidential}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Residential</Text>
             <Text
             style={{backgroundColor: propertyGroup === 'New Projects' ? '#008080' : '#fff', color: propertyGroup === 'New Projects' ? '#fff' : '#000'}}
             onPress={handleNewProject}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >New project</Text>
            </Flex>
        </View> 
        </>
        }
        {toggle === 'sale' && <>
        <Divider my="2" mt='3' mb='3' _light={{ bg: "muted.200"}} _dark={{bg: "muted.50"}} />
        <View mt='2' mb='2'>
        <Flex direction='row' mb='5' alignItems='center'>
          <Icon as={MaterialCommunityIcons} name="wall" color="gray.500" size='md' mr='2' />
            <Heading size='sm' color="coolGray.600">Completion Status</Heading>
          </Flex>
          <Flex direction='row'>
          <Text 
             style={{backgroundColor: propertyGroup === 'Offplan' ? '#008080' : '#fff', color: propertyGroup === 'Offplan' ? '#fff' : '#000'}}
            onPress={handleOffplan}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Off-plan</Text>
             <Text 
              style={{backgroundColor: propertyGroup === 'Residential' ? '#008080' : '#fff', color: propertyGroup === 'Residential' ? '#fff' : '#000'}}
             onPress={handleResidential}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >Residential</Text>
             <Text
             style={{backgroundColor: propertyGroup === 'New Projects' ? '#008080' : '#fff', color: propertyGroup === 'New Projects' ? '#fff' : '#000'}}
             onPress={handleNewProject}
              borderColor='gray.200' borderWidth='1.5' mr='3' borderRadius='8' pr='3' pl='3' pt='1' pb='0.5' h='8'
             >New project</Text>
            </Flex>
        </View> 
        </>
        }
        </ScrollView>
        <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center">
      <Center flex={1}></Center>
        <HStack bg="white" alignItems="center" borderColor='white' safeAreaBottom shadow={6} justifyContent='space-between' pt='2' pb='2' pl='5' pr='5'>
            <Center>
              <Button variant='outline' color="#383838" fontSize="12" onPress={handleClear}>
                Clear all
              </Button>
            </Center>
          <Pressable>
            <Center>
               {/* @ts-ignore:next-line */}
              <Text onPress={() => navigation.navigate('Search')} fontSize="15" color='#fff' bg='#008080' pt='2.5' pr='5' pb='2.5' pl='5' borderRadius='8'>Show {property?.data.length.toLocaleString()} Properties</Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
      </View>
      </>
    )
}

export default FilterScreen