import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.user.createMany(
    {
        data: [{
            "name": "Hailey Spurden",
            "email": "hspurden0@marketwatch.com",
          }, {
            "name": "Andromache Cheston",
            "email": "acheston1@zdnet.com",
          }, {
            "name": "Vladamir Taaffe",
            "email": "vtaaffe2@w3.org",
          }, {
            "name": "Allison Lambird",
            "email": "alambird3@mayoclinic.com",
          }, {
            "name": "Arvie Rudge",
            "email": "arudge4@ustream.tv",
          }],
      }
)}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })