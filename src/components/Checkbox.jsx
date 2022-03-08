import React, { useCallback, useState, useEffect, ChangeEvent } from 'react';
import clsx from 'clsx';

export default function Checkbox({
	defaultState = false,
	wrappe = false,
	type = 'checkbox',
	data,
	classWrapper = '',
	children,
	onChange,
}) {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		setChecked(defaultState);
		return () => {
			setChecked(false);
		};
	}, [defaultState]);

	const handleClick = useCallback(
		(e) => {
			setChecked(!checked);
			// if you want to access to the value : e.target.checked
			onChange(e);
		},
		[checked, onChange]
	);

	return (
		<div className={classWrapper}>
			<label
				className={clsx({
					'flex items-center w-fit': true,
					'border p-2 rounded': wrappe,
					'border-validationGray': wrappe && !checked,
					'border-darkBlue bg-darkBlue/10 accent-darkBlue': wrappe && checked,
				})}
			>
				<input
					data-box={data}
					className="mr-2 w-4 h-4"
					type={type}
					checked={checked}
					onChange={(e) => handleClick(e)}
				/>
				<div
					className={`text-base leading-4 relative${clsx({
						' text-validationGray': wrappe && !checked,
						' text-darkBlue': wrappe && checked,
					})}`}
				>
					{children}
				</div>
			</label>
		</div>
	);
}
