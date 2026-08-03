package com.example.demo.controller;

import com.example.demo.entity.Question;
import com.example.demo.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/que*tions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @PostMapping
    public Question createQuestion(
            @RequestBody Question question) {

        return questionService.saveQuestion(question);
    }

    @GetMapping
    public List<Question> getAllQuestions() {

        return questionService.getAllQuestions();
    }
}