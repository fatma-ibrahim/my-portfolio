import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Skills() {
  return (
    <>
      <section id="skills" className="md:p-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Technical Skills
        </h2>

        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="text-sm md:text-base lg:text-lg">
                  Web Technologies
                </TableHead>
                <TableHead className="text-sm md:text-base lg:text-lg">
                  Programming Languages
                </TableHead>
                <TableHead className="text-sm md:text-base lg:text-lg">
                  Frameworks
                </TableHead>
                <TableHead className="text-sm md:text-base lg:text-lg">
                  Other
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="text-sm md:text-base lg:text-lg">
                  <li>HTML5</li>
                </TableCell>
                <TableCell className="text-sm md:text-base lg:text-lg">
                  <li>TypeScript</li>
                </TableCell>
                <TableCell className="text-sm md:text-base lg:text-lg">
                  <li>React JS</li>
                </TableCell>
                <TableCell className="text-sm md:text-base lg:text-lg">
                  <li>OOP</li>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-sm md:text-base lg:text-lg">
                  <li>CSS3</li>
                </TableCell>
                <TableCell className="text-sm md:text-base lg:text-lg">
                  <li>JavaScript</li>
                </TableCell>
                <TableCell className="text-sm md:text-base lg:text-lg">
                  <li>Node.JS</li>
                </TableCell>
                <TableCell className="text-sm md:text-base lg:text-lg">
                  <li>Git</li>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-sm md:text-base lg:text-lg">
                  <li>Bootstrap</li>
                </TableCell>
                <TableCell className="text-sm md:text-base lg:text-lg"></TableCell>
                <TableCell className="text-sm md:text-base lg:text-lg"></TableCell>
                <TableCell className="text-sm md:text-base lg:text-lg">
                  <li>GitHub</li>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-sm md:text-base lg:text-lg">
                  <li>Tailwind CSS</li>
                </TableCell>
                <TableCell className="text-sm md:text-base lg:text-lg"></TableCell>
                <TableCell className="text-sm md:text-base lg:text-lg"></TableCell>
                <TableCell className="text-sm md:text-base lg:text-lg"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}

export default Skills;