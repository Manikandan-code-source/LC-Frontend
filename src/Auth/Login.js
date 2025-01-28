import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css"

const Login = () => {
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid Email")
        .required("Please Enter your Email Id"),
      password: Yup.string()
        .min(6, "Password must be more than 6 characters")
        .required("Please Enter your Password"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "60ch" } }}
      noValidate
      autoComplete="off"
      className="box"
      onSubmit={handleSubmit}
    >
      <p className="heading-style">Sign in</p>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />

      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />

      <Button type="submit" variant="contained">
        Sign in
      </Button>
    </Box>
  );
}

export default Login