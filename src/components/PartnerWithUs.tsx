/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
const PartnerWithUs = () => {
    return (
      <section className="py-12 dark:bg-gray-900 text-center">
      <div className="flex justify-center ">
        <Image src="/assets/partner-with-us.webp" alt="Partner with Us" width={600} height={400} className="rounded-md" />
      </div>
        <h3 className="text-3xl font-bold mb-4 dark:text-white">Partner with Us!</h3>
        <p className="mb-6 dark:text-gray-400 max-w-lg mx-auto">Are you an organization passionate about photography or Africa? Lets team up! We're open to partnerships that amplify
our mission and spread the beauty of African photography far
and wide.</p>
        <button className="bg-white text-black font-bold py-2 px-4 rounded-full">Get Started</button>
      </section>
    );
  };
  
  export default PartnerWithUs;
  