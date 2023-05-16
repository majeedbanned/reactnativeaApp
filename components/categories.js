import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './categoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:15,
    }}
    horizontal
    showsVerticalScrollIndicator={false}
    >

      {/* <Text>Categories</Text> */}
      <CategoryCard imgUrl='https://www.iconsdb.com/icons/preview/green/square-rounded-xxl.png' title='test 3'/>
      <CategoryCard imgUrl='https://www.iconsdb.com/icons/preview/green/square-rounded-xxl.png' title='test 2'/>
      <CategoryCard imgUrl='https://www.iconsdb.com/icons/preview/green/square-rounded-xxl.png' title='test 1'/>
      <CategoryCard imgUrl='https://www.iconsdb.com/icons/preview/green/square-rounded-xxl.png' title='test 1'/>
      <CategoryCard imgUrl='https://www.iconsdb.com/icons/preview/green/square-rounded-xxl.png' title='test 1'/>
      <CategoryCard imgUrl='https://www.iconsdb.com/icons/preview/green/square-rounded-xxl.png' title='test 1'/>
      <CategoryCard imgUrl='https://www.iconsdb.com/icons/preview/green/square-rounded-xxl.png' title='test 1'/>

    </ScrollView>
  )
}

export default Categories