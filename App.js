import { StatusBar, View } from "react-native";
import { Post } from "./components/Post";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Post imageUrl="https://lh3.googleusercontent.com/ogw/ANLem4aS7uJ6Xuo9evWHZOSmpsAhc3hry300OtoqiJRqTxc=s64-c-mo" />
    </View>
  );
}
