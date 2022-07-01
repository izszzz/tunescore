
import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form';
import axios from "axios"

interface Props<T> {
	url: any
	children: ({ loading, onSubmit }: { loading: boolean, onSubmit: SubmitHandler<T> }) => React.ReactNode
}
export default function New<T>({ url, children }: Props<T>) {
	const [loading, setLoading] = useState(false)
	const onSubmit: SubmitHandler<T> = async (data) => {
		setLoading(true)
		axios.post(url() + ".json", data).then(res => {
			location.href = url({ id: res.data.id })
		}).catch(err => {
			console.log(err)
		}).finally(() => {
			setLoading(false)
		})
	}
	return (<>{children({ loading, onSubmit })}</>)
}