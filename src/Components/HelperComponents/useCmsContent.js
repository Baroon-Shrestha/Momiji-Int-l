// src/hooks/useCmsContent.js
import { useEffect, useState } from "react";
import matter from "gray-matter";
import { useTranslation } from "react-i18next";

export const useCmsContent = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [content, setContent] = useState({});

  useEffect(() => {
    const loadContent = async () => {
      const file = lang === "ja" ? "home.ja.md" : "home.en.md";
      const module = await import(`../content/${file}`);
      const response = await fetch(module.default);
      const text = await response.text();
      const { data } = matter(text);
      setContent(data);
    };

    loadContent();
  }, [lang]);

  return content;
};
