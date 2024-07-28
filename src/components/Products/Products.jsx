// import "./Products.scss";
// import Product from "./Product/Product";
// const Products = ({products, innerPage, headingText}) => {
//     return (
//     <div className="products-container">
//         {!innerPage && <div className="sec-heading">{headingText}</div>}
//         <div className="products">
//             {products?.data?.map((item)=> (
//                 <Product key={item.id} id={item.id} data={item.attributes}/>

//             ))}
//         </div>
//     </div>
//     );
// };

// export default Products;

import "./Products.scss";
import PlantCard from "./plantcard";

const plantData = {
  "Snake Plant": {
    "Temperature": {
      "Seasons": {
        "Summer": ["17.78", "25"],
        "Winter": ["17.78", "25"]
      }
    },
    "Scientific Name": ["Dracaena trifasciata"],
    "Humidity": ["This plant can handle dry Humidity"],
    "Water Intake": ["Water every 13th day"],
    "Soil Condition": ["Let soil dry up"],
    "Others": ["Sensitive to lime in water"],
    "Light Intake": ["Part sun", "Part shade"],
    "Common Problems": ["Yellow leaves", "Dropping Leaves", "Fading leaves"]
  },
  "Aloe Vera": {
    "Temperature": {
      "Seasons": {
        "Summer": ["17.78", "30"],
        "Winter": ["12.22", "25"]
      }
    },
    "Scientific Name": ["Aloe vera"],
    "Humidity": ["This plant can handle dry Humidity"],
    "Water Intake": ["Water every 16th day"],
    "Soil Condition": ["Let soil dry up"],
    "Others": [""],
    "Light Intake": {
      "preferred_light": "full sun",
      "also_suitable_with": "part sun/part-shade"
    },
    "Common Problems": ["Fading leaves", "Rotting base", "Greyish dry spots"]
  },
  "Jade Plant": {
    "Temperature": {
      "Seasons": {
        "Summer": ["15", "30"],
        "Winter": ["12.22", "25"]
      }
    },
    "Scientific Name": ["Crassula ovata"],
    "Humidity": ["This plant can handle dry Humidity"],
    "Water Intake": ["Water every 12th day"],
    "Soil Condition": ["Let soil dry up"],
    "Others": [""],
    "Light Intake": {
      "preferred_light": "full sun",
      "also_suitable_with": "part sun/part-shade"
    },
    "Common Problems": ["Yellow leaves", "Leaves far apart", "White spots"]
  },
  "Toothpick Cactus": {
    "Temperature": {
      "Seasons": {
        "Summer": ["12.22", "30"],
        "Winter": ["12.22", "17.78"]
      }
    },
    "Scientific Name": ["Stetsonia coryne"],
    "Humidity": ["This plant can handle dry humidity"],
    "Water Intake": ["Water every 3 weeks"],
    "Soil Condition": ["Let soil dry up"],
    "Others": [""],
    "Light Intake": {
      "preferred_light": "full sun"
    },
    "Common Problems": ["Yellow leaves", "Rotting base", "Black/brown spots"]
  },
  "Peace Lily": {
    "Temperature": {
      "Seasons": {
        "Summer": ["17.78", "23.88"],
        "Winter": ["17.78", "23.88"]
      }
    },
    "Scientific Name": ["Spathiphyllum wallisii"],
    "Humidity": ["This plant needs high humidity"],
    "Water Intake": ["Water every 6th day"],
    "Soil Condition": ["Top layer should be dry"],
    "Others": [""],
    "Light Intake": {
      "preferred_light": "part sun/part-shade",
      "also_suitable_with": "shade"
    },
    "Common Problems": ["Yellow leaves", "Falling flowers", "Drooping leaves"]
  },
  "Money Tree": {
    "Temperature": {
      "Seasons": {
        "Summer": ["17.78", "25"],
        "Winter": ["17.78", "25"]
      }
    },
    "Scientific Name": ["Pachira aquatica"],
    "Humidity": ["This plant is okay with normal humidity"],
    "Water Intake": ["Water every 8th day"],
    "Soil Condition": ["Top layer should be dry"],
    "Others": [""],
    "Light Intake": {
      "preferred_light": "part sun/part-shade"
    },
    "Common Problems": ["Yellow leaves", "Fading leaves", "No flowers"]
  },
  "Velvet Calathea": {
    "Temperature": {
      "Seasons": {
        "Summer": ["17.78", "25"],
        "Winter": ["17.78", "25"]
      }
    },
    "Scientific Name": ["Goeppertia rufibarba"],
    "Humidity": ["This plant needs high humidity"],
    "Water Intake": ["Water every 9th day"],
    "Soil Condition": ["Top layer should be dry"],
    "Others": ["Sensitive to lime in water"],
    "Light Intake": {
      "preferred_light": "part sun/part-shade"
    },
    "Common Problems": ["Black/brown spots", "Yellow leaves"]
  },
  "Prayer Plant": {
    "Temperature": {
      "Seasons": {
        "Summer": ["17.78", "25"],
        "Winter": ["17.78", "25"]
      }
    },
    "Scientific Name": ["Maranta leuconeura"],
    "Humidity": ["This plant needs high humidity"],
    "Water Intake": ["Water every 8th day"],
    "Soil Condition": ["Top layer should be dry"],
    "Others": ["Sensitive to lime in water"],
    "Light Intake": {
      "preferred_light": "part sun/part-shade"
    },
    "Common Problems": ["Yellow leaves", "Black/brown spots"]
  },
  "Zebra Plant": {
    "Temperature": {
      "Seasons": {
        "Summer": ["20", "32.77"],
        "Winter": ["20", "32.77"]
      }
    },
    "Scientific Name": ["Goeppertia Zebrina"],
    "Humidity": ["This plant needs high humidity"],
    "Water Intake": ["Water every 9th day"],
    "Soil Condition": ["Top layer should be dry"],
    "Others": ["Sensitive to lime in water"],
    "Light Intake": {
      "preferred_light": "part sun/part-shade"
    },
    "Common Problems": ["Yellow leaves", "Black/brown spots"]
  },
  "Monstera": {
    "Temperature": {
      "Seasons": {
        "Summer": ["17.78", "25"],
        "Winter": ["17.78", "25"]
      }
    },
    "Scientific Name": ["Monstera deliciosa"],
    "Humidity": ["This plant needs high humidity"],
    "Water Intake": ["Water every 9th day"],
    "Soil Condition": ["Top layer should be dry"],
    "Others": [""],
    "Light Intake": {
      "preferred_light": "part sun/part-shade",
      "also_suitable_with": "shade"
    },
    "Common Problems": ["Yellow leaves", "Black/brown spots"]
  }
};

const Products = () => {
  return (
    <>
    <h1 style={{ color: '#67C440', paddingTop: '20px', textAlign: 'center' }}>Product Catalog</h1>
    <div className="products-container">
      <div className="products">
        {Object.keys(plantData).map((plantName, index) => (
          <PlantCard key={index} name={plantName} data={plantData[plantName]} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Products;

