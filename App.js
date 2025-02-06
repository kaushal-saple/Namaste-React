import React from "react"
import ReactDOM from "react-dom/client"

//without jst
const nestedHeading = React.createElement("div",
    {className:"title"},
    [React.createElement("h1",{},"heading1"),React.createElement("h2",{},"heading2"),React.createElement("h3",{},"heading3")] 
)

//using jsx
const jsxNestedHeading = (<div className="title">
    <h1>hello jsx</h1>
    <h2>Hello jsx2</h2>
    <h3>Hello jsx3</h3>
</div>)

const Title = ()=><h1>Yahoooooo JSX made it look easyyy</h1>;

//using functional component
//component composition
const NestedComponent = ()=>(
    <div className="title">
        <Title></Title>
        <h1>hello jsx</h1>
        <h2>Hello jsx2</h2>
        <h3>Hello jsx3</h3>
    </div>)

    


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedComponent/>);