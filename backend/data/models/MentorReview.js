class MentorReview {
    constructor() {
        if (arguments.length == 1) {
            var {
                id,
                mentor_uuid,
                rating,
                review,
                reviewer,
                detail_identity
            } = arguments[0];
        } else {
            var [
                id,
                mentor_uuid,
                rating,
                review,
                reviewer,
                detail_identity
            ] = arguments;
        }

        this.id = id;
        this.mentor_uuid = mentor_uuid;
        this.rating = rating;
        this.review = review;
        this.reviewer = reviewer;
        this.identity_details = detail_identity;
    }
}

module.exports = MentorReview;
