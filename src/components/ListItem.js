import React from 'react';
import {Text, Pressable, View} from 'react-native';

const ListItem = ({
  item = null,
  setTitle = () => {},
  setUpdate = () => {},
  deleteHandle = () => {},
  updateStateHandle = () => {},
}) => {
  return (
    <Pressable
      onPress={() => {
        updateStateHandle(item.id);
      }}
      style={({pressed}) => [
        {
          width: '100%',
          backgroundColor: item.check ? 'green' : '#fff',
          borderWidth: 1,
          borderColor: '#DDDDDD',
          marginTop: 5,
          opacity: pressed ? 0.5 : 1,
        },
      ]}>
      {({pressed}) => (
        <View
          style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text>{item.title}</Text>
          </View>
          <Pressable
            onPress={async () => {
              setUpdate(item.id);
              setTitle(item.title);
            }}
            style={({pressed}) => [
              {
                width: 50,
                height: 50,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: pressed ? 0.5 : 1,
                backgroundColor: 'skyblue',
                marginLeft: 8,
              },
            ]}>
            {({pressed}) => (
              <Text
                style={{
                  fontSize: 15,
                  color: '#fff',
                }}>
                수정
              </Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              deleteHandle(item.id);
            }}
            style={({pressed}) => [
              {
                width: 50,
                height: 50,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: pressed ? 0.5 : 1,
                backgroundColor: 'red',
                marginLeft: 8,
              },
            ]}>
            {({pressed}) => (
              <Text
                style={{
                  fontSize: 15,
                  color: '#fff',
                }}>
                삭제
              </Text>
            )}
          </Pressable>
        </View>
      )}
    </Pressable>
  );
};

export default ListItem;
