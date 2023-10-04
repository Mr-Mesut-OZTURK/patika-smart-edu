const pageController = require('../controller/pageController')
const  express = require('express')



const router = express.Router()

router.route("/").get(pageController.getHomePage)
router.route("/about").get(pageController.getAboutPage)
router.route("/blog").get(pageController.getBlogPage)
router.route("/blog-single").get(pageController.getSingleBlogPage)
router.route("/teachers").get(pageController.getTeachersPage)
router.route("/contact").get(pageController.getContactPage)
router.route("/pricing").get(pageController.getPricingPage)
router.route("/courses").get(pageController.getCoursesPage)
router.route("/course-grid-2").get(pageController.getCoursesGrid2Page)
router.route("/course-grid-4").get(pageController.getCoursesGrid4Page)


module.exports = router
