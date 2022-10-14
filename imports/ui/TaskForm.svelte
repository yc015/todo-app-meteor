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

<form class="task-form" on:submit|preventDefault={handleSubmit}>
    <input
            type="text"
            name="text"
            placeholder="Type to add new tasks"
            bind:value={newTask}
    />
    <button type="submit">Add Task</button>
</form>
