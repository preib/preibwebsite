class Mentor {
    constructor() {
        if (arguments.length == 1) {
            var {
                id,
                firstName,
                lastName,
                country,
                city,
                school,
                description,
                image_url,
                languages,
                courses,
            } = arguments[0];
        } else {
            var [
                id,
                firstName,
                lastName,
                country,
                city,
                school,
                description,
                image_url,
                languages,
                courses,
            ] = arguments;
        }

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.city = city;
        this.school = school;
        this.description = description;
        this.image_url = image_url;
        this.languages = languages;
        this.courses = courses;
    }
}

module.exports = Mentor;
