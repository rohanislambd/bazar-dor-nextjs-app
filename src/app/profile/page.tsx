"use client";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
} from "@heroui/react";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const router = useRouter();

  const { data: session } = useSession();
  const user = session?.user;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    const { error } = await updateUser({
      ...userData,
    });
    if (error) {
      toast.error(error.message ?? "Failed to update user!");
      return;
    }

    toast.success("User name updated successfully! 🎉");
  };

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed out successfully! 👋");
          router.push("/");
          router.refresh();
        },
      },
    });
  };
  return (
    <div className="md:w-3xl mx-auto mt-25  md:p-6">
      <div>
        <h2 className="text-2xl font-bold">আমার প্রোফাইল</h2>
        <p className="text-[14px] text-[#1D271F]">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      <div className=" flex justify-between items-center  mt-6 p-3  md:p-6 rounded-xl bg-white shadow">
        <div className="flex gap-3 items-center ">
          {user?.image ? (
            <div className="w-14 px-2 pt-2  bg-base-300 rounded-xl  ">
              <Image
                src={user?.image}
                alt={user?.name ?? "User"}
                width={40}
                height={40}
                className="h-10 w-10 rounded object-cover   "
              />
            </div>
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#05893E] text-white font-semibold">
              {user?.name?.charAt(0).toUpperCase()}
            </span>
          )}

          <div>
            <p className="text-xl font-semibold">{user?.name}</p>
            <p className="hidden md:block text-[#1D271F]">{user?.email}</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            role="menuitem"
            onClick={handleSignOut}
            className="flex items-center gap-2 text-left text-red-600 hover:text-red-700 transition-colors"
          >
            <LogOut size={16} />
            সাইন আউট
          </button>
        </div>
      </div>

      <div className="mt-5 p-6 rounded-xl bg-white shadow">
        <h3 className="font-semibold pb-6">তথ্য</h3>
        <Form className="flex flex-col gap-4 px-4" onSubmit={handleSubmit}>
          <TextField name="name">
            <Label>নাম</Label>
            <Input placeholder="আপনার নাম" />
            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="w-full bg-emerald-600  text-white font-medium mt-2 "
            size="lg"
          >
            আপডেট
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ProfilePage;
