import { useFonts } from 'expo-font';
import { Main } from './src/views/Main';

export default function App() {
  const [loaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return <Main />;
}
