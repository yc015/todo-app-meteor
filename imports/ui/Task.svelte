<!-- Source code from the https://svelte-tutorial.meteor.com/simple-todos/01-creating-app.html#1-3-Create-Task-Component -->

<script>
    // Import the connection with tasks collection
    import { TasksCollection } from '../api/TasksCollection';
  
    // Export the task object
    export let task;
  
    // Toggle task function for updating the complete status of a task (specified by its id)
    const toggleChecked = () => {
      // Set the isChecked property to the opposite of its current value
      TasksCollection.update(task._id, {
        $set: { isChecked: !task.isChecked }
      });
    };
    
    // Delete task function for removing a task (specified by its id)
    const deleteThisTask = () => {
        TasksCollection.remove(task._id);
    };
</script>

<!-- Style of the list item element -->
<style>
  /* Cross the text and change text color to green when a todo task item is set to completed */
.is-complete {
        /* Line cross the complete todo item */
        text-decoration: line-through;
        /* Mark the complete todo item in green */
        color: green;
    }
</style>

<!-- Visual layout of the list item element -->
<li>
    <!-- Checkbox for marking/unmarking the completeness of a task -->
    <!-- Set the value of this checkbox element to readonly -->
    <!-- Add set the toggleChecked as its on click function -->
    <input
            type="checkbox"
            readonly
            checked={task.isChecked}
            on:click={toggleChecked}
    />
    <!-- If task is complete, color the text in green and cross it -->
    {#if task.isChecked}
      <span class="is-complete">{ task.text }</span>
    <!-- Otherwise, show it in the default appearance (black without line-through) -->
    {:else}
      <span>{ task.text }</span>
    {/if}
    <!-- Button for deleting a task, set deleteThisTask as its on click function -->
    <button class="delete" on:click={deleteThisTask}>&times;</button>
</li>