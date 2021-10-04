
import DoctorModel from '../models/doctor.model';

export const getDoctor = async (req, res) => {
    const doctorId = req.params.id;
    const doctor = await DoctorModel.findOne({ _id: doctorId });
    res.json({ doctor, success: true, status: 200 });
}

export const getAllDoctors = async (req, res) => {
    const doctors = await DoctorModel.find();
    res.json({ doctors, success: true, status: 200 });
}

export const createDoctor = async (req, res) => {
    const newDoctor = new DoctorModel(req.body);
    await newDoctor.save();

    res.json({ doctor: newDoctor, success: true, status: 200 })
}

export const editDoctor = async (req, res) => {
    const doctorId = req.params.id;

    const doctor = req.body;
    await DoctorModel.findOneAndUpdate({ _id: doctorId }, doctor);

    res.json({ doctor, success: true, status: 200 })
}

export const deleteDoctor = async (req, res) => {
    const doctorId = req.params.id;
    await DoctorModel.findOneAndDelete({ _id: doctorId });
    res.json({ success: true, status: 200 });
}