import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        icon: "success",
        title: "Reset Email Sent",
        text: "Please check your email to reset your password.",
        timer: 3000,
        showConfirmButton: false,
      });
      setEmail("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-lg bg-base-100 p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password?</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your registered email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Sending Email..." : "Send Reset Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
