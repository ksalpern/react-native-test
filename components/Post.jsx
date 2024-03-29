import styled from "styled-components/native";

const PostView = styled.View`
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
  flex: 1;
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

const truncateTitle = (title) => {
  if (title.length > 20) {
    return title.slice(0, 40) + "...";
  }
  return title;
};

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};
