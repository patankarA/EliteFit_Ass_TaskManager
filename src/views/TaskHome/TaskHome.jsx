import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import TaskForm from '../../components/TaskForm/TaskForm'
import TaskList from '../../components/TaskList/TaskList'
import { COMMON_TEXT } from '../../helper/constants'
import { taskSample } from '../../helper/tasks'

const TaskHome = () => {
  const [tasks, setTasks] = useState(taskSample);

  const retrieveTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem(COMMON_TEXT.STORAGE_TASK);
    storedTasks !== null && setTasks(JSON.parse(storedTasks));
  };

  useEffect(retrieveTasksFromLocalStorage, []);

  return (
    <div className="mainPageContainer">
        <Header title={COMMON_TEXT.TITLE}/>
        <div className="contentContainer">
            <div className="leftContainer">
                <TaskForm tasks={tasks} setTasks={setTasks}/>
                <TaskList tasks={tasks} setTasks={setTasks}/>
            </div>
        </div>
    </div>
  )
}

export default TaskHome