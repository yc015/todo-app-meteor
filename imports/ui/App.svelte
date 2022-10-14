<!-- Source code can be found from https://svelte-tutorial.meteor.com/simple-todos/06-filter-tasks.html -->

<script>
    // Import the task component 
    import Task from './Task.svelte';
    // Import the connection with task database
    import { TasksCollection } from '../api/TasksCollection';
    // Import the form for adding a todo task
    import TaskForm from './TaskForm.svelte';

    // hideCompleted indicate whether the full list or only the completed tasks should be displayed
    let hideCompleted = false;

    // Arrow function for setting the hideCompleted value
    const setHideCompleted = value =>  {
        hideCompleted = value;
    }

    // Hide complete filter that query mongodb for all tasks whose isChecked property is not true
    const hideCompletedFilter = { isChecked: { $ne: true } };

    // Count variable for the number of incomplete tasks
    let incompleteCount;
    // Title that shows how many tasks are incomplete
    let pendingTasksTitle = '';
    // Task array
    let tasks = [];

    // Make the query of tasks a reactive statement
    // Whenever its dependent value (hideCompleted) is changed, rerun this query 
    $m: {
        // Query the tasks in the database based on status of hideCompleted variable
        // If hideCompleted == true, use hideCompletedFilter to query the tasks so only the incomplete tasks show
        // Otherwise, show all tasks
        tasks = TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, { sort: { createdAt: -1 } }).fetch()

        // Count the number of ongoing tasks
        incompleteCount = TasksCollection.find(hideCompletedFilter).count();

        // Prepare the title that shows number of ongoing tasks
        pendingTasksTitle = `${
                incompleteCount ? ` (Ongoing ${incompleteCount})` : ''
        }`;
    }

</script>


<!-- Visual layout of the App component -->
<div class="app">
  <header>
    <!-- App header -->
    <div class="app-bar">
        <div class="app-header">
            <!-- To Do List + (number of ongoing tasks) -->
            <h1>📝️ To Do List {pendingTasksTitle}</h1>
        </div>
    </div>
  </header>

  <div class="main">
    <!-- Insert the form for adding todo task here -->
      <TaskForm />
      <div class="filter">
        <!-- Insert the hide complete task button here -->
        <!-- Set setHideCompeted as the onclick function -->
          <button on:click={() => setHideCompleted(!hideCompleted)}>
              {hideCompleted ? 'Show All' : 'Hide Completed'}
          </button>
      </div>

      <!-- List that show all todo items -->
      <ul class="tasks">
        <!-- Get every task and its id from the tasks array -->
          {#each tasks as task (task._id)}
            <!-- Pass the task object into the Task component -->
              <Task task={task} />
          {/each}
      </ul>
  </div>
</div>
