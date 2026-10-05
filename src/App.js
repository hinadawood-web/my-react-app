import './App.css';
import { useState, useEffect } from "react";
import fetchUserProfile from "./ReactComp";

function App() {
    const [count, setCount] = useState(0);
    const [error, setError] = useState("");

    const incrementCount = () => {
        setCount((prev) => prev + 1);
    };

    const fetchUser = async () => {
        try {
            const resp = await fetchUserProfile("1");
            setCount(Number(resp.accountBalance));
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
        }
    };

    useEffect(() => {
        fetchUser();
        return () => {
            console.log("unmount");
        };
    }, []);

    return (
        <div className="app">
            <h1>Account Balance: {count}</h1>
            {error ? <p>{error}</p> : null}
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
}

export default App;
