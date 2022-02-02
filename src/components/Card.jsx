import React, { useState } from "react";

export default function Card({ children }) {
  const [counter, setCounter] = useState(10);
  const incCounter = () => setCounter((c) => c + 1);
  return (
    <div
      style={{
        width: 400,
        margin: "50px auto",
        padding: 8,
        border: "1px solid black",
      }}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          counter,
          incCounter,
        });
      })}
    </div>
  );
}
// React.Children.map invokes a function on every immediate child contained within children
// React.cloneElement Clone and return a new React element. we are passing the props we want as second argument
// Card is the parent component. it will hold the shared state if we need it. Header, Body, Footer are the children
// KCD example uses react context so he do not need to use React.children and React.clone

function Header({ children, counter }) {
  return (
    <h1>
      {children}, counter = {counter}
    </h1>
  );
}

function Body({ children, incCounter }) {
  return (
    <div>
      <p>{children}</p>
      <button onClick={incCounter}>icremnt counter</button>
    </div>
  );
}

function Footer({ children }) {
  return <div>{children}</div>;
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

// this is from kcd blog
// You'll notice that we're using a . in our component names.
// That's because those components are added as static properties to the <Card> component.
// Note that this is not at all a requirement of compound components . I just like doing this as a way to explicitly communicate the relationship.
