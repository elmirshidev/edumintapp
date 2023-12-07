import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import CoursesScreen from './screens/CoursesScreen';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{
            headerShown: false,

          }} />
          <Stack.Screen name="Courses" component={CoursesScreen} options={{
            headerShown: false,

          }} />
        </Stack.Navigator>
        <Footer />
      </>
    </NavigationContainer>
  );
}
