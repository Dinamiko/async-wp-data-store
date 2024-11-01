import {useDispatch, useSelect} from '@wordpress/data';
import { useState } from '@wordpress/element';
import './store'

export function App() {
    const [title, setTitle] = useState('')

    const onClick = () => {
        console.log(title)
    }

    return <>
       <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={onClick}>Update</button>
    </>
}
