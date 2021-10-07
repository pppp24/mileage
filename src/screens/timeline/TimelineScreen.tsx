import React from 'react';
import {StyleSheet, Text, View, SectionList} from 'react-native';
import {finalizedOffers} from '../../../dummy-data/entries';
import {Expanded, Ripple, Spacer} from '../../components';
import moment from 'moment';
import {hp, wp} from '../../helpers/layout';
import Icon from '../../components/icon/Icon';
import {Colors} from '../../../typings/colors';
import {Icons} from '../../../typings/icons';
import {useDispatch, useSelector} from 'react-redux';
import {toggleShowMileageForm} from '../../redux/mileage/mileage.actions';
import {parseTimelineData} from '../../helpers/data';
// import {mileageEntries} from '../../../dummy-data/entries-two';
import {selectMileageEntries} from '../../redux/mileage/mileage.selectors';

const TimelineScreen = () => {
  const dispatch = useDispatch();
  const mileageEntries = useSelector(selectMileageEntries);
  console.log({entries: JSON.stringify(mileageEntries)});
  const radius = 20;
  const data = React.useMemo(
    () => parseTimelineData(mileageEntries),
    [mileageEntries],
  );

  console.log({data});

  return (
    <>
      <View
        style={{
          backgroundColor: Colors.GREY_900,
          paddingHorizontal: 10,
          flex: 1,
        }}>
        <SectionList
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled
          contentContainerStyle={{
            borderLeftWidth: 2,
            borderColor: Colors.BLUE_500,
            margin: 20,
            // flex: 1,
          }}
          sections={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
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
      </View>
      <View style={{position: 'absolute', bottom: 0, right: 0}}>
        <Ripple
          name="plus"
          color={'white'}
          size={30}
          callback={() => dispatch(toggleShowMileageForm())}
        />
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

const renderItem = ({item}) => {
  const radius = 40;
  console.log({item});
  return (
    <>
      <Spacer vertical />
      <View
        style={{
          width: wp(100),
          alignItems: 'center',
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
          }}>
          <Icon
            icon={Icons.MaterialCommunityIcons}
            name="gas-station"
            color={Colors.BLUE_50}
            size={hp(2.3)}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: '80%',
            flexDirection: 'row',
          }}>
          <View>
            <Text style={{color: Colors.BLUE_50}}>Refueling</Text>
            <Spacer top />
            <Text style={{color: Colors.GREY_500}}>{`${moment(
              item?.createdAt,
            ).format('MMMM, D')}`}</Text>
            <Spacer top />
            <Text
              style={{color: Colors.GREY_500}}>{`${item?.miles.toLocaleString(
              'en-US',
            )} mi`}</Text>
          </View>
          <Expanded />
          <View>
            <Text style={{color: Colors.BLUE_50}}>{`$${parseFloat(
              `${item?.price * item?.gas}`,
            ).toFixed(2)}`}</Text>
          </View>
          <Spacer horizontal />
        </View>
      </View>
      <Spacer vertical />
      <Spacer vertical />
    </>
  );
};
