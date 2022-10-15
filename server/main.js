// Import meteor
import { Meteor } from 'meteor/meteor';
// Import the connection with task database
import { TasksCollection } from '/imports/api/TasksCollection';

// Arrow function for inserting given text `taskText` into the database
const insertTask = taskText => TasksCollection.insert({ text: taskText });
 
// When meteor starts run the following code
Meteor.startup(() => {
  // If no task in the database, then insert the following default task into the database
  // Currently, there is no default task. I intentionally reserve this part of the code for future reference.
  if (TasksCollection.find().count() === 0) {
    [].forEach(insertTask)
  }
});
