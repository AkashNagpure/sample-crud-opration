
const studentModel = require("../models/studentData");

exports.createStudentDetails = (req, res, next) => {
    let studObj = req.body;
    studentModel.create(studObj).then(result => {
        res.status(200).json({
            message: 'record stored successfully',
            data: result
        });
    }).catch(error => {
        res.status(502).json({
            "message": error.message
        });
    })
}

exports.showStudentList = (req, res, next) => {
    studentModel.find({}).then(result =>{
        res.status(200).json({
            data: result
        });
    }).catch(error =>{
        res.status(502).json({
          "message": error.message
        });
    });
}

exports.updateStudentDetails = (req, res, next) => {
    let docId = req.params.id;
    let studObj = req.body;
    studentModel.findOneAndUpdate({ _id: docId }, { $set: studObj }).then(doc => {
        let updatedData = doc;
        res.status(200).json({
            message: "student details is updated",
            data: updatedData
        });
    }).catch(error => {
        res.status(502).json({
            "message": error.message
        });
    });
}

exports.deleteStudentDetails = (req, res, next) => {
    var docId = req.params.id;

    studentModel.deleteOne({ "_id": docId }).then(results => {
        res.status(200).json({
            message: "student details deleted successfully",
        });
    }).catch(error => {
        res.status(500).json({
            error: error.message
        })
    });
}