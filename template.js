if (Meteor.isClient) {
    Template.m1.events({
        "click .test": function() {
            Meteor.call("removeAllMeasures");
            console.log("MeasureCollection.findOne()", MeasureCollection.findOne());
            var measure = (new Measure(8));
            Meteor.call("measureInsert", measure, function(error, result){
                console.log("measureInsert error", error);
                console.log("measureInsert result", result);
            });
            console.log("MeasureCollection.findOne()", MeasureCollection.findOne());
        }
    })
}
