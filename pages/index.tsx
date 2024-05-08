// import Head from "next/head";
import Yolo from "../components/models/Yolo";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <main className="font-custom flex flex-col justify-center items-center  w-screen">
        <div className="flex flex-col justify-center items-center bg-blue-300 p-4 w-full">
          <h1 className="m-5 text-xl font-bold font-custom ">
            BTP-Real-Time Object Detection with YOLO
          </h1>
        </div>
        {/* Render the YOLO Model  */}
        <Yolo />
        <div className="m-5 font-custom flex flex-col justify-center items-center">
          <strong>Submitted By</strong>
          <a
            className="underline underline-offset-1 hover:translate-y-1 font-custom"
            href="https:/github.com/tanuj_kalonia"
          >
            @tanuj_kalonia (B520062)
          </a>
          <a
            className="underline underline-offset-1 hover:translate-y-1 font-custom"
            href="https:/github.com/tanuj_kalonia"
          >
            @Santosh_rath (B520047)
          </a>
          <br></br>
          <div>Under the guidence of</div>
          <strong>Proff. Ajaya Kumar Dash</strong>
        </div>
      </main>
    </>
  );
}
