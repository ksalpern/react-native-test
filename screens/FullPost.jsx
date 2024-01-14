import React, { useEffect, useState } from "react";

import axios from "axios";
import { View } from "react-native";
import styled from "styled-components/native";

import { Loading } from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  height: 300px;
  width: 100%;
  margin-bottom: 10px;
`;

const PostText = styled.Text`
  font-size: 24px;
  line-height: 30px;
`;

export const FullPostScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/" + 1)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Oops", "Failed to load post");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ padding: 10 }}>
      <PostImage source={{ uri: data.url }} />
      <PostText>{data.title}</PostText>
    </View>
  );
};
