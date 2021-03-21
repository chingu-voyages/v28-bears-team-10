import mongoose from 'mongoose';

const JobPostingSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    jobRequirements: {
        type: String,
        required: true
    },
    jobExperienceLevel: {
        type: String,
        required: true
    },
    jobHoursRequired: {
        type: Number,
        required: true
    },
    jobTechStack: {
        type: Array,
        required: true
    },
    jobCompanyPosting: {
        type: { type: mongoose.Schema.Types.ObjectId, ref: 'Charity' },
        required: true
    },
    jobPostingApplicants: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dev' }]
    }
});

const JobPosting = mongoose.model('JobPosting', JobPostingSchema);

export default JobPosting;
