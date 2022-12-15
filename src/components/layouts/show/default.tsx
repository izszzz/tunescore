import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import React from "react";
import { useModal } from "../../../hooks/useModal";
import BookmarkToggleButton, {
  BookmarkToggleButtonProps,
} from "../../elements/button/toggle/bookmark";
import DefaultHeader from "../header/default";
import ShowLayout, { ShowLayoutProps } from "./";

export interface DefaultShowLayoutProps extends ShowLayoutProps {
  bookmarkToggleButtonProps: Omit<BookmarkToggleButtonProps, "onClick"> & {
    onEnabled: (
      setValue: React.Dispatch<React.SetStateAction<boolean>>
    ) => void;
    onDisabled: (
      setValue: React.Dispatch<React.SetStateAction<boolean>>
    ) => void;
  };
}

const DefaultShowLayout = ({
  bookmarkToggleButtonProps: {
    onEnabled,
    onDisabled,
    ...bookmarkToggleButtonProps
  },
  ...props
}: DefaultShowLayoutProps) => {
  const session = useSession();
  const { handleOpen } = useModal();
  const handleUpdate = (
    value: boolean,
    setValue: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (!session.data?.user) return handleOpen();
    if (value) onEnabled(setValue);
    else onDisabled(setValue);
  };
  return (
    <ShowLayout
      {...props}
      header={<DefaultHeader />}
      title={
        <Box display="flex" alignItems="center">
          {props.title}
          <BookmarkToggleButton
            {...bookmarkToggleButtonProps}
            onClick={handleUpdate}
          />
        </Box>
      }
    />
  );
};

export default DefaultShowLayout;
