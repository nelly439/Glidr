// import { Tabs } from "expo-router";

// export default function TabsLayout() {
//   return (
//     <Tabs screenOptions={{ headerShown: false }}>
//       <Tabs.Screen name="index" />
//       <Tabs.Screen name="lists" />
//       <Tabs.Screen name="cart" />
//       <Tabs.Screen name="orders" />
//       <Tabs.Screen name="profile" />
//     </Tabs>

//   );
// }
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#18B7AE",
        tabBarInactiveTintColor: "#1A1A1A",

        tabBarStyle: {
          height: 70,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "#FFFFFF",
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Discover",

          tabBarIcon: ({ color, size }) => (
            <Feather
              name="search"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="lists"
        options={{
          title: "Lists",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",

          tabBarIcon: ({ color, size }) => (
            <Feather
              name="shopping-cart"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ color, size }) => (
            <Feather
              name="user"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}