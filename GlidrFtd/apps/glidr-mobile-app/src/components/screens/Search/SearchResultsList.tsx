import { router } from "expo-router";
import { FlatList } from "react-native";

import { Product } from "@/types";
import SearchResultCard from "./SearchResultCard";

interface Props {
    products: Product[];
}

export default function SearchResultsList({
    products,
}: Props) {
    if (products.length === 0){
        return null
    }
    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <SearchResultCard
                    product={item}
                    onPress={() =>
                        router.push(`/product/${item.id}`)
                    }
                />
            )}
        />
    );
}
