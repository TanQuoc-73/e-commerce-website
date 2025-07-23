package tanquoc73.project.backend.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
public class ProductDTO {
    private UUID id;
    private String name;
    private String slug;
    private String description;
    private BigDecimal price;
    private Integer stock;
    private UUID categoryId;
    private String categoryName;
    private String imageUrl;
}
