import FileUploadForm from "@/components/forms/file-upload/file-upload-form";

export default function FileUploadPreviewPage() {
  return (
    <FileUploadForm
      brandName="YourBrand"
      title="Upload your documents"
      description="Add the files you need. You can upload multiple documents at once."
      primaryColor="#2563eb"
      buttonText="Continue"
      maxFiles={5}
      maxFileSizeMB={10}
    />
  );
}