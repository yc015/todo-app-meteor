Yida Chen

# Content
./client/main.js: The javascript that will be launched on the client side
./client/main.html: A view template for the todo app on the client side
./client/main.css: A css file that styles the appearance of the todo app on the client side 
./server/main.js: The javascript that will be launched on the server side (connecting with MongoDB database)

# How to interact with the todo app

1. Install meteor on your machine: (1) for Linux and OS X: `curl https://install.meteor.com/ | sh` and (2) for Winodws, please first install Node.js ([link](https://nodejs.org/en/)), then run `npm install -g meteor`.
2. Clone this project via `git clone`
3. Go to the top directory of the project folder, run `meteor run`
4. Open the todo app in your browser. The app is on `http://localhost:3000/`
5. To add a new task, enter the description of your task at the top input box and click `Add Task` button.
6. To mark a task as complete, check off the checkbox on the left of the task.
7. To delete a task, click the red cross button on the right of the task.
8. To hide the tasks that are complete, hit the `Hide Completed` button below the top input box. To show all tasks, hit the button again.
9. The header of the app tells you how many of your tasks are still ongoing in the parentheses.

# References
The creation of this app using the source code from Python Engineer's tutorial "Python Flask Beginner Tutorial - Todo App," [https://svelte-tutorial.meteor.com/simple-todos/01-creating-app.html](https://svelte-tutorial.meteor.com/simple-todos/01-creating-app.html). 

Additional references to the source code can be found in the comment at the top of each file.
