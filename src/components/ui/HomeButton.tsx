// components/HomeButton.tsx
import Link from "next/link";

export default function HomeButton() {
  return (
    <Link 
      href="/" 
      className="fixed bottom-8 right-8 bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:-translate-y-1 duration-200"
      aria-label="Back to home"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-7 h-7"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" 
        />
      </svg>
    </Link>
  );
}