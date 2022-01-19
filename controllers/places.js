const req = require("express/lib/request")
const res = require("express/lib/response")

const router = require("express").Router()

router.get("/", (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/restaurant1.jpg',
    pic_credits: 'Photo by <a href="https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Tomasso</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/restaurant2.jpg',
    pic_credits: 'Photo by <a href="https://unsplash.com/@shawnanggg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">shawnanggg</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
  }]
  res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render("places/new")
})

// router.get('/:id', (req, res) => {

// })

router.get('/:id/edit', (req, res) => {
  res.render("places/editPage")
})

router.get('/:id/showPage', (req, res) => {
  res.render("place/showPage")
})
module.exports = router