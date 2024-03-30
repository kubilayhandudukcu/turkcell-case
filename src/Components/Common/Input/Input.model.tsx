export interface InputModel {
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    type?:string;
}