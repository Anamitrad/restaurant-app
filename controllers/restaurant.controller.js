const Restaurant = require("../models/restaurant.model");
var BSON = require('bson');
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

exports.getAllCategories = async (req,res) =>{
    let catArr=[];
    let catSet = new Set();
    try{
        const restaurants= await Restaurant.find({});
        restaurants.forEach((restaurant) => {
            catSet.add(restaurant.category);
        });
        for(let cat of catSet)
        {
            catArr.push(cat);
        }
        res.status(200).send(catArr);
    }
    catch(err){
        console.log('error in getting categories',err);
        res.status(500).send({
            message: "Some internal error happened while getting categories"
        })
    }
}

exports.getRestaurantByCategory = async (req,res) =>{
    let restArr = [];
    let category=req.params.category;
    try{
        const restaurants= await Restaurant.find({});
        restArr = restaurants.filter((restaurant) => {
            return restaurant.category === category;
        });
        res.status(200).send(restArr);
    }
    catch(err){
        console.log('error in getting restaurants',err);
        res.status(500).send({
            message: "Some internal error happened while getting restaurants"
        })
    }
}

exports.getRestaurantsById = async (req,res) => {
    let id = BSON.ObjectId(req.params.id);
    
    try{
        let restaurant = await Restaurant.find({"_id" : id});
        if(restaurant)
        return res.status(200).send(restaurant);
        else{
            return res.status(404).send("not found");
        }
    }
    catch(err){
        console.log('error in getting restaurant',err);
        res.status(500).send({
            message: "Some internal error happened while getting restaurant"
        })
    }
}