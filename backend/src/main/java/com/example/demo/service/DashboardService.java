package com.example.demo.service;

import com.example.demo.dto.AdminDashboardResponse;
import com.example.demo.dto.StudentDashboardResponse;
import com.example.demo.dto.TeacherDashboardResponse;
import com.example.demo.repository.AssessmentRepository;
import com.example.demo.repository.ResultRepository;
import com.example.demo.repository.SubmissionRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AssessmentRepository assessmentRepository;

    @Autowired
    private SubmissionRepository submissionRepository;

    @Autowired
    private ResultRepository resultRepository;

    public AdminDashboardResponse getAdminDashboard() {

        AdminDashboardResponse response =
                new AdminDashboardResponse();

        response.setTotalUsers(
                userRepository.count());

        response.setTotalAssessments(
                assessmentRepository.count());

        response.setTotalSubmissions(
                submissionRepository.count());

        response.setTotalResults(
                resultRepository.count());

        return response;
    }

    public TeacherDashboardResponse getTeacherDashboard() {

        TeacherDashboardResponse response =
                new TeacherDashboardResponse();

        response.setTotalAssessments(
                assessmentRepository.count());

        response.setTotalSubmissions(
                submissionRepository.count());

        return response;
    }

    public StudentDashboardResponse getStudentDashboard() {

        StudentDashboardResponse response =
                new StudentDashboardResponse();

        response.setCompletedAssessments(
                submissionRepository.count());

        return response;
    }
}