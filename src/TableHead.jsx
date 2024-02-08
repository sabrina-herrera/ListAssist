function TableHead({ onSort }) {
    return ( 
        <tr>
            <th className="header">Complete</th>
            <th>
                <button className="header" type="button" onClick={() => onSort('name')}>
                    Item &uarr;&darr;
                </button>
            </th>
            <th>
                <button className="header" type="button" onClick={() => onSort('category')}>
                    Category &uarr;&darr;
                </button>
            </th>
            <th>
                <button className="header" type="button" onClick={() => onSort('priority')}>
                    Priority &uarr;&darr;
                </button>
            </th>
            <th className="header" >Delete</th>
        </tr>
)}

export default TableHead