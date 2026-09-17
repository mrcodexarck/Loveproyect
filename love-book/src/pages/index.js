import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Bienvenida" description="Un libro virtual para mi amor">
      <header className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Nuestra Historia</h1>
          <p className={styles.subtitle}>
            Un viaje por nuestros momentos más especiales...
          </p>
          <div className={styles.buttons}>
            <Link className={styles.button} to="/libro">
              📖 Abrir Nuestro Libro
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}