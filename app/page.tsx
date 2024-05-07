import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <main className="text-center">
      <div className="text-4xl font-semibold my-40">
        Currently <br /> You are in homepage
      </div>
      <div className="bg-black text-white text-4xl font-semibold my-40 py-20 mx-96 rounded-full">
        <Link href={"/dashboard/home"}>Press Me</Link>
      </div>
    </main>
  );
};
export default Home;
