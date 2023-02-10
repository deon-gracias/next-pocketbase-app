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
  }, [router]);

  const formikProps = {
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(
      z.object({
        email: z.string().email(),
        password: z
          .string()
          .min(8, "Password must contain atleast 8 characters"),
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
          alert(e.message)
        });
    },
  };

  return (
    <div className="container mx-auto">
      <Formik {...formikProps}>
        <Form>
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />

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
