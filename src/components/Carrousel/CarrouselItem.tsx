import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

export const SLIDER_WIDTH = 419; /*Dimensions.get('window').width + 80*/
export const ITEM_WIDTH = 419; /*Math.round(SLIDER_WIDTH * 0.7);*/

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: item.imgUrl}} style={styles.image} />
      <View style={{justifyContent: 'flex-end', alignItems: 'flex-end',marginRight:15}}>
        <Text style={styles.header}>{item.title}</Text>
      </View>
      {/* <Text style={styles.body}>{item.body}</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    // paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: 419,
    height: 212,
  },
  header: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    width: '60%',
    textShadowColor:'#FFA500',
    textShadowOffset:{
      width:1,
      height:2
    },
    textShadowRadius: 1,
    paddingBottom:50
  },
  // body: {
  //   color: '#222',
  //   fontSize: 18,
  //   paddingLeft: 20,
  //   paddingRight: 20,
  // },
});

export default CarouselCardItem;
