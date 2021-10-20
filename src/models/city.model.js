import mongoose from "mongoose";

const Schema = mongoose.Schema;

const citySchema = new Schema(
    {
        id: { type: String, required: true },
        name: { pl: { type: String, required: true }, en: { type: String, required: true } },
        hospitals: [{ pl: { type: String, required: true }, en: { type: String, required: true }, hostipalId: { type: String, required: true } }]
    },
    {
        timestamps: true,
    }
);

const City = mongoose.model("City", citySchema);

export default City;
