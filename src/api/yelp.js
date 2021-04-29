import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer FWAVdKXZn70_u5arLdm8wINKojjUSFoAIFfcAGZreJq2HlD_tBU8LD1RERqHA3llrtkchjlJkg_Qm0iSWlMBMcvJCcDuwk-RU2_WGxH_mw6F4PPskfcOblQpC36IYHYx",
  },
});
