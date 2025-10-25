import Image from 'next/image';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="Black Anvil Logo"
        width={160}
        height={48}
        priority
        className="h-10 w-auto"
      />
    </div>
  );
}
