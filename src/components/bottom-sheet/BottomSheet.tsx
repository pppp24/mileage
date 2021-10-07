import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Colors} from '../../constants/colors';

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.0,
  restSpeedThreshold: 0.0,
  stiffness: 500,
};

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
      ? (top.value = withSpring(0, SPRING_CONFIG))
      : (top.value = withSpring(dimensions.height, SPRING_CONFIG));
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
