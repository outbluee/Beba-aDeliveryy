const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import TelaPrincipal from "./screens/TelaPrincipal";
import CervejaArtezanaladd from "./components/CervejaArtezanaladd";
import RestaurantMoes from "./screens/RestaurantMoes";
import RestauranteBiladen from "./screens/RestauranteBiladen";
import Login from "./components/Login";
import VerTudo from "./screens/VerTudo";
import JuiceBurstadd from "./components/JuiceBurstadd";
import Sucos from "./screens/Sucos";
import Cervejas from "./screens/Cervejas";
import DrPepperadd from "./components/DrPepperadd";
import Refrigerantes from "./screens/Refrigerantes";
import Historico from "./screens/Historico";
import Frame from "./screens/Frame";
import Perfil from "./screens/Perfil";
import TelaDePesquisa from "./screens/TelaDePesquisa";
import Carrinho from "./components/Carrinho";
import Property1Frame71 from "./components/Property1Frame71";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "InriaSans-Bold": require("./assets/fonts/InriaSans-Bold.ttf"),
    "InriaSans-LightItalic": require("./assets/fonts/InriaSans-LightItalic.ttf"),
    "InriaSans-BoldItalic": require("./assets/fonts/InriaSans-BoldItalic.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="TelaPrincipal"
              component={TelaPrincipal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CervejaArtezanaladd"
              component={CervejaArtezanaladd}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestaurantMoes"
              component={RestaurantMoes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestauranteBiladen"
              component={RestauranteBiladen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerTudo"
              component={VerTudo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JuiceBurstadd"
              component={JuiceBurstadd}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sucos"
              component={Sucos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cervejas"
              component={Cervejas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DrPepperadd"
              component={DrPepperadd}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Refrigerantes"
              component={Refrigerantes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Historico"
              component={Historico}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Perfil"
              component={Perfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaDePesquisa"
              component={TelaDePesquisa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Carrinho"
              component={Carrinho}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
