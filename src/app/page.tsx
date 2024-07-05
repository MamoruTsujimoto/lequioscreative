import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 md:p-4 lg:p-5 sm:p-3">
      <div className="relative z-[-1] flex place-items-center">
        <Image
          className="relative"
          src="/lc-logo.svg"
          alt="Next.js Logo"
          width={400}
          height={28}
          priority
        />
      </div>
    </main>
  );
}
