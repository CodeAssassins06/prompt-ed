/* eslint-disable no-unused-vars */

import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-1/6">
        <Sidebar />
      </div>
    </>
  );
}
