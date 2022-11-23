import React from "react"
import { FcGoogle } from "react-icons/fc"
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const Google = (props: SvgIconProps) => {
	return (
		<SvgIcon {...props}>
			<FcGoogle />
		</SvgIcon>
	)
}

export default Google