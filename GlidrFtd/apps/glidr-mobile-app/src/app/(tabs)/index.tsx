import { CategoriesSection, HomeHeader, SearchBar } from "@/components/home";
// import { BottomNavigation } from "@/components/navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";


import { user } from "@/mock/user.data";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <HomeHeader
                userName={user.firstName}
                storeName={user.currentStore}
            />
            <SearchBar editable={false} onPress={() => router.push("/search")} />
            <CategoriesSection />
            {/* <BottomNavigation /> */}
        </SafeAreaView>
    );
}