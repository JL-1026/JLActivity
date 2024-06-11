import Nav from './components/Nav';
import Slider from './components/Slider'
import Card from './components/Cards';
import Footer from './components/Footer';
// import Name from './Nav';
// import New1 from './New';


function App() {
  const cardData = [
    {
      title: "HTML",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F998EFA4B5ABB7E9F0B"
    },
    {
      title: "BOOTSRAP",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies.png"
    },
    {
      title: "REACT JS",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
    },
    {
      title: "GITHUB",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    }
  ];
  return (
    <div className="App">
        <Nav/>
        <Slider/>
        <div className="container mt-4">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <Card 
              title={card.title}
              text={card.text}
              imageUrl={card.imageUrl}
            />
          </div>
              ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
