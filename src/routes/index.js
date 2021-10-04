import doctorRoute from './doctor.route';

export default (app) => {
    app.use('/api/doctors', doctorRoute);
}