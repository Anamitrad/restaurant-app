const restaurantController= require('../controllers/restaurant.controller')

module.exports= (app) =>{


    app.post('/restaurantapp/api/v1/restaurant',restaurantController.createRestaurant);
}