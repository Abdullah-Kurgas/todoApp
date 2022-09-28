import './HeaderItem.css';
import { changePage } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

function HeaderItem({clickedItem}) {
    let page = useSelector((state) => state.page);
    let dispatch = useDispatch();

    return (
    <div 
        className={`header-item ${page.toUpperCase() === clickedItem.toUpperCase() ? 'selected':'' }`} 
        onClick={()=>dispatch(changePage(clickedItem))}>
        {clickedItem.toUpperCase()}
    </div>
    )
}

export default HeaderItem;