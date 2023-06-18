import {ChangeEvent, FormEvent, InvalidEvent, useState} from 'react'
import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import Comment from './Comment'
import Avatar from './Avatar';
import styles from './Post.module.css'

interface Author {
  name: string
  role: string
  avatarUrl:string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt:Date;
  content: Content[];
}

interface PostProps {
  post: PostType
}

const Post = ({post}:PostProps) => {
  const [comments, setComments] = useState(['Post muito bacana, hein?!'])
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('');
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }
  
  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const deleteComment = (commentToDelete:string) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar src={post.author.avatarUrl} />
        <div className={styles.authorInfo}>
          <strong>{post.author.name}</strong>
          <span>{post.author.role}</span>
        </div>
      </div>

      <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
      </time>
    </header>

    <div className={styles.content}>
      {post.content.map((line, index) => {
        if (line.type === 'paragraph') {
          return <p key={`${line.type}-${index}`}>{line.content}</p>;
        } else if (line.type === 'link') {
          return <p key={`${line.type}-${index}`}><a href="#">{line.content}</a></p>;
        }
        return null; // Adicione um retorno padrão para evitar um aviso no eslint
      })}
    </div>

    <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea 
        placeholder='Deixe um comentário' 
        name='comment'
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
      />

      <footer>
        <button type="submit" disabled={isNewCommentEmpty}>
          Publicar
        </button>
      </footer>
    </form>

    <div className={styles.commentList}>
      {comments.map(comment => {
        return (
          <Comment 
            key={comment} 
            comment={comment}
            onDeleteComment={deleteComment}
          />
        )
      })}
    </div>
  </article>
  )
}

export default Post