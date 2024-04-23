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
          <option value="VirtualSinger">Category1</option>
          <option value="Leo/need">Category2</option>
          <option value="MORE MORE JUMP!">Category3</option>
          <option value="Vivid BAD SQUAD">Category4</option>
          <option value="Wonderlands Showime">Category5</option>
          <option value="Nightcord at 25">Category5</option>
        </select>

        <select value={selectedSubCategory} onChange={e => setSelectedSubCategory(e.target.value)}>
          <option value="">Character</option>
          <option value="SubCategory1">SubCategory1</option>
          <option value="SubCategory2">SubCategory2</option>
          <option value="SubCategory3">SubCategory3</option>
          <option value="SubCategory4">SubCategory4</option>
        </select>

        {/* <div>
          {filteredImages.map(image => (
            <img key={image.id} src={image.url} alt="" />
          ))}
        </div> */}
      </header>

      <main className={styles.main}>
        {filteredImages.map((image, index) => (
          <div key={index}>
            <Image src={`${BASE_PATH}/images/${image.url}`} alt={`Image ${index}`} width={400} height={250} />
            <a href={`${BASE_PATH}/images/${image.url}`} download={`Image${index}.jpg`}>Download</a>
        </div>
        ))}
      </main>

      <footer className={styles.footer}>
        {/* フッターコンテンツ */}
      </footer>
    </div>
  )
}
