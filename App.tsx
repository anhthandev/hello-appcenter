import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import codePush from "react-native-code-push";

function App() {
  return (
    <View style={styles.container}>
      <Text>Guys! Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default App;
export default codePush({ 
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: true, 
  installMode: codePush.InstallMode.IMMEDIATE
})(App);