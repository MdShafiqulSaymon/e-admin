import Image from 'next/image';
export default function Nav(){
    return(
        <div className="flex justify-center items-center drop-shadow-md bg-white p-4 z-20">
             <Image src="/shopping.svg" alt="Dashboard" width={60} height={60} className="mr-2" />
            <span className='text-3xl font-bold'>Welcome to Shopping Zone BD</span>
        </div>
    );
}