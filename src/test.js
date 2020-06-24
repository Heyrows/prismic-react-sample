/* eslint-disable */
import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";

export const Test = () => {
  const [prismicData, SetPrismicData] = useState({ status: "loading" });

  const st = [{"type":"paragraph","text":"With some text:","spans":[{"start":10,"end":19,"type":"strong"}]},{"type":"o-list-item","text":"Info 1","spans":[]},{"type":"o-list-item","text":"Info 2 and link","spans":[{"start":7,"end":15,"type":"hyperlink","data":{"link_type":"Web","url":"https://google.com"}}]},{"type":"o-list-item","text":"Info 3","spans":[]}]
  useEffect(() => {
  }, []);
  

  return (
    <RichText render={st} />
  );
};
