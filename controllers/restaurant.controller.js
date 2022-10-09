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
    console.log(restObj);
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