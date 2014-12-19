var className = "Beat";

Beat = function(amount) {
    check(amount, Match.Integer);
    this.amount = amount;
};

_.extend(Beat, {
    fromJSONValue: function(value) {
        return new Beat(value.amount);
    }
});

_.extend(Beat.prototype, {
    typeName: function() {
        return className;
    },
    toJSONValue: function() {
        return {amount: (this.amount)};
    }
});

EJSON.addType(className, Beat.fromJSONValue);
