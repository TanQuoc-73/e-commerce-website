package tanquoc73.project.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tanquoc73.project.backend.model.Product;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID> {
    List<Product> findByCategoryId(UUID categoryId);
    List<Product> findBySlug(String slug);
    List<Product> findByNameContainingIgnoreCase(String name);
}
