"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

const signupSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Signup data:", data);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <AuthLayout
        heading="Sign up and come in"
        description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      >
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-secondary-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-950">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2 className="text-heading-s text-neutral-950 mb-2">Account Created!</h2>
          <p className="text-body-m text-neutral-600 mb-8">
            Your account has been successfully created.
          </p>
          <Button asChild className="w-full">
            <Link href="/login">Go to Login</Link>
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="mb-8 text-center md:text-left">
        <span className="text-body-s text-primary-600 font-medium mb-2 block">Create an Account</span>
        <h2 className="text-heading-m text-neutral-950">Welcome to ByteSpace</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
        <FormField
          label="Full Name"
          type="text"
          placeholder="Jamie Davis"
          {...register("fullName")}
          error={errors.fullName?.message}
          autoComplete="name"
        />
        
        <FormField
          label="Email"
          type="email"
          placeholder="designer@example.com"
          {...register("email")}
          error={errors.email?.message}
          autoComplete="email"
        />

        <FormField
          label="Password"
          type="password"
          placeholder="********"
          {...register("password")}
          error={errors.password?.message}
          autoComplete="new-password"
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 h-14 bg-secondary-400 text-neutral-950 hover:bg-secondary-500 rounded-full text-label-l"
        >
          {isSubmitting ? "Creating account..." : "Continue"}
        </Button>
      </form>

      <div className="mt-8 text-center text-body-m text-neutral-500">
        Already have an account?{" "}
        <Link href="/login" className="text-primary-600 font-medium hover:underline">
          Login
        </Link>
      </div>
    </AuthLayout>
  );
}
