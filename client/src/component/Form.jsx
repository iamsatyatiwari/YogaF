// import React, { useState } from "react";
// import axios from "axios";
// import "./Form.css";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     email: "", // Added email field
//     selectedBatch: "",
//   });

//   const [error, setError] = useState("");
//   const [payment, setPayment] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     console.log(formData);
//   };
//   const showPayment = () => {
//     setTimeout(() => {
//       setPayment(true);
//     }, 1000);
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Client-side validation
//     if (
//       !formData.name ||
//       !formData.age ||
//       !formData.email ||
//       !formData.selectedBatch
//     ) {
//       setError("All fields are required");
//       return;
//     }

//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setError("Invalid email address");
//       return;
//     }

//     if (isNaN(formData.age) || formData.age < 18 || formData.age > 65) {
//       setError("Age must be a number between 18 and 65");
//       return;
//     }

//     // Clear previous errors
//     setError("");

//     try {
//       // Send data to the backend using Axios
//       const response = await axios.post(
//         "http://localhost:5000/saveUserData",
//         formData
//       );

//       // Handle the response from the server (if needed)
//       alert(response.data.message);
//       //   alert(toString(response.data));
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div className="form-container">
    
//       <h2>Admission Form</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Age:
//           <input
//             type="text"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Select Batch:
//           <select
//             name="selectedBatch"
//             value={formData.selectedBatch}
//             onChange={handleChange}
//           >
//             <option value="">Select Batch</option>
//             <option value="6-7AM">6-7AM</option>
//             <option value="7-8AM">7-8AM</option>
//             <option value="8-9AM">8-9AM</option>
//             <option value="5-6PM">5-6PM</option>
//           </select>
//         </label>
//         <br />
//         <div
//           style={{
//             margin: "1rem",
//             width: "",
//             textAlign: "center",
//             cursor: "pointer",
//           }}
//         >
//           <span
//             style={{
//               border: "1px solid grey",
//               padding: "5px",
//             }}
//             onClick={showPayment}
//           >
//             Proceed To Pay
//           </span>{" "}
//         </div>
//         {payment && !error ? (
//           <>
//             <div className="payment">
//               <div>Make Payment Here</div>

//               <input type="text" placeholder="Enter Your Upi Id" />
//             </div>
//             <button type="submit"> Pay $500 </button>
//           </>
//         ) : (
//           <></>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "", // Added phone number field
    selectedBatch: "",
  });

  const [error, setError] = useState("");
  const [payment, setPayment] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const showPayment = () => {
    setTimeout(() => {
      setPayment(true);
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (
      !formData.name ||
      !formData.age ||
      !formData.email ||
      !formData.phoneNumber || // Check for phone number
      !formData.selectedBatch
    ) {
      setError("All fields are required");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email address");
      return;
    }

    if (isNaN(formData.age) || formData.age < 18 || formData.age > 65) {
      setError("Age must be a number between 18 and 65");
      return;
    }

    // Clear previous errors
    setError("");

    try {
      // Send data to the backend using Axios
      const response = await axios.post(
        "http://localhost:5000/saveUserData",
        formData
      );

      // Handle the response from the server (if needed)
      alert(response.data.message);
      //   alert(toString(response.data));
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Yoga Admission Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Select Batch:
          <select
            name="selectedBatch"
            value={formData.selectedBatch}
            onChange={handleChange}
          >
            <option value="">Select Batch</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </label>
        <br />
        <div
          style={{
            margin: "1rem",
            width: "",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              border: "1px solid grey",
              padding: "5px",
            }}
            onClick={showPayment}
          >
            Proceed To Pay
          </span>{" "}
        </div>
        {/* Payment section */}
        {payment && !error ? (
          <>
            <div className="payment">
              <div>Make Payment Here</div>
              <input type="text" placeholder="Enter Your Upi Id" />
            </div>
            <button type="submit"> Pay $500 </button>
          </>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default Form;
