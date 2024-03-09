'use client'

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

interface TechNewsArticle {
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
}

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const PREF_NAME = "WordOfTheDayPrefs";
const KEY_WORD = "currentWord";
const KEY_MEANING = "currentMeaning";
const KEY_LAST_UPDATE_TIME = "lastUpdateTime";

const Page: React.FC = () => {
    const [word, setWord] = useState<string>("");
    const [meaning, setMeaning] = useState<string>("");
    const [techNews, setTechNews] = useState<TechNewsArticle[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const categories = ['All', 'General', 'Technology', 'Science', 'Business', 'Sports'];

    useEffect(() => {
        getWordOfTheDay();
        fetchTechNews(selectedCategory);
        const interval = setInterval(() => {
            getWordOfTheDay();
            fetchTechNews(selectedCategory);
        }, 86400000); 
        return () => clearInterval(interval); 
    }, [selectedCategory]);

    const getWordOfTheDay = async () => {
        if (isUpdateNeeded()) {
            try {
                const words = [
                    "Revitalize", "Coalesce", "Harmonize", "Mellifluous", "Ephemeral",
                    "Quixotic", "Effervescent", "Nebulous", "Ubiquitous", "Surreptitious",
                    "Peregrinate", "Supine", "Symbiosis", "Panache", "Luminous", "Verdant",
                    "Quotidian", "Resplendent", "Aplomb", "Halcyon", "Pernicious", "Idyllic",
                    "Quiescent", "Pristine", "Nascent", "Sibilant", "Plenipotentiary", "Ebullient",
                    "Cacophony", "Bucolic", "Ineffable", "Obfuscate", "Ubiquity", "Sycophant",
                    "Denouement", "Peregrination", "Soporific", "Munificent", "Sagacious",
                    "Abomasum", "Atingle", "Ballistic", "Doldrums", "Festooned", "Gazebo",
                    "Haphazard", "Jabberwocky", "Kerfuffle", "Lollapalooza", "Nagware",
                    "Noctambulist", "Omphalos", "Operose", "Orrery", "Pantagruelian",
                    "Pugnacious", "Quibble", "Quicksilver", "Raconteur", "Ragamuffin",
                    "Rendezvous", "Resplendent", "Rigmarole", "Scatterbrain", "Schadenfreude",
                    "Scintillating", "Scrumdiddlyumptious", "Sesquipedalian", "Skirmish",
                    "Snollygoster", "Sockdolager", "Solander", "Spaghettification", "Splendiferous",
                    "Superfluous", "Switcheroo", "Umbriferous", "Vagabond", "Vamoose", "Velleity",
                    "Vicinal", "Virtuoso", "Wabbit", "Wanderlust", "Whatchamacallit", "Whirligig",
                    "Whirlybird", "Aurora", "Chatoyant", "Demure", "Denouement", "Eloquence",
                    "Incandescent", "Ineffable", "Onomatopoeia", "Plethora", "Sanguine",
                    "Scintilla", "Solitude", "Sonorous", "Sumptuous", "Tranquility", "Wherewithal",
                    "Zenith", "candescent", "Aggrandize", "Alacrity", "Awesomesauce", "Bagel",
                    "Beguile", "Cajole", "Futzing", "Hellacious", "obstinate", "Permaculture",
                    "Pertinacious", "Phlegmatic", "Propound", "Weaksauce", "Anachronism",
                    "Draconian", "Verisimilitude", "zealot", "yearn", "wonky", "uncanny",
                    "tenacious", "lucid", "jejune", "guise", "gallivant", "fortitude", "fervent",
                    "esoteric", "dubious", "cynical", "benevolent", "ambiguous", "alliteration",
                    "Taradiddle", "Widdershins", "Bumbershoot", "Lollygag", "Flibbertigibbet",
                    "Absquatulate"
                ];
                const randomWord = words[Math.floor(Math.random() * words.length)];
                const response = await fetch(API_URL + randomWord);
                const data = await response.json();
                const wordData = data[0];
                const word = wordData.word;
                const meaning = wordData.meanings[0].definitions[0].definition;
                setWord(word);
                setMeaning(meaning);
                saveToPreferences(word, meaning);
            } catch (error) {
                console.error('Error fetching word of the day:', error);
            }
        } else {
            const storedWord = localStorage.getItem(KEY_WORD);
            const storedMeaning = localStorage.getItem(KEY_MEANING);
            setWord(storedWord || "");
            setMeaning(storedMeaning || "");
        }
    };

    const saveToPreferences = (word: string, meaning: string) => {
        localStorage.setItem(KEY_WORD, word);
        localStorage.setItem(KEY_MEANING, meaning);
        localStorage.setItem(KEY_LAST_UPDATE_TIME, Date.now().toString());
    };

    const isUpdateNeeded = () => {
        const lastUpdateTime = parseInt(localStorage.getItem(KEY_LAST_UPDATE_TIME) || '0', 10);
        const currentTime = Date.now();
        return currentTime - lastUpdateTime >= 60000; 
    };

    const fetchTechNews = async (category: string) => {
        try {
            const apiKey = '6114139291db4b2fa89c6cc4828b11b8';
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
            if (category !== 'All') {
                url += `&category=${category.toLowerCase()}`;
            }
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();

                if (data.articles && data.articles.length > 0) {
                    const articles: TechNewsArticle[] = data.articles.slice(0, 5);
                    setTechNews(articles);
                } else {
                    console.error(`No ${category} news articles found`);
                }
            } else {
                console.error(`Failed to fetch ${category} news`);
            }
        } catch (error) {
            console.error(`Error fetching ${category} news:`, error);
        }
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div className={styles.container}>
            {/* Word of the Day section */}
            <div className={styles.wordOfTheDaySection}>
                <h2 className={styles.wordOfTheDayTitle}>Word of the Day: {word}</h2>
                <div className={styles.wordOfTheDayBox}>
                    <p>Meaning: {meaning}</p>
                </div>
            </div>
            <h1 className={styles.newsTitle}>Latest Tech News</h1>

            {/* Category buttons */}
            <div className={styles.categoryButtons}>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        className={`${styles.categoryButton} ${selectedCategory === category ? styles.categoryButtonActive : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* News articles */}
            <div>
                {techNews.map((article, index) => (
                    <div key={index} className={styles.newsArticle}>
                        {article.urlToImage && (
                            <img className={styles.articleImage} src={article.urlToImage} alt={article.title} />
                        )}
                        <div className={styles.articleContent}>
                            <h2 className={styles.articleTitle}>{article.title}</h2>
                            <p className={styles.articleDescription}>{article.description}</p>
                            <a className={styles.articleLink} href={article.url} target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
