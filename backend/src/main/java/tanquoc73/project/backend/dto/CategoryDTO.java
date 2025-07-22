package tanquoc73.project.backend.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class CategoryDTO {
    private UUID id;
    private String name;
    private String slug;
    private UUID parentId;
    private String parentName;
}
