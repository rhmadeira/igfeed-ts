import "./styles/global.css";
import styles from "./styles/App.module.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Post from "./components/Post";

interface Posts {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: "text" | "link";
    value: string;
    href?: string;
  }[];
  publishedAt: Date;
}

//O ideal e isso vim de uma API
const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/42418197?v=4",
      name: "João Guilherme",
      role: "Backend Developer",
    },
    content: [
      { type: "text", value: "Fala galera, tudo bem?" },
      {
        type: "text",
        value: "Acabei de subir mais um produto no meu portfólio.",
      },
      {
        type: "link",
        value: "O projeto está hospedado no Vercel",
        href: "https://google.com.br",
      },
    ],
    publishedAt: new Date("2022-12-24 12:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/24592796?v=4",
      name: "LMathielo",
      role: "Developer",
    },
    content: [
      { type: "text", value: "Fala galera, tudo bem?" },
      {
        type: "text",
        value: "Acabei de subir mais um produto no meu portfólio.",
      },
      {
        type: "link",
        value: "O projeto está hospedado no Vercel",
        href: "https://google.com.br",
      },
    ],
    publishedAt: new Date("2022-12-23 12:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
