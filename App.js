import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/navegation";


export default function App() {
  return (

    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}