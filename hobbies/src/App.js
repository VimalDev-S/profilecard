function show(){
  const headingColor ="lightgreen"
 
      document.getElementById("Msg").innerText =
      "Hello from React! I love my hobbies!";
      document.getElementById("mainHeading").style.backgroundColor = headingColor;
    
  
}

function App() {
  const name="vimal dev",age=20,isStudent=true;
  const hobbie=["Raeding","Workout","Coding"]
  const array=[]
  
  for(let i=0;i<hobbie.length;i++){
    array.push(<li key={i}>{hobbie[i]}</li>)

  }
 
  
  

  const style={
    border:"2px solid black",
    width: "300px",       
    padding: "20px", 
    backgroundColor: "#f8f9fa"
  }
 

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" >
      <div className="card" style={style}>
        <h4 id="mainHeading"className="card-tittle"> Hobbies</h4>
        <div className="card-body">
          <h4>print using  map method</h4>
           {hobbie.map((item)=>{return  <li>{item}</li>})}
          <h4>print using  for loop</h4>

          <ul>{array}</ul>

            <p id="Msg" className="text-center">
        Click the button to see my enthusiasm!
      </p>
           <button className="btn btn-primary mb-3" onClick={show}>
        Show Enthusiasm
      </button>

          
        </div>
      </div>
    </div>
  );
}

export default App;
