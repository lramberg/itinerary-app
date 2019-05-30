var Itinerary = require('../models/itinerary');
var Port = require('../models/port');

module.exports = {
    index,
    new: newItinerary,
    create,
    show,
    addPort,
    delete: deleteItin,
    edit,
    update
}

function edit(req, res, next) {
    Itinerary.findById(req.params.id)
        .populate('ports').exec(function(err, itinerary){
            Port.find({_id: {$in: itinerary.ports}})
            .exec(function(err, ports){
                res.render('itineraries/edit', {
                    itinerary,
                    ports
                });
            })
        }) 
}

// function removePort(req, res) {
//     Itinerary.findById(req.params.id)
//     .populate('ports').exec(function(err, itinerary) {
//         itinerary.ports.update( { _id }, {$pullAll: {ports: _id}} );
//     });
    // Itinerary.findById(req.params.id)
    // .populate('ports').exec(function(err, itinerary) {
    //     Port.find({_id: {$in: itinerary.ports}})
    //     .exec(function(err, ports){
    //         itinerary.ports
    //     })
    // })

    // hit DELETE port button to remove port from itinerary
    // grab the port's id, check to see where it is in the `itinerary.ports` array (try indexOf)
    // once you've found the index of that partiuclar port, remove it from the itinerary.ports array
// }

function update(req, res) {
    console.log('req.body: ', req.body);
    Itinerary.findByIdAndUpdate(req.params.id, req.body, function(err, itinerary) {        
        itinerary.save(function(err) {
            res.redirect(`/itineraries/${req.params.id}/edit`);
        });
    });
}

function deleteItin(req, res, next) {
    Itinerary.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/itineraries');
    })
}

function addPort(req, res) {
    Itinerary.findById(req.params.id, function(err, itinerary) {
        itinerary.ports.push(req.body.portId);
        console.log('itinerary ', Itinerary);
        itinerary.save(function(err) {
            res.redirect(`/itineraries/${itinerary._id}`);
        });
    });
}

function show(req, res) {
    Itinerary.findById(req.params.id)
    .populate('ports').exec(function(err, itinerary) {
        Port.find({})
        .exec(function(err, ports) {
            res.render('itineraries/show', {
                itinerary,
                ports
            });
            console.log('ports: ', ports);
        });
    }); 
}

function create(req, res) {
    Itinerary.create(req.body, function(err, itinerary) {
        req.user.itineraries.push(itinerary);
        req.user.save(function(err){
            res.redirect('/itineraries');
        })
    });
}

function newItinerary(req, res) {
    res.render('itineraries/new');
}

function index(req, res) {
    Itinerary.find({}, function(err, itineraries) {
        res.render('itineraries/index', {
            itineraries
        });
    });
}