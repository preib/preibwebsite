const selectReviewBase = `SELECT
    BIN_TO_UUID(id) as id,
    BIN_TO_UUID(mentor_uuid) as mentor_uuid,
    rating,
    review,
    reviewer,
    identity_details
FROM mentor_reviews`;

const selectTopReviewByMentor = `${selectReviewBase}
WHERE
    mentor_uuid = UUID_TO_BIN(?)
ORDER BY
    rating DESC
LIMIT 1;`;

const selectWorstReviewByMentor = `${selectReviewBase}
WHERE
    mentor_uuid = UUID_TO_BIN(?)
ORDER BY
    rating ASC
LIMIT 1;`;

const selectLimitedReviewsByMentor = `${selectReviewBase}
WHERE
    mentor_uuid = UUID_TO_BIN(?)
LIMIT ?
OFFSET ?;`;

module.exports = {
    selectTopReviewByMentor,
    selectWorstReviewByMentor,
    selectLimitedReviewsByMentor
};
