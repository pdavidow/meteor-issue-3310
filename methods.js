Meteor.methods({
    removeAllMeasures: function() {
        MeasureCollection.remove({});
    },
    measureInsert: function(measure) {
        check(measure, Measure);
        return MeasureCollection.insert(measure.toJSONValue());
    }
});