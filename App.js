import { useEffect, useState } from "react";

import axios from "axios";
import { Alert, FlatList, StatusBar, View } from "react-native";

import { Post } from "./components/Post";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Error :(", "An error occurred while retrieving posts.");
      });
  }, []);

  return (
    <View>
      <StatusBar style="auto" />
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Post title={item.title} imageUrl={item.url} createdAt={item.id} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
