"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import ComponentsModal from "@/components/ComponentsModal";
import ReadmeEditor from "@/components/ReadmeEditor";
import Image from "next/image";
import MarkdownPreviewer from "@/components/MarkdownPreviewer";
import { useSearchParams } from "next/navigation";

import {
  BasicTemplate,
  OpenSourceTemplate,
  DocumentationTemplate,
  BusinessTemplate,
  DefaultTemplate,
} from "@/components/templates";
import ThankYouModal from "@/components/ThankYouModal";

const Editor = () => {
  const [markdown, setMarkdown] = useState(DefaultTemplate);
  const [url, setUrl] = useState([]);
  const searchParams = useSearchParams();
  // const template = searchParams.get("template");

  const [template, setTemplate] = useState("default");

  //   // Use a state to trigger the useSearchParams() client-side
  //   const [searchParams, setSearchParams] = useState(null);

  //   useEffect(() => {
  //     // This ensures useSearchParams is only executed on the client-side
  //     const params = new URLSearchParams(window.location.search);
  //     setSearchParams(params);
  //   }, []);

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  // 	if (template == "basic") {
  // 		setMarkdown(BasicTemplate);
  // 	} else if (template == "os") {
  // 		setMarkdown(OpenSourceTemplate);
  // 	} else if (template == "doc") {
  // 		setMarkdown(DocumentationTemplate);
  // 	} else if (template == "business") {
  // 		setMarkdown(BusinessTemplate);
  // 	}
  // }, [template]);
  //////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    // Execute this only in the browser
    if (typeof window !== "undefined") {
      setTemplate(searchParams.get("template"));
      switch (template) {
        case "basic":
          setMarkdown(BasicTemplate);
          break;
        case "os":
          setMarkdown(OpenSourceTemplate);
          break;
        case "doc":
          setMarkdown(DocumentationTemplate);
          break;
        case "business":
          setMarkdown(BusinessTemplate);
          break;
        default:
          setMarkdown(DefaultTemplate);
          break;
      }
    }
  }, [searchParams]);

  const [modal, setModal] = useState(false);

  const [thankyou, setThankyou] = useState(false);

  const toggleModal = () => {
    setModal((modal) => !modal);
  };

  const toggleThankYou = () => {
    setThankyou((modal) => !modal);
  };

  if (modal || thankyou) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const isSyncingRef = useRef(false);

  const handleScroll = (sourceRef, targetRef) => {
    if (!isSyncingRef.current) {
      isSyncingRef.current = true;
      const source = sourceRef.current;
      const target = targetRef.current;

      if (source && target) {
        const scrollRatio =
          source.scrollTop / (source.scrollHeight - source.clientHeight);
        target.scrollTop =
          scrollRatio * (target.scrollHeight - target.clientHeight);
      }

      setTimeout(() => {
        isSyncingRef.current = false;
      }, 10);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-[90vh] w-screen lg:flex items-center justify-center relative py-6 hidden ">
        <button
          onClick={toggleModal}
          className="bg-primary border-white border-2 py-3 px-3  transition-all w-fit flex items-center justify-center gap-4  hover:scale-105 left-5 z-30 rounded-full absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2 "
        >
          <Image
            src={"/images/cubes.png"}
            width={40}
            height={40}
            alt="blocks"
          />
          {/* <span className='text-black font-bold text-xl'>{modal ? "Hide Components":"Add Components"}</span> */}
        </button>

        {modal && (
          <>
            <div
              onClick={toggleModal}
              className=" z-10 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(3,4,8,0.51)]"
            ></div>
            <ComponentsModal
              appendMarkdown={(newMarkdown) =>
                setMarkdown((prev) => prev + newMarkdown)
              }
            />
          </>
        )}

        {thankyou && (
          <>
            <div
              onClick={toggleThankYou}
              className=" z-10 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(3,4,8,0.51)]"
            ></div>
            <ThankYouModal />
          </>
        )}

        <div className="grid grid-cols-12 w-screen container mx-auto">
          <ReadmeEditor
            ref={container1Ref}
            handleScroll={() => handleScroll(container1Ref, container2Ref)}
            setMarkdown={setMarkdown}
            markdown={markdown}
            toggleThankYou={toggleThankYou}
            url={url}
            setUrl={setUrl}
            template={template}
          />
          <MarkdownPreviewer
            ref={container2Ref}
            handleScroll={() => handleScroll(container2Ref, container1Ref)}
            markdown={markdown}
            toggleThankYou={toggleThankYou}
            url={url}
          />
        </div>
      </div>
    </Suspense>
  );
};

export default Editor;
