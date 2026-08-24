import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DashboardPresenterScreen } from "@/presentation/DashboardPresenterScreen";
import { CreateTaskPresenterScreen } from "@/presentation/CreateTaksPresenterScreen";
import { StartPresenterScreen } from "@/presentation/StartPresenterScreen";
import { RegisterPresenterScreen } from "@/presentation/RegisterPresenterScreen";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Start"
          component={StartPresenterScreen}
        />

        <Stack.Screen
          name="Register"
          component={RegisterPresenterScreen}
        />
        
        <Stack.Screen
          name="Dashboard"
          component={DashboardPresenterScreen}
        />

        <Stack.Screen
          name="CreateTask"
          component={CreateTaskPresenterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};