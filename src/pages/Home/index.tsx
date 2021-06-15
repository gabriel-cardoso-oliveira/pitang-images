import React from "react";
import Button from "react-bootstrap/Button";

import { Form } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Form data-testid="search-form">
        <input id="search-input" type="text" placeholder="Search image" />
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
};

export default Home;
