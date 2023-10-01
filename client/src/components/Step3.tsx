import React from 'react';
import styled from 'styled-components';
import { FormData } from './FormData';

const StyledStep3Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top:-6px;
`;

const StyledLabel = styled.label`
  text-align: left;
  margin-bottom: 5px;
  font-weight:550;
  font-size:13.5px;
  margin-top:4.5px;
  margin-left:-13px;
  margin-bottom:3px;
`;

const StyledTextArea = styled.textarea`
  border-radius: 10px;
  box-shadow: inset 0 0 10px #808080;
  border-style:none;
  height:121px;
  resize:none;
  margin-left:-17px;
  width:327px;
  margin-left:-17px;
  margin-right:9px;
`;

interface Step3Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Step3: React.FC<Step3Props> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledStep3Container>
      <StyledLabel>
        Comments:
      </StyledLabel>
      <StyledTextArea
        name="comments"
        value={formData.comments}
        rows={4}
        cols={50}
        onChange={handleChange}
      />
    </StyledStep3Container>
  );
};

export default Step3;
