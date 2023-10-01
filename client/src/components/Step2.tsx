import React from 'react';
import styled from 'styled-components';
import { FormData } from './FormData';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const StyledLabel = styled.label`
  text-align: left;
  font-weight:550;
  font-size:13.5px;
  margin-top:4.5px;
  margin-left:-13px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  text-align: left;
  width: 160px;
  height: 31px;
  margin-right: 3px;
  border-radius: 10px;
  box-shadow: inset 0 0 10px #808080;
  border-style:none;
  margin-left:-17px;
  margin-right:9px;
`;

const StyledSelect = styled.select`
  text-align: left;
  width: 140px;
  height: 31px;
  color:#919090;
  background-color: white;
  border-radius: 10px;
  box-shadow: inset 0 -1px 20px 0 #808080;
  border-style:none;
`;

const StyledDateOfBirthWrapper = styled.div`
  display: flex;
`;

const StyledDateOfBirthInput = styled(StyledInput)`
  width: 37px;
  height: 31px;
  margin-right:23px;
`;

const StyledContainerWithMargin = styled(StyledContainer)`
  margin-right: 15px;
`;

const StyledStep3 = styled.div`
  height:133px;
`;

interface Step2Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Step2: React.FC<Step2Props> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.name === 'dobDay' || e.target.name === 'dobMonth' || e.target.name === 'dobYear') {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <StyledStep3>
      <StyledInputWrapper>
        <StyledContainerWithMargin>
          <StyledLabel>
            Telephone number:
          </StyledLabel>
          <StyledInput
            type="text"
            name="telephoneNumber"
            value={formData.telephoneNumber}
            onChange={handleChange}
          />
        </StyledContainerWithMargin>
        <StyledContainer>
          <StyledLabel>
            Gender:
          </StyledLabel>
          <StyledSelect
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Other">Other</option>
            <option value="Prefer not to Answer">Prefer not to Answer</option>
          </StyledSelect>
        </StyledContainer>
      </StyledInputWrapper>
      <StyledContainer>
        <StyledLabel>
          Date of birth:
        </StyledLabel>
        <StyledDateOfBirthWrapper>
          <StyledDateOfBirthInput
            type="text"
            name="dobDay"
            value={formData.dobDay}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength={2}
          />
          <StyledDateOfBirthInput
            type="text"
            name="dobMonth"
            value={formData.dobMonth}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength={2}
          />
          <StyledDateOfBirthInput
            type="text"
            name="dobYear"
            value={formData.dobYear}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength={4}
          />
        </StyledDateOfBirthWrapper>
      </StyledContainer>
    </StyledStep3>
  );
};

export default Step2;
