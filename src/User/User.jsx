import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return <div className="bg-yellow-500 text-3xl text-center">User : {userId} </div>;
}

export default User;
