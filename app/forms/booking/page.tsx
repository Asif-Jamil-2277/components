import BookingForm from "@/components/forms/booking/booking-form";

export default function BookingPreviewPage() {
  return (
    <BookingForm
      brandName="YourBrand"
      title="Book a meeting"
      description="Choose a date and time that works best for you."
      primaryColor="#2563eb"
      buttonText="Confirm booking"
      serviceName="Strategy Consultation"
      serviceDuration="45 minutes"
      location="Online meeting"
    />
  );
}