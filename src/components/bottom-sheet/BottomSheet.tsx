import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Colors} from '../../../typings/colors';

const BottomSheet = ({visible, children}) => {
  const dimensions = useWindowDimensions();
  const top = useSharedValue(dimensions.height);
  const style = useAnimatedStyle(() => {
    return {
      top: top.value,
    };
  });

  React.useEffect(() => {
    visible
      ? (top.value = withTiming(0))
      : (top.value = withTiming(dimensions.height));
  }, [visible]);

  return (
    <Animated.View style={[styles.container, style]}>{children}</Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9999,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.GREY_900,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
