"use client";

import { LogOut, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SignOutButtonProps {
  closeAllMenus?: () => void;
  handleSignOut: () => Promise<void>;
}

export function SignOutButton({
  closeAllMenus,
  handleSignOut,
}: SignOutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async (): Promise<void> => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      closeAllMenus?.();

      await handleSignOut();

      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out failed:", error);
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={() => void handleClick()}
      disabled={isLoading}
      aria-label={isLoading ? "Signing out" : "Sign out"}
      className="
        group
        flex w-full
        items-center gap-3
        rounded-2xl
        border border-transparent
        px-4 py-3
        text-left
        transition-all duration-200

        text-[#9A4545]

        hover:border-[#D34242]/10
        hover:bg-[#D34242]/5

        active:scale-[0.985]

        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      <span
        className="
          flex h-9 w-9 shrink-0
          items-center justify-center
          rounded-xl
          bg-[#D34242]/7
          transition-colors
          group-hover:bg-[#D34242]/10
        "
      >
        {isLoading ? (
          <Loader2
            className="h-4.25 w-4.25 animate-spin text-[#C45151]"
            strokeWidth={2}
          />
        ) : (
          <LogOut
            className="h-4.25 w-4.25 text-[#C45151]"
            strokeWidth={1.8}
          />
        )}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-[13.5px] font-semibold">
          {isLoading ? "Signing out..." : "Sign out"}
        </span>

        {!isLoading && (
          <span className="mt-0.5 block text-[11px] text-[#A08A8A]">
            End your current session
          </span>
        )}
      </span>
    </button>
  );
}