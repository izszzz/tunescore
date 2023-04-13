import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <Box
      component="footer"
      display="flex"
      justifyContent="center"
      mb={3}
      mt="auto"
    >
      <Stack direction="row" spacing={2}>
        <Typography onClick={() => router.push("/docs/hakei-prod")}>
          hakei prod.
        </Typography>
        <Typography
          onClick={() => router.push("/docs")}
          sx={{ textDecoration: "underline" }}
        >
          Document
        </Typography>
      </Stack>
    </Box>
  );
};
export default Footer;
