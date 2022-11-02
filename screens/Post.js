import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard, Share,
} from "react-native";
import data from '../data.json';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Post = props => {
  const comment = data.Comment;
  const ItemView = ({item}) => {
    if (props.route.params.id === item.idpost) {
      return (
        <UserComment>
          <Text style={{fontWeight: 'bold'}}>Utilisateur:</Text> {item.comment}
        </UserComment>
      );
    }
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Ybadges post',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const [isliked, setisliked] = useState(false);
  const [Liked, setLiked] = useState(props.route.params.Like);
  const [update, setupdate] = useState('black');
  const Swap = () => {
    // 👇️ passed function to setState
    if (isliked) {
      setLiked(Liked - 1);
      setisliked(false);
      setupdate('black');
    } else {
      setLiked(Liked + 1);
      setisliked(true);
      setupdate('red');
    }
  };

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  return (
    <View>
      <HeaderViniet>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png',
          }}
        />
        <HeaderVinietTitle>
          <HeaderVinietTitleUser>
            {props.route.params.title}
          </HeaderVinietTitleUser>
          <HeaderVinietTitleCampus>
            Paris Ynov Campus Beta_Test
          </HeaderVinietTitleCampus>
        </HeaderVinietTitle>
      </HeaderViniet>
      <Text>{}</Text>
      <Image
        style={{width: 400, height: 425}}
        source={{
          uri: props.route.params.image,
        }}
      />
      <UnderItem>
        <Likesection>
          <TouchableOpacity onPress={Swap}>
            <FontAwesome5
              name={'heart'}
              solid
              style={{color: update, fontSize: 30}}
            />
          </TouchableOpacity>
          <Text>&nbsp;&nbsp;{Liked}</Text>
        </Likesection>
        <TouchableOpacity>
          <FontAwesome5 name={'comments'} solid style={{fontSize: 30}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onShare}>
          <FontAwesome5 name={'share'} solid style={{fontSize: 30}} />
        </TouchableOpacity>
      </UnderItem>

      <DescVinietUser>
        {props.route.params.title}&nbsp;&nbsp;
        <DescVinietContent>{props.route.params.content}</DescVinietContent>
      </DescVinietUser>
      <FlatList
        data={comment}
        keyExtractor={item => item.id}
        onEndReached={() => console.log('end reached')}
        renderItem={ItemView}
      />
      {taskItems.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => completeTask(index)}>
            <UserComment>
              <Text style={{fontWeight: 'bold'}}>Utilisateur:</Text> {item}
            </UserComment>
          </TouchableOpacity>
        );
      })}
      <SendPart>
        <InputComment
          placeholder="useless placeholder"
          keyboardType="numeric"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <FontAwesome5
            name={'paper-plane'}
            solid
            style={{color: 'black', fontSize: 30}}
          />
        </TouchableOpacity>
      </SendPart>
    </View>
  );
};

export default Post;

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
const UnderItem = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Likesection = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  align-items: center;
`;
const DescVinietUser = styled.Text`
  font-weight: bold;
  padding-left: 20px;
  padding-top: 20px;
  margin-bottom: 10px;
`;
const DescVinietContent = styled.Text`
  font-weight: normal;
`;
const UserComment = styled.Text`
  margin-left: 50px;
  margin-top: 1px;
`;
const SendPart = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  align-items: center;
  margin-top: 170%;
  height: 50px;
  position: absolute;
`;
const InputComment = styled.TextInput`
  border: solid;
  width: 83%;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 30px;
`;
