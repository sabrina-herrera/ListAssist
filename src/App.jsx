import { useState } from 'react'
import './App.css'
import Item from './Item';
import TableHead from './TableHead';

function App() {
  const [items, setItems] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [sortConfig, setSortConfig] = useState('name');
  const [sortDirection, setSortDirection] = useState('des');

  function submit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.item.value;
    const category = form.category.value;
    const priority = form.priority.value;
    const input = {
      id: items.length + 1,
      name: name,
      category: category,
      priority: priority,
      isComplete: false
    };
    const newItems = [...items, input];
    setItems(newItems);
    form.reset();
  }

  function onDelete(itemToDelete) {
    const newItems = items.filter((item) => {
      return item.id !== itemToDelete.id;
    });
    setItems(newItems);
  }

  function toggleComplete(id) {
    let checkbox = document.getElementById(`${id}checkbox`);
    items.map((item) => {
      if(item.id === id){
        if(checkbox.checked) {
          item.isComplete = true;
        } else {
          item.isComplete = false;
        }
      }});

    completed.map((item) => {
      if(item.id === id){
        if(checkbox.checked) {
          item.isComplete = true;
        } else {
          item.isComplete = false;
        }
      }});

    let newItems = [];
    let newCompleted = [];
    items.filter((item) => {
      item.isComplete === false ? newItems.push(item) : newCompleted.push(item);
      });
    
    completed.filter((item) => {
      item.isComplete === false ? newItems.push(item) : newCompleted.push(item);
      });
    setItems(newItems);    
    setCompleted(newCompleted);
  }

  function onChange(e, id) {
    const name = e.target.name;
    const newValue = e.target.value;

    const editValue = items.map((item) => 
      item.id === id && name ? {...item, [name]:newValue} : item
    )
    setItems(editValue);
}

  function onSort(field) {
    setSortConfig(field);
    if(sortDirection === 'asc') {
      setSortDirection('des')
    } else {
      setSortDirection('asc');
    };
    let sortedItems = [...items];
    let sortedCompleted = [...completed];
    if (sortConfig !== null) {
      if(sortDirection === 'asc'){
        sortedItems.sort((a, b) => {
          if (a[sortConfig] < b[sortConfig]) {
            return -1;
          } if (a[sortConfig] > b[sortConfig]) {
            return 1;
          } else {
            return 0;
          }
        });
        sortedCompleted.sort((a, b) => {
          if (a[sortConfig] < b[sortConfig]) {
            return -1;
          } if (a[sortConfig] > b[sortConfig]) {
            return 1;
          } else {
            return 0;
          }
        })
      } else if(sortDirection === 'des') {
          sortedItems.sort((a, b) => {
            if (a[sortConfig] < b[sortConfig]) {
              return 1;
            } if (a[sortConfig] > b[sortConfig]) {
              return -1;
            } else {
              return 0;
            }
          });
          sortedCompleted.sort((a, b) => {
            if (a[sortConfig] < b[sortConfig]) {
              return 1;
            } if (a[sortConfig] > b[sortConfig]) {
              return -1;
            } else {
              return 0;
            }
          });
        }
    setItems(sortedItems);
    setCompleted(sortedCompleted);
    }
  }



  return (
    <>
      <h1>List Assist</h1>
      <h2>Add items to your list to get started</h2>
      <form onSubmit={submit} >
        <div>
          <label>item</label>
          <input
            type="text"
            name="item"
            required
          />
        </div>
        <div>
          <label>category</label>
          <input
            type="text"
            name="category"
          />
        </div>
        <div>
          <label>priority</label>
          <select 
            name="priority">
            <option value="LOW">
              LOW
            </option>
            <option value="MID">
              MID
            </option>
            <option value="HIGH">
              HIGH
            </option>
          </select>
        </div>
          <button type="submit" >
            Add
          </button>
        
      </form>
      <table>
        <caption>Items To Complete</caption>
        <thead>
          < TableHead onSort={onSort} />
        </thead>
        <tbody>
          {items.map((item) => 
            !item.isComplete ? (
                < Item key={item.id} item={item} onDelete={onDelete} onChange={onChange} toggleComplete={toggleComplete}/>
              ) : null)}
        </tbody>
      </table>
      <table>
        <caption>Completed Items</caption>
        <thead>
          < TableHead onSort={onSort} />
        </thead>
        <tbody>
          {completed.map((item) => 
            item.isComplete ? (
                < Item key={item.id + "complete"} item={item} onDelete={onDelete} onChange={onChange} toggleComplete={toggleComplete}/>
              ) : null)}
        </tbody>
      </table>
    </>
  )
}

export default App
