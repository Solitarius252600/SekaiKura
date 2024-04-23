'use client'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../layout.module.css'
import { basePath } from '../../next.config'
import { useState, useEffect } from 'react'

// 画像データ
const images = [
  { id: 1, url: '1_0.jpg', mainCategory: 'Category1', subCategory: 'SubCategory1' },
  { id: 2, url: '1_1.jpg', mainCategory: 'Category1', subCategory: 'SubCategory2' },
  { id: 3, url: '1_2.jpg', mainCategory: 'Category2', subCategory: 'SubCategory3' },
  { id: 4, url: '1_3.jpg', mainCategory: 'Category2', subCategory: 'SubCategory4' },
  { id: 5, url: '1_4.jpg', mainCategory: 'Category3', subCategory: 'SubCategory2' },
  { id: 5, url: '1_5.jpg', mainCategory: 'Category3', subCategory: 'SubCategory1' },
];

export default function Layout({}) {
  const BASE_PATH = basePath ? basePath : ""

  const [selectedMainCategory, setSelectedMainCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  
  const filteredImages = images.filter(image =>
    (image.mainCategory === selectedMainCategory) &&
    (image.subCategory === selectedSubCategory)
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>画像ギャラリーサイト</title>
      </Head>

      <header className={styles.header}>
        <select value={selectedMainCategory} onChange={e => setSelectedMainCategory(e.target.value)}>
          <option value="">Unit</option>
          <option value="Category1">VirtualSinger</option>
          <option value="Category2">Leo/need</option>
          <option value="Category3">MORE MORE JUMP!</option>
          <option value="Category4">Vivid BAD SQUAD</option>
          <option value="Category5">Wonderlands Showime</option>
          <option value="Category6">Nightcord at 25</option>
        </select>

        <select value={selectedSubCategory} onChange={e => setSelectedSubCategory(e.target.value)}>
          <option value="">Character</option>
          <option value="SubCategory1">SubCategory1</option>
          <option value="SubCategory2">SubCategory2</option>
          <option value="SubCategory3">SubCategory3</option>
          <option value="SubCategory4">SubCategory4</option>
        </select>
      </header>

      <main className={styles.main}>
        {filteredImages.map((image, index) => (
          <div key={index}>
            <Image src={`${BASE_PATH}/images/${image.url}`} alt={`Image ${index}`} width={400} height={250} />
            <button className="downloadButton" onClick={() => {
              const link = document.createElement('a');
              link.href = `${BASE_PATH}/images/${image.url}`;
              link.download = `Image${index}.jpg`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}>Download</button>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        {/* フッターコンテンツ */}
      </footer>

      <style jsx>{`
        .downloadButton {
          background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 12px;
        }
      `}</style>
    </div>
  )
}
