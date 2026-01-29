package com.aryan.portfolio.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aryan.portfolio.entity.Project;
import com.aryan.portfolio.repository.ProjectRepository;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.CrossOrigin;



@CrossOrigin(origins = "http://localhost:3000")



@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }



@PostMapping
public Project createProject(@RequestBody Project project) {
    return projectRepository.save(project);
}
}
