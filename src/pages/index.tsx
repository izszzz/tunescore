import type { NextPage } from "next";
import Link from 'next/link'
import SingleColumnLayout from "../components/layouts/single_column";

const Home: NextPage = () => {
  return (
    <SingleColumnLayout>
      <>home</>
      <br /><Link href="/musics">
        <a>music</a>
      </Link>
      <br /><Link href="/users">
        <a>user</a>
      </Link>
      <br /><Link href="/artists">
        <a>artist</a>
      </Link>
    </SingleColumnLayout>
  );
};

export default Home;