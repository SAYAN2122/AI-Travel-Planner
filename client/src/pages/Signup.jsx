import AuthLayout from "../components/auth/AuthLayout";
import SignupForm from "../components/auth/SignupForm";

function Signup() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join AI Travel Planner and start exploring."
    >
      <SignupForm />
    </AuthLayout>
  );
}

export default Signup;