'use client'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../layout.module.css'
import { basePath } from '../../next.config'
import { useState, useEffect } from 'react'

// 画像データ
const images = [
  { id: 0, url: 'PJSK_Cardillustration/0_VirtualSinger/0_初音ミク/0_☆4【みんなにお披露目】初音ミク_0.jpg', mainCategory: 'Category0', subCategory: 'SubCategory0' },
  { id: 1, url: 'PJSK_Cardillustration/0_VirtualSinger/0_初音ミク/0_☆4【みんなにお披露目】初音ミク_1.jpg', mainCategory: 'Category0', subCategory: 'SubCategory0' },
  { id: 2, url: 'PJSK_Cardillustration/0_VirtualSinger/0_初音ミク/1_☆3【見守るまなざし】初音ミク_0.jpg', mainCategory: 'Category0', subCategory: 'SubCategory0' },
  { id: 3, url: 'PJSK_Cardillustration/0_VirtualSinger/0_初音ミク/1_☆3【見守るまなざし】初音ミク_1.jpg', mainCategory: 'Category0', subCategory: 'SubCategory0' },
  { id: 4, url: 'PJSK_Cardillustration/0_VirtualSinger/0_初音ミク/2_☆4【絶たれた糸】初音ミク_0.jpg', mainCategory: 'Category0', subCategory: 'SubCategory0' },
  { id: 5, url: 'PJSK_Cardillustration/0_VirtualSinger/0_初音ミク/2_☆4【絶たれた糸】初音ミク_1.jpg', mainCategory: 'Category0', subCategory: 'SubCategory0' },
];

// カテゴリーとサブカテゴリーのデータ
const categories = {
  "Category0": ["SubCategory0", "SubCategory1", "SubCategory2", "SubCategory3", "SubCategory4", "SubCategory5"],
  "Category1": ["SubCategory6", "SubCategory7", "SubCategory8", "SubCategory9"],
  "Category2": ["SubCategory10", "SubCategory11", "SubCategory12", "SubCategory13"],
  "Category3": ["SubCategory14", "SubCategory15", "SubCategory16", "SubCategory17"],
  "Category4": ["SubCategory18", "SubCategory19", "SubCategory20", "SubCategory21"],
  "Category5": ["SubCategory22", "SubCategory23", "SubCategory24", "SubCategory25"],
  // 他のカテゴリーとサブカテゴリーを追加できます
};

// サブカテゴリーと表示名のデータ
const subCategoryNames = {
  "SubCategory0": "初音ミク",
  "SubCategory1": "鏡音リン",
  "SubCategory2": "鏡音レン",
  "SubCategory3": "MEIKO",
  "SubCategory4": "巡音ルカ",
  "SubCategory5": "KAITO",
  "SubCategory6": "星乃一歌",
  "SubCategory7": "天馬咲希",
  "SubCategory8": "望月穂波",
  "SubCategory9": "日野森志歩",
  "SubCategory10": "花里みのり",
  "SubCategory11": "桐谷遥",
  "SubCategory12": "桃井愛莉",
  "SubCategory13": "日野森雫",
  "SubCategory14": "小豆沢こはね",
  "SubCategory15": "白石杏",
  "SubCategory16": "東雲彰人",
  "SubCategory17": "青柳冬弥",
  "SubCategory18": "天馬司",
  "SubCategory19": "鳳えむ",
  "SubCategory20": "草薙寧々",
  "SubCategory21": "神代類",
  "SubCategory22": "宵崎奏",
  "SubCategory23": "朝比奈まふゆ",
  "SubCategory24": "東雲絵名",
  "SubCategory25": "暁山瑞希",
  // 他のサブカテゴリーと表示名を追加できます
};

export default function Layout({}) {
  const BASE_PATH = basePath ? basePath : ""

  const [selectedMainCategory, setSelectedMainCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    if (selectedMainCategory in categories) {
      setSubCategories(categories[selectedMainCategory]);
    } else {
      setSubCategories([]);
    }
  }, [selectedMainCategory]);

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
          <option value="Category0">VirtualSinger</option>
          <option value="Category1">Leo/need</option>
          <option value="Category2">MORE MORE JUMP!</option>
          <option value="Category3">Vivid BAD SQUAD</option>
          <option value="Category4">Wonderlands Showime</option>
          <option value="Category5">Nightcord at 25</option>
        </select>

        <select value={selectedSubCategory} onChange={e => setSelectedSubCategory(e.target.value)}>
          <option value="">Character</option>
            {subCategories.map((subCategory, index) => (
          <option key={index} value={subCategory}>{subCategoryNames[subCategory]}</option>
          ))}
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