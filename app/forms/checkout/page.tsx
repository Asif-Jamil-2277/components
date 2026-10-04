import CheckoutForm from "@/components/forms/checkout/checkout-form";

export default function CheckoutPreviewPage() {
  return (
    <CheckoutForm
      brandName="YourBrand"
      title="Complete your purchase"
      currency="$"
      buttonText="Pay securely"
      items={[
        {
          name: "Premium Plan",
          description: "Annual subscription",
          price: 129,
          quantity: 1,
        },
        {
          name: "Priority Support",
          description: "Included",
          price: 29,
          quantity: 1,
        },
      ]}
    />
  );
}