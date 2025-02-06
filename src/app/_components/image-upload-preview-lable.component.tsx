"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { set } from "zod";

interface ImageUploadPreviewLableProps {
  htmlFor: string;
}

export function ImageUploadPreviewLable(props: ImageUploadPreviewLableProps) {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const input = document.getElementById("image-upload");
    if (input) {
      input.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;
        if (target.files) {
          const file = target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              if (e.target) {
                setImage(e.target.result as string);
              }
            };
            reader.readAsDataURL(file);
          }
        }
      });
    }
  }, []);

  return (
    <label
      className={`relative flex w-full cursor-pointer flex-col items-center justify-center rounded border border-dashed border-primary p-4 ${
        image ? "h-auto" : "h-32"
      }`}
      htmlFor={props.htmlFor}
    >
      <div className="flex flex-col items-center text-primary">
        {lableFill(image, props.htmlFor, setImage)}
      </div>
    </label>
  );
}

function lableFill(image: string, htmlFor: string, setImage: (image: string) => void) {
  if (image) {
    return (
      <div className="relative flex h-full max-h-[500px] w-full max-w-[800px] items-center justify-center">
        <Image
          src={image}
          alt="Uploaded Image"
          width={800}
          height={500}
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          objectFit="contain"
        />
        <button
          className="group absolute right-2 top-2 flex h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-[rgb(20,20,20)] opacity-50 shadow-md transition-opacity duration-300 hover:rounded-[24px] hover:opacity-85"
          onClick={() => clearImage(htmlFor, setImage)}
        >
          <svg viewBox="0 0 448 512" className="w-[10px]">
            <path
              fill="white"
              d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
            ></path>
          </svg>
        </button>
      </div>
    );
  } else {
    return (
      <>
        <span className="mb-2">Upload Image</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
            ></path>
          </g>
        </svg>
      </>
    );
  }
}

function clearImage(htmlFor: string, setImage: (image: string) => void) {
  const input = document.getElementById(htmlFor) as HTMLInputElement;
  input.value = "";
  setImage("");
}
