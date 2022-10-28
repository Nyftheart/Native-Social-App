import React, {useEffect, useState} from 'react';

import {
  Alert,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import data from '../data.json';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

const Posts = ({navigation}) => {
  const posts = data.posts;
  const [isliked, setisliked] = useState(false);
  const [update, setupdate] = useState('black');
  const Swap = () => {
    // 👇️ passed function to setState
    if (isliked) {
      setupdate('black');
      setisliked(false);
    } else {
      setupdate('red');
      setisliked(true);
    }
  };

  return (
    <StyledView>
      <TopMenu>YBadges</TopMenu>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        onEndReached={() => console.log('end reached')}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Post', {
                  id: item.id,
                  image: item.image,
                  content: item.content,
                  title: item.title,
                  Like: item.Like,
                })
              }>
              <HeaderViniet>
                <Image
                  style={{width: 50, height: 50}}
                  source={{
                    uri: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png',
                  }}
                />
                <HeaderVinietTitle>
                  <HeaderVinietTitleUser>{item.title}</HeaderVinietTitleUser>
                  <HeaderVinietTitleCampus>
                    Paris Ynov Campus Beta_Test
                  </HeaderVinietTitleCampus>
                </HeaderVinietTitle>
              </HeaderViniet>
              <Image
                style={{width: 400, height: 425}}
                source={{
                  uri: item.image,
                }}
              />
            </TouchableOpacity>
            <ItemViniet>
              <TouchableOpacity onPress={Swap}>
                <FontAwesome5
                  name={'heart'}
                  solid
                  style={{color: update, fontSize: 30}}
                />
              </TouchableOpacity>
              &nbsp;&nbsp;
              <TouchableOpacity>
                <FontAwesome5 name={'comments'} solid style={{fontSize: 30}} />
              </TouchableOpacity>
              &nbsp;&nbsp;
              <TouchableOpacity>
                <FontAwesome5 name={'share'} solid style={{fontSize: 30}} />
              </TouchableOpacity>
            </ItemViniet>
            <DescVinietUser>
              {item.title}&nbsp;&nbsp;
              <DescVinietContent>{item.content}</DescVinietContent>
            </DescVinietUser>
          </View>
        )}
      />
    </StyledView>
  );
};
export default Posts;

const StyledView = styled.View`
  justifycontent: center;
  alignitems: center;
`;

const TopMenu = styled.Text`
  background-color: white;
  color: black;
  height: 100px;
  width: 400px;
  padding-top: 50px;
  font-size: 30px;
  font-weight: bold;
  padding-left: 135px;
`;

const HeaderViniet = styled.View`
  padding-left: 20px;
  padding-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const HeaderVinietTitle = styled.View`
  padding-left: 10px;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const HeaderVinietTitleUser = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;
const HeaderVinietTitleCampus = styled.Text`
  font-size: 13px;
`;
const DescVinietUser = styled.Text`
  font-weight: bold;
  padding-left: 20px;
  padding-top: 10px;
`;
const DescVinietContent = styled.Text`
  font-weight: normal;
`;
const ItemViniet = styled.Text`
  margin-left: 20px;
  margin-top: 20px;
`;
