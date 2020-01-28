function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, 'has logged in');
};
User.prototype.logout = function () {
    this.online = false;
    console.log(this.email, 'has logged out');
};

function Admin(...args) { // ...args make the input from "new Admin" into an array, so later args is used instead of hardtyping all the argumetns in the array
    User.apply(this, args); //"this" binds the context of the "new Admin" to apply it into the "function User", so later it inherits the other "this." 
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (u) {
    users = users.filter(users => {
        return user.email != u.email;
    });
};

var userOne = new User('ryan@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];
console.log(admin);

