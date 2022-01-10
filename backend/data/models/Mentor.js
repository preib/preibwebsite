class Mentor {
    constructor() {
        if (arguments.length == 1) {
            var {
                id,
                firstName,
                lastName,
                country,
                description,
                timezone,
                email,
                ibYear,
                imageUrl,
                bannerUrl,
                languages,
                courses,
                rating,
            } = arguments[0];
        } else {
            var [
                id,
                firstName,
                lastName,
                country,
                description,
                timezone,
                email,
                ibYear,
                imageUrl,
                bannerUrl,
                languages,
                courses,
                rating,
            ] = arguments;
        }

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.description = description;
        this.timezone = timezone;
        this.email = email;
        this.ibYear = ibYear;
        this.imageUrl = imageUrl;
        this.bannerUrl = bannerUrl;
        this.languages = languages;
        this.courses = courses;
        this.rating = rating;
    }
}

module.exports = Mentor;
