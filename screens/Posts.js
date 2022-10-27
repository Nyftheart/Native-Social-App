import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import data from '../data.json';

const Posts = ({navigation}) => {
  const posts = data.posts;
  return (
    <SafeAreaView>
      <Text>Homepage</Text>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        onEndReached={() => console.log('end reached')}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{margin: 20}}
            onPress={() =>
              navigation.navigate('Post', {
                id: item.id,
                image: item.image,
                content: item.content,
                title: item.title,
              })
            }>
            <Text>{item.title}</Text>
            <Image
              style={{width: 350, height: 300}}
              source={{
                uri: item.image,
              }} // ignorer dans le debug
              // source={{
              //   uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              // }}
            />
            <Text>{item.content}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Posts;
