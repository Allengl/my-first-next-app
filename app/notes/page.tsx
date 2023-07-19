import PocketBase from 'pocketbase';
import Link from 'next/link';
import styles from './Notes.module.css'

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'


async function getNotes() {
  const db = new PocketBase('http://127.0.0.1:8090');
  const data = await db.collection('next_demo').getFullList();
  // const res = await fetch('http://127.0.0.1:8090/api/collections/next_demo/records?page=1&perPage=30', { cache: 'no-store' });
  // const data = await res.json();
  return data;
  
}

export default async function NotesPage() {
  const notes = await getNotes();
  console.log('1111111');
  console.log(notes);

  return(
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
