import ForgotPasswordForm from "@/components/forms/forgot-password/forgot-password-form";

export default function ForgotPasswordPreviewPage() {
  return (
    <ForgotPasswordForm
      brandName="YourBrand"
      title="Forgot your password?"
      description="Enter your email address and we'll send you a secure link to reset your password."
      buttonText="Send reset link"
      primaryColor="#2563eb"
    />
  );
}