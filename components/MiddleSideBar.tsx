import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pagination from "./Pagination";

export default function MiddleSideBar() {
  return (
    <div className="ms-3">
      <h1 className="text-2xl font-bold my-3 ">Introduction</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
        perferendis, corporis rem nisi recusandae temporibus minima voluptatum
        illum! Earum, accusamus tempora. Dolores vero eaque natus animi officiis
        doloremque unde id!
      </p>
      <br></br>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
        perferendis, corporis rem nisi recusandae temporibus minima voluptatum
        illum! Earum, accusamus tempora. Dolores vero eaque natus animi officiis
        doloremque unde id!
      </p>
      <hr className="my-4"></hr>
      <button
        type="button"
        className="text-white bg-blue-500 px-6 flex justify-between py-3"
      >
        Continue <MdKeyboardArrowRight />{" "}
      </button>
      <div></div>
    </div>
  );
}
