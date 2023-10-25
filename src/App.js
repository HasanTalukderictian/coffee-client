import { Link, useLoaderData } from "react-router-dom";
import Logo from '../src/assests/icon.png';
import coffee from '../src/assests/coffee.jpg';
import CoffeeCart from "./Components/CoffeeCart";
import { useState } from "react";




function App() {
   
  const loadedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedcoffees);

  return (
    <div className="max-w-screen-xl mx-auto" >
        <div className="bg-orange-200 space-x-1 flex justify-center"> 
        <img className="w-[56px] text-white" src={Logo} alt="" />
          <h3 className="text-4xl font-semibold text-white text-center p-4 mx-8 "> Espresso Emporium </h3>
          </div>
          <section>
              <div class=" py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                  <div className="mx-auto "> 
                      <h2 className="text-4xl  font-semibold text-center text-white">Would you like a Cup of Delicious Coffee?</h2>
                      <p className="my-4 text-white text-center">It's coffee time - Sip & Savor - Relaxation in every sip! <br />
                       Get the nostalgia back!! Your companion of every moment!!! <br />
                        Enjoy the beautiful moments and make them memorable.</p>
                        <div className="text-center my-4 text-white">
                          <Link to='/addCoffee'><button className="btn btn-outline btn-warning text-center text-white">Add Coffee</button></Link>
                        </div>
                  </div>
                 <div className="lg:flex-wrap mg:grid-cols-2 sm:grid-cols-1 space-x-3 space-y-3 ml-4 mr-4   ">
                 {
                   coffees.map(coffee => <CoffeeCart key={coffee._id}
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}></CoffeeCart>)
                  }
                 </div>
                 
              </div>
          </section>
    </div>
  );
}

export default App;
