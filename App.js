import { StyleSheet, Text, View } from 'react-native';
import GeneralNavigator from './components/Shared/GeneralNavigator';
import { AuthProvider } from './context/AuthContext';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {

  return (
    <AuthProvider>
      <StripeProvider>
        <GeneralNavigator />
      </StripeProvider>
    </AuthProvider>
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
