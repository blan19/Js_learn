import React from "react";
import styled from "styled-components";

const TestBlock = styled.div`
  p {
    color: blue;
  }
`;

const App = () => {
  return (
    <div>
      <TestBlock>
        <h1>React with Typescript and Webpack,</h1>
        <p>Testing...!</p>
      </TestBlock>
    </div>
  );
};

export default App;
