import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  SectionList,
} from 'react-native';
import {finalizedOffers} from '../../../dummy-data/entries';
import {BottomSheet, Ripple, Spacer, Timeline} from '../../components';
import moment from 'moment';
import {hp, wp} from '../../helpers/layout';
import {Colors} from '../../../typings/colors';
import Icon from '../../components/icon/Icon';
import {Icons} from '../../../typings/icons';

const TimelineScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const radius = 20;
  return (
    <>
      <View style={{backgroundColor: Colors.GREY_900, paddingHorizontal: 10}}>
        <SectionList
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled
          contentContainerStyle={{
            borderLeftWidth: 2,
            borderColor: Colors.BLUE_500,
            margin: 20,
          }}
          sections={sectionData}
          keyExtractor={item => item.id.toString()}
          renderSectionHeader={({section}) => {
            return (
              <>
                <View
                  style={{
                    width: wp(100),
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      position: 'absolute',
                      width: radius,
                      height: radius,
                      backgroundColor: Colors.BLUE_500,
                      borderRadius: 50,
                      left: -Math.floor(radius / 2) - 1,
                      zIndex: -999,
                    }}
                  />
                  <Spacer left marginLeft={wp(10)} />
                  <Text
                    style={{
                      backgroundColor: Colors.GREY_900,
                      color: Colors.BLUE_500,
                    }}>
                    {section?.title}
                  </Text>
                </View>
                <Spacer top />
              </>
            );
          }}
        />
        <View style={{position: 'absolute', bottom: 0, right: 0}}>
          <Ripple name="plus" color={'white'} size={30} />
        </View>
      </View>
    </>
  );
};

export default TimelineScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const renderItem = () => {
  const radius = 40;
  return (
    <>
      <Spacer vertical />
      <View
        style={{
          width: wp(100),
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'red',
          minHeight: hp(10),
        }}>
        <View
          style={{
            position: 'absolute',
            width: radius,
            height: radius,
            backgroundColor: Colors.BLUE_500,
            borderRadius: 50,
            left: -Math.floor(radius / 2) - 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}>
          <Icon
            icon={Icons.MaterialCommunityIcons}
            name="gas-station"
            color={Colors.BLUE_50}
            size={hp(2.3)}
          />
        </View>
        <Text>Hello</Text>
      </View>
      <Spacer vertical />
      <Spacer vertical />
    </>
  );
};

const sectionData = [
  {
    data: finalizedOffers[0],
    keyExtractor: (item, index) => item.id.toString(),
    renderItem,
    ItemSeparatorComponent: () => <View />,
    title: moment(finalizedOffers[0][0].date).format('ll').toString(),
  },
  {
    data: finalizedOffers[1],
    keyExtractor: (item, index) => item.id.toString(),
    renderItem,
    ItemSeparatorComponent: () => <View />,
    title: moment(finalizedOffers[1][0].date).format('ll').toString(),
  },
  {
    data: finalizedOffers[2],
    keyExtractor: (item, index) => item.id.toString(),
    renderItem,
    ItemSeparatorComponent: () => <View />,
    title: moment(finalizedOffers[2][0].date).format('ll').toString(),
  },
  {
    data: finalizedOffers[3],
    keyExtractor: (item, index) => item.id.toString(),
    renderItem,
    ItemSeparatorComponent: () => <View />,
    title: moment(finalizedOffers[3][0].date).format('ll').toString(),
  },
  {
    data: finalizedOffers[4],
    keyExtractor: (item, index) => item.id.toString(),
    renderItem,
    ItemSeparatorComponent: () => <View />,
    title: moment(finalizedOffers[4][0].date).format('ll').toString(),
  },
];
