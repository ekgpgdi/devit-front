package devit.devitfront;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @GetMapping("/sign-up")
    public String signUp(){
        return "sign-up";
    }

    @GetMapping("/social-sign-up")
    public String socialSignUp(){
        return "social-sign-up";
    }

    @GetMapping("/header")
    public String header(){
        return "header";
    }

    @GetMapping("/footer")
    public String footer(){
        return "footer";
    }

    @GetMapping("/board")
    public String board(){
        return "board";
    }

    @GetMapping("/point")
    public String point(){
        return "point";
    }

    @GetMapping("/payment")
    public String payment(){
        return "payment";
    }

}
