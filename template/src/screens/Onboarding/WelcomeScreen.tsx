import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { navigationActions, useAppDispatch } from '@redux'

import { Colors, Images, TextStyles, Button } from '@core'
import { AUTHSTACK, LOGINSCREEN } from '@constants'

export const WelcomeScreen: React.FC = () => {
  const dispatch = useAppDispatch()

  const onGettingStarted = () => {
    dispatch(
      navigationActions.resetStack({
        stackName: AUTHSTACK,
        screenName: LOGINSCREEN,
      }),
    )
  }

  return (
    <View style={styles.container}>
      <Image style={styles.heroImg} source={Images.Welcome} />
      <Text style={[TextStyles.fontWeight800, styles.title]}>
        React Native Boilerplate
      </Text>
      <Text style={[TextStyles.fontWeight300, styles.desc]}>
        Ready to use react native architecture tailored for mobile development.
      </Text>
      <Button
        onPress={() => onGettingStarted()}
        label="Getting Started 🚀"
        topAuto={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    padding: 25,
    paddingTop: 50,
    alignItems: 'center',
  },
  heroImg: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
    marginRight: 20,
  },
  title: { fontSize: 30, textAlign: 'center', marginTop: 20 },
  desc: {
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
})
