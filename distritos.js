import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i <= 15; i++) {
    const distritosEndpoint = `${process.env.INFORMACION_PUBLICA_API_URL}/distritos?page=${i}`; //fallo 3, 5, 6, 7, 8, 9, 10, 11, 12, 13
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.INFORMACION_PUBLICA_ACCESS_TOKEN}`,
        Accept: "application/json",
      },
    };

    axios
      .get(distritosEndpoint, config)
      .then((res) => {
        const data = res.data.results;
        console.log(res.data.meta);
        data.forEach(async (distrito) => {
          // let departamento = await prisma.departamento.findUnique({
          //   where: {
          //     id: distrito.departamento.id,
          //   },
          // });
          //
          // if (!departamento) {
          //   departamento = await prisma.departamento.create({
          //     data: {
          //       id: distrito.departamento.id,
          //       nombre: distrito.departamento.nombre,
          //     },
          //   });
          // }
          //
          // console.log(departamento);
          try {
            console.log(distrito);
            // const d = await prisma.distrito.create({
            //   data: {
            //     id: distrito.id,
            //     nombre: distrito.nombre,
            //     departamentoId: distrito.departamento.id,
            //   },
            // });
          } catch (e) {
            console.log(distrito);
          }

          //
          // const dp = await prisma.departamento.upsert({
          //   where: {
          //     id: distrito.departamento.id,
          //   },
          //   create: {
          //     id: distrito.departamento.id,
          //     nombre: distrito.departamento.nombre,
          //     distritos: {
          //       create: {
          //         id: distrito.id,
          //         nombre: distrito.nombre,
          //       },
          //     },
          //   },
          //   update: {
          //     nombre: distrito.departamento.nombre,
          //   },
          // });
        });
      })
      .catch((e) => console.log(e));
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
