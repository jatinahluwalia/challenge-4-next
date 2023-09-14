"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="w-max pl-7 pr-9 py-2 ml-10 lg:ml-0 shadow-md bg-white dark:bg-dark-blue rounded-md flex items-center gap-3"
    >
      <IoIosArrowRoundBack className="text-black dark:text-white" size="2rem" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
