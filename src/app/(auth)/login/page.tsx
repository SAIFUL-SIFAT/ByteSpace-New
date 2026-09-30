"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Login data:", data);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <AuthLayout
        heading="Sign in with ease"
        description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      >
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-secondary-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-950">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2 className="text-heading-s text-neutral-950 mb-2">Welcome Back!</h2>
          <p className="text-body-m text-neutral-600 mb-8">
            You have successfully signed in.
          </p>
          <Button asChild className="w-full">
            <Link href="/">Go to Home</Link>
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="mb-8 text-center md:text-left">
        <span className="text-body-s text-primary-600 font-medium mb-2 block">Sign In</span>
        <h2 className="text-heading-m text-neutral-950">Welcome Back</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
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
          autoComplete="current-password"
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 h-14 bg-secondary-400 text-neutral-950 hover:bg-secondary-500 rounded-full text-label-l"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <div className="mt-8 flex items-center gap-4 before:flex-1 before:h-px before:bg-neutral-200 after:flex-1 after:h-px after:bg-neutral-200">
        <span className="text-body-s text-neutral-400">or</span>
      </div>

      <div className="flex gap-4 mt-6 justify-center">
        <button type="button" className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </button>
        <button type="button" className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
          </svg>
        </button>
      </div>

      <div className="mt-8 text-center text-body-m text-neutral-500">
        New user?{" "}
        <Link href="/signup" className="text-primary-600 font-medium hover:underline">
          Create an account
        </Link>
      </div>
    </AuthLayout>
  );
}
