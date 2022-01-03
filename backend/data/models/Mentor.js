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
                imageUrl,
                languages,
                courses,
                bannerUrl,
                rating,
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
                imageUrl,
                languages,
                courses,
                bannerUrl,
                rating,
            ] = arguments;
        }

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.city = city;
        this.school = school;
        this.description = description;
        this.imageUrl = imageUrl;
        this.languages = languages;
        this.courses = courses;
        this.bannerUrl = bannerUrl;
        this.rating = rating;
    }
}

module.exports = Mentor;
