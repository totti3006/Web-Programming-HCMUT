import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UserPage from "../../components/Users";

function User() {
  return (
    <div className="user-page">
      <Header />
      <UserPage />
      <Footer />
    </div>
  );
}

export default User;
