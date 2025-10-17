
import About from './About';
import image from './images/Cartoon-Person-PNG.png'
function App() {
  const cstyle={
    
      
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    border:"2px solid black",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    }
  
  const name="vimal dev"
  const description="Hi my name is vimal and iam learning react js"
  return (
   <div className='d-flex justify-content-center align-items-center vh-100' >
    <div className="card "style={cstyle}>
      <div className='row'>
      


      <img className="card-img-top"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBgaNycIkDwZ8Qp3KqiardaRmuO9DC_eA3Q&s" style={{width:"200px",height:"250px"}}/>
      </div>
      <div className='col-6'>
      <img className="card-img"  src={image} style={{height:"250px",width:"200px"}}/>
      </div>
      </div>
      <div className="card-body text-center">
        
         <h4 class="card-title">{name}</h4>
         <p class="card-text">{description}</p>
      </div>
    </div>
    
  
  );
}

export default App;
