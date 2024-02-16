import styled from "styled-components";

const Select = ({ name, label, options, onChange }) => {
  return (
    <SelectContainer>
      <label htmlFor={name}>{label}</label>
      <SelectMain aria-label={label} name={name} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectMain>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const SelectMain = styled.select`
  padding: 12px;
  margin-top: 6px;
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  border-radius: 6px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;

export { Select };
