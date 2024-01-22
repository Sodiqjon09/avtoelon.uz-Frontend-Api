// import { useState } from "react";

// // import { Link } from "@mui/icons-material"

// const Post = () => {
//   const [postData, setPostData] = useState({
//     model: "Toyota",
//     rusum: "rusum",
//     yili: "yili",
//     savdolashuv: "savdolashuv",
//     uzatma: "uzatma",
//     photo: null,
//     xolati: "xolati",
//     yeyishi: "yeyishi",
//     kraska_holati: "kraska_holati:",
//     shahar: "shahar",
//     narxi: "10 000",
//     valyuta: "So'm",
//     data: "data",
//     yana: "yana",
//   });

//   const handleFileChange = (e) => {
//     setPostData({ ...postData, photo: e.target.files });
//   };

//   const handlePostData = () => {
//     const formData = new FormData();

//     Object.keys(postData).forEach((key) => {
//       formData.append(key, postData[key]);
//     });

//     fetch("https://masterphoneuz.pythonanywhere.com/", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log("Ma'lumot yuborildi: ", result);

//         fetch("https://masterphoneuz.pythonanywhere.com/?format=json")
//           .then((response) => response.json())
//           .then((data) => {
//             console.log("Received Data: ", data);
//           })
//           .catch((error) =>
//             console.error("API dan ma'lumot olishda xato: ", error)
//           );
//       })
//       .catch((error) =>
//         console.error("API ga ma'lumot yuborishda xato: ", error)
//       );
//   };

//   return (
//     <div>
//       <h1>Avto Malumotlar</h1>

//       {/* Uncomment the following section if you want to display received data */}
//       {/* {receivedData.map(item => (
//         <div key={item.id}>
//           <p>Model: {item.model.name}</p>
//           <p>Rusum: {item.rusum.name}</p>
//           <p>Yili: {item.yili}</p>
//           <p>Savdolashuv: {item.savdolashuv}</p>
//           <p>{item.yana}</p>
//           {item.photo.map(photo => (
//             <img key={photo.id} src={photo.photo} alt="Car Photo" />
//           ))}
//         </div>
//       ))} */}

//       {/* Form for submitting data */}
//       <div>
//         <h2>Ma`lumot yuborish</h2>
//         <label>
//           Model:
//           <input
//             type="text"
//             value={postData.model}
//             onChange={(e) =>
//               setPostData({ ...postData, model: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Rusum:
//           <input
//             type="text"
//             value={postData.rusum}
//             onChange={(e) =>
//               setPostData({ ...postData, rusum: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Yili:
//           <input
//             type="text"
//             value={postData.yili}
//             onChange={(e) => setPostData({ ...postData, yili: e.target.value })}
//           />
//         </label>
//         <label>
//           Savdolashuv:
//           <input
//             type="text"
//             value={postData.savdolashuv}
//             onChange={(e) =>
//               setPostData({ ...postData, savdolashuv: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Uzatma:
//           <input
//             type="text"
//             value={postData.uzatma}
//             onChange={(e) =>
//               setPostData({ ...postData, uzatma: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Xolati:
//           <input
//             type="text"
//             value={postData.xolati}
//             onChange={(e) =>
//               setPostData({ ...postData, xolati: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Yeyishi:
//           <input
//             type="text"
//             value={postData.yeyishi}
//             onChange={(e) =>
//               setPostData({ ...postData, yeyishi: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Kraska Holati:
//           <input
//             type="text"
//             value={postData.kraska_holati}
//             onChange={(e) =>
//               setPostData({ ...postData, kraska_holati: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Shahar:
//           <input
//             type="text"
//             value={postData.shahar}
//             onChange={(e) =>
//               setPostData({ ...postData, shahar: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Narxi:
//           <input
//             type="text"
//             value={postData.narxi}
//             onChange={(e) =>
//               setPostData({ ...postData, narxi: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Valyuta:
//           <input
//             type="text"
//             value={postData.valyuta}
//             onChange={(e) =>
//               setPostData({ ...postData, valyuta: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Data:
//           <input
//             type="text"
//             value={postData.data}
//             onChange={(e) => setPostData({ ...postData, data: e.target.value })}
//           />
//         </label>
//         <label>
//           Yana:
//           <input
//             type="text"
//             value={postData.yana}
//             onChange={(e) => setPostData({ ...postData, yana: e.target.value })}
//           />
//         </label>
//         <label>
//           Photo:
//           <input type="file" onChange={handleFileChange} />
//         </label>

//         <button onClick={handlePostData}>Yuborish</button>
//       </div>
//     </div>
//   );
// };

// export default Post;

function Post() {
  const avto = "Add Avto";
  return (
    <div id="Post">
      <div className="content">
        <div>
          <h2>{avto}</h2>
          <h2>{avto}</h2>
        </div>
      </div>
    </div>
  );
}

export default Post;
