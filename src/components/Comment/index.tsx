import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import Avatar from "../Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  comment: string;
  deleteComment: (comment: string) => void;
}

const Comment = ({ comment, deleteComment }: CommentProps) => {
  function handleDeleteComment() {
    deleteComment(comment);
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/42418197?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Madeira</strong>
              <time
                title="25 de dezembro ás 12h"
                dateTime="2022-25-12 12:00:00"
              >
                Publicado há 1h
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
