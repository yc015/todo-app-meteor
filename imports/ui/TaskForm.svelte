<!-- Source code can be found https://svelte-tutorial.meteor.com/simple-todos/03-forms-and-events.html -->

<script>
    // Import the connection with task database
    import { TasksCollection } from '../api/TasksCollection';

    // Initialize the description of the new todo task
    let newTask = '';

    const handleSubmit = () => {
        // Insert a task into the collection
        TasksCollection.insert({
            text: newTask,         // Insert the text from user input
            createdAt: new Date(), // use current time as the created time
        });

        // Clear form
        newTask = '';
    }
</script>

<!-- Visual layout of the task form -->
<!-- Set the handleSubmit as the on submit action for this form -->
<!-- Wrap the handleSubmit with a preventDefault modifier to prevent default behavior from the browser -->
<form class="task-form" on:submit|preventDefault={handleSubmit}>
    <!-- Input form for user to enter the description of the task -->
    <!-- Bind the value of the input box with the newTask variable -->
    <!-- So newTask variable got updated when value of the input box changes -->
    <input
            type="text"
            name="text"
            placeholder="Type to add new tasks"
            bind:value={newTask}
    />
    <!-- Button for submit the form -->
    <button type="submit">Add Task</button>
</form>
