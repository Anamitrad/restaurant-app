const restaurantController= require('../controllers/restaurant.controller')

module.exports= (app) =>{

    app.get('/restaurantapp/api/v1/restaurant/',restaurantController.getAllRestaurants);
    app.get('/restaurantapp/api/v1/categories',restaurantController.getAllCategories);
    app.get('/restaurantapp/api/v1/categories/:category',restaurantController.getRestaurantByCategory);
    app.get('/restaurantapp/api/v1/restaurant/:id',restaurantController.getRestaurantsById);
    app.post('/restaurantapp/api/v1/restaurant/add',restaurantController.createRestaurant);
}