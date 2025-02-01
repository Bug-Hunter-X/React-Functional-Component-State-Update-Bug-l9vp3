```javascript
// In a React functional component:
const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Incorrect increment logic
    setCount(count++); // This is wrong!
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```