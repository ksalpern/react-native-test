import { StatusBar, View } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #334339;
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostDetails = styled.View`
  justify-content: center;
`;

const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const PostDate = styled.Text`
  font-size: 14px;
  color: #ccc;
  margin-top: 4px;
`;

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Post>
        <PostImage
          source={{
            uri: "https://lh3.googleusercontent.com/ogw/ANLem4aS7uJ6Xuo9evWHZOSmpsAhc3hry300OtoqiJRqTxc=s64-c-mo",
          }}
        />
        <PostDetails>
          <PostTitle>React Native</PostTitle>
          <PostDate>10/07/2023</PostDate>
        </PostDetails>
      </Post>
    </View>
  );
}
