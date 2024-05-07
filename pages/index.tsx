import Head from "next/head";
import Yolo from "../components/models/Yolo";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <main className="font-custom flex flex-col justify-center items-center  w-screen">
        <div className="flex flex-col justify-center items-center bg-blue-300 p-4 w-full">
          <h1 className="m-5 text-xl font-bold font-custom ">
            Real-Time Object Detection
          </h1>
        </div>
        {/* Render the YOLO Model  */}
        <Yolo />
        <p className="m-5 font-custom">
          Created by{" "}
          <a
            className="underline underline-offset-1 hover:translate-y-1 font-custom"
            href="https:/github.com/tanuj_kalonia"
          >
            @tanuj_kalonia and Santosh Rath
          </a>
          <p>
            Under the guidence of <strong>Proff. Ajaya Kumar Dash</strong>
          </p>
        </p>
      </main>
    </>
  );
}
