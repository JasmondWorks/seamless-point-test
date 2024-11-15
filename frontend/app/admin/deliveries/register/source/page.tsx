"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField, {
  FormFieldType,
} from "@/app/_components/CustomFormField";

import { deliverySourceSchema, signUpSchema } from "@/app/_lib/validation";
import { Form } from "@/app/_components/ui/form";
import { createUser } from "@/app/_lib/actions";
import ButtonFormSubmit from "@/app/_components/ButtonFormSubmit";
import Link from "next/link";
import PrivacyPolicyBlock from "@/app/_components/PrivacyPolicyBlock";

export default function DeliverySource() {
  const form = useForm<z.infer<typeof deliverySourceSchema>>({
    resolver: zodResolver(deliverySourceSchema),
    // defaultValues: {
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   phone: "",
    //   password: "",
    //   confirmPassword: "",
    // },
  });

  async function onSubmit(data: z.infer<typeof deliverySourceSchema>) {
    // console.log(data);
    try {
      //   createUser(data);
    } catch (error) {}
  }

  return (
    <div className="max-w-5xl md:pr-20 md:pl-10 xl:pl-20 xl:pr-40">
      <h1 className="headline text-center mb-10">Sender’s information</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid lg:grid-cols-2 gap-5">
            <CustomFormField
              label="Country"
              name="country"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              placeholder="Country"
            />
            <CustomFormField
              label="State"
              name="state"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              placeholder="State"
            />

            <CustomFormField
              label="First name"
              name="firstName"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              placeholder="First name"
            />
            <CustomFormField
              label="Last name"
              name="lastName"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              placeholder="Last name"
            />
            <CustomFormField
              className="sm:col-span-2"
              label="City"
              name="city"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              placeholder="Lagos"
            />
            <CustomFormField
              label="Street"
              name="street"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              placeholder="123, main street"
            />
            <CustomFormField
              label="Apt/unit"
              name="unit"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              placeholder="Apt/unit"
            />
            <CustomFormField
              label="Email"
              name="email"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              placeholder="you@company.com]"
            />
            <CustomFormField
              label="Phone Number"
              name="phone"
              control={form.control}
              fieldType={FormFieldType.PHONE_INPUT}
              placeholder="+234"
            />
            <CustomFormField
              className="sm:col-span-2"
              label="Delivery Title"
              name="deliveryTitle"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              placeholder="Sofa"
            />
            {/* <CustomFormField
              label="Amount of items"
              name="numItems"
              control={form.control}
              fieldType={FormFieldType.SELECT}
              selectOptions={["1 - 5", "6 - 10", "Greater than 10"]}
              placeholder="1-5"
            /> */}
            <CustomFormField
              className="sm:col-span-2"
              label="Summary of what is being delivered (required)"
              name="deliverySummary"
              control={form.control}
              fieldType={FormFieldType.TEXTAREA}
            />
          </div>
          <PrivacyPolicyBlock />
          <Link
            className="block"
            href="/dashboard/deliveries/register/destination"
          >
            <ButtonFormSubmit text="Continue" />
          </Link>
        </form>
      </Form>
    </div>
  );
}