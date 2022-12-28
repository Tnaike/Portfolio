import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import FullScreenSection from './FullScreenSection';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    onSubmit: (values) => {
      submit('', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      comment: Yup.string()
        .min(25, 'Must be at least 25 characters')
        .required('Required'),
    }),
  });

  useEffect(() => {
      if (response) {
        onOpen(response.type, response.message);
        if (response.type === 'success') {
          formik.resetForm();
        }
      }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor='#512DA8'
      py={16}
      spacing={8}
    >
      <VStack w='1024px' p={32} alignItems='flex-start'>
        <Heading as='h1' id='contactme-section'>
          Contact me
        </Heading>
        <Box p={6} rounded='md' w='100%'>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={!!formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor='firstName'>Name</FormLabel>
                <Input
                  id='firstName'
                  name='firstName'
                  type='text'
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor='email'>Email Address</FormLabel>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='type'>Type of enquiry</FormLabel>
                <Select
                  id='type'
                  name='type'
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value='hireMe' style={{ color: 'black' }}>
                    Freelance project proposal
                  </option>
                  <option value='openSource' style={{ color: 'black' }}>
                    Open source consultancy session
                  </option>
                  <option value='other' style={{ color: 'black' }}>
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={!!formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor='comment'>Your message</FormLabel>
                <Textarea
                  id='comment'
                  name='comment'
                  height={250}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              {!isLoading ? (
                <Button type='submit' colorScheme='purple' width='full'>
                  Submit
                </Button>
              ) : (
                <Button
                  isLoading
                  type='submit'
                  colorScheme='purple'
                  width='full'
                ></Button>
              )}
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
