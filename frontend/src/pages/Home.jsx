import {useState, useEffect} from 'react'

function Child(){
    return (
        <>
            <p>This is a Child</p>
        </>
    );
}

function Home() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {console.log(count)}, [count]);

    async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/user", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
    });
    }


    let numArray = [1, 2, 5, 19, 21, 5];

    return (
        <>
            <h1>Home</h1>
            <Child></Child>
            <Child></Child>
            <Child></Child>
            <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Submit</button>
            </form>

            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>Add</button>
            {numArray.map(num => <p key={num}>{num}</p>)}

        </>
    )
}

export default Home