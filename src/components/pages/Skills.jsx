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
      <section id="/skills" className="p-8">
        <h2 className="text-3xl font-bold mb-4">Skills and Technologies</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Web Technologies</TableHead>
              <TableHead>Programming Languages</TableHead>
              <TableHead>Frameworks</TableHead>
              <TableHead>Other</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>
                <li>HTML5</li>
              </TableCell>
              <TableCell>
                <li>TypeScript</li>
              </TableCell>
              <TableCell>
                <li>React JS</li>
              </TableCell>
              <TableCell>
                <li>OOP</li>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <li>CSS3</li>
              </TableCell>
              <TableCell>
                <li>JavaScript</li>
              </TableCell>
              <TableCell>
                <li>Node.JS</li>
              </TableCell>
              <TableCell>
                <li>Git</li>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <li>Bootstrap</li>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <li>GitHub</li>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <li>Tailwind CSS</li>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </>
  );
}

export default Skills;
