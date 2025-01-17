import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Services() {
  return (
    <>
      <section id="services" className="p-8">
        <h2 className="text-3xl font-bold mb-4">Offered Services</h2>

        <div className="flex flex-col md:flex-row">
          <Card className="md:w-1/2 p-8 m-3 md:text-left">
            <CardHeader>
              <CardTitle>Crafting Visually Stunning Designs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                As an experienced web designer, I am committed to creating
                visually stunning designs that captivate your audience and leave
                a lasting impression.
              </p>
            </CardContent>
          </Card>

          <Card className="md:w-1/2 p-8 m-3 md:text-left">
            <CardHeader>
              <CardTitle>Building Intuitive User Experiences</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I specialize in developing user-friendly interfaces that
                prioritize usability and accessibility, ensuring a seamless
                experience for your website visitors.
              </p>
            </CardContent>
          </Card>

          <Card className="md:w-1/2 p-8 m-3 md:text-left">
            <CardHeader>
              <CardTitle>Delivering Exceptional Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I am dedicated to meeting your unique business needs and going
                above and beyond to deliver exceptional results that exceed your
                expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Services;
