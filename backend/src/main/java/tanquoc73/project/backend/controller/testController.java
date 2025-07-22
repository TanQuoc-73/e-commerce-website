package tanquoc73.project.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {
    @GetMapping("/e-commerce")
    public String home(){
        return "API website e-commerce hoạt động !!!";
    }
    @GetMapping("/e-commerce/test")
    public String testAPI(){
        return "API dang chay !!!";
    }
}
