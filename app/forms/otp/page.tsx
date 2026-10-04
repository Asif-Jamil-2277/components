import OtpForm from "@/components/forms/otp/otp-form";

export default function OtpPreviewPage() {
  return (
    <OtpForm
      brandName="YourBrand"
      title="Verify your account"
      description="We've sent a verification code to"
      email="you@example.com"
      buttonText="Verify code"
    />
  );
}