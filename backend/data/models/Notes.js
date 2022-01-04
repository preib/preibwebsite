class Note {
    constructor() {
        if (arguments.length === 1) {
            var {
                id,
                creator,
                createdDate,
                grade,
                course,
                courseName,
                mark
            } = arguments[0];
        } else {
            var [
                id,
                creator,
                createdDate,
                grade,
                course,
                courseName,
                mark
            ] = arguments;
        }

        this.id = id;
        this.creator = creator;
        this.createdDate = createdDate;
        this.grade = grade;
        this.course = course;
        this.courseName = courseName;
        this.mark = mark;
    }
}

module.exports = Notes;
