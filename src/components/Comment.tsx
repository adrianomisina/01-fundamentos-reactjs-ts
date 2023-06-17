import { useState } from 'react'
import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from './Avatar'

interface CommentProps {
    comment: string;
    onDeleteComment: (comment:string) => void
}

const Comment = ({comment, onDeleteComment}:CommentProps) => {
    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () => {
        console.log('deletar')
        onDeleteComment(comment)
    }

    const handleLikeComment = () => {
       setLikeCount((state)=> {
        return state + 1
       }) 
    }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/65734814?v=4"/>

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Adriano Misina</strong>
                        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>
                </header>
                <p>{comment}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>

    </div>
  )
}

export default Comment