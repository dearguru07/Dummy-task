import react from "react";

const Wrapper = ({ children }) => {
    return <div className="wrapper">{children}</div>;
};

// Usage
const App = () => {
    return (
        <Wrapper>
            <h1>Hello, World!</h1>
            <p>This is wrapped content.</p>
        </Wrapper>
    );
};
export default App;