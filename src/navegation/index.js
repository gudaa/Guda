import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Album } from "../screens/Album";
import { Bio } from "../screens/Bio";
import { Home } from "../screens/Home";
import GDcontato, { Sobre } from "../screens/Noticias";

//const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <Tab.Navigator
      activeColor="#3e2465"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#F0F8FF" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Albuns"
        component={Album}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="album" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Comentário"
        component={GDcontato}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="newspaper-variant-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Bio}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
