package com.example.adminpage.controller;

import com.example.adminpage.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public String getUsers(Model model) {
        model.addAttribute("users", userRepository.findAll());
        return "Users";
    }
    @GetMapping("/search/{searchType}/{query}")
    public String search(@PathVariable("searchType") String searchType, @PathVariable("query") String query, Model model) {
        switch (searchType) {
            case "id":
//                model.addAttribute("users", userRepository.findAllByUserId(Integer.parseInt(query)));
                userRepository.findAllByUserId(Integer.parseInt(query)).ifPresent(user -> model.addAttribute("users", user));
                System.out.println("UserController.user"+model);
                break;
            case "name":
                model.addAttribute("users", userRepository.findAllByNameContaining(query));
                break;
            default:
        }
        System.out.println("UserController.user*******"+model);
        return "Users";
    }
}