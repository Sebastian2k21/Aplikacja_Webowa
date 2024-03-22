interface Project {
    id: number;
    name: string;
    description: string;
  }
  interface ProjectHistory {
    id: number;
    name: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    projectId: number;
    creationDate: Date;
    status: 'todo' | 'doing' | 'done';  
    ownerId: number;
  }
  
  class ProjectService {
    private projects: Project[];
  
    constructor() {
      const projectsFromStorage = localStorage.getItem('projects');
      this.projects = projectsFromStorage ? JSON.parse(projectsFromStorage) : [];
    }
  
    getAllProjects(): Project[] {
      return this.projects;
    }
  
    getProjectById(id: number): Project | undefined {
      return this.projects.find(project => project.id === id);
    }
  
    addProject(project: Project): void {
      this.projects.push(project);
      this.saveProjectsToStorage();
    }
  
    updateProject(updatedProject: Project): void {
      const index = this.projects.findIndex(project => project.id === updatedProject.id);
      if (index !== -1) {
        this.projects[index] = updatedProject;
        this.saveProjectsToStorage();
      }
    }
  
    deleteProject(id: number): void {
      this.projects = this.projects.filter(project => project.id !== id);
      this.saveProjectsToStorage();
    }
  
    private saveProjectsToStorage(): void {
      localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    setActiveProject(projectId: number): void {
      const project = this.projects.find(p => p.id === projectId);
      if (project) {
        localStorage.setItem('activeProject', JSON.stringify(project));
      } else {
        console.error('Project not found');
      }
    }
  
    getActiveProject(): Project | null {
      const activeProjectJSON = localStorage.getItem('activeProject');
      return activeProjectJSON ? JSON.parse(activeProjectJSON) : null;
    }
  }
  
 
  const projectService = new ProjectService();
  
  
  const newProject: Project = { id: 1, name: 'Project 1', description: 'Description of Project 1' };
  projectService.addProject(newProject);

  const allProjects = projectService.getAllProjects();
  console.log(allProjects);
  

  const projectToUpdate = projectService.getProjectById(1);
  if (projectToUpdate) {
    projectToUpdate.name = 'Updated Project 1';
    projectService.updateProject(projectToUpdate);
  }
  
 
  projectService.deleteProject(1);
  