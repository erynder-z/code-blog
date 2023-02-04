export const fetchArticleList = async (
  endpoint: string,
  setFullArticleList: Function,
  setLoading: Function,
  setError: Function
) => {
  try {
    const serverURL = import.meta.env.VITE_SERVER_URL;
    const res = await fetch(`${serverURL}/api/articles/${endpoint}`, {});
    if (res.ok) {
      const data = await res.json();
      setFullArticleList(data.article_list);
    } else {
      throw new Error(`Server returned ${res.status} ${res.statusText}`);
    }
  } catch (err) {
    setError(err);
  }

  setLoading(false);
};
