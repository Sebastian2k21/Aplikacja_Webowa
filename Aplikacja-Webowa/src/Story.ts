interface Story {
    id: number;
    name: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    projectId: number;
    creationDate: Date;
    status: 'todo' | 'doing' | 'done';
    ownerId: number;
  }
  function renderStories(stories: Story[]): void {
    const todoStories = stories.filter(story => story.status === 'todo');
    const doingStories = stories.filter(story => story.status === 'doing');
    const doneStories = stories.filter(story => story.status === 'done');
  
    
    const storiesContainer = document.getElementById('stories-container');
    if (storiesContainer) {
      storiesContainer.innerHTML = `
        <div class="stories-todo">
          <h2>Do zrobienia</h2>
          ${todoStories.map(story => `<div class="story">${story.name}</div>`).join('')}
        </div>
        <div class="stories-doing">
          <h2>W trakcie</h2>
          ${doingStories.map(story => `<div class="story">${story.name}</div>`).join('')}
        </div>
        <div class="stories-done">
          <h2>Gotowe</h2>
          ${doneStories.map(story => `<div class="story">${story.name}</div>`).join('')}
        </div>
      `;
    }
  }

  
  
  class StoryService {
    private stories: Story[] = [];
  
    constructor() {
      this.loadStoriesFromStorage();
    }
  
    private loadStoriesFromStorage() {
      const storiesFromStorage = localStorage.getItem('stories');
      this.stories = storiesFromStorage ? JSON.parse(storiesFromStorage) : [];
    }
  
    private saveStoriesToStorage() {
      localStorage.setItem('stories', JSON.stringify(this.stories));
    }
  
    getStoriesByProject(projectId: number): Story[] {
      return this.stories.filter(story => story.projectId === projectId);
    }
  
  

    
  }
  