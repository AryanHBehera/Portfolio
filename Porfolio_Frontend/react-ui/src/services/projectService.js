const API_URL = "http://localhost:8080/api/projects";

export const getAllProjects = async () => {
    const response = await fetch(API_URL);
    return response.json();
};
