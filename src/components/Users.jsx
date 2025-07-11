import { useState, useEffect } from "react";
import axios from "axios";

export default function () {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    };
    fetching();
  }, []);

  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 ">
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
