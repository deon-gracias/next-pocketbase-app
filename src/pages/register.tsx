import z from "zod";
import { registerWithEmail, signInWithEmail } from "@/lib/auth";
import {
  Form,
  Formik,
  FormikComputedProps,
  FormikConfig,
  FormikFormProps,
  FormikHelpers,
  FormikValues,
} from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { pb } from "@/lib/pocketbase";
import Input from "@/components/form/Input";
import Checkbox from "@/components/form/Checkbox";
import errorMap from "zod/lib/locales/en";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    pb.authStore.isValid ? router.push("/dashboard") : null;
  }, []);

  const formikProps = {
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: toFormikValidationSchema(
      z.object({
        username: z.string().min(4),
        email: z.string().email(),
        password: z
          .string()
          .min(8, "Password must contain atleast 8 characters"),
        confirmPassword: z
          .string()
          .min(8, "Password must contain atleast 8 characters"),
        terms: z.literal<boolean>(true, {
          errorMap: () => ({
            message: "You must accept the terms & conditions",
          }),
        }),
      })
    ),
    onSubmit: (values: FormikValues, { setFieldError }: any) => {
      if (values.password !== values.confirmPassword) {
        setFieldError("confirmPassword", "Passwords do not match");
        return;
      }

      registerWithEmail(values.username, values.email, values.password)
        .then((data: any) => {
          console.log("User registered in successfully");
          signInWithEmail(values.email, values.password).then((data: any) => {
            // const user = data.record;
            console.log("User authenticated successfully");
            router.push("/dashboard");
          });
        })
        .catch((e) => {
          console.error("Registration Failed", e);
        });
    },
  };

  return (
    <div className="container mx-auto">
      <Formik {...formikProps}>
        <Form>
          <Input label="Username" type="text" name="username" />
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
          />
          <Checkbox name="terms" label="Accept Terms & Conditions" />

          <div className="form-control">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
