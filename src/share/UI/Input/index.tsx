import "./style.css";

type TProps = {
	type: string;
	id: string;
	name: string;
	className?: string;
} & React.HTMLAttributes<HTMLInputElement>;

export const Input = ({ type, id, name, className, ...props }: TProps) => {
	return (
		<input
			className={`input--original ${className} `}
			type={type}
			id={id}
			name={name}
			{...props}
		/>
	);
};
