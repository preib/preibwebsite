type subjectStrengthType = {
    subject: string,
    strength: number
}
type mentorType = {
    firstName: string,
    lastName: string,
    country: string,
    subjectStrength: subjectStrengthType[],
    description: string,
}

export type {mentorType, subjectStrengthType};