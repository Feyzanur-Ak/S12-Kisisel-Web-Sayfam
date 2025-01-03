import { useDispatch, useSelector } from "react-redux";
import { setField, setErrors, reset } from "../store/actions/userAction";
import { useApi } from "../mocks/api.js";
import { toast, ToastContainer } from "react-toastify";
import useGlobalContext from "../hooks/useGlobalContext";

const ContactPages = () => {
  const dispatch = useDispatch();
  {/* useSelector kullanarak storedan name, surname, email, phone, message, errors degerlerini alıyoruz */ }
  const { name, surname, email, phone, message, errors } = useSelector(
    (state) => state.user
  );
  const { postToApi } = useApi();
  const { language, contact } = useGlobalContext();


  const handleChange = (e) => {
    const { name, value } = e.target; 
    {/*burada input içindeki name ve value değerlerini aslında destructuring ile alıyoruz */}
    dispatch(setField(name, value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !surname || !email || !message) {
      dispatch(setErrors({ message: "All fields are required!" }));
      return;
    }

    try {
      const data = { name, surname, email, phone, message };
      await postToApi(data); // POST işlemi
      toast.success(language === "tr" ? "Mesajınız başarıyla gönderildi!" : "Your message has been sent!");
      dispatch(reset()); // Formu sıfırla
    } catch (error) {
      toast.error(language === "tr" ? "Mesaj gönderimi sırasında bir hata oluştu." : "An error occurred while sending the message.");
      console.error("API Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-custom-bg">
      <ToastContainer /> {/* Toast mesajları için gerekli */}
      <div className="flex w-full max-w-6xl bg-teal-700/30 backdrop-blur-md shadow-lg rounded-lg">
        {/* Sol taraf */}
        <div className="flex flex-col justify-between p-10 text-white w-1/2 hidden lg:flex ">
          <div>
            <h1 className="text-5xl font-bold">Feyzanur Ak</h1>
            <p className="mt-2 text-lg">{contact.developerInfo}</p>
          </div>
        </div>

        {/* Sağ taraf */}
        <div className="flex flex-col w-1/2 p-10 text-white">
          {/* Form Başlığı */}
          <h2 className="text-3xl font-bold text-white">{contact.title}</h2>
          <hr className="my-4 border-gray-400" />

          {/* Hata mesajı */}
          {errors?.message && (
            <div className="mb-4 text-red-500">{errors.message}</div>
          )}


          {/* Form Alanları */}
          <form className="space-y-6 w-full max-w-md " onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-white hidden md:block">
               {language==="tr" ? "İsim" : "Name"}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
                placeholder={contact.namePlaceholder}
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-black bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="surname"
                className="block text-lg font-medium text-white"
              >
                {language==="tr" ? "Soyisim" : "Surname"}
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                value={surname}
                onChange={handleChange}
                placeholder={contact.surnamePlaceholder}
               className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-black bg-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder={contact. emailPlaceholder}
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-black bg-white"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-white">
              {language==="tr" ? "Telefon" : "Phone"}
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={handleChange}
                placeholder={contact. phonePlaceholder}
                 className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-black bg-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-white">
              {language==="tr" ? "Mesaj" : "Message"}
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={handleChange}
                placeholder={contact.messagePlaceholder}
             className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-black bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 mt-4 text-white bg-teal-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              {language==="tr" ? "Gönder" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPages;
