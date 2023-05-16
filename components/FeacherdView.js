import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./resturantCard";

export default function FeacherdView({
  id,
  title,
  description,
  featuredCategory,
}) {
  return (
    <View key={id}>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lx ">{title}</Text>
        <ArrowRightIcon />
      </View>
      <Text className="text-gray-500  mx-4 text-xs">{description}</Text>
      <ScrollView contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:15,
    }}
    horizontal
    showsVerticalScrollIndicator={false}
    className=''
    >
<ResturantCard
 id={1}
 imgUrl="https://a4.pbase.com/o12/33/2068233/1/172274445.gvIBLcMH.100.jpg"
 genre="genre"
 title='title of food'
 rating={3.5}
 address="adress"
 short_description='description'
 dishes={[]}
 long={20}
 lat={0}
/>
<ResturantCard
 id={1}
 imgUrl="https://a4.pbase.com/o12/33/2068233/1/171972506.grlCCl3I.11_ppskincopy.JPG"
 genre="genre"
 title='title of food'
 rating={3.5}
 address="adress"
 short_description='description'
 dishes={[]}
 long={20}
 lat={0}
/>

      </ScrollView>
    </View>
  );
}
