import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useBanners from "../../Hooks/useBanners";
import TextCard from "../TextCard/TextCard";

const TextsList = () => {
  const { getTexts, getTextsBySearch } = useBanners();

  const [texts, setTexts] = useState([]);
  const [searchTerm, setSearchTerm] = useState({});

  const handleInputChange = (event) => {
    setSearchTerm({
      ...searchTerm,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const fetchTexts = async () => {
      const resGetTexts = await getTexts();
      setTexts(resGetTexts);
    };
    fetchTexts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchTextsBySearch = async () => {
      const resGetTextsBySearch = await getTextsBySearch(searchTerm.searchTerm);
      setTexts(resGetTextsBySearch);
    };
    fetchTextsBySearch();
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div>
      <input
        className="ml-24 mt-16 bg-[#E1E1E1] rounded-full focus:outline-none text-xs text-red-400 py-1 w-[287px] placeholder:text-red-400 placeholder:text-xs px-4"
        type="text"
        name="searchTerm"
        placeholder="Buscar"
        onChange={(e) => handleInputChange(e)}
      />
      <div className="flex flex-wrap  mt-8 justify-evenly">
        {texts &&
          texts.map((text) => (
              <TextCard key={text.id} text={text} />
          ))}
      </div>
    </div>
  );
};

TextsList.propTypes = {
  getTexts: PropTypes.func,
  getTextsBySearch: PropTypes.func,
};

export default TextsList;
