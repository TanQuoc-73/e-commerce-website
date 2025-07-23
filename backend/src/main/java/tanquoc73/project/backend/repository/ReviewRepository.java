package tanquoc73.project.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tanquoc73.project.backend.model.Review;

import java.util.List;
import java.util.UUID;

@Repository
public interface ReviewRepository extends JpaRepository<Review, UUID> {
    List<Review> findByProductId(UUID productId);
    List<Review> findByUserId(UUID userId);
    List<Review> findByProductIdAndUserId(UUID productId, UUID userId);
}
