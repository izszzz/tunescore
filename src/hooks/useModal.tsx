import { atom, useRecoilState } from 'recoil'
const modalAtom = atom({
	key: "MODAL_ATOM",
	default: false
})

export function useModal() {
	const [open, setOpen] = useRecoilState(modalAtom);

	const handleOpen = () => setOpen(true)

	const handleClose = () => setOpen(false);

	return { open, handleOpen, handleClose } as const;
}