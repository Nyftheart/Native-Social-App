import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React, {useContext} from 'react';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';
import data from '../data.json';

const ProfileScreen = () => {
  const {user, logout} = useContext(AuthContext);
  const posts = data.posts;
  return (
    <Container>
      <HeaderViniet>
        <Image
          style={{width: 73, height: 80}}
          source={{
            uri: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png',
          }}
        />
        <HeaderVinietTitle>
          <HeaderVinietTitleUser>{user.uid}</HeaderVinietTitleUser>
          <HeaderVinietTitleCampus>
            Paris Ynov Campus Beta_Test
          </HeaderVinietTitleCampus>
        </HeaderVinietTitle>
      </HeaderViniet>
      <BigInfo>
        <View>
          <NumberInfo>265</NumberInfo>
          <UnicInfo>Posts</UnicInfo>
        </View>
        <View>
          <NumberInfo>900K</NumberInfo>
          <UnicInfo>Followers</UnicInfo>
        </View>
        <View>
          <NumberInfo>344</NumberInfo>
          <UnicInfo>Following</UnicInfo>
        </View>
      </BigInfo>
      <BioInfo>
        <BioText>
          jfioeiozjfviozejiofjziojfgioezjifjoezijfiozejfiozejfiozejiofjziojfoizjfiojziojfoizjoifjziofjoizjfiojziofjzoijfiozjfjfoiz
        </BioText>
      </BioInfo>
      <GridImage
        data={posts}
        keyExtractor={item => item.id}
        onEndReached={() => console.log('end reached')}
        renderItem={({item}) => (
          <RowImage
            style={{width: 110, height: 110}}
            source={{
              uri: item.image,
            }}
          />
        )}
        numColumns={3}
      />
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
    </Container>
  );
};

export default ProfileScreen;

const Container = styled.View`
  backgroundcolor: '#fff';
  display: flex;
  padding: 20px;
  padding-top: 50px;
`;
const HeaderViniet = styled.View`
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
const BigInfo = styled.View`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;
const NumberInfo = styled.Text`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;
const UnicInfo = styled.Text`
  text-align: center;
`;

const BioInfo = styled.View`
  margin-right: 80px;
  padding-top: 20px;
  padding-bottom: 10px;
`;
const BioText = styled.Text`
  font-size: 16px;
  text-align: left;
`;
const GridImage = styled.FlatList`
  padding-left: 0px;
  padding-right: 0px;
  display: flex;
  padding-top: 10px;
  height: 380px;
`;
const RowImage = styled.Image`
  margin-right: 10px;
  margin-top: 10px;
`;
