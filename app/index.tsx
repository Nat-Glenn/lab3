// app/index.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';

export default function Index() {

  const [tasks, setTasks] = useState([
    'Do Laundry',
    'Go to gym',
    'Walk dog',
  ]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </SafeAreaView>
  );
}


