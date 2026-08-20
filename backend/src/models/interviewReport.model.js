import mongoose from "mongoose";

/**
 * job description schema
 * resume text
 * self description
 *
 * technical questions:[{question: "",answer: "", intention: ""}]
 * behavioural questions:[{question: "",answer: "", intention: ""}]
 * skill gaps:[]
 * preparation plan:[]
 */

const techinalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "technical question is required"],
    },
    intention: {
      type: String,
      required: [true, "Intention is required"],
    },
    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  {
    _id: false,
  },
);

const behaviouralQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "technical question is required"],
    },
    intention: {
      type: String,
      required: [true, "Intention is required"],
    },
    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  {
    _id: false,
  },
);

const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "skill is required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "skill is required"],
    },
  },
  {
    _id: false,
  },
);

const preparationPlanSchema = new mongoose.Schema({
  day: {
    type: String,
    required: [true, "day is required"],
  },
  focus: {
    type: String,
    required: [true, "focus is required"],
  },
  tasks: [
    {
      type: String,
      required: [true, "task is required"],
    },
  ],
});

const interviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "job description is required"],
    },
    resume: {
      type: String,
      required: [true, "job description is required"],
    },
    selfDescription: {
      type: Number,
      min: 0,
      max: 100,
    },
    selfDescription: {
      type: Number,
      min: 0,
      max: 100,
    },
    techinalQuestions: { techinalQuestionSchema },
    behaviouralQuestions: { behaviouralQuestionSchema },
    skillGaps: { skillGapSchema },
    preparationPlan: { preparationPlanSchema },
  },
  {
    timestamps: true,
  },
);

const interviewReportModel = mongoose.model(
  "InterviewReport",
  interviewReportSchema,
);

export default interviewReportModel;
