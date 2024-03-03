import { Course } from "../../cursos/models/curso-interface";
import { Users } from "../../users/models";

export interface Inscription {
    id: string | number,
    userId: string | number,
    courseId: string | number,
    user?:Users,
    course?:Course
}

export interface InscriptionsData{
    userId: string|number | null;
    courseId: string | number | null;
}