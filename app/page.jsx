import Feed from "@/components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        Discover & Connect
        <br className="max-md:hidden" />
        <span className="red_gradient text-center">
          {" "}
          Connect Donors and Requestors{" "}
        </span>
      </h1>
      <p className="desc text-center">
        RedHope is an online platform dedicated to bridging the critical gap
        between blood donors and those in need of blood donations. This platform
        serves as a lifeline for individuals and communities, facilitating the
        crucial process of connecting donors with requestors in a seamless and
        efficient manner.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
