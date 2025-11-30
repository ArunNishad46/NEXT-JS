import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-130">
      <div className="flex flex-col justify-center items-center w-100 max-w-xl bg-white shadow-md rounded-lg p-2">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 underline">Contact Us</h1>
        <p className="text-gray-600">Please fill in the form below</p>
        <ContactForm />
      </div>
    </div>
  );
}
