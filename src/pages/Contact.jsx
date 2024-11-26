import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleGoToHOme = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>This is Contact page</h2>
      <button className="px-7 py-3 bg-green-300 rounded-lg mt-5 font-bold" onClick={handleGoToHOme}>Go To Home</button>
    </div>
  );
};

export default Contact;
