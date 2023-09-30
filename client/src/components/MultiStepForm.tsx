import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

// Styled Form Container
const FormContainer = styled.div`
  background-color: #D2E1FF;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Set a minimum height for the container */
  padding: 0 20px; /* Added padding to align the form */
`;

// Styled Form
const StyledForm = styled.form`
  background-color: white;
  padding: 5px; /* Added padding to the form */
  border-radius: 7px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px; /* Double the maximum width of the form */
  width: 100%; /* Added to fill the container */
  min-height: 350px; /* Set a minimum height for the form */
`;

// Styled Section (for Step1, Step2, Step3)
const StyledSection = styled.section`
  background-color: #DEDEDE;
  border-radius: 7px;
  margin-top: 5px;
  padding: 24px; /* Added padding to the sections */
  position: relative;
  transition: background-color 0.5s; /* Added transition for background color */
  margin-top: -15px;
`;

const Step1Section = styled(StyledSection)`
  &&& {
    padding-bottom: 14px; /* Add padding-bottom for Step 1 only */
  }
`;

const Step2Section = styled(StyledSection)`
  &&& {
    padding-bottom: 20px;
  }
`;

const Step3Section = styled(StyledSection)`
  &&& {
    padding-bottom: 24px;
  }
`;

// Styled Heading (for Step1, Step2, Step3)
const StyledHeading = styled.h1`
  background-color: #F5B805;
  color: white;
  padding: 8px;
  text-align: left;
  border-radius: 7px;
  margin-bottom: 5px;
  font-size: 16px;
  position: relative;
  z-index: 2;
  height: 33px;
  font-weight: 400;
`;

// Styled Next Button (for Step1, Step2, Step3)
const StyledNextButton = styled.button`
  background-color: #5755AA;
  color: white;
  border-radius: 10px;
  margin-top: 5px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 110px;
  height: 29px;
`;

// Styled Input
const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 10px;
  margin-top: 5px;
  transition: background-color 0.5s;
  box-shadow: inset 0 0 10px #808080;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

interface MyFormData {
  firstName: string;
  lastName: string;
  email: string;
  telephoneNumber: string;
  gender: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  comments: string;
}

const MultiStepForm = () => {
  const [formData, setFormData] = useState<MyFormData>({
    firstName: '',
    lastName: '',
    email: '',
    telephoneNumber: '',
    gender: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    comments: ''
  });

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = () => {
    const currentStepData = formData;

    switch (currentStep) {
      case 1:
        if (
          currentStepData.firstName.trim() === '' ||
          currentStepData.lastName.trim() === '' ||
          currentStepData.email.trim() === ''
        ) {
          setErrors({
            firstName: 'First Name is required',
            lastName: 'Last Name is required',
            email: 'Email is required'
          });
          return false;
        } else if (!isValidEmail(currentStepData.email)) {
          setErrors({
            ...errors,
            email: 'Invalid Email'
          });
          return false;
        }
        break;
      case 2:
        if (
          currentStepData.telephoneNumber.trim() === '' ||
          currentStepData.gender.trim() === ''
        ) {
          setErrors({
            telephoneNumber: 'Telephone Number is required',
            gender: 'Gender is required'
          });
          return false;
        }

        if (
          currentStepData.dobDay.trim() === '' ||
          currentStepData.dobMonth.trim() === '' ||
          currentStepData.dobYear.trim() === ''
        ) {
          setErrors({
            ...errors,
            dobDay: 'Day is required',
            dobMonth: 'Month is required',
            dobYear: 'Year is required'
          });
          return false;
        } else {
          const day = parseInt(currentStepData.dobDay, 10);
          const month = parseInt(currentStepData.dobMonth, 10);
          const year = parseInt(currentStepData.dobYear, 10);

          if (day < 1 || day > 31) {
            setErrors({
              ...errors,
              dobDay: 'Day must be between 1 and 31'
            });
            return false;
          }

          if (month < 1 || month > 12) {
            setErrors({
              ...errors,
              dobMonth: 'Month must be between 1 and 12'
            });
            return false;
          }

          const currentYear = new Date().getFullYear();

          if (year < 1900 || year > currentYear) {
            setErrors({
              ...errors,
              dobYear: `Year must be between 1900 and ${currentYear}`
            });
            return false;
          }
        }
        break;
      default:
        break;
    }

    return true;
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      telephoneNumber: formData.telephoneNumber,
      gender: formData.gender,
      dob: `${formData.dobDay}-${formData.dobMonth}-${formData.dobYear}`,
      comments: formData.comments
    };

    try {
      const response = await axios.post('/api/submitForm', formDataToSend);
      if (response.status === 200) {
        console.log('Form data submitted successfully:', response.data);
        alert('Form data submitted successfully:');
      } else {
        console.error('Failed to submit form data');
        alert('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <FormContainer>
      <StyledForm>
        <StyledHeading onClick={() => setCurrentStep(1)}>Step 1: Your details</StyledHeading>
        {currentStep === 1 && (
          <Step1Section>
            <Step1 formData={formData} setFormData={setFormData} />
            {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
            {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            <StyledNextButton onClick={handleNext}>Next &gt;</StyledNextButton>
          </Step1Section>
        )}
        <StyledHeading onClick={() => setCurrentStep(2)}>Step 2: More details</StyledHeading>
        {currentStep === 2 && (
          <Step2Section>
            <Step2 formData={formData} setFormData={setFormData} />
            {errors.telephoneNumber && <ErrorMessage>{errors.telephoneNumber}</ErrorMessage>}
            {errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
            {errors.dobDay && <ErrorMessage>{errors.dobDay}</ErrorMessage>}
            {errors.dobMonth && <ErrorMessage>{errors.dobMonth}</ErrorMessage>}
            {errors.dobYear && <ErrorMessage>{errors.dobYear}</ErrorMessage>}
            <StyledNextButton onClick={handleNext}>Next &gt;</StyledNextButton>
          </Step2Section>
        )}
        <StyledHeading onClick={() => setCurrentStep(3)}>Step 3: Comments</StyledHeading>
        {currentStep === 3 && (
          <Step3Section>
            <Step3 formData={formData} setFormData={setFormData} />
            {errors.comments && <ErrorMessage>{errors.comments}</ErrorMessage>}
            <StyledNextButton onClick={handleSubmit}>Next</StyledNextButton>
          </Step3Section>
        )}
      </StyledForm>
    </FormContainer>
  );
};

export default MultiStepForm;
