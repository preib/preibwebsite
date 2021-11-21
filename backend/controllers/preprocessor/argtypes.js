class ArgType {
    constructor() {
        this.name = 'default';
    }

    transform(value) {
        return [true, null];
    }
}

class Integer {
    constructor() {
        this.name = 'integer';
    }

    transform(value) {
        let parsed = parseInt(value, 10);
        return [ !Number.isNaN(parsed), parsed ];
    }
}

class String {
    constructor() {
        this.name = 'string';
    }

    transform(value) {
        return [ true, value ];
    }
}

class ArrayOfInts {
    constructor() {
        this.name = 'intarray';
    }

    transform(value) {
        if (typeof(value) == 'string') {
            value = JSON.parse(value);
        }

        if (!Array.isArray(value)) {
            return [ false, [] ];
        }

        let success = true;
        let parsed = [];
        for (let item of value) {
            let result = parseInt(item, 10);
            if (Number.isNaN(result)) {
                success = false;
                break;
            }
            parsed.push(result);
        }

        return [ success, success ? parsed : [] ];
    }
}

class StringArray {
    constructor() {
        this.name = 'stringarray';
    }

    transform(value) {
        const success = Array.isArray(value);
        return [ success, success ? value : [] ];
    }
}

class JoinedStringArray {
    constructor(delimiter=',') {
        this.name = 'stringarray',
        this.delimeter = delimiter;
    }

    transform(value) {
        const success = Array.isArray(value);
        return [ success, success ? value.join(this.delimeter) : [] ];
    }
}

module.exports = {
    ArgType,
    Integer,
    String,
    ArrayOfInts,
    StringArray,
    JoinedStringArray
};
