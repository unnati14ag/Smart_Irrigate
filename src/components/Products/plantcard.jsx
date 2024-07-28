// // PlantCard.jsx
// import "./plantcard.scss";

// const PlantCard = ({ data }) => {
//     return (
//         <div className="plant-card">
//             <div className="image-container">
//                 <img src={data.image} alt={data.name} />
//             </div>
//             <div className="details">
//                 <div className="scientific-name">{data["Scientific Name"][0]}</div>
//                 <div className="humidity">{data.Humidity[0]}</div>
//                 <div className="water-intake">{data["Water Intake"][0]}</div>
//                 <div className="common-problems">
//                     <ul>
//                         {data["Common Problems"].map((problem, index) => (
//                             <li key={index}>{problem}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PlantCard;

import "./plantcard.scss";

const PlantCard = ({ name, data }) => {
  return (
    <div className="plant-card">
      <h2>{name}</h2>
      <div className="details">
        <div className="scientific-name">Scientific Name: {data["Scientific Name"][0]}</div>
        <div className="humidity">Humidity: {data.Humidity[0]}</div>
        <div className="water-intake">Water Intake: {data["Water Intake"][0]}</div>
        <div className="soil-condition">Soil Condition: {data["Soil Condition"][0]}</div>
        <div className="others">Others: {data.Others[0]}</div>
        <div className="light-intake">Light Intake: {Object.keys(data["Light Intake"]).map((key, index) => (
          <div key={index}>{key}: {data["Light Intake"][key]}</div>
        ))}</div>
        <div className="common-problems">
          <h3>Common Problems:</h3>
          <ul>
            {data["Common Problems"].map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
