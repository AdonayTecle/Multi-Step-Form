import React from 'react';
import styled from 'styled-components';
import { FormData } from './FormData';

interface Step1Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const StyledStep1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  
  input {
    border-radius: 10px;
    width: 180px;
    height: 31px;
    box-shadow: inset 0 0 10px #808080;
    border: none;
  }
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  text-align: left;
  font-weight: 550;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const Step1: React.FC<Step1Props> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <StyledStep1>
      <FlexRow>
        <InputWrapper>
          <InputLabel>First Name:</InputLabel>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Last Name:</InputLabel>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </InputWrapper>
      </FlexRow>
      <InputWrapper>
        <InputLabel>Email:</InputLabel>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </InputWrapper>
    </StyledStep1>
  );
};

export default Step1;
