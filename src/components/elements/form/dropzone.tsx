import type { DropzoneOptions } from "react-dropzone";
import { useDropzone } from "react-dropzone";

import type { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Dropzone = (options: DropzoneOptions) => {
  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
      useDropzone(options),
    handleTheme = (theme: Theme) =>
      isDragActive
        ? isDragAccept
          ? theme.palette.primary.main
          : theme.palette.error.main
        : theme.palette.text.disabled;

  return (
    <Box
      {...getRootProps()}
      border="dashed"
      borderColor={handleTheme}
      borderRadius={1}
      my={3}
      py={8}
    >
      <input {...getInputProps()} />
      <Typography color={handleTheme} textAlign="center" variant="h4">
        {isDragActive
          ? "Drop the files here ..."
          : `Analysis Score .png .jpg .pdf .gp .mxl`}
      </Typography>
    </Box>
  );
};

export default Dropzone;
