import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  // await prisma.user.createMany(
  // {
  //   data: [{
  //       "name": "Hailey Spurden",
  //       "email": "hspurden0@marketwatch.com",
  //     }, {
  //       "name": "Andromache Cheston",
  //       "email": "acheston1@zdnet.com",
  //     }, {
  //       "name": "Vladamir Taaffe",
  //       "email": "vtaaffe2@w3.org",
  //     }, {
  //       "name": "Allison Lambird",
  //       "email": "alambird3@mayoclinic.com",
  //     }, {
  //       "name": "Arvie Rudge",
  //       "email": "arudge4@ustream.tv",
  //     }],
  // })

  await prisma.store.createMany(
    {
      data: [{
        "name": "Rippin-Howell",
        "about": "Aonw medkivq rkh ybjd ibs. Iyu dsdvw ll df ve.",
        "ownerId": 1,
      }, {
        "name": "Reynolds and Sons",
        "about": "Mixz mdfuuiy jif cobo ivi. Hjt axbss ab rz vc.",
        "ownerId": 2,
      }, {
        "name": "Bartoletti, Fahey and McGlynn",
        "about": "Uppm ktzpkdl noc scsw kxh. Kuo bzrpj fx mg ht.",
        "ownerId": 3,
      }, {
        "name": "Waelchi, Koelpin and Hermann",
        "about": "Levd yoljvsg brf vqmn rfz. Sld yrytn km sn zd.",
        "ownerId": 4,
      }, {
        "name": "Schimmel and Sons",
        "about": "Ossn fwwikvd cvo oxem bsc. Omc dnoqu bp wf yb.",
        "ownerId": 5,
      }],
    })

  await prisma.product.createMany(
    {
      data:
      [{
        "name": "Hare's Ear Mustard",
        "price": 32.68,
      }, {
        "name": "Tricyrtis",
        "price": 20.39,
      }, {
        "name": "Roundfruit Blyxa",
        "price": 42.51,
      }, {
        "name": "Texan Gumweed",
        "price": 6.41,
      }, {
        "name": "Cinnecord",
        "price": 7.87,
      }],
    })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })