class Mentor {
    constructor() {
        if (arguments.length == 1) {
            var {
                id,
                firstname,
                lastname,
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
                firstname,
                lastname,
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
        this.firstname = firstname;
        this.lastname = lastname;
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