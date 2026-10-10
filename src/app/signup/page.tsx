"use client";
import Link from "next/link";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
  Description,
} from "@heroui/react";
import Image from "next/image";
import { signIn, signUp } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

export default function SignupForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      image: string;
    };
    console.log("Form data:", user);
    const { data, error } = await signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign Up Successful");
      redirect("/");
    }
    if (error) {
      toast.error(error.message ?? "Something went wrong");
    }
  };
  const handleGoogleSignUp = async () =>{
       const { error} = await signIn.social({
        provider: "google",
       })
       if (error) {
      toast.error(error.message ?? "Google sign up failed");
      return;
    }
     toast.success("Redirecting to Google...")
  }

  const handleGithubSignUp = async () =>{
    const {error} = await signIn.social({
      provider: "github",
      callbackURL:"/"
    })
    if(error){
      toast.error(error.message ?? "Github sign up failed");
    }
    toast.success("Redirecting to Github...")
  }


  return (
    <div>
      <div className="flex flex-col items-center gap-1 pt-8 pb-2">
        <div className="text-2xl font-bold text-center">
          অ্যাকাউন্ট তৈরি করুন
        </div>
        <div className="text-center text-default-500 text-sm">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত জান দেখুন।
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#f0f7f4] p-4">
        {/*  */}
        <div className="w-full max-w-md shadow-sm border border-base-200 bg-[#FFFF] py-5 rounded-2xl">
          <div className="px-6 pb-2">
            {/* form */}
            <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Name */}
              <TextField name="name" isRequired>
                <Label>নাম</Label>
                <Input placeholder="আপনার নাম" />
                <FieldError />
              </TextField>

              {/* Email */}
              <TextField name="email" type="email" isRequired>
                <Label>ইমেইল</Label>
                <Input placeholder="you@example.com" />
                <FieldError />
              </TextField>

              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label>পাসওয়ার্ড</Label>
                <Input placeholder="কমপক্ষে ৮ অক্ষর" />
                <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>

                <FieldError />
              </TextField>

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium mt-2"
                size="lg"
              >
                অ্যাকাউন্ট তৈরি করুন
              </Button>
            </Form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-default-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-3 text-default-500">অথবা</span>
              </div>
            </div>

           
            <div className="flex gap-3">
              <Button
                onClick={handleGoogleSignUp}
                variant="outline"
                className="flex-1 gap-2 border-default-300"
              >
                <span>
                  <Image
                    src="/Google.png"
                    alt="google"
                    height={15}
                    width={15}
                  ></Image>
                </span>
                
                Google দিয়ে চালিয়ে যান
              </Button>

              <Button
              onClick={handleGithubSignUp}
                variant="outline"
                className="flex-1 gap-2 border-default-300"
              >
                <span>
                  <Image
                    src="/github.png"
                    alt="google"
                    height={15}
                    width={15}
                  ></Image>
                </span>
                GitHub দিয়ে চালিয়ে যান
              </Button>
            </div>

            <p className="text-center text-sm text-default-600 mt-6">
              অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/signin"
                className="text-emerald-600 hover:underline font-medium"
              >
                সাইন ইন করুন
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Back to Home */}
      <div className="text-center">
        <Link href="/" className="text-sm text-default-500  items-center gap-1">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
