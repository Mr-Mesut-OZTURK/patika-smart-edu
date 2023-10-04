exports.getHomePage =(req, res) => {
    res.status(200).render('index', {page_name:'/'})
}

exports.getAboutPage =(req, res) => {
    res.status(200).render('about', {page_name:'about'})
}

exports.getBlogPage =(req, res) => {
    res.status(200).render('blog', {page_name:'blog'})
}

exports.getSingleBlogPage =(req, res) => {
    res.status(200).render('blog-single', {page_name:'blog-single'})
}

exports.getTeachersPage =(req, res) => {
    res.status(200).render('teachers', {page_name:'teachers'})
}

exports.getContactPage = (req, res) => {
    res.status(200).render('contact', {page_name:'contact'})
}

exports.getPricingPage = (req, res) => {
    res.status(200).render('pricing', {page_name:'pricing'})
}

exports.getCoursesPage =(req, res) => {
    res.status(200).render('courses', {page_name:'courses'})
}

exports.getCoursesGrid2Page =(req, res) => {
    res.status(200).render('course-grid-2', {page_name:'index'})
}

exports.getCoursesGrid4Page = (req, res) => {
    res.status(200).render('course-grid-4', {page_name:'index'})
}
