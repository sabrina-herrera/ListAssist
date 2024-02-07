function TableHead({ onSort }) {
    return ( 
        <tr>
            <th>Complete</th>
            <th>
                <button type="button" onClick={() => onSort('name')}>
                    Item
                </button>
            </th>
            <th>
                <button type="button" onClick={() => onSort('category')}>
                    Category
                </button>
            </th>
            <th>
                <button type="button" onClick={() => onSort('priority')}>
                    Priority
                </button>
            </th>
            <th>Delete</th>
        </tr>
)}

export default TableHead