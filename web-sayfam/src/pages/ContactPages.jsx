

const ContactPages = () => {
  return (
    <form className=" flex items-center flex-col gap-5 py-10 bg-custom-bg bg-no-repeat bg-center bg-cover h-[calc(100vh-4rem)] w-full">
        <label
          htmlFor="name"
          className=" text-2xl font-medium gap-5 text-gray-900"
         
        >          
        </label>
        <input
          type="text"
          name="name"
          id="name"
           placeholder="Please enter your name..."
           className="w-full max-w-md py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        /> 

<label
          htmlFor="surname"
          className=" text-2xl font-medium gap-5 text-gray-900"
         
        >          
        </label>
        <input
          type="text"
          name="surname"
          id="surname"
           placeholder="Please enter your surname..."
           className="w-full max-w-md py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        /> 

<label
          htmlFor="message"
          className=" text-2xl font-medium gap-5 text-gray-900"
         
        >          
        </label>
        <textarea
          type="message"
          name="message"
          id="message"
           placeholder="Mesajınızı buraya yazınız..."
           className="w-full max-w-md py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        /> 
    
    </form>
  )
}

export default ContactPages
