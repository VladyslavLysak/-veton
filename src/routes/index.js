import doctorRoute from './doctor.route';
import cityRoute from './city.route';

export default (app) => {
    app.use('/api/doctors', doctorRoute);
    app.use('/api/cities', cityRoute);
}