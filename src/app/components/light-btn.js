"use client"
import { useRouter, usePathname } from 'next/navigation';

export default function LightBtn({ colour, title, extCss = "", link = "/" }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        // If the current pathname is different from the link, navigate
        if (pathname !== link) {
            router.push(link);
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`w-fit border-2 ${colour} ${extCss} p-3 rounded-xl pl-4 pr-4`}
        >
            {title}
        </button>
    );
}

