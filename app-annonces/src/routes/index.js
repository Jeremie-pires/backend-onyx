const eventsRoutes = require('./events');
const artistsRoutes = require('./artists');
const productsRoutes = require('./products');
const ordersRoutes = require('./orders');
const accountsRoutes = require('./accounts');
const addressesRoutes = require('./addresses');
const ticketsRoutes = require('./tickets');

const initRoutes = (app) => {
    app.use('/home', (req, res, next) => {
        res.status(200).json({
            message: 'Hello world !'
        });
    });
    app.use('/events', eventsRoutes);
    app.use('/artists', artistsRoutes);
    app.use('/products', productsRoutes);
    app.use('/orders', ordersRoutes);
    app.use('/accounts', accountsRoutes);
    app.use('/addresses', addressesRoutes);
    app.use('/tickets', ticketsRoutes);
}

module.exports = initRoutes;