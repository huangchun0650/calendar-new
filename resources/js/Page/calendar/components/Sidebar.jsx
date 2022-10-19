import React, { Component, useState } from "react";
import SidebarTrigger from './SidebarTrigger';

export default function Sidebar({ children, openStatus, openIt }) {
  console.log(openStatus, openIt)
  return (
    <>
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (openStatus
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all opacity-0 translate-x-full  ")
      }
    >
      <div
        className={
          " w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (openStatus ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 h-full">
          <header className="p-4 font-bold text-lg">Header</header>
          {children}
        </article>
      </div>
      <div
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          // setIsOpen(false);
        }}
      ></div>
    </main>
    <div>
      <SidebarTrigger openStatus={openStatus} openIt={openIt}/>
    </div>
    </>
  );
}