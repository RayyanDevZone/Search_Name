import React, { useEffect, useState } from "react";
import "./App.css";

export default function Userdata() {
  const [userdata, setUserdata] = useState([]);
  const [updatedata, setUpdatedata] = useState([]);
  const [value2, setValue2] = useState("");

  function fetchuser() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUserdata(res));
  }

  useEffect(() => {
    fetchuser();
  }, []);

  const onchange = (e) => {
    const value1 = e.target.value;
    setValue2(value1);
    const suggest = userdata.filter(
      (data) =>
        data.name.toLowerCase().includes(value1.toLowerCase()) ||
        data.username.toLowerCase().includes(value1.toLowerCase())
    );
    setUpdatedata(suggest);
  };

  return (
    <body>
    <div className="maindiv">
      <div className="datadiv">
        <input
          id="input"
          type="text"
          className="searchdata"
          placeholder="Write to search for a user"
          onChange={onchange}
        />
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {value2 === "" || updatedata.length === 0
                ? userdata.map((data) => (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.username}</td>
                    </tr>
                  ))
                : updatedata.map((data) => (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.username}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </body>
  );
}
