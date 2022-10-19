import React from "react";

export default function SidebarTrigger({ openStatus, openIt }) {
  console.log('SidebarTrigger',openStatus, openIt)
  return (
    <>
    <div id="drawer-swipe" className="fixed flex justify-end w-4 h-full overflow-auto bg-gray-200 border-10 border-t border-gray-200 rounded-r dark:border-gray-700 dark:bg-gray-800" aria-labelledby="drawer-swipe-label" data-drawer-backdrop="false">
      <div className="p-2 cursor-pointer bg-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700" data-drawer-toggle="drawer-swipe" onClick={() => openIt(!openStatus)}>
          <span className="absolute w-1 h-10 -translate-x-1/2 bg-gray-400 rounded-lg top-1/2 left-1/2 dark:bg-gray-600"></span>
      </div>
    </div>
    </>
  );
}