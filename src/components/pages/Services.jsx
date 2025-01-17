import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Services() {
  return (
    <>
      <section id="services" className="py-4 md:py-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Offered Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="w-full p-4">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl lg:text-3xl">
                Crafting Visually Stunning Designs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base lg:text-lg">
                As an experienced web designer, I am committed to creating
                visually stunning designs that captivate your audience and leave
                a lasting impression.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full p-4">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl lg:text-3xl">
                Building Intuitive User Experiences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base lg:text-lg">
                I specialize in developing user-friendly interfaces that
                prioritize usability and accessibility, ensuring a seamless
                experience for your website visitors.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full p-4">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl lg:text-3xl">
                Delivering Exceptional Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base lg:text-lg">
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