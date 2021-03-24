export interface Post {
    topic: string;
    title: string;
    description: string;
    body: string;
    // image: File;
    image: string;
    id?: number;
}