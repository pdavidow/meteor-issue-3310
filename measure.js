var className = "Measure";

Measure = function(n) {
    this.n = n;
};

_.extend(Measure, {
    fromJSONValue: function(value) {
        return new Measure(value.n)
    }
});

_.extend(Measure.prototype, {
    typeName: function() {
        return className;
    },
    toJSONValue: function() {
        return {n: this.n};
    }
});

EJSON.addType(className, Measure.fromJSONValue);