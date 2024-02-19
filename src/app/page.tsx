'use client'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../layout.module.css'
import { basePath } from '../../next.config'
import { images } from '../app/imagedate' 
import { useState, useEffect } from 'react'


// const images = [
//   { id: 1, url: '1_0.jpg', unit: 'Unit1', characterName: 'Character1', rarity: 'Rare' },
//   { id: 2, url: '1_1.jpg', unit: 'Unit2', characterName: 'Character2', rarity: 'Rare' },
//   { id: 3, url: '1_2.jpg', unit: 'Unit3', characterName: 'Character3', rarity: 'Rare' },
//   { id: 4, url: '1_3.jpg', unit: 'Unit4', characterName: 'Character4', rarity: 'Rare' },
//   { id: 5, url: '1_4.jpg', unit: 'Unit5', characterName: 'Character2', rarity: 'Rare' },
//   { id: 5, url: '1_5.jpg', unit: 'Unit2', characterName: 'Character3', rarity: 'Rare' },
// ];

export default function Layout({}) {
  const BASE_PATH = basePath ? basePath : ""

  const [selectedUnit, setSelectedUnit] = useState('');
  const [selectedCharacterName, setSelectedCharacterName] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('');

  const filteredImages = images.filter((image) => {
    return (
      (selectedUnit === '' || image.unit === selectedUnit) &&
      (selectedCharacterName === '' || image.characterName === selectedCharacterName) &&
      (selectedRarity === '' || image.rarity === selectedRarity)
    );
  });

  const units = [...new Set(images.map((image) => image.unit))];
  const characterNames = selectedUnit
  ? [...new Set(images.filter((image) => image.unit === selectedUnit).map((image) => image.characterName))]
  : [];
const rarities = ['Common', 'Rare', 'Epic', 'Legendary'];

  return (
    <div className={styles.container}>
      <h1>世界のギャラリー</h1>

      <header className={styles.header}>
      <select value={selectedUnit} onChange={(e) => setSelectedUnit(e.target.value)}>
        <option value="">ユニットを選択</option>
        {units.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>

      <select value={selectedCharacterName} onChange={(e) => setSelectedCharacterName(e.target.value)}>
        <option value="">キャラクター名を選択</option>
        {characterNames.map((characterName) => (
          <option key={characterName} value={characterName}>
            {characterName}
          </option>
        ))}
      </select>

      <select value={selectedRarity} onChange={(e) => setSelectedRarity(e.target.value)}>
        <option value="">レア度を選択</option>
        {rarities.map((rarity) => (
          <option key={rarity} value={rarity}>
            {rarity}
          </option>
        ))}
      </select>

      </header>

      <main className={styles.main}>
        <div>
          {filteredImages.map((image) => (
          <div key={image.id}>
          {/* 画像表示部分 */}
          <img src={`${BASE_PATH}/images/${image.url}`} alt={image.characterName} width={400} height={250}/>
          <p>{image.characterName}</p>
          </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        {/* フッターコンテンツ */}
      </footer>
    </div>
  )
}
