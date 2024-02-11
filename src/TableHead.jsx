function TableHead({ setSortConfig, click, setClick }) {

    return ( 
        <tr>
            <th className="column1">&#10003;</th>
            <th className="column2">
                <button type="button" className="sortName" onClick={() => {setSortConfig('name'); setClick(!click)}}>
                    Item &uarr;&darr;
                </button>
            </th>
            <th className="column3">
                <button type="button" className="sortCategory" onClick={() => {setSortConfig('category'); setClick(!click)}}>
                    Category &uarr;&darr;
                </button>
            </th>
            <th className="column4" >
                <button type="button" className="sortPriority" onClick={() => {setSortConfig('priority'); setClick(!click)}}>
                    Priority&uarr;&darr;
                </button>
            </th>
            <th className="column5" >&#10005;</th>
        </tr>
)}

export default TableHead