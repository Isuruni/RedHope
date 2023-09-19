"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const { data: session } = useSession();

  const user = session?.user;

  const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3 pr-0">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={60}
          height={60}
          className="object-contain"
        />
        <p className="logo_text">ReadHope</p>
      </Link>
      {/* desktop Nav // we have to add user means is there any user there wrap whole react */}
      <div className="sm:flex hidden">
        {user ? (
          <div className="flex gap-3 md:gap-5">
            <button type="button" onClick={signOut} className="red_btn">
              Sign Out
            </button>
            <Link href="/request-blood" className="red_btn">
              Request Blood
            </Link>
            <Link href="/profile">
              <Image
                src="/assets/images/profile.png"
                width={37}
                height={37}
                className=" rounded-full "
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <React.Fragment>
            <button
              type="button"
              //key={provider.name}
              handleButtonClick={() => {}}
              className="red_btn mr-[10px]"
            >
              Sign Up
            </button>
            <Link href="/request-blood" className="red_btn">
              Request Blood
            </Link>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default Nav;
