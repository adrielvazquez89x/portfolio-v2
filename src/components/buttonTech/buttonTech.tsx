
interface ButtonProps {

    route?: string;
    altText?: string;
    onClick?: () => void;
    clicked?: boolean;

}
export default function ButtonTech({ route, altText, onClick, clicked }: ButtonProps) {

    return (
        <button className={""} onClick={onClick}>
            <img src={route} alt={altText} width={48} className={`${clicked ? "opacity-85" : "opacity-35"} hover:opacity-100 `} /> {/* "opacity-35 " */}
        </button>
    )
}