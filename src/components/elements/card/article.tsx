import React from "react";
import dynamic from "next/dynamic";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const Markdown = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

interface ArticleCardProps {
  title: string;
  body: string;
}
const ArticleCard = ({ title, body }: ArticleCardProps) => {
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <Card variant="outlined">
        <CardContent>
          <Markdown source={body} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ArticleCard;
