import { useEffect, useState } from "react";

import axios from "axios";
import {
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
} from "react-native";

import { Loading } from "../components/Loading";
import { Post } from "../components/Post";

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/photos/")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Oops", "Failed to load posts");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => fetchPosts, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                id: item.id,
                title: item.title,
              })
            }
          >
            <Post title={item.title} imageUrl={item.url} createdAt={item.id} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
