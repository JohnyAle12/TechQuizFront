export interface userRequest {
    category_id: number;
    name: string;
    lastname: string;
    identification: number;
    email: string;
    country: string;
    address: string;
    mobile: string;
}

export interface User extends userRequest {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;   
}