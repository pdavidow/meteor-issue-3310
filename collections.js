MeasureCollection = new Meteor.Collection("MeasureCollection", {
    transform: function(doc) {return Measure.fromJSONValue(doc)}});
