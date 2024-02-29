import './App.css';
// import Accordion from './components/accordion';
// import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-button';
// import RandomColor from './components/random-color';
// import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
    {/*Accordion Component*/}
     {/* <Accordion/> */}
    {/*Randomcolor Component*/}
     {/* <RandomColor/> */}
     {/*star rating*/}
     {/* <StarRating noOfStars={10}/> */}
     {/*Image Slider */}
     {/* <ImageSlider url={`https://picsum.photos/v2/list`}
     page={'1'}
      limit={'10'}
     /> */}
     {/*Load more button */}
     <LoadMoreData/>
    </div>
  );
}

export default App;
