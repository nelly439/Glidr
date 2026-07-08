// import {
//   FlatList,
//   StyleSheet,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { router } from "expo-router";

// import {
//   CartItemCard,
//   CartSummary,
//   EmptyCart,
// } from "@/components/cart";

// import { useCart } from "@/hooks/useCart";

// export default function CartScreen() {

//   const {
//     cartItems,
//     updateQuantity,
//     removeFromCart,
//     getSubtotal,
//   } = useCart();

//   if (cartItems.length === 0) {

//     return (
//       <EmptyCart onExplore={() => router.push("/")} />
//     );

//   }

//   return (

//     <SafeAreaView
//       style={styles.container}
//       edges={["top"]}
//     >

//       <FlatList

//         data={cartItems}

//         keyExtractor={(item) => item.id}

//         showsVerticalScrollIndicator={false}

//         contentContainerStyle={{
//           paddingBottom: 20,
//         }}

//         renderItem={({ item }) => (

//           <CartItemCard

//             item={item}

//             onIncrease={() =>
//               updateQuantity(
//                 item.id,
//                 item.quantity + 1
//               )
//             }

//             onDecrease={() => {

//               if (item.quantity <= 1) {

//                 removeFromCart(item.id);

//                 return;

//               }

//               updateQuantity(
//                 item.id,
//                 item.quantity - 1
//               );

//             }}

//             onRemove={() =>
//               removeFromCart(item.id)
//             }

//           />

//         )}

//         ListFooterComponent={
//           <CartSummary subtotal={getSubtotal()} />
//         }

//       />

//     </SafeAreaView>

//   );

// }

// const styles = StyleSheet.create({

//   container: {

//     flex: 1,

//     backgroundColor: "#F8F8F8",

//     paddingHorizontal: 20,

//   },

// });
import CartScreen from "@/screens/cart/CartScreen";

export default CartScreen;