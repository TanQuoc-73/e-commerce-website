package tanquoc73.project.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tanquoc73.project.backend.dto.ReviewDTO;
import tanquoc73.project.backend.model.Product;
import tanquoc73.project.backend.model.Review;
import tanquoc73.project.backend.model.User;
import tanquoc73.project.backend.repository.ProductRepository;
import tanquoc73.project.backend.repository.ReviewRepository;
import tanquoc73.project.backend.repository.UserRepository;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    public List<ReviewDTO> getAllReviews() {
        return reviewRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ReviewDTO> getReviewsByProduct(UUID productId) {
        return reviewRepository.findByProductId(productId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ReviewDTO> getReviewsByUser(UUID userId) {
        return reviewRepository.findByUserId(userId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public ReviewDTO getReviewById(UUID id) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found with id: " + id));
        return convertToDTO(review);
    }

    public ReviewDTO createReview(ReviewDTO reviewDTO) {
        Review review = new Review();
        
        // Kiểm tra và lấy product
        Product product = productRepository.findById(reviewDTO.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + reviewDTO.getProductId()));
        review.setProduct(product);
        
        // Kiểm tra và lấy user
        User user = userRepository.findById(reviewDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found with id: " + reviewDTO.getUserId()));
        review.setUser(user);
        
        // Kiểm tra rating
        if (reviewDTO.getRating() < 1 || reviewDTO.getRating() > 5) {
            throw new RuntimeException("Rating must be between 1 and 5");
        }
        review.setRating(reviewDTO.getRating());
        
        review.setComment(reviewDTO.getComment());
        
        // Kiểm tra xem user đã đánh giá sản phẩm này chưa
        if (reviewRepository.findByProductIdAndUserId(product.getId(), user.getId()).size() > 0) {
            throw new RuntimeException("User has already reviewed this product");
        }
        
        Review savedReview = reviewRepository.save(review);
        return convertToDTO(savedReview);
    }

    public void deleteReview(UUID id) {
        if (!reviewRepository.existsById(id)) {
            throw new RuntimeException("Review not found with id: " + id);
        }
        reviewRepository.deleteById(id);
    }

    private ReviewDTO convertToDTO(Review review) {
        ReviewDTO dto = new ReviewDTO();
        dto.setId(review.getId());
        dto.setProductId(review.getProduct().getId());
        dto.setProductName(review.getProduct().getName());
        dto.setUserId(review.getUser().getId());
        dto.setUserName(review.getUser().getFullName());
        dto.setRating(review.getRating());
        dto.setComment(review.getComment());
        dto.setCreatedAt(review.getCreatedAt());
        return dto;
    }
}
