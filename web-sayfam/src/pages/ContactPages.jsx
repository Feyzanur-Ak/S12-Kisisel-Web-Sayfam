

const ContactPages = () => {




  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-custom-bg">
      {/* Ana kapsayıcı */}
      <div className="flex w-full max-w-6xl bg-teal-700/30 backdrop-blur-md shadow-lg rounded-lg">
        {/* Sol taraf */}
        <div className="flex flex-col justify-between p-10 text-white w-1/2">
          <div >  
            <h1 className="text-5xl font-bold">Feyzanur Ak</h1>
            <p className="mt-2 text-lg">Frontend Developer, Engineer</p>
          </div>
        
        </div>

        {/* Sağ taraf */}
        <div className="flex flex-col w-1/2 p-10 text-white">
          {/* Form Başlığı */}
          <h2 className="text-3xl font-bold text-white">Contact Me</h2>
          <hr className="my-4 border-gray-400" />

          {/* Form Alanları */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Please enter your name..."
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label
                htmlFor="surname"
                className="block text-lg font-medium text-white"
              >
                Surname
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Please enter your surname..."
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Please enter your email..."
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-white"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Please enter your phone number..."
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Mesajınızı buraya yazınız..."
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPages;
