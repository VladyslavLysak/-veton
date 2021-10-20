
import CityModel from '../models/city.model';

export const getCity = async (req, res) => {
    const cityId = req.params.id;
    const city = await CityModel.findOne({ _id: cityId });
    res.json({ city, success: true, status: 200 });
}

export const getAllCities = async (req, res) => {
    const cities = await CityModel.find();
    res.json({ cities, success: true, status: 200 });
}

export const createCity = async (req, res) => {
    const newCity = new CityModel(req.body);
    const similarCity = await CityModel.findOne({ id: newCity.id })

    if (similarCity) {
        return res.json({ message: "The city already exists", success: true, status: 400 })
    }

    await newCity.save();

    res.json({ city: newCity, success: true, status: 200 })
}

export const editCity = async (req, res) => {
    const cityId = req.params.id;

    const city = req.body;
    await CityModel.findOneAndUpdate({ id: cityId }, city);

    res.json({ city, success: true, status: 200 })
}

export const deleteCity = async (req, res) => {
    const cityId = req.params.id;
    await CityModel.findOneAndDelete({ id: cityId });
    res.json({ success: true, status: 200 });
}