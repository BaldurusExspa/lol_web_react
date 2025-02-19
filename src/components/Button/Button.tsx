type TButton = {
    children: string,
    className: string,
}

export const Button: React.FC<TButton> = ({ children, className }) => {
    return (
        <button className={className}>
            {children}
        </button>
    )
}
