package tanquoc73.project.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({
    "tanquoc73.project.backend.controller",
    "tanquoc73.project.backend.service",
    "tanquoc73.project.backend.repository",
    "tanquoc73.project.backend.config"
})
public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}
