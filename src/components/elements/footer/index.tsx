import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <Box component="footer" display="flex" justifyContent="center" my={3}>
      <Stack direction="row" spacing={2}>
        <Typography onClick={() => router.push("/about")}>
          hakei prod.
        </Typography>
        <Typography
          onClick={() => router.push("/about")}
          sx={{ textDecoration: "underline" }}
        >
          About
        </Typography>
      </Stack>
    </Box>
  );
};
export default Footer;
