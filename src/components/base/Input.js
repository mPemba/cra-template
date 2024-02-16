import styled from "styled-components";

const Input = ({ name, label, type, required, placeholder, onChange }) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <InputMain
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const InputMain = styled.input`
  padding: 12px;
  margin-top: 6px;
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  border-radius: 6px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;

export { Input };
