import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import data from '../data.json';


const Post = props => {
  const comment = data.Comment;
  const ItemView = ({item}) => {
    if (props.route.params.id === item.idpost) {
      return <Text>{item.comment}</Text>;
    }
  };

  return (
    <View style={{margin: 20}}>
      <Text>{props.route.params.title}</Text>
      <Image
        style={{width: 350, height: 300}}
        source={{
          uri: props.route.params.image,
        }}
      />
      <Text>{props.route.params.content}</Text>
      <FlatList
        data={comment}
        keyExtractor={item => item.id}
        onEndReached={() => console.log('end reached')}
        renderItem={ItemView}
      />
    </View>
  );
};

export default Post;
