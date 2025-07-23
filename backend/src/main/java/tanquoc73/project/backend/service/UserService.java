package tanquoc73.project.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import tanquoc73.project.backend.model.User;
import tanquoc73.project.backend.repository.UserRepository;

import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ClientRegistrationRepository clientRegistrationRepository;

    @Autowired
    private OAuth2AuthorizedClientService authorizedClientService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User createUserFromOAuth2(OAuth2User oauth2User) {
        String email = oauth2User.getAttribute("email");
        String fullName = oauth2User.getAttribute("name");
        String avatarUrl = oauth2User.getAttribute("picture");
        String googleId = oauth2User.getAttribute("sub");

        // Kiểm tra xem user đã tồn tại chưa
        User existingUser = userRepository.findByEmail(email)
                .orElse(null);

        if (existingUser != null) {
            // Nếu user đã tồn tại, cập nhật thông tin mới
            existingUser.setFullName(fullName);
            existingUser.setAvatarUrl(avatarUrl);
            existingUser.setGoogleId(googleId);
            return userRepository.save(existingUser);
        }

        // Tạo user mới
        User newUser = new User();
        newUser.setEmail(email);
        newUser.setFullName(fullName);
        newUser.setAvatarUrl(avatarUrl);
        newUser.setGoogleId(googleId);
        return userRepository.save(newUser);
    }

    public User registerUser(String email, String password, String fullName) {
        // Kiểm tra xem email đã tồn tại chưa
        if (userRepository.findByEmail(email).isPresent()) {
            throw new RuntimeException("Email đã được sử dụng");
        }

        // Tạo user mới
        User newUser = new User();
        newUser.setEmail(email);
        newUser.setPassword(password);
        newUser.setFullName(fullName);
        
        return userRepository.save(newUser);
    }

    public User getCurrentUser() {
        // TODO: Implement method to get current logged in user
        return null;
    }
}
