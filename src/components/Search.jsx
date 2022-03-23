import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  //On event of submitting the input, prevent the default behaviour of a form refreshing the page
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + value);
  };

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          aria-label="Search for a recipe"
          placeholder="Search for a recipe"
          value={value}
        />
      </div>
    </Form>
  );
}

const Form = styled.form`
  margin: 0rem 15rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.2rem;
    color: white;
    padding: 0.85rem 2rem;
    border-radius: 1rem;
    width: 100%;
    outline: none;
    font-family: "Raleway", sans-serif;
    padding-left: 3rem;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
