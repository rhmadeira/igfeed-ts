import React, { ChangeEvent, FormEvent } from "react";
import Avatar from "../Avatar";
import Comment from "../Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}
interface Content {
  type: "text" | "link";
  value: string;
  href?: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

const Post = ({ author, content, publishedAt }: PostProps) => {
  const [comments, setComments] = React.useState(["Post legal"]);
  const [newComment, setNewComment] = React.useState("");
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComent(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewComment(event.target.value);
  }

  function deleteComment(comment: string) {
    setComments(comments.filter((item) => item !== comment));
  }

  const isNewCommentEmpty = newComment.length === 0;
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <span className={styles.authorName}>{author.name}</span>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "text") {
            return <p key={item.value}>{item.value}</p>;
          } else if (item.type === "link") {
            return (
              <a key={item.value} href={item.href}>
                {item.value}
              </a>
            );
          }
          return null;
        })}
      </div>

      <form onSubmit={handleCreateNewComent} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newComment}
          onChange={handleNewComment}
          placeholder="Deixe seu comentário"
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              comment={comment}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Post;
