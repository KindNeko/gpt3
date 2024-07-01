import { React } from "react";

import { Brand } from "../../components/export";
import { Blog, CTA, Features, Possibility, WhatGPT3 } from "../export";
import "./main.css";
function Main() {
  return (
    <main className="main">
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
    </main>
  );
}
export { Main };
