import styled from "styled-components";

const Radio = ({ name, label, value, checked, onChange }) => {
  return (
    <RadioContainer>
      <RadioMain
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        aria-label={label}
      />
      <RadioLabel htmlFor={name}>{label}</RadioLabel>
    </RadioContainer>
  );
};

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const RadioMain = styled.input`
  margin-top: 6px;
`;

const RadioLabel = styled.label`
  margin-left: 6px;
`;

export { Radio };
