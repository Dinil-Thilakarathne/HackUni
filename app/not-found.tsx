import AnimatedBox from "@/components/ui/AnimatedBox";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full">
      <div className="flex h-full w-full items-center justify-center flex-col gap-y-4">
        <h1 className="font-mono text-6xl text-balance text-center">Whoops! This page is as elusive as a missing semicolon. Let’s get you back to the main event.</h1>
        <AnimatedBox borderColor="#3b82f6" innerBoxClassName=" px-4 py-2">
          <Link href="/" className="text-xl font-bold text-blue-500 font-mono" >Back to Home</Link>
        </AnimatedBox>
      </div>
    </div>
  );
}
