# todo API

## root route [root](https://todoapi-khamees.herokuapp.com)

## registration endpoints

- endpoint: `/register`
- REQ: `post` [register](https://todoapi-khamees.herokuapp.com/register)

## login endpoints

- endpoint: `/login`
- REQ: `post` [login](https://todoapi-khamees.herokuapp.com/login)

## update user info endpoints

- endpoint: `/updateInfo/:userId`
- REQ: `put` [updateProfile](https://todoapi-khamees.herokuapp.com/updateInfo/:userId)
- `params` => user id

## Get user tasks endpoints

- endpoint: `/tasks`
- REQ: `get` [getAllTasks](https://todoapi-khamees.herokuapp.com/tasks)

## create new task for the user endpoints

- endpoint: `/tasks`
- REQ: `post` [creatTask](https://todoapi-khamees.herokuapp.com/tasks)

## Update user task endpoints

- endpoint: `/tasks/:taskId`
- REQ: `put` [updateTask](https://todoapi-khamees.herokuapp.com/tasks/:taskId)
- `params` => task id

## Delete user task endpoints

- endpoint: `/tasks/:taskId`
- REQ: `delete` [deleteTask](https://todoapi-khamees.herokuapp.com/tasks/:taskId)
- `params` => task id
