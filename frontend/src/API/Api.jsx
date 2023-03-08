import axios from "axios";

export const getData = async ({ setGetDataLoading, setResult }) => {
  try {
    setGetDataLoading(false);
    let response = await axios.get("http://localhost:5000/upload/all");
    setResult(response.data);
  } catch (err) {
    alert(err);
    setGetDataLoading(false);
  }
};

export const postData = async ({ setPostDataLoading, setPostDatas, title, image }) => {
  try {
    const datas = { title, image: image.filesUploaded[0].url };
    setPostDataLoading(true);
    console.log(datas);
    let response = await axios.post("http://localhost:5000/upload/", datas);
    response && setPostDataLoading(false);
    response && setPostDatas(response.data);
  } catch (err) {
    alert(err);
    console.log(err);
    setPostDataLoading(false);
  }
};
