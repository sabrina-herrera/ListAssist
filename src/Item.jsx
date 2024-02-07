function Item({ item, onDelete, onChange, toggleComplete }) {

    return (
            <tr>
                <td>
                    <input type="checkbox" 
                           id={item.id + 'checkbox'} 
                           checked={item.isComplete} 
                           onChange={() => toggleComplete(item.id)}>
                    </input>
                </td>
                <td><input 
                        name="item"
                        value={item.name}
                        type='text'
                        className="input"
                        onChange={(e) => onChange(e, item.id)}
                    />
                </td>
                <td>
                    <input 
                        name="category"
                        value={item.category}
                        type="text"
                        className="input"
                        onChange={(e) => onChange(e, item.id)}
                    />
                </td>
                <td>
                    <select 
                        name="priority"
                        value={item.priority}
                        className="input" 
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
                <td><button onClick={() => onDelete(item)} >X</button></td>
            </tr>
    )
}

export default Item