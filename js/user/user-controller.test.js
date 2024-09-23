const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('findByEmail user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findByEmail("santiago@generation.org").email).toBe("santiago@generation.org");
  });

  test('findByEmail user to userController', () => {    
    let user = new User(1234,"Antonio", "antonio@generation.org");
    userController.add(user);    
    expect(userController.findByEmail("antonio@generation.org").email).toBe("antonio@generation.org");
  });

  test('findByID user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findById(1234).id).toBe(1234);
  });

  test('findByID user to userController', () => {    
    let user = new User(1234,"Antonio", "Antonio@generation.org");
    userController.add(user);    
    expect(userController.findById(1234).id).toBe(1234);
  });


