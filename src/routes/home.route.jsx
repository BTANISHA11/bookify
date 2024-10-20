import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "@/context/firebase.context.jsx";
import BookListComponent from "@/components/BookList.component.jsx";
import { LoaderCircleComponent } from "@/components/LoaderCircle.component.jsx";
import { useState } from "react";

const HomeRoute = () => {
  const { user, loading, error } = useFirebase(); // Added error state
  const navigate = useNavigate();
  const [redirectMessage, setRedirectMessage] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      setRedirectMessage('You are not logged in. Redirecting to login page...');
      const timer = setTimeout(() => navigate("/login"), 2000); // Redirect with delay
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircleComponent />
        <p className="ml-4">Loading your data...</p> {/* Added loading text */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">An error occurred: {error.message}</p> {/* Display error */}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>{redirectMessage}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Bookify, {user.name}</h1> {/* Added welcome message */}
      <BookListComponent />
    </div>
  );
};

export default HomeRoute;
