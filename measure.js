var className = "Measure";

Measure = function(beats) {
    beats = beats || [];
    check(beats, [Beat]);
    this.beats = beats;
};

_.extend(Measure, {
    fromJSONValue: function(value) {
        return new Measure(
            EJSON.fromJSONValue(value.beats)
        );
    }
});

_.extend(Measure.prototype, {
    typeName: function() {
        return className;
    },
    toJSONValue: function() {
        return {
            beats: EJSON.toJSONValue(this.beats)
        };
    }
});

EJSON.addType(className, Measure.fromJSONValue);