import MiddleSideBar from "@/components/MiddleSideBar";
import RightSideBar from "@/components/RightSideBar";
import React from "react";

export default function page() {
  return (
    <>
      {/* header */}
      <div className="w-100 h-12 border border-red-500 border-1">
        <h1>header</h1>
      </div>

      {/* body */}

      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/4 bg-gray-200 p-4">Left Section</div>
          <div
            className="w-1/2 bg-white p-4"
            style={{ backgroundColor: "#fdfdfd" }}
          >
            <MiddleSideBar />
          </div>
          <div className="w-1/4  bg-white p-4 border border-gray-200 border-1 container_box_shadow">
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
