package tanquoc73.project.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Tắt CSRF nếu không dùng form
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/test").permitAll() // Cho phép truy cập /test không cần đăng nhập
                .anyRequest().authenticated()         // Các route khác vẫn cần auth
            );
        return http.build();
    }
}
