
interface ButtonProps {
    
    route?: string;
    altText?: string;
    onClick?: () => void;
}
export default function ButtonTech({ route, altText, onClick }: ButtonProps) {
    return (
        <button className={""} onClick={onClick}>
            <img src={route} alt={altText} width={48}/>
        </button>
    )
}