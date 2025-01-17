import { Button } from "../ui/button";

function Contact() {
  return (
    <>
      <section id="contact" className="p-8">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ready to take the next step? Contact Me today and let&apos;s discuss how we can help grow your business.
        </p>

        <div className="flex gap-4 mb-6">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <a href="mailto:fatmatag60@gmail.com">Email Me</a>
          </Button>
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <a href="tel:+201090290562">Call Me</a>
          </Button>
        </div>

        <p className="text-lg text-gray-700">
          Inquire about our services by sending an email to{" "}
          <a href="mailto:fatmatag60@gmail.com" className="text-blue-600 hover:underline">
            fatmatag60@gmail.com
          </a>{" "}
          or by giving Me a call at{" "}
          <a href="tel:+201090290562" className="text-green-600 hover:underline">
            +201090290562
          </a>. We look forward to hearing from you and discussing how we can assist in the growth of your business.
        </p>
      </section>
    </>
  );
}

export default Contact;