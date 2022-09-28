import { useRef } from 'react';
import './AddForm.css';

function AddForm({ addTodo }) {
    const ref = useRef(null);
    let inputValue;

    let inputChange = (value) => {
        inputValue = value;
    }

    return <div className='addForm'>
        <input ref={ref} type="text" placeholder='Type todo...' onChange={(e) => inputChange(e.target.value)} />
        <button onClick={() => {
            addTodo(inputValue);
            ref.current.value = '';
        }}>Add</button>
    </div>
}

export default AddForm;