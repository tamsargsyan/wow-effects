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
