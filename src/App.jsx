import { useState } from 'react'
import './App.css'
import Item from './Item';
import TableHead from './TableHead';

function App() {
  const [items, setItems] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [sortConfig, setSortConfig] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

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
    const newCompleted = completed.filter((item) => {
      return item.id !== itemToDelete.id;
    });
    setItems(newItems);
    setCompleted(newCompleted);
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

    const editCompletedValue = completed.map((item) => 
    item.id === id && name ? {...item, [name]:newValue} : item
    )
    setCompleted(editCompletedValue);
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
      <h1>LIST ASSIST</h1>
      <h2>ADD ITEMS TO YOUR LIST TO GET STARTED</h2>
      <form onSubmit={submit} >
        <div className="formdiv" >
          <label>Item</label>
          <input
            className="forminput"
            type="text"
            name="item"
            required
          />
        </div>
        <div className="formdiv" >
          <label>Category</label>
          <input
            className="forminput"
            type="text"
            name="category"
          />
        </div>
        <div className="formdiv" 
             id="priorityinputdiv">
          <label>Priority</label>
          <select 
            className="forminput"
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
        <button id="submitform" type="submit" >
          ADD
        </button>
        
      </form>
      <table>
        <caption>ITEMS TO BE COMPLETED</caption>
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
        <caption>COMPLETED ITEMS</caption>
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
      <p>*Edit list by clicking on a field</p>
    </>
  )
}

export default App
