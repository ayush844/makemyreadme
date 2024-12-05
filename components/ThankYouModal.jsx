import Image from "next/image";
import React from "react";

const ThankYouModal = () => {
  return (
    <div
      className="bg-gray-900 w-[70vw] h-[80vh] text-white rounded-md border-2 border-primary  gap-4
fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20"
    >
      <div className=" flex flex-col gap-4 items-center container mx-auto ">
        <Image
          src={"/images/thank_you.png"}
          width={300}
          height={150}
          alt="thankyou"
          priority
        />
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center mt-[-2rem]">
          We hope <span className=" text-primary">makemyREADME</span> helped you
          create a README that stands out.{" "}
          <span className=" text-2xl md:text-4xl">💜</span>
        </p>
      </div>
      <div className=" flex justify-center gap-4 md:gap-8  items-center container max-w-[60rem] mx-auto mt-20">
        {/* <Image
          src={"/images/megaphone.png"}
          width={80}
          height={80}
          alt="speaker"
          priority
        /> */}
        <div className="flex flex-col gap-4">
          <p className=" text-2xl font-medium text-gray-400 text-center">
            We don’t charge you a thing! If you enjoyed using MakeMyReadMe, help
            us grow by sharing the project on Twitter and star our repository on
            GitHub.
          </p>
          <div className=" flex flex-col md:flex-row items-center justify-evenly gap-4 md:ml-[-1rem]">
            <a
              href="https://twitter.com/intent/tweet?text=🚀%20Check%20out%20makemyREADME%20to%20create%20beautiful%20README%20files%20for%20your%20projects%20in%20just%20a%20few%20clicks!%20💜%20%0A%0AVisit%20here%3A%20https%3A%2F%2FmakemyREADME.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              title="Share on Twitter"
            >
              <Image
                src={"/images/twitter.png"}
                width={140}
                height={140}
                alt="twitter"
                className=" hover:scale-110 cursor-pointer transition-all"
                priority
              />
            </a>
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 border-b border-gray-400 hidden md:block"></div>
              <span className=" text-gray-400 text-2xl font-thin mt-[-1.5rem] md:mt-0 ">
                AND
              </span>
              <div className="w-20 border-b border-gray-400 hidden md:block"></div>
            </div>

            <a
              href="https://github.com/hawkeye-10844/makemyreadme"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star on github repo"
              title="Star on github repo"
            >
              <Image
                src={"/images/github.png"}
                width={100}
                height={100}
                alt="github repo"
                className=" hover:scale-110 cursor-pointer transition-all"
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
