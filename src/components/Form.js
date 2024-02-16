import { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "./base/Checkbox";
import { Button } from "./base/Button";
import { Input } from "./base/Input";
import { Select } from "./base/Select";
import { TextArea } from "./base/TextArea";
import { Radio } from "./base/Radio";

const Form = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    password: "",
    select: "",
    textArea: "",
    radio: "",
    checkbox: false,
  });

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(!checkboxChecked);
    setFormValues({
      ...formValues,
      checkbox: checkboxChecked,
    });
  };

  const handleSelectChange = (event) => {
    setFormValues({
      ...formValues,
      select: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <FormContainer onSubmit={submitForm}>
      <h2>Form Example</h2>
      <Input
        name="firstName"
        label="First Name"
        type="text"
        required
        placeholder="First Name"
        onChange={handleInputChange}
      />

      <Input
        name="lastName"
        label="Last Name"
        type="text"
        required
        placeholder="Last Name"
        onChange={handleInputChange}
      />

      <Input
        name="age"
        label="Age"
        type="number"
        placeholder="Age"
        onChange={handleInputChange}
      />

      <Input
        name="email"
        label="Email"
        type="email"
        required
        placeholder="Email"
        onChange={handleInputChange}
      />

      <Input
        name="phone"
        label="Phone"
        type="phone"
        placeholder="Phone"
        onChange={handleInputChange}
      />

      <Input
        name="password"
        label="Password"
        type="password"
        required
        placeholder="Password"
        onChange={handleInputChange}
      />

      <Select
        name="select"
        label="Select Example"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        onChange={handleSelectChange}
      />

      <TextArea
        name="textArea"
        label="Text Area Example"
        required={false}
        placeholder="Text Area"
        onChange={handleInputChange}
      />

      <p>Radio Example</p>
      <Radio
        name="radio"
        label="Option 1"
        value="option1"
        onChange={handleInputChange}
      />
      <Radio
        name="radio"
        label="Option 2"
        value="option2"
        onChange={handleInputChange}
      />

      <p>Checkbox Example</p>
      <Checkbox
        id="checkbox"
        label="Checkbox Example"
        name="checkbox"
        checked={checkboxChecked}
        onChange={handleCheckboxChange}
      />

      <Button variant="submit" type="submit">
        Submit
      </Button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 1rem 0;
`;

export { Form };
