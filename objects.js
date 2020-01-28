class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now ', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email; // if not equal it will return true so the filter wont do anything
        });

    }
}
var userOne = new User('ryan@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('alex@ninjas.com', 'Alex');
var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);

console.log(users);