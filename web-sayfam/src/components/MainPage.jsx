import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
const MainPage = () => {

    const {title, name, description} = useContext(GlobalContext);
  return (
      <section className="container  px-20 py-12 flex flex-col   items-center  bg-white">
         <div className="md:w-1/2 space-y-6">
             <div className="flex items-center space-x-3"> 
                <div className="w-20 h-[1.0px] bg-purple-600 "/>
                         <p className="font-bold text-purple-600">{name}</p>
       
        </div>
        
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight"> {title}</h1>
            <p className="text-lg text-gray-600 mb-6"> {description}</p>

            <div className="flex flex-wrap  gap-3 mt-4">
            <button className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"> 
             Hire Me
            </button>
            <button className="px-5 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition">
           Git Hub
            </button>
            <button className="px-5 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition">
            Linkedln
            </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
            <img   
                className="rounded-xl shadow-lg max-w-full"
                 src="https://picsum.photos/200/300" />
        </div>
        </div>
        
     
      </section>

  )
}

export default MainPage
