// Import the mongo database
import { Mongo } from 'meteor/mongo';
 
// Create and export the connection with tasks collectoon
export const TasksCollection = new Mongo.Collection('tasks');