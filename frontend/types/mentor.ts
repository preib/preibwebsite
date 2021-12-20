type subjectStrengthType = {
    subject: string,
    strength: number
}
type mentorType = {
    id:string,
    firstName: string,
    lastName: string,
    country: string,
    subjectStrength: subjectStrengthType[],
    description: string,
    languages: string[],
    image_url: string,
}

export type {mentorType, subjectStrengthType};