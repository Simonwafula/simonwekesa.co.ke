"use client";

import { useSearchParams } from "next/navigation";

const messages = {
  sent: "Message sent. Thank you for reaching out.",
  invalid: "Please check your name, email, and message before sending.",
  error: "The server could not send the message. Please email directly instead.",
} as const;

export function ContactStatus() {
  const searchParams = useSearchParams();
  const status = searchParams.get("contact");

  if (status !== "sent" && status !== "invalid" && status !== "error") {
    return null;
  }

  return (
    <p className="mb-6 rounded border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-slate-700">
      {messages[status]}
    </p>
  );
}
