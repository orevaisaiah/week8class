import React from 'react'

export default function Products2(props) {
    // const [count, setCount] = useState(0);

    // const handleClick = () =>{
    //     setCount(count + 1);

    // };

    return (
        <div>
            <p>{props.count}</p>
            <button onClick={props.handleClick}>CLICK</button>
        </div>
    )
}
