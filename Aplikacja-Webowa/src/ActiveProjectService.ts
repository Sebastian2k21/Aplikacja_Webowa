class ActiveProjectService {
    private currentProjectId: number | null = null;
  
    setCurrentProject(projectId: number): void {
      this.currentProjectId = projectId;
      localStorage.setItem('activeProject', projectId.toString());
    }
  
    getCurrentProject(): Project | undefined {
      if (this.currentProjectId === null) {
        return undefined;
      }
      
    }
  }
  