import parse from "html-react-parser";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./global.css";

function App() {
  let posts = [
    {
      author: "Guilherme Possebon 1",
      content: "Ola mundo",
      authorRole: "Dev Junior",
      img: "https://github.com/guilherme-possebon.png",
      html: `
                  <p>Fala galera 👋</p>
                  <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto
                    que fiz no NLW Return, evento da Rocketseat. O nome do
                    projeto é DoctorCare 🚀
                  </p>
                  <a href="#">
                    👉
                    <span className="differentText">
                      jane.design/doctorcare
                    </span>
                  </a>
                  <div className="tags">
                    <span className="differentText">#novoprojeto</span>
                    <span className="differentText">#nlw</span>
                    <span className="differentText">#rocketseat</span>
                  </div>

      `,
    },
    {
      author: "Guilherme Possebon 2",
      content: "Ola mundo",
      authorRole: "Dev Junior",
      img: "https://github.com/guilherme-possebon.png",
      html: `
                  <p>Oi pessoal</p>
                  <p>
                    Sabia que o github é muito importante?
                  </p>

                  <div className="tags">
                    <span className="differentText">#github</span>
                    <span className="differentText">#git</span>
                  </div>

      `,
    },
    {
      author: "Guilherme Possebon 3",
      content: "Ola mundo",
      authorRole: "Dev Junior",
      img: "https://github.com/guilherme-possebon.png",
      html: `
                  <p>Fala galera 👋</p>
                  <p>
                    party table east dog drop monkey escape arrange owner husband habit movement effect development wooden good will brown type street eaten exclaimed grandmother fifteen
                  </p>

                  <div className="tags">
                    <span className="differentText">#GXrrpvHCX</span>

                  </div>

      `,
    },
  ];
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar img="https://github.com/guilherme-possebon.png" />
        <main className={styles.post}>
          {posts.length > 0 &&
            posts.map((post) => (
              <>
                <Post
                  author={post.author}
                  content={post.content}
                  authorRole={post.authorRole}
                  img={post.img}
                >
                  {parse(post.html)}
                </Post>
              </>
            ))}
        </main>
      </div>
    </>
  );
}

export default App;
