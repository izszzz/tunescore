import type { NextPage } from "next";
import Link from 'next/link'
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";

const Home: NextPage = () => {
  return (
    <DefaultSingleColumnLayout>
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
      <br /><Link href="/bands">
        <a>band</a>
      </Link>
    </DefaultSingleColumnLayout>
  );
};

export default Home;