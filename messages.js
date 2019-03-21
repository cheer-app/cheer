// const { User, Response, Subscription } = require('../models'

// //User.hasMany(Subscription)
// User.hasMany(Response)

// //require('cron').registerTask('* * * * 1 *', function () {
//   async function main() {
//     `
//     select * from user
//     `
//     const peopleWhoNeedMessages = await User.find({
//       include: [{
//         model: Response,
//         required: true,
//         where: {
//           delivered: Op.in([false, undefined])
//           createdAt: Op.notEqual(/* today */)
//         }
//       }]
//     })

//     const responses = []
//     for (let person of peopleWhoNeedMessages) {
//       try {
//         responses.push(await Response.create({ person: person }))
//       }
//       catch (error) {
//         console.error(`field to do create response for ${person.id}`)
//         console.error(error)
//       }
//     }
//     for (let response of responses) {
//       await deliverMessageViaSlack(response)
//       await response.update({ delivered: true })
//     }
//   }
//   main()
//   //})
