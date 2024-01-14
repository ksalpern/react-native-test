import {
  StatusBar,
  View,
} from 'react-native';

import { HomeScreen } from './screens/Home';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <HomeScreen />
    </View>
  );
}
