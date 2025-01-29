const heading = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},
        [
            React.createElement("h1",{},"Heading 1"),
            React.createElement("h1",{},"Heading 2")]),
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"Heading 1"),
            React.createElement("h1",{},"Heading 2")]
        )
    ]
);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);