import { StyleSheet, Text, View } from 'react-native';
import GeneralNavigator from './components/GeneralNavigator';
import { UserInformationProvider } from './context/UserInformationContext'

export default function App() {

  return (
    <UserInformationProvider>
      <GeneralNavigator />
    </UserInformationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:40
  },
});
