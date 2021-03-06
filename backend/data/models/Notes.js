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
                mark,
                preview,
                title,
            } = arguments[0];
        } else {
            var [
                id,
                creator,
                createdDate,
                grade,
                course,
                courseName,
                mark,
                preview,
                title,
            ] = arguments;
        }

        this.id = id;
        this.creator = creator;
        this.createdDate = createdDate;
        this.grade = grade;
        this.course = course;
        this.courseName = courseName;
        this.mark = mark;
        this.preview = preview;
        this.title = title
    }
}

module.exports = Note;
