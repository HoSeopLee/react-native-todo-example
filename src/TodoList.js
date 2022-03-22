import React, {useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {ListItem, Input} from './components';

const TodoList = () => {
  const [title, setTitle] = useState('');
  const [update, setUpdate] = useState(false);
  //배열
  const [list, setList] = useState([
    {
      id: 1,
      title: '투두 아이템',
      check: false,
    },
  ]);

  //등록
  const _insertHandle = async () => {
    await setList(data => {
      return [
        ...data,
        {
          id: new Date().getTime(),
          title: title,
          check: false,
        },
      ];
    });
    await setTitle('');
  };

  //삭제
  const _deleteHandle = id => {
    setList(
      list.filter(element => {
        return element.id !== id;
      }),
    );
  };

  //수정
  const _updateStateHandle = id => {
    setList(
      list.map(element => {
        if (element.id === id) {
          return {...element, check: !element.check};
        } else {
          return {...element};
        }
      }),
    );
  };

  const _updateHandle = async () => {
    await setList(
      list.map(element => {
        if (element.id === update) {
          return {...element, title: title};
        } else {
          return {...element};
        }
      }),
    );
    await setTitle('');
    await setUpdate(false);
  };
  //리스트 아이템
  const _renderItem = ({item, index}) => {
    return (
      <ListItem
        item={item}
        index={index}
        list={list}
        setList={setList}
        setTitle={setTitle}
        setUpdate={setUpdate}
        deleteHandle={_deleteHandle}
        setUpdate={setUpdate}
        updateStateHandle={_updateStateHandle}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Input
        title={title}
        update={update}
        updateHandle={_updateHandle}
        insertHandle={_insertHandle}
        setTitle={setTitle}
        setUpdate={setUpdate}
      />
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default TodoList;
