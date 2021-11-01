const fs = require('fs');

let users = require('data/users.json');

export const usersRepo = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

function getAll() {
    console.log("usersRepo.getAll()")
    return users;
}

function getById(id) {
    console.log("usersRepo.getById(id): " + id)
    return users.find(x => x.id.toString() === id.toString());
}

function create({ title, firstName, lastName, email, role, usercode }) {
    const user = { title, firstName, lastName, email, role, usercode };
    console.log("usersRepo.create(user): " + JSON.stringify(user))

    // validate
    if (users.find(x => x.email === user.email))
        throw `User with the email ${user.email} already exists`;

    // generate new user id
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    // set date created and updated
    user.createDts = new Date().toISOString();
    user.updateDts = new Date().toISOString();

    // add and save user
    users.push(user);
    saveData();
}

function update(id, { title, firstName, lastName, email, role, usercode }) {
    const params = { title, firstName, lastName, email, role, usercode };
    const user = users.find(x => x.id.toString() === id.toString());

    // validate
    if (params.email !== user.email && users.find(x => x.email === params.email))
        throw `User with the email ${params.email} already exists`;

    // only update usercode if entered
    if (!params.usercode) {
        delete params.usercode;
    }

    // set date updated
    user.updateDts = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    console.log("usersRepo._delete(id): " + id)
    // filter out deleted user and save
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}