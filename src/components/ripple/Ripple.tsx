import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {Colors} from '../../../typings/colors';
import Icon from '../icon/Icon';

const Ripple = ({name, color, size, callback}) => {
  const containerSize = size * 2;
  const iconContainer = {width: containerSize, height: containerSize};
  const maxOpacity = 0.12;
  const scaleValue = useSharedValue(0.01);
  const opacityValue = useSharedValue(maxOpacity);
  const style = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacityValue.value, {duration: 200}),
      transform: [{scale: scaleValue.value}],
    };
  });
  const onPressedIn = () => {
    scaleValue.value = withTiming(1, {
      duration: 200,
      easing: Easing.bezier(0.0, 0.0, 0.2, 1),
    });
    callback && callback();
  };

  const onPressedOut = () => {
    opacityValue.value = 0;
    scaleValue.value = 0.01;
    opacityValue.value = maxOpacity;
  };

  const renderRippleView = () => {
    const rippleSize = size * 2;

    return (
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            width: rippleSize,
            height: rippleSize,
            borderRadius: rippleSize / 2,
            backgroundColor: color || 'black',
          },
          style,
        ]}
      />
    );
  };

  return (
    <TouchableWithoutFeedback onPressIn={onPressedIn} onPressOut={onPressedOut}>
      <View style={[styles.iconContainer, iconContainer]}>
        {renderRippleView()}
        <View>
          <Icon name={name} size={size} color={color} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLUE_500,
    borderRadius: 50,
  },
});

export default Ripple;
