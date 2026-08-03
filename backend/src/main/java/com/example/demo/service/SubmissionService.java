package com.example.demo.service;

import com.example.demo.entity.Submission;
import com.example.demo.repository.SubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubmissionService {

    @Autowired
    private SubmissionRepository submissionRepository;

    public Submission saveSubmission(
            Submission submission) {

        return submissionRepository.save(submission);
    }

    public List<Submission> getAllSubmissions() {

        return submissionRepository.findAll();
    }
}