'use client';
import Layout from '../../components/Layout';
import styles from '../photos/photos.module.css';

const footer = (
  <div>
    <h1>Osnovne Informacije</h1>
    <p>Email: creative@gmail.com</p>
    <p>Phone: +387 66 111 222</p>
    <p>Creative Market - 2024. Sva prava zadržana</p>
  </div>
);
function Photos() {
  return <Layout footer={footer} />;
}

export default Photos;
