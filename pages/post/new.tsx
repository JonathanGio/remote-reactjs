import { useState, FormEvent } from "react";
 
type FormData = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
};
function AddNewUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");  

  function isValid(data: FormData): boolean {
    return 
        data.username !== "" &&        
        data.password !== "" && 
        data.firstname !== "" && 
        data.lastname !== "" && 
        data.email !== "";
  }

  function onFormSubmit(event: FormEvent<HTMLFormElement>, data: FormData) {
    event.preventDefault();
    alert(`Submitting: ${data.username} - ${data.password} - ${data.firstname}- ${data.lastname}- ${data.email}`);
}

  return (
    <section className="m-4">
      <form
        className="bg-white px-8 pt-6 pb-8 mb-4"
        onSubmit={e => onFormSubmit(e, { username, password, firstname, lastname, email })}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Uusario
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastname"
          >
            Firstname
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="Your lastname"
            value={lastname}
            onChange={e => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex md:justify-end">
          <button
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-grow md:flex-grow-0 ${
              !isValid({ username, password, firstname, lastname, email })
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700"
            }`}
            disabled={!isValid({ username, password, firstname, lastname, email })}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
export default AddNewUser;