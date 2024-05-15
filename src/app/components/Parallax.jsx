'use client';
import { ParallaxProvider } from "react-scroll-parallax";

const Parallax = ({ children }) => {
  return (
    <ParallaxProvider >{children}</ParallaxProvider>
  );
}

export default Parallax;