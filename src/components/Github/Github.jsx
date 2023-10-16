import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/user/sauravpoojary")
    //   .then((response) => response.json)
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-yellow-400 text-3xl p-4">
      Github Followers : { data.followers }
    </div>
  );
}

export default Github;
