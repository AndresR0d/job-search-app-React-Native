import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'

const jobTypes = ["Full-time", "Part-Time"]

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello NoCompila</Text>
        <Text style={styles.userName}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />

        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList />
      </View>
    </View>
  )
}

export default Welcome