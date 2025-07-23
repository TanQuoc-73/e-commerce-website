package tanquoc73.project.backend.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
public class ReviewDTO {
    private UUID id;
    private UUID productId;
    private String productName;
    private UUID userId;
    private String userName;
    private Integer rating;
    private String comment;
    private LocalDateTime createdAt;
}
