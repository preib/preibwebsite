type subjectStrengthType = {
    courseName: string,
    strength: number
};

type mentorType = {
    id:string,
    firstName: string,
    lastName: string,
    country: string,
    description: string,
    timezone: string,
    email: string,
    ibYear: number,
    imageUrl: string,
    bannerUrl: string,
    languages: string[],
    courses: subjectStrengthType[],
    rating: number;
};

export type {mentorType, subjectStrengthType};
