

  class User {
    id: number;
    firstName: string;
    lastName: string;
  
    constructor(id: number, firstName: string, lastName: string) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  class UserService {
    private loggedInUser: User;
  
    constructor() {
      
      this.loggedInUser = new User(1, 'Jan', 'Kowalski');
    }
  
    getLoggedInUser(): User {
      return this.loggedInUser;
    }
  }
  