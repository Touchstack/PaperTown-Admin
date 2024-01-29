import LoginForm from "./LoginForm";
import AdminBg from "../../assets/Images/AdminBg.png";

const AdminLogIn = () => {
  const divStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${AdminBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={divStyle}>
      <LoginForm />
    </div>
    
  );
};

export default AdminLogIn;