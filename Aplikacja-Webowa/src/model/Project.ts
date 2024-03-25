interface Project {
  id: string;
  name: string;
  description: string;
}


class ProjectManager {
  private storageKey = 'projects';

  getAllProjects(): Project[] { 
    const projects = localStorage.getItem(this.storageKey);
    return projects ? JSON.parse(projects) : []; 
  }


  addProject(name: string, description: string): Project {
    const newProject: Project = {
      id: crypto.randomUUID(),
      name,
      description,
    };
    const projects = this.getAllProjects();
    projects.push(newProject);
    localStorage.setItem(this.storageKey, JSON.stringify(projects));
    return newProject;
  }
  

  updateProject(id: string, name: string, description: string): Project | null {
    const projects = this.getAllProjects();
    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex !== -1) {
      projects[projectIndex] = { id, name, description };
      localStorage.setItem(this.storageKey, JSON.stringify(projects));
      return projects[projectIndex];
    }
    return null;
  }

  deleteProject(id: string): void {
    const projects = this.getAllProjects();
    const updatedProjects = projects.filter(project => project.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedProjects));
  }
}

export { ProjectManager };
