import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DashboardPresenterScreen } from "@/presentation/DashboardPresenterScreen";
import { CreateTaskPresenterScreen } from "@/presentation/CreateTaksPresenterScreen";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
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