import { Photo } from './photo';
import { Weight } from './weight';
 export interface User {
    id: number;
    username: string;
    knownAs: string;
    dateOfBirth: Date;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    startweight?: number;
    goalweight?: number;
    photos?: Photo[];
    weights?: Weight[];
    friends?: User[];
    display?: boolean;
}
