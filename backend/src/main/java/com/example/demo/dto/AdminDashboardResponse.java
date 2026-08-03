package com.example.demo.dto;

import lombok.Data;

@Data
public class AdminDashboardResponse {

    private Long totalUsers;
    private Long totalAssessments;
    private Long totalSubmissions;
    private Long totalResults;
}