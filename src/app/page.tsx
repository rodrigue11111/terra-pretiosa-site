import Link from "next/link";
import { RootLangRedirect } from "@/components/RootLangRedirect";

export default function RootRedirectPage() {
  return (
    <div className="tp-container py-16">
      <RootLangRedirect />
      <p className="text-sm text-slate-700">
        Redirecting...
        {" "}
        <Link href="/fr" className="font-semibold text-blue-900 hover:text-blue-700">
          Continue
        </Link>
      </p>
    </div>
  );
}
