import z from "zod";
import { signInWithEmail } from "@/lib/auth";
import { Form, Formik, FormikComputedProps, FormikValues } from "formik";
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
      email: "",
      password: "",
      terms: false,
    },
    validationSchema: toFormikValidationSchema(
      z.object({
        email: z.string().email(),
        password: z
          .string()
          .min(8, "Password must contain atleast 8 characters"),
        terms: z.literal<boolean>(true, {
          errorMap: () => ({
            message: "You must accept the terms & conditions",
          }),
        }),
      })
    ),
    onSubmit: (values: FormikValues) => {
      signInWithEmail(values.email, values.password)
        .then((data: any) => {
          // const user = data.record;
          console.log("User logged in successfully");
          router.push("/dashboard");
        })
        .catch((e) => {
          console.error("Authenticated Failed", e);
        });
    },
  };

  return (
    <div className="container mx-auto">
      <Formik {...formikProps}>
        <Form>
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />
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
