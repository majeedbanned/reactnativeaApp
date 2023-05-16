import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/categories";
import FeacherdView from "../components/FeacherdView";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "man",
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white">
      <View className="m-2  pb-3 mx-4 space-x-2 flex-row">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-9 h-9 p-4 rounded-full border-[1px]"
        ></Image>

        <View className="flex-1">
          <Text>Delivero</Text>

          <Text className="font-bold text-xl ">
            Current Location
            <ChevronDownIcon className="m-2" size={20}></ChevronDownIcon>
          </Text>
        </View>
        <UserIcon size={35}></UserIcon>
      </View>
      <View className="flex-row  items-center mx-3 pb-2">
        <View className="rounded-sm flex-row space-x-2  p-3 flex-1 bg-gray-200">
          <MagnifyingGlassIcon size={20} className="" />
          <TextInput
            keyboardType="default"
            className="flex-1  rounded-sm"
            placeholder="Search"
          />
        </View>
        <AdjustmentsVerticalIcon size={35}></AdjustmentsVerticalIcon>
      </View>


      <ScrollView className='bg-gray-100'>
        <Categories />

        <FeacherdView id="1" title='title' description='description' featuredCategory='featured' />
        <FeacherdView id="1" title='title' description='description' featuredCategory='featured' />
        <FeacherdView id="1" title='title' description='description' featuredCategory='featured' />

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
