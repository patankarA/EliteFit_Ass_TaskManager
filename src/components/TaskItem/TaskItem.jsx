import "./TaskItem.css";
import { COMMON_TEXT } from '../../helper/constants';
import { getDaysLeft } from '../../helper/helperFun';
import { useState } from "react";

const TaskItem = ({ status, items, id, tasks, setTasks }) => {
  const [draggedItemId, setDraggedItemId] = useState(null);

  const handleRemoveTask = (itemId) => {
    const updatedStores = [...tasks];
    const storeIndex = updatedStores.findIndex(store => store.id === id);
    if (storeIndex === -1) return;
    const itemIndex = updatedStores[storeIndex].items.findIndex(item => item.id === itemId);
    if (itemIndex === -1) return;
    updatedStores[storeIndex].items.splice(itemIndex, 1);
    localStorage.setItem(COMMON_TEXT.STORAGE_TASK, JSON.stringify(updatedStores))
    setTasks(updatedStores);
  };

  const handleDragStart = (itemId) => {
    setDraggedItemId(itemId);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Allows dropping
  };

  const handleDrop = (targetItemId) => {
    if (!draggedItemId || draggedItemId === targetItemId) return;

    const updatedStores = [...tasks];
    const storeIndex = updatedStores.findIndex(store => store.id === id);
    if (storeIndex === -1) return;

    const draggedIndex = updatedStores[storeIndex].items.findIndex(item => item.id === draggedItemId);
    const targetIndex = updatedStores[storeIndex].items.findIndex(item => item.id === targetItemId);
    if (draggedIndex === -1 || targetIndex === -1) return;

    // Swap items in the array
    const temp = updatedStores[storeIndex].items[draggedIndex];
    updatedStores[storeIndex].items[draggedIndex] = updatedStores[storeIndex].items[targetIndex];
    updatedStores[storeIndex].items[targetIndex] = temp;

    setTasks(updatedStores);
    setDraggedItemId(null); // Reset
  };

  return (
    <div className="mainContainer paddingStyle">
      <div className="store-container">
        <h3>{status}</h3>
        <span className="counter">{items?.length}</span>
      </div>
      <div className="items-container">
        {items?.map((item) => {
          const { id, name, priority, dueDate } = item;
          return (
            <div
              key={id}
              className="item-container"
              draggable
              onDragStart={() => handleDragStart(id)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(id)}
            >
              <div className="nameContainer">
                <div>
                  <h4 className="taskItemName">{name}</h4>
                  <h5 className="date">End date:- {dueDate}</h5>
                </div>
                <span className="crossStyles" onClick={() => handleRemoveTask(id)}>✕</span>
              </div>
              <div className="extraDetails">
                <span className={`chipstyle ${priority}`}>{priority}</span>
                <h5 className="date daysInput">{getDaysLeft(dueDate, true)}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskItem;
