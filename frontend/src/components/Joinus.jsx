import { useState } from "react";

export default function Joinus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [place, setPlace] = useState("");

  const apiUrl = "http://localhost:3000/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !mobile || !dob || !place) {
      alert("Please fill all fields");
      return;
    }
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mobile, dob, place }),
      });
      if (res.ok) {
        alert("Details Submitted, Thank You!!!");
        setName(""); setEmail(""); setMobile(""); setDob(""); setPlace("");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error in Form");
    }
  };
return (
    <div
      id="joinus"
      className="mt-50 relative flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl mx-auto bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent mt-2">
        Join With Us
      </h1>
      <h1 className="text-cyan-200">Fill the below form</h1>
      <div className="flex m-5 text-cyan-200 items-center hover:shadow-md duration-900 ease-in-out shadow-cyan-300 justify-center border flex-col bg-gray-800 bg-opacity-0 border-green-300 rounded-4xl p-5 gap-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md shadow-lg rounded-lg"
        >
          <label>
            Enter Your Name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border hover:shadow-sm shadow-cyan-300 duration-700"
              placeholder="Name"
              type="text"
              required
            />
          </label>

          <label>
            Mobile Number:
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-2 border hover:shadow-sm shadow-cyan-300 duration-700"
              placeholder="Mobile"
              type="text"
              required
            />
          </label>

          <label>
            Enter Email:
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border hover:shadow-sm shadow-cyan-300 duration-700"
              placeholder="Email"
              type="email"
              required
            />
          </label>

          <label>
            Place:
            <input
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="w-full p-2 border hover:shadow-sm shadow-cyan-300 duration-700"
              placeholder="Place"
              type="text"
              required
            />
          </label>

          <label>
            Date Of Birth:
            <input
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-2 border hover:shadow-sm shadow-cyan-300 duration-700"
              placeholder="DOB"
              type="date"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full py-2 rounded-full mt-4 hover:shadow-sm hover:animate-pulse ease-in-out duration-900 shadow-cyan-300 bg-slate-700 text-cyan-200 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
