import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import FormGroup from "components/commom/FormGroup";
import Input from "components/input/Input";
import Button from "components/button/Button";
import { Checkbox } from "components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "components/icons";
import useToggleValue from "hooks/useToggleValue";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid emial address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const handleSignUp = (values) => {
    console.log(values);
  };
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="text-xs text-center lg:text-sm font-normal text-text3 lg:mb-8 mb-6">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary font-medium underline ">
          Sign in
        </Link>
      </p>
      <button className="flex items-center gap-x-3 w-full py-4 mb-5 text-base justify-center border border-strock rounded-lg text-text2 dark:text-white dark:border-darkStroke">
        <img srcSet="/icon-google.png 2x" alt="icon-google"></img>
        <span cla>Sign up with google</span>
      </button>
      <p className="text-center text-xs font-normal lg:text-sm mb-4 lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input
            control={control}
            name="name"
            type="name"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="email@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="pasword">Password</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start gap-x-5 mb-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className=" flex-1 text-xs lg:text-sm text-text4 ">
              I agree to the
              <span className="underline text-secondary cursor-pointer">
                Tearms of Use
              </span>
              and have read and understand the
              <span className="underline text-secondary cursor-pointer">
                Privacy policy
              </span>
            </p>
          </Checkbox>
        </div>
        <Button className="bg-primary w-full" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
