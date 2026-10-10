"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const MESSAGES: Record<string, string> = {
  auth_required: "বিস্তারিত দেখতে সাইন ইন করুন",
  profile_required: "প্রোফাইল দেখতে লগইন করুন",
};
export default function AuthRedirectToast() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const shown = useRef(false);

  useEffect(() => {
    const reason = searchParams.get("reason");
    if (!reason || shown.current) return;

    const message = MESSAGES[reason];
    if (message) {
      shown.current = true;
      toast.error(message, { id: "auth-required" });
    }

   
    const params = new URLSearchParams(searchParams.toString());
    params.delete("reason");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [searchParams, router, pathname]);

  return null;
}