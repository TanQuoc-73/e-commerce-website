package tanquoc73.project.backend.controller;

import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tanquoc73.project.backend.service.UserService;
import tanquoc73.project.backend.model.User;

import java.security.Principal;

@RestController
@RequestMapping("/e-commerce/auth")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login")
    public String login() {
        return "redirect:/oauth2/authorization/google";
    }

    @GetMapping("/success")
    public String loginSuccess(Principal principal) {
        OAuth2User oauth2User = (OAuth2User) principal;
        userService.createUserFromOAuth2(oauth2User);
        return "redirect:/e-commerce";
    }

    @GetMapping("/error")
    public String loginError() {
        return "redirect:/e-commerce?error=true";
    }

    @GetMapping("/profile")
    public String profile(Principal principal) {
        OAuth2User oauth2User = (OAuth2User) principal;
        return oauth2User.getAttribute("email");
    }

    @GetMapping("/logout")
    public String logout() {
        return "redirect:/e-commerce";
    }

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {
        return userService.registerUser(request.getEmail(), request.getPassword(), request.getFullName());
    }

    private static class RegisterRequest {
        private String email;
        private String password;
        private String fullName;

        public String getEmail() {
            return email;
        }

        @SuppressWarnings("unused")
        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        @SuppressWarnings("unused")
        public void setPassword(String password) {
            this.password = password;
        }

        public String getFullName() {
            return fullName;
        }

        @SuppressWarnings("unused")
        public void setFullName(String fullName) {
            this.fullName = fullName;
        }
    }
}
