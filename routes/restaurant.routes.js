const restaurantController= require('../controllers/restaurant.controller')

module.exports= (app) =>{

    app.get('/restaurantapp/api/v1/restaurants',restaurantController.getAllRestaurants);
    app.get('/restaurantapp/api/v1/categories',restaurantController.getAllCategories);
    app.get('/restaurantapp/api/v1/categories/:category',restaurantController.getRestaurantByCategory);
    app.post('/restaurantapp/api/v1/restaurant',restaurantController.createRestaurant);
}