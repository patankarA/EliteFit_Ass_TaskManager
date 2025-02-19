import React, { useState } from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ tasks, setTasks }) => {
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  // Drop handler - Rearranges tasks
  const handleDrop = (index) => {
      if (draggedItemIndex === null) return;

      const updatedTasks = [...tasks];
      const [movedTask] = updatedTasks.splice(draggedItemIndex, 1); // Remove dragged item
      updatedTasks.splice(index, 0, movedTask); // Insert at new position

      setTasks(updatedTasks);
      setDraggedItemIndex(null); // Reset
  };

  return (
    <div className="container">
        {tasks.map((task, index) => (
            <div
                key={task.id}
                className="item"
                draggable
                onDragStart={() => setDraggedItemIndex(index)}
                onDragOver={(e) => e.preventDefault()} // Allow drop
                onDrop={() => handleDrop(index)}
            >
                <TaskItem {...task} tasks={tasks} setTasks={setTasks} />
            </div>
        ))}
    </div>
  )
}

export default TaskList