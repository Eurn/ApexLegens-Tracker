import React from 'react';
import clsx from 'clsx';


const Button = ({
	variant = 'contained',
	onClick,
	fullWidth = false,
	children,
	disabled = false,
}) => (
	<>
		<button
			className={clsx({
				'font-semibold active:drop-shadow-xl py-2 px-4  rounded': true,
				'bg-green hover:bg-hoverGreen  text-white': variant === 'contained',
				'w-full': fullWidth,
				'bg-white text-green hover:bg-lightGreenHover  border-2  border-green ':
					variant === 'outline',
				'opacity-50': disabled && variant === 'contained',
				' text-disabledGray border-disabledGray bg-white':
					disabled && variant === 'outline',
			})}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	</>
);
export default Button;
