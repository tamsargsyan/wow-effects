import { useTranslation } from "react-i18next";
import * as yup from "yup";

const ValidationSchema = () => {
  const { t } = useTranslation();

  const signUpSchema = yup.object().shape({
    email: yup
      .string()
      .email(t("validations.invalid_email"))
      .required(t("validations.email_required")),
    password: yup
      .string()
      .required(t("validations.password_required"))
      .min(8, t("validations.invalid_pass")),
    password_confirmation: yup
      .string()
      .required(t("validations.password_confirmation_required"))
      .oneOf([yup.ref("password")], t("validations.passwords_must_match")),
  });

  const signInSchema = yup.object().shape({
    email: yup
      .string()
      .email(t("validations.invalid_email"))
      .required(t("validations.email_required")),
    password: yup
      .string()
      .required(t("validations.password_required"))
      .min(8, t("validations.invalid_pass")),
  });

  const passwordRecoverySchema = yup.object().shape({
    email: yup
      .string()
      .email(t("validations.invalid_email"))
      .required(t("validations.email_required")),
  });

  const resetPassSchema = yup.object().shape({
    password: yup
      .string()
      .required(t("validations.password_required"))
      .min(8, t("validations.invalid_pass")),
    password_confirmation: yup
      .string()
      .required(t("validations.password_confirmation_required"))
      .oneOf([yup.ref("password")], t("validations.passwords_must_match")),
  });

  const contactSchema = yup.object().shape({
    full_name: yup
      .string()
      .matches(/^[A-Za-z]+$/, t("validations.valid_name"))
      .required(t("validations.name_required")),
    email: yup
      .string()
      .email(t("validations.invalid_email"))
      .required(t("validations.email_required")),
    phone: yup
      .string()
      .required(t("validations.this_is_required"))
      .matches(/^[0-9]+$/, t("validations.invalid_phone")),
    message: yup.string().required(t("validations.this_is_required")),
  });

  const accountManagementSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z]+$/, t("validations.valid_name"))
      .required(t("validations.name_required")),
    last_name: yup
      .string()
      .matches(/^[A-Za-z]+$/, t("validations.valid_name"))
      .required(t("validations.name_required")),
    email: yup
      .string()
      .email(t("validations.invalid_email"))
      .required(t("validations.email_required")),
    phone: yup
      .string()
      .required(t("validations.this_is_required"))
      .matches(/^[0-9]+$/, t("validations.invalid_phone")),
    current_password: yup
      .string()
      .required(t("validations.password_required"))
      .min(8, t("validations.invalid_pass")),
    new_password: yup
      .string()
      .required(t("validations.password_required"))
      .min(8, t("validations.invalid_pass")),
    password_confirmation: yup
      .string()
      .required(t("validations.password_confirmation_required"))
      .oneOf([yup.ref("new_password")], t("validations.passwords_must_match")),
  });

  const newAddressSchema = yup.object().shape({
    country: yup
      .string()
      // .matches(/^[A-Za-z]+$/, t("validations.valid_name"))
      .required(t("validations.country_required")),
    city: yup
      .string()
      // .matches(/^[A-Za-z]+$/, t("validations.valid_name"))
      .required(t("validations.city_required")),
    address: yup
      .string()
      // .matches(/^[A-Za-z]+$/, t("validations.valid_name"))
      .required(t("validations.address_required")),
    zip_code: yup
      .string()
      .matches(/^[0-9]+$/, t("validations.invalid_zip_code"))
      .required(t("validations.zip_code_required")),
  });

  return {
    signUpSchema,
    signInSchema,
    passwordRecoverySchema,
    resetPassSchema,
    contactSchema,
    accountManagementSchema,
    newAddressSchema,
  };
};

export default ValidationSchema;
