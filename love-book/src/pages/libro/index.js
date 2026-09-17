import React from 'react';
import Layout from '@theme/Layout';
import HTMLFlipBook from 'react-pageflip';
import styles from './libro.module.css';
import { paginasData } from './datosLibro'; // Importamos los datos

const Page = React.forwardRef((props, ref) => {
  return (
    <div className={styles.page} ref={ref}>
      {props.children}
    </div>
  );
});

export default function Libro() {
  return (
    <Layout title="Nuestro Libro" description="Un libro virtual para mi amor">
      <main className={styles.container}>
        <HTMLFlipBook
          width={400}
          height={600}
          size="stretch"
          minWidth={300}
          maxWidth={600}
          minHeight={450}
          maxHeight={900}
          showCover={true}
          maxShadowOpacity={0.5}
          mobileScrollSupport={false}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
        >
          {/* ---- PORTADA (Fija) ---- */}
          <Page>
            <div className={styles.cover}>
              <h1>Nuestra Historia</h1>
              <p>Para mi amor</p>
              <p className={styles.fecha}>Desde el primer día</p>
            </div>
          </Page>

          {/* ---- PÁGINAS DINÁMICAS (Se crean solas desde datosLibro.js) ---- */}
          {paginasData.map((pagina, index) => (
            <Page key={index}>
              <h2>{pagina.titulo}</h2>
              <p>{pagina.texto}</p>
              <img 
                src={pagina.imagen} 
                alt={pagina.titulo} 
                className={styles.imagen} 
              />
            </Page>
          ))}

          {/* ---- CONTRAPORTADA (Fija) ---- */}
          <Page>
            <div className={styles.coverBack}>
              <h1>Fin</h1>
              <p>Continuará...</p>
              <p className={styles.corazon}>❤️</p>
            </div>
          </Page>
        </HTMLFlipBook>
      </main>
    </Layout>
  );
}