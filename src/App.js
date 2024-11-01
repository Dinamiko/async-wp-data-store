import {useDispatch, useSelect} from '@wordpress/data';
import { useState } from '@wordpress/element';
import './store'

export function App() {
    const [localTitle, setLocalTitle] = useState('')

    useSelect((select) => {
        const title = select('my-async-store').getTitle();
        setLocalTitle(title)
    }, []);

    const {updateTitle} = useDispatch('my-async-store')

    const onClick = () => {
        updateTitle(localTitle)
    }

    return <>
        <input value={localTitle} onChange={(e) => setLocalTitle(e.target.value)}/>
        <button onClick={onClick}>Update</button>
    </>
}
