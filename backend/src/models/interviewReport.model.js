const monogoose = require('mongoose');



/**
 * job description
 * resume text 
 * self description
 * 
 *  matchScore :
 * technical question
 * behavioral question
 * skill gaps
 * preparation plan : [{
 * day : number,
 * focus : string,
 * tasks : [string]}]
 */

const interviewQuestionSchema = new monogoose.Schema({
    question : {
        type : String,
        required : [true, " technical question is required"]
    },
    intention :{
        type : String,
        required : [true,"intention is required"]
    },
    answer :{
        type :String,
        required : [true, "answer is required"]

    }
    }, {
        _id :flase
    

})

const behavioralQuestionSchema = new monogoose.Schema({   question : {
        type : String,
        required : [true, " technical question is required"]
    },
    intention :{
        type : String,
        required : [true,"intention is required"]
    },
    answer :{
        type :String,
        required : [true, "answer is required"]

    },
    _id : false
})
const skillGapSchema = new monogoose.Schema({
    skill : {
        type : String,
        required : [true, "skill is required"]
    },
    gapDescription : {
        type : String,
        required : [true, "gap description is required"]
    },
    _id : false
})
const preparationPlanSchema = new monogoose.Schema({
    day : {
        type : Number,
        required : [true, "day is required"]
    },
    focus : {
        type : String,
        required : [true, "focus is required"]
    },
    tasks : [String],
    _id : false
})


const interviewReportSchema = new monogoose.Schema({
    jobDescription : {
        type : String,
        required :[true, "job description is required"]
    },
    resume :{
        type : String,
    },
    selfDescription : {
        type : String,
    },
    matchScore : {
        type : Number,  
        min :0,
        max :100
    }
    , 
    technicalQuestions : [interviewQuestionSchema],
    behavioralQuestions : [behavioralQuestionSchema],
    skillGaps : [skillGapSchema],
    preparationPlan : [preparationPlanSchema]
},{
    timestamps : true
}
)     

const interviewReportModel = monogoose.model("InterviewReport", interviewReportSchema);

module.exports = interviewReportModel;
