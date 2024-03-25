import { ProjectManager } from './Project';

class ActiveProject {
    private activeProject: ProjectManager | null = null;

    setActiveProject(project: ProjectManager): void {
        this.activeProject = project;
       
        localStorage.setItem('activeProject', JSON.stringify(project));
    }
    getActiveProject(): ProjectManager | null {
        return this.activeProject;
    } 
}

export { ActiveProject };