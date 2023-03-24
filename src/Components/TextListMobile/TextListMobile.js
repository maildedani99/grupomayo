import React, { useEffect, useState } from "react";
import useBanners from "../../Hooks/useBanners";
import TextCardMobile from "../TextCardMobile/TextCardMobile";

const TextListMobile = () => {
  const { getTexts } = useBanners();

  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const fetchTexts = async () => {
      const resGetTexts = await getTexts();
      setTexts(resGetTexts);
    };
    fetchTexts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col  mt-8 justify-evenly">
      {texts &&
        texts.map((text) => (
          <div key={text.id}>
            <TextCardMobile text={text} />
          </div>
        ))}
    </div>
  );
};

TextListMobile.propTypes = {};

export default TextListMobile;
