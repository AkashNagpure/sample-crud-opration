var express = require('express');
var router = express.Router();

const studentRoutes = require('../controllers/student');

/* This route is used for create the student details */
router.post('/create', studentRoutes.createStudentDetails);

/* This route is used for show the list of student */
router.get('/show-list', studentRoutes.showStudentList);

/* This route is used for update the student details */
router.patch('/update/:id', studentRoutes.updateStudentDetails);

/* This route is used for delete the student details */
router.delete('/delete/:id', studentRoutes.deleteStudentDetails);

module.exports = router;
 
