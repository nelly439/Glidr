package com.productservice.glidr.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "shopping_list_item")
@Getter
@Setter
@NoArgsConstructor
public class ShopListItem {
    @Id
    private String id = UUID.randomUUID().toString();
    private String shoppingListId;
    private String productId;
    private Integer quantity;
}
