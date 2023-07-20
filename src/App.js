import Top from "./components/top";
import Mid from "./components/mid";
import Bottom from "./components/bottom";
import Footer from "./components/footer"
import { Helmet,HelmetProvider } from 'react-helmet-async'; // eta lagbe amar tab er upr title show korate, Dek ei jnno niche helmet use korechi
import { useState } from "react";

const TITLE = 'Doggy-know more about your pricious one';

function App() {
  var imgArr = [
    'https://images.dog.ceo/breeds/hound-walker/n02089867_712.jpg',
    'https://images.dog.ceo/breeds/hound-walker/n02089867_1787.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_4837.jpg'
  ];
  var dataArr=  {
    "breed": "hound",
    "char": "aloof, clownish, dignified, independent, happy",
    "weight": "23 - 27 kgs",
    "life": "10 - 13 years"
  };
  const [msg,setMsg] = useState(imgArr);
  const [msg2,setMsg2] = useState(dataArr);
  const updatedImgArrHandler =(childDataImgs)=> {
        imgArr=childDataImgs;
        setMsg(imgArr);
        // console.log(imgArr);
  }
  const dataHandler = (childData)=>{
    setMsg2(childData);
    console.log(childData);
  }
  return (
    <div>
      <HelmetProvider>
      <Helmet>
          <title>{ TITLE }</title>
      </Helmet>
      <Top/>
      <Mid  sendArrToParent={updatedImgArrHandler} sendArrToParent2={dataHandler}/>
      <Bottom imgs={msg} data={msg2}/>
      <Footer/>
      </HelmetProvider>
    </div>
  );
}

export default App;
