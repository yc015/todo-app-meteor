<script>
    import { TasksCollection } from '../api/TasksCollection';
  
    export let task;
  
    const toggleChecked = () => {
      // Set the isChecked property to the opposite of its current value
      TasksCollection.update(task._id, {
        $set: { isChecked: !task.isChecked }
      });
    };
    
    const deleteThisTask = () => {
        TasksCollection.remove(task._id);
    };
</script>

<style>
.is-complete {
        /* Line cross the complete todo item */
        text-decoration: line-through;
        /* Mark the complete todo item in green */
        color: green;
    }
</style>

<li>
    <input
            type="checkbox"
            readonly
            checked={!!task.isChecked}
            on:click={toggleChecked}
    />
    {#if task.isChecked}
      <span class="is-complete">{ task.text }</span>
    {:else}
      <span>{ task.text }</span>
    {/if}
    <button class="delete" on:click={deleteThisTask}>&times;</button>
</li>