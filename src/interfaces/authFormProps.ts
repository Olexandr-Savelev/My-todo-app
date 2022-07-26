export interface AuthFormProps {
    title: string;
    handleClick: ({ }: authFunctionProps) => void;
}


export interface authFunctionProps {
    email: string;
    password: string
}