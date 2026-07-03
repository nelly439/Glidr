import {
    Image,
    ImageSourcePropType,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
// import { categories } from "@/mock";
// import { Category } from "@/types/category";

interface CategoryCardProps {
    title: string;
    image: ImageSourcePropType;
    onPress?: () => void;
    // category : Category
}

export default function CategoryCard({
    title,
    image,
    onPress,
}: CategoryCardProps) {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={image}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>

            

            <Text
                numberOfLines={2}
                style={styles.title}
            >
                {title}
            </Text>
        </Pressable>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: 175,

        backgroundColor: "#FFFFFF",

        borderRadius: 18,

        padding: 16,

        marginBottom: 16,

        alignItems: "center",

        shadowColor: "#000",

        shadowOpacity: 0.05,

        shadowRadius: 8,

        elevation: 3,
    },

    imageContainer: {
        width: 85,

        height: 85,

        justifyContent: "center",

        alignItems: "center",
    },

    image: {
        width: "100%",

        height: "100%",
    },

    title: {
        marginTop: 14,

        textAlign: "center",

        fontSize: 15,

        fontWeight: "600",

        color: "#1A1A1A",
    },
});
