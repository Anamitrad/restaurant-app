const Restaurant = require("../models/restaurant.model");

exports.createRestaurant= async (req,res)=>{

    let restObj={
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        imageURL: req.body.imageURL,
        phone: req.body.phone,
        rating: req.body.rating,
    }

    try{
        const restaurant = await Restaurant.create(restObj);
        res.status(201).send(restaurant);
    }
    catch(err){
        console.log('error in creating restaurant',err);
        res.status(500).send({
            message: "Some internal error happened while creating a restaurant"
        })
    }
}

exports.getAllRestaurants = async (req,res)=>{
    let restObj;
    try{
        const restaurants= await Restaurant.find({});
        restObj={
            restaurants,
            message: "Restaurants fetched successfully."
        }
        res.status(200).send(restObj);
    }
    catch(err){
        console.log('error in getting restaurants',err);
        res.status(500).send({
            message: "Some internal error happened while getting restaurants"
        })
    }
}