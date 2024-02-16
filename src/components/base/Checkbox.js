import styled from "styled-components";

const Checkbox = ({ name, label, checked, onChange }) => {
  return (
    <CheckboxContainer>
      <CheckboxMain
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        aria-label={label}
      />
      <CheckboxLabel htmlFor={name}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const CheckboxMain = styled.input`
  margin-top: 6px;
`;

const CheckboxLabel = styled.label`
  margin-left: 6px;
`;

export { Checkbox };
