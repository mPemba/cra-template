import styled from "styled-components";

const TextArea = ({ name, label, required, placeholder, onChange }) => {
  return (
    <TextAreaContainer>
      <label htmlFor={name}>{label}</label>
      <TextAreaMain
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
    </TextAreaContainer>
  );
};

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const TextAreaMain = styled.textarea`
  padding: 12px;
  margin-top: 6px;
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  border-radius: 6px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;

export { TextArea };
