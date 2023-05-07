import React from "react";

const Footer = () => {
  return (
    <>
      <div className="text-center bg-dark text-white fixed-bottom py-1">
        <span>
        ©Copyright & developed by{" "}
          <a
            className="text-decoration-none"
            target="blank" //to open in a new window
            href="https://cozy-liger-55f9ba.netlify.app/"
          >
            Sudhanshu
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;