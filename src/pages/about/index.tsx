import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";

const About: NextPage = () => {
  const router = useRouter(),
    Markdown = dynamic(() => import(`./${router.locale}.md`));
  return (
    <DefaultSingleColumnLayout contained>
      <Markdown />
    </DefaultSingleColumnLayout>
  );
};

export default About;
