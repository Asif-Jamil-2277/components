import WizardForm from "@/components/forms/wizard/wizard-form";

export default function WizardPreviewPage() {
  return (
    <WizardForm
      brandName="YourBrand"
      title="Complete your profile"
      description="A simple guided experience that keeps every step clear."
      primaryColor="#2563eb"
      buttonText="Complete setup"
    />
  );
}