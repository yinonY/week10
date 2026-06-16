// Login screen component
import { View, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/login.styles';
import AppButton from '../components/MainButton';

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Foo News</Text>
      <Text style={styles.subtitle}>Stay update to date with the latest foo</Text>
      
      <TextInput placeholder="Email address" style={styles.input} placeholderTextColor="#945858a6" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry placeholderTextColor="#945858a6" />
      
      <AppButton 
        title="gimme contant" 
        onPress={() => router.replace('/(tabs)')} 
      />
    </View>
  );
}