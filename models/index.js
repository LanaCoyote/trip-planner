var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/trip-planner");
var db=mongoose.connection;
db.on('error', console.error);

var PlaceSchema = new mongoose.Schema({
	address: {type:String, required:true},
	city:{type:String, required:true},
	state:{type:String, required:true},
	phone:{type:String},
	location:{type:[Number]}
});

var HotelSchema = new mongoose.Schema({
	name: {type:String, required:true},
	place: {type:[PlaceSchema], required:true},
	numStars:{type:Number,min:1, max:5, default:3},
	amenities:{type:String}
});

var ActivitySchema = new mongoose.Schema({
	name: {type:String, required:true},
	place: {type:[PlaceSchema], required:true},
	ageRange: {type:String}

});
var RestaurantSchema = new mongoose.Schema({
	name: {type:String, required:true},
	place: {type:[PlaceSchema], required:true},
	cuisine:{type:String},
	price:{type:Number, min:1, max:5, default:3}
});

var Place = mongoose.model('Place', PlaceSchema);
var Hotel = mongoose.model('Hotel', HotelSchema);
var Activity = mongoose.model('Activity', ActivitySchema);
var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports= {
	Place:Place,
	Hotel:Hotel,
	Activity:Activity,
	Restaurant:Restaurant
}

