import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.css";

const Register = () => {
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(8, "Name must be more then 8 letters").required("Please Enter your Full Name"),
      email: Yup.string()
        .email("Enter a valid Email")
        .required("Please Enter your Email Id"),
      password: Yup.string()
        .min(6, "Password must be more than 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      role: Yup.string().required("Please select a role"),
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
      <p className="heading">Register an Account</p>

      <TextField
        id="fullName"
        label="Full Name"
        variant="outlined"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.fullName && Boolean(errors.fullName)}
        helperText={touched.fullName && errors.fullName}
      />

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

      <TextField
        id="confirmPassword"
        label="Confirm Password"
        variant="outlined"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        helperText={touched.confirmPassword && errors.confirmPassword}
      />

      {/* Dropdown for Role */}
      <FormControl
        variant="outlined"
        error={touched.role && Boolean(errors.role)}
        sx={{ m: 1, width: "60ch" }}
      >
        <InputLabel id="role-label">Role</InputLabel>
        <Select
          id="role"
          name="role"
          value={values.role}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Role"
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="customer">Customer</MenuItem>
        </Select>
        {touched.role && errors.role && (
          <p style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>
            {errors.role}
          </p>
        )}
      </FormControl>

      <Button type="submit" variant="contained">
        Register
      </Button>
    </Box>
  );
};

export default Register;
