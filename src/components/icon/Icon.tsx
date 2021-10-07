import React from 'react';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {hp} from '../../helpers/layout';
import {Icons} from '../../constants/icons';

const Icon = ({
  icon = Icons.Entypo,
  name = 'home',
  color = 'black',
  size = hp(3.2),
}) => {
  return (
    <>
      {icon === Icons.AntDesign && (
        <AntDesign name={name} color={color} size={size} />
      )}
      {icon === Icons.Entypo && (
        <Entypo name={name} color={color} size={size} />
      )}
      {icon === Icons.EvilIcons && (
        <EvilIcons name={name} color={color} size={size} />
      )}
      {icon === Icons.Feather && (
        <Feather name={name} color={color} size={size} />
      )}
      {icon === Icons.FontAwesome && (
        <FontAwesome name={name} color={color} size={size} />
      )}
      {icon === Icons.FontAwesome5 && (
        <FontAwesome5 name={name} color={color} size={size} />
      )}
      {icon === Icons.Foundation && (
        <Foundation name={name} color={color} size={size} />
      )}
      {icon === Icons.Ionicons && (
        <Ionicons name={name} color={color} size={size} />
      )}
      {icon === Icons.MaterialIcons && (
        <MaterialIcons name={name} color={color} size={size} />
      )}
      {icon === Icons.MaterialCommunityIcons && (
        <MaterialCommunityIcons name={name} color={color} size={size} />
      )}
      {icon === Icons.SimpleLineIcons && (
        <SimpleLineIcons name={name} color={color} size={size} />
      )}
      {icon === Icons.Octicons && (
        <Octicons name={name} color={color} size={size} />
      )}
      {icon === Icons.Zocial && (
        <Zocial name={name} color={color} size={size} />
      )}
      {icon === Icons.Fontisto && (
        <Fontisto name={name} color={color} size={size} />
      )}
    </>
  );
};

export default Icon;

const styles = StyleSheet.create({});
