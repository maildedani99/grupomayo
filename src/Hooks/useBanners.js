import { CONECTION_API } from "../Routes/routes";

const useBanners = (props) => {
  const getBanner = async () => {
    const url = CONECTION_API + "banner";
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options);
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const payload = await response.json();
        return payload.shift();
      }
      return Promise.reject(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  const getSubbanners = async () => {
    const url = CONECTION_API + "subbanner";
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options);
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const payload = await response.json();
        return payload;
      }
      return Promise.reject(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  const getTexts = async () => {
    const url = CONECTION_API + "texts";
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options);
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const payload = await response.json();
        return payload;
      }
      return Promise.reject(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  const getTextsBySearch = async (searchTerm) => {
    const url = `${CONECTION_API}texts?search=${encodeURIComponent(
      searchTerm
    )}`;
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options);
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const payload = await response.json();
        return payload;
      }
      return Promise.reject(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getBanner,
    getSubbanners,
    getTexts,
    getTextsBySearch,
  };
};

useBanners.propTypes = {};

export default useBanners;
