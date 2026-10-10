"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogOut, User as UserIcon } from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";

const UserInfo = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

 

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          setOpen(false);
         toast.success("Signed out successfully! 👋");
          router.push("/");
          router.refresh();
        },
      },
    });
  };

  if (isPending) {
    return <div className="h-10 w-28 animate-pulse rounded-xl bg-gray-100" />;
  }

  if (!user) {
    return (
      <div className="flex gap-2">
        <Link href="/signin" className="btn font-semibold">
          সাইন ইন
        </Link>
        <Link
          href="/signup"
          className="btn bg-[#05893E] text-white font-semibold shadow-2xl"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-3 rounded-xl px-1 py-1 hover:bg-gray-100 transition-colors"
      >
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name ?? "User"}
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl object-cover"
          />
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#05893E] text-white font-semibold">
            {user.name?.charAt(0).toUpperCase()}
          </span>
        )}
        <span className="font-medium text-gray-800">
          {user.name?.split(" ")[0]}
        </span>
        <span
          className={`text-[10px] text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      
      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-3 w-64 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl"
        >
          <div className="mb-4">
            <p className="font-semibold text-gray-900">{user.name}</p>
            <p className="mt-1 truncate text-sm text-gray-500">{user.email}</p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/profile"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-gray-800 hover:text-[#05893E] transition-colors"
            >
              <UserIcon size={16} />
              আমার প্রোফাইল
            </Link>

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
      )}
    </div>
  );
};

export default UserInfo;