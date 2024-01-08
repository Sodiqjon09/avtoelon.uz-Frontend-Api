import { useEffect, useState } from "react";

const ApiTest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://masterphoneuz.pythonanywhere.com/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <img key={item.photo.id} src={item.photo.photo} alt="" />
          <p>{item.yili}</p>
          <p>{item.kraska_holati}</p>
          <p>{item.narhi}</p>
          <p>{item.data}</p>
          <p>{item.yana}</p>
          <p>{item.model.name}</p>
          <p>{item.rusum.name}</p>
          <p>{item.shahar.name}</p>
          <p>{item.yeyishi.name}</p>
          <p>{item.karobka.name}</p>
          <p>{item.rang.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ApiTest;
