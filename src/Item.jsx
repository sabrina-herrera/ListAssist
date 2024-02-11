function Item({ item, onDelete, onChange, toggleComplete }) {

    return (
            <tr>
                <td className="column1" >
                    <input type="checkbox" 
                           id={item.id + 'checkbox'}
                           className='complete' 
                           checked={item.isComplete} 
                           onChange={() => toggleComplete(item.id)}>
                    </input>
                </td>
                <td className="column2" >
                        <textarea 
                        name="name"
                        value={item.name}
                        type='text'
                        className="iteminput"
                        onChange={(e) => onChange(e, item.id)}
                    />
                </td>
                <td className="column3" >
                    <textarea 
                        name="category"
                        value={item.category}
                        type="text"
                        className="categoryinput"
                        onChange={(e) => onChange(e, item.id)}
                    />
                </td>
                <td className="column4" >
                    <select 
                        name="priority"
                        value={item.priority}
                        className="priorityinput" 
                        onChange={(e) => onChange(e, item.id)}>
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
                </td>
                <td className="column5" ><button className="delete" onClick={() => onDelete(item)} >&#10005;</button></td>
            </tr>
    )
}

export default Item