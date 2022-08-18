import Button from "components/button/Button";
import ButtonGoogle from "components/button/ButtonGoogle";
import { Checkbox } from "components/checkbox";
import FormGroup from "components/commom/FormGroup";
import { IconEyeToggle } from "components/icons";
import Input from "components/input/Input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import React from "react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import useToggleValue from "hooks/useToggleValue";

const SignInPage = () => {
  const schema = yup.object({
    email: yup.string().email("").required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password must be 8 character"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const handleSignIn = (value) => {
    console.log(value);
  };

  return (
    <LayoutAuthentication heading="Welcome back">
      <p className="text-xs text-center lg:text-sm font-normal text-text3 lg:mb-8 mb-6">
        Don't have an account?
        <Link to="/sign-up" className="text-primary font-medium underline ">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
            placeholder="Enter password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="text-primary inline-block font-medium text-sm">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button className="bg-primary w-full" type="submit">
          Sign In
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
