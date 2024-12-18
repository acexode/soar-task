import * as Yup from 'yup';
import React, { useRef, useState } from 'react';
import { Form, Field, Formik } from 'formik';

import { Box, Grid, Button, Avatar, useTheme, TextField, IconButton } from '@mui/material';

import { Iconify } from 'src/components/iconify';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Your Name is required'),
  userName: Yup.string().required('User Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  dateOfBirth: Yup.date().required('Date of Birth is required'),
  permanentAddress: Yup.string().required('Permanent Address is required'),
  presentAddress: Yup.string().required('Present Address is required'),
  postalCode: Yup.string().required('Postal Code is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
});

const UserProfile = () => {
  const theme = useTheme();
  console.log(theme);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically trigger the file input click
    }
  };

  const initialValues = {
    name: 'Abubakar',
    userName: 'acexode',
    email: 'abudawud92@gmail.com',
    password: '123456',
    dateOfBirth: '18/06/1992',
    permanentAddress: 'Nigeria',
    presentAddress: 'Nigeria',
    postalCode: '901101',
    city: 'FCT',
    country: 'Nigeria',
  };

  const handleSubmit = (values: any) => {
    console.log('Form Submitted', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Box sx={{ p: 4, background: '#f9f9f9', borderRadius: 2, boxShadow: 2 }}>
            <Grid container spacing={2}>
              {/* Left Grid: Profile Picture */}
              <Grid
                sx={{ position: 'relative' }}
                item
                mb={2}
                xs={12}
                sm={3}
                container
                justifyContent="center"
              >
                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                  <input
                    ref={fileInputRef}
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                  />
                  <Avatar
                    src={selectedImage || 'assets/images/avatar/profile.png'}
                    sx={{
                      width: 100,
                      height: 100,
                      cursor: 'pointer',
                      boxShadow: 2,
                    }}
                    onClick={handleIconClick} // Trigger file input click on Avatar click
                  />
                  <Box sx={{position: 'relative'}}>
                    <IconButton
                      onClick={handleIconClick} // Trigger file input click on IconButton click
                      sx={{
                        position: 'absolute',
                        bottom: '15%',
                        right: '-10px',
                        background: '#000',
                        color: '#fff',
                        '&:hover': {
                          background: '#333',
                        },
                      }}
                    >
                      <Iconify icon="ic:outline-edit" />
                    </IconButton>

                  </Box>
                </Box>
              </Grid>

              {/* Right Grid: Form Inputs */}
              <Grid item mb={2} xs={12} sm={9}>
                <Grid container spacing={2}>
                  <Grid item mb={2} xs={12} sm={6}>
                    <Field
                      name="name"
                      as={TextField}
                      label="Your Name"
                      fullWidth
                      error={touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item mb={2} xs={12} sm={6}>
                    <Field
                      name="userName"
                      as={TextField}
                      label="User Name"
                      fullWidth
                      error={touched.userName && !!errors.userName}
                      helperText={touched.userName && errors.userName}
                    />
                  </Grid>
                  <Grid item mb={2} xs={12} sm={6}>
                    <Field
                      name="email"
                      as={TextField}
                      label="Email"
                      fullWidth
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item mb={2} xs={12} sm={6}>
                    <Field
                      name="password"
                      as={TextField}
                      type="password"
                      label="Password"
                      fullWidth
                      error={touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                    />
                  </Grid>
                  <Grid item mb={2} xs={12} sm={6}>
                    <Field
                      name="dateOfBirth"
                      as={TextField}
                      label="Date of Birth"
                      type="date"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      error={touched.dateOfBirth && !!errors.dateOfBirth}
                      helperText={touched.dateOfBirth && errors.dateOfBirth}
                    />
                  </Grid>
                  <Grid item mb={2} xs={12} sm={6}>
                    <Field
                      name="presentAddress"
                      as={TextField}
                      label="Present Address"
                      fullWidth
                      error={touched.presentAddress && !!errors.presentAddress}
                      helperText={touched.presentAddress && errors.presentAddress}
                    />
                  </Grid>
                  <Grid item mb={2} xs={12} sm={6}>
                    <Field
                      name="permanentAddress"
                      as={TextField}
                      label="Permanent Address"
                      fullWidth
                      error={touched.permanentAddress && !!errors.permanentAddress}
                      helperText={touched.permanentAddress && errors.permanentAddress}
                    />
                  </Grid>
                  <Grid item mb={2} xs={12} sm={6}>
                    <Field
                      name="city"
                      as={TextField}
                      label="City"
                      fullWidth
                      error={touched.city && !!errors.city}
                      helperText={touched.city && errors.city}
                    />
                  </Grid>
                  <Grid item mb={2} xs={12} sm={6}>
                    <Field
                      name="postalCode"
                      as={TextField}
                      label="Postal Code"
                      fullWidth
                      error={touched.postalCode && !!errors.postalCode}
                      helperText={touched.postalCode && errors.postalCode}
                    />
                  </Grid>
                  <Grid item mb={2} xs={12} sm={6}>
                    <Field
                      name="country"
                      as={TextField}
                      label="Country"
                      fullWidth
                      error={touched.country && !!errors.country}
                      helperText={touched.country && errors.country}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Save Button */}
            <Box mt={2} textAlign="right">
              <Button type="submit" variant="contained" color="primary" sx={{ px: 4, py: 1 }}>
                Save
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default UserProfile;
