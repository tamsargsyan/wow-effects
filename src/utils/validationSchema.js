import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  password_confirmation: yup
    .string()
    .required("Password confirmation is a required field")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const signInSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

export const passwordRecoverySchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export const resetPassSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  password_confirmation: yup
    .string()
    .required("Password confirmation is a required field")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const contactSchema = yup.object().shape({
  full_name: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Name should only contain letters")
    .required("Name is a required field"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number should contain only numbers"),
  message: yup.string().required("This is a required field"),
});

export const accountManagementSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Name should only contain letters")
    .required("Name is a required field"),
  last_name: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Name should only contain letters")
    .required("Name is a required field"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number should contain only numbers"),
  current_password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  new_password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  password_confirmation: yup
    .string()
    .required("Password confirmation is a required field")
    .oneOf([yup.ref("new_password")], "Passwords must match"),
});

export const newAddressSchema = yup.object().shape({
  country: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Name should only contain letters")
    .required("Name is a required field"),
  city: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Name should only contain letters")
    .required("Name is a required field"),
  address: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Name should only contain letters")
    .required("Name is a required field"),
  zip_code: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Name should only contain letters")
    .required("Name is a required field"),
});
