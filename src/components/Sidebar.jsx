import { categories } from "../utils/constants";
import styles from "./Sidebar.module.css";

export function Sidebar({ selectedCategory, setSelectedCategory }) {
    return (
        <div className={styles.sidebar}>
            {categories.map((category) => (
                <button
                    onClick={() => setSelectedCategory(category.name)}
                    key={category.name}
                    className="category-btn"
                    style={{
                        background: category.name === selectedCategory && "#5707d6",
                        color: category.name === selectedCategory && "#fff",
                    }}
                >
                    <span
                        style={{
                            color: category.name === selectedCategory ? "#fff" : "#5707d6",
                            marginRight: "15px",
                        }}
                    >
                        {category.icon}
                    </span>
                    <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                        {category.name}
                    </span>
                </button>
            ))}
        </div>
    );
}
