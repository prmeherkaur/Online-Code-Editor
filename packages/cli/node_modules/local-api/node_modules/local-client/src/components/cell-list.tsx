import useTypedSelector from '../hooks/use-typed-selector'
import CellListItem from './cell-list-item';
import AddCell from './add-cell';
import '../styles/cell-list.css'
import {useActions} from '../hooks/use-actions'
import { useEffect } from 'react';

const CellList:React.FC=()=>{
    const cells=useTypedSelector(({cells:{ order, data}})=>{
        return order.map((id)=>{
            return data[id];
        })
    });
    const {fetchCells, saveCells}=useActions();
    useEffect(() => {
        fetchCells()
    }, []);
    const renderedCells=cells.map((Cell)=>
        (
        <div key={Cell.id} >
            <CellListItem cell={Cell}/>
            <AddCell prevCellId={Cell.id} />
        </div>
        )
    )
    return <div className="cell-list">
        
        <AddCell forceVisible={cells.length===0} prevCellId={null} />
        {renderedCells}
    </div>
}
export default CellList;