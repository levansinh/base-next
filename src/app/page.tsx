"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputValidation from "@/components/input/input-validation";
import { env } from "@/env";

export default function Home() {
  const methods = useForm({
    defaultValues: { name: "" },
    mode: "onBlur",
  });

  const { handleSubmit } = methods;
  const submitHanlder = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <div className="">
      <Form {...methods}>
        <form onSubmit={submitHanlder} noValidate>
          <InputValidation name="name" />
          <Button>submit</Button>
        </form>
      </Form>
    </div>
  );
}
