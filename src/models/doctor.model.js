import mongoose from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema(
    {
        // _id: ObjectId,
        name: { type: String, required: true },
        surname: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        dateOfBirth: { type: String, required: true },
        // category: { type: String, required: true },
        city: { type: String, required: true },
        hospital: { type: String, required: true },
        busyTime: [],
        availableTime: [{ type: String, required: true }],
        popular: { type: Boolean }
    },
    {
        timestamps: true,
    }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
