// import react from "react";

// const Wrapper = ({ children }) => {
//     return <div className="wrapper">{children}</div>;
// };

// // Usage
// const App = () => {
//     return (
//         <Wrapper>
//             <h1>Hello, World!</h1>
//             <p>This is wrapped content.</p>
//         </Wrapper>
//     );
// };
// export default App;


const ParentComponent = (props) => {
    return (
      <div>
        <h1>Parent Component</h1>
        {props.children}
      </div>
    );
  };
  
  const App = () => {
    return (
      <ParentComponent>
        <p>This is a child component</p>
        <button>Click Me</button>
      </ParentComponent>
    );
  };
  
  export default App;
  