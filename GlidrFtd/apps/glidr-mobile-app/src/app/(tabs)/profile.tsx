import { ScrollView } from "react-native";
import { router } from "expo-router";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileMenuItem from "@/components/profile/ProfileMenuItem";

export default function ProfileScreen() {

    return (

        <ScrollView>

            <ProfileHeader

                name="Abdulwahab"

                email="adamson@gmail.com"

                avatar={require("@/assets/images/profile.jpg")}

            />

            <ProfileMenuItem

                title="Orders"

                icon="shopping-bag"

                onPress={() => router.push("/orders")}

            />

            <ProfileMenuItem

                title="My Details"

                icon="user"

                onPress={() => router.push("/profile/details")}

            />

            <ProfileMenuItem

                title="Delivery Address"

                icon="map-pin"

                onPress={() => router.push("/profile/address")}

            />

            <ProfileMenuItem

                title="Payment Methods"

                icon="credit-card"

                onPress={() => router.push("/profile/payment")}

            />

            <ProfileMenuItem

                title="Promo Codes"

                icon="tag"

                onPress={() => router.push("/profile/promo")}

            />

            <ProfileMenuItem

                title="Help"

                icon="help-circle"

                onPress={() => router.push("/profile/help")}

            />

            <ProfileMenuItem

                title="About"

                icon="info"

                onPress={() => router.push("/profile/about")}

            />

            <ProfileMenuItem

                title="Settings"

                icon="settings"

                onPress={() => router.push("/profile/settings")}

            />

        </ScrollView>

    );

}