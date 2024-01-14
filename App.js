import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  StatusBar,
  Text,
  View,
} from 'react-native';

import { Post } from './components/Post';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState();

  const fetchPosts = () => {
    setIsLoading(true);
    try {
      const response = axios.get("https://jsonplaceholder.typicode.com/photos");
      setPosts(response.data);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => fetchPosts, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Wait for it...</Text>
      </View>
    );
  }

  return (
    <View>
      <StatusBar style="auto" />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={posts}
        renderItem={({ item }) => (
          <Post title={item.title} imageUrl={item.url} createdAt={item.id} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
