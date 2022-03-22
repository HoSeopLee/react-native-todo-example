import React from 'react';
import {TextInput, Text, Pressable, View} from 'react-native';

const Input = ({
  updateHandle = () => {},
  insertHandle = () => {},
  setTitle = () => {},
  setUpdate = () => {},
  title = '',
  update = false,
}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 10,
      }}>
      <TextInput
        style={[
          {
            fontSize: 15,
            flex: 1,
            borderWidth: 1,
            borderColor: '#E9E9E9',
            paddingHorizontal: 15,
            height: 50,
            margin: 0,
            borderRadius: 6,
          },
        ]}
        placeholder={'Todo'}
        placeholderTextColor={'#ccc'}
        value={title}
        autoCapitalize="none"
        onChangeText={text => {
          setTitle(text);
        }}
      />
      <Pressable
        onPress={async () => {
          update ? updateHandle() : insertHandle();
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
            {update ? '수정' : '등록'}
          </Text>
        )}
      </Pressable>
      {update && (
        <Pressable
          onPress={async () => {
            setUpdate(false);
            setTitle('');
          }}
          style={({pressed}) => [
            {
              width: 50,
              height: 50,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
              opacity: pressed ? 0.5 : 1,
              backgroundColor: 'orange',
              marginLeft: 8,
            },
          ]}>
          {({pressed}) => (
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
              }}>
              취소
            </Text>
          )}
        </Pressable>
      )}
    </View>
  );
};

export default Input;
