// src/hooks/useCmsContent.js
import { useEffect, useState } from "react";
import frontMatter from "front-matter";
import { useTranslation } from "react-i18next";

// Static raw imports (MUST be static for Vite)
import enRaw from "../content/home.en.md?raw";
import jaRaw from "../content/home.ja.md?raw";

export const useCmsContent = () => {
  const { i18n } = useTranslation();
  const [content, setContent] = useState({});

  useEffect(() => {
    const raw = i18n.language === "ja" ? jaRaw : enRaw;
    const parsed = frontMatter(raw);
    setContent(parsed.attributes); // this holds the frontmatter data
  }, [i18n.language]);

  return content;
};
