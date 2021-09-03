
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { RootTabScreenProps } from '../types'

const CameraScreen = ({ navigation }: RootTabScreenProps<"Camera">) => {
  return (
    <View>
      <Text>Camera Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CameraScreen


