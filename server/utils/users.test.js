const { Users } = require('./users');
const expect = require('expect');

var users;
beforeEach(() => {
    users = new Users();
    users.users = [{
        id: '1',
        name: "Mike",
        room: "Node"
    }, {
        id: '2',
        name: "Pavan",
        room: "Node"
    }, {
        id: '3',
        name: "Andrew",
        room: "React"
    }]
});

describe('Users', () => {
    it('should add new user', () => {
        var users = new Users();
        var user = { id: 123, name: "Pavan", room: "Mane Mandi" };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });
    it('shoud names for Node', () => {
        var userList = users.getUserList('Node');
        expect(userList).toEqual(['Mike', 'Pavan']);
    });
    it('shoud names for React', () => {
        var userList = users.getUserList('React');
        expect(userList).toEqual(['Andrew']);
    });
    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });
    it('should not remove a user', () => {
        var userId = '4';
        var user = users.removeUser(userId);
        expect(users.users.length).toBe(3);
        expect(user).toNotExist();
    });
    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe('2');
    });
    it('should not find user', () => {
        var userId = '4';
        var user = users.getUser(userId);
        expect(user).toNotExist();
    });
});